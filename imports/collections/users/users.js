import { Meteor } from "meteor/meteor";

const Users = Meteor.users;

const UsersProfileSchema = new SimpleSchema({
  name: { type: String },
  gender: {
    type: String,
    allowedValues: ["E", "K"],
    defaultValue: "E",
  },

  isNewsLetters: { type: Boolean, defaultValue: false, optional: true },
});

export { Users, UsersProfileSchema };
