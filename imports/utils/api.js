import { Users } from "../collections/users/users";

const Api = new Restivus({
  version: "v1",
  useDefaultAuth: true,

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
