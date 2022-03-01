import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
import { collection } from "../formats/hal";
import {findAll} from "../service"

class CampaginsController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/hal+json";
    ctx.response.body = collection(findAll());
  }
}

export default new CampaginsController();
