import * as pkg from '../../../package.json';

export const home = () => {
    return {
        name: pkg.name,
        version: pkg.version,
        _links: {
            'user-collection': {
                href: "/users",
                title: "Users"
            },
            'campagin-collection': {
                href: "/campagins",
                title: "Campagins"
            }
        }
    }
}