import router from "@curveball/router";
import HomeController from "./home/controller";
import UsersController from "./user/controller/collection"
import UserController from "./user/controller/item"
import CampaginsController from "./campagin/controller/collection";
import CampaginController from "./campagin/controller/item"

const routes = [
  router("/", HomeController),
  router("/campagins", CampaginsController),
  router("/campagin/:id", CampaginController),
  router("/users", UsersController),
  router("/user/:id", UserController),
];

export default routes;
