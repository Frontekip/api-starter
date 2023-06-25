import React, { Component } from "react";
import ReactDOM from "react-dom";
import { mount } from "react-mounter";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";

Accounts.config({
  forbidClientAccountCreation:true
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
}

const App = () => {
  return (
    <div>
      <AccountsUIWrapper />
    </div>
  );
};

FlowRouter.route("/", {
  action(params, queryParams) {
    return mount(App);
  },
});
