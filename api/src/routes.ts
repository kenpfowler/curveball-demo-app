import router from "@curveball/router";
import HomeController from "./home/controller";
import UsersController from "./user/controller/collection"
import UserController from "./user/controller/item"

const routes = [
  router("/", HomeController),
  router("/users", UsersController),
  router("/user/:id", UserController),
];

export default routes;
