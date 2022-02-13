import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
import {findById} from "../service"
import { item } from "../formats/hal"

class UserController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/hal+json";
    const userId = parseInt(ctx.params.id); 
    const user = item(findById(userId));
    ctx.response.body = user
  }
}

export default new UserController();
