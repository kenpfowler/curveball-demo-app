import { User } from "../../types";
import { data } from "../../data/data";
import { NotFound } from "@curveball/http-errors/dist";

export function findAll(): User[] 
{
return data;
}

export function findById(userId: number)
{   
const user = data.find((user: User) => user.id === userId);
if (!user) {
    throw new NotFound(`User with id "${userId}" not found`)
}
return user;
}