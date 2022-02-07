import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
import data from "../../data/data";

class UserController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/json";
    const userId = parseInt(ctx.params.id);
    const user = data.find((user) => user.id === userId);
    if (user) {
      ctx.response.body = [user];
    } else {
      ctx.redirect("/");
    }
  }
}

export default new UserController();
