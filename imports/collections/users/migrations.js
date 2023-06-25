import { Migrations } from "meteor/idmontie:migrations";

Migrations.add("initial-admin-user", () => {
  const _id = Accounts.createUser({
    email: "admin@frontekip.com",
    password: "123456",
    username: "admin",

    profile: {
      name: "Admin",
      gender: "E",
      isNewsLetters: false,
    },
  });

  Roles.addUsersToRoles(_id, "admin");
});
