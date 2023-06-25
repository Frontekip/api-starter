import { Users } from "./users";

Users.helpers({
  email() {
    return _.first(this.emails).address;
  },

  role() {
    return _.first(this.roles);
  },
});
