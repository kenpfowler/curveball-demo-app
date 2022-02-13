import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
import { findAll} from "../service";
import {collection} from "../formats/hal";

class UsersController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/hal+json";
    ctx.response.body = collection(findAll());
  }
}

export default new UsersController();
