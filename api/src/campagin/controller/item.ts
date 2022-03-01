import Controller from "@curveball/controller";
import { Context } from "@curveball/core";
import {findByShareLink} from "../service"
import {item} from "../formats/hal"


class CampaginController extends Controller {
  get(ctx: Context) {
    ctx.response.type = "application/hal+json";
    const shareLink = ctx.params.id
    const campagin = item(findByShareLink(shareLink));
    ctx.response.body = campagin;
  }
}

export default new CampaginController();
