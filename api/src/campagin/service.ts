import { Campagin } from "../../types";
import { campaginData } from "../../data/data";
import { NotFound } from "@curveball/http-errors/dist";

export function findAll(): Campagin[] 
{
return campaginData;
}

export function findByShareLink(shareLink: string)
{   
const campagin = campaginData.find((campagin: Campagin) => campagin.shareLink === shareLink);

if (!campagin) {
    throw new NotFound(`User with id "${campagin}" not found`)
}
return campagin;
}