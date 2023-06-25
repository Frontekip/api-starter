import { Users } from "./users";

// Utils
import Api from "../../utils/api";

Api.addCollection(Users, {
  excludedEndpoints: ["getAll", "delete", "patch"],
  routeOptions: {
    authRequired: true,
  },
});