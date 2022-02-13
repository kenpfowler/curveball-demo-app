import { User } from "../../../types";

export function collection (users: User[]) {
return {
    _links: {
        self: {
            href: "/users"
        },
        item: users.map(user => { return { href: `/user/${user.id}`, title: user.nickName}})

    },
        length: users.length,
        _embedded:{ item: users.map(user => item(user))}
    }

}


export function item (user: User) {
    return {
        _links: {
            self: {
                href: `/user/${user.id}`
            },
            collection: {
                title: "User Collection",
                href: '/users'
            }
        },
        id: user.id,
        name: user.nickName,
        email: user.email,
        password: user.password,
        campaigns: user.campaigns
    }
}