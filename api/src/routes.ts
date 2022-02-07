import router from "@curveball/router";
import HomeController from "./home/controller";
import UsersController from "./users/controller";
import UserController from "./user/controller";
const routes = [
  router("/", HomeController),
  router("/user/:id", UserController),
  router("/users", UsersController),
];

export default routes;
