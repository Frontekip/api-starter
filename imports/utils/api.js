import { Users } from "../collections/users/users";

const Api = new Restivus({
  version: "v1",
  enableCors: true,
  useDefaultAuth: true,

  defaultOptionsEndpoint: {
    action() {
      this.response.writeHead(201, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Z-Key, X-Auth-Token, X-User-Id",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      });

      this.done();

      return {
        status: "success",
        data: {
          message: "We love OPTIONS",
        },
      };
    },
  },

  onLoggedIn() {
    const { user } = this;
    console.log(`${user._id} - login user!`);
  },

  onLoggedOut() {
    const { user } = this;
    console.log(`${user._id} logout User!`);
  },
});

Api.addRoute(
  "ping",
  { authRequired: false },
  {
    get() {
      const { deviceType, appVersion } = this.queryParams;
      const userId = this.request.headers["x-user-id"];
      const user = Users.findOne(userId);

      let data = {
        isForceUpdate: false,

        deviceType,
        appVersion,
        user: null,
      };

      if (user) {
        data.user = {
          _id: user._id,
          email: user.email(),
          username: user.username,
          profile: user.profile,
          role: user.role(),
        };
      }

      return {
        status: "success",
        data,
      };
    },
  }
);

export default Api;
