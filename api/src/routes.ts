import router from "@curveball/router";
import HomeController from "./home/controller";
import UsersController from "./users/controller";

const routes = [router("/", HomeController), router("/users", UsersController)];

export default routes;
