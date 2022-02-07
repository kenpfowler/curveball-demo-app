import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
import data from "../../data/data";

class UsersController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    ctx.response.body = data;
  }
}

export default new UsersController();
