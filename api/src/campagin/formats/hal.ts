import { Campagin } from "../../../types";

export function collection (campagins: Campagin[]) {
return {
    _links: {
        self: {
            href: "/campagins"
        },
        item: campagins.map(campagin => { return { href: `/campagin/${campagin.shareLink}`, title: campagin.title}})

    },
        length: campagins.length,
        _embedded:{ item: campagins.map(campagin => item(campagin))}
    }

}


export function item (campagin: Campagin) {
    return {
        _links: {
            self: {
                href: `/campagin/${campagin.shareLink}`
            },
            collection: {
                title: "Campagins Collection",
                href: '/campagins'
            }
        },
        title: campagin.title,
        category: campagin.category,
        description: campagin.description,
        bannerImage: campagin.bannerImage,
        goalAmount: campagin.goalAmount,
        updates: campagin.updates,
        shareLink: campagin.shareLink,
        owner: campagin.owner
    }
}