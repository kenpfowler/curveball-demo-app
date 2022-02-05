import Controller from "@curveball/controller";
import { Context } from "@curveball/core";

class UsersController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = [
      {
        id: 1,
        name: "Ruy",
        permission: "admin",
        group: "development",
      },
      {
        id: 2,
        name: "Chun-Li",
        permission: "admin",
        group: "development",
      },
      {
        id: 3,
        name: "Ken",
        permission: "admin",
        group: "development",
      },
    ];
  }
}

export default new UsersController();
