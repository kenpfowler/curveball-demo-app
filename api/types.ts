export type User = {
    id: number;
 nickName: string;
 email: string;
 password: string;
 campaigns?: Campagin[];
}

export type Campagin = {
title: string;
category: Category[];
description: string;
bannerImage: string;
goalAmount: number;
updates: string;
shareLink: string;
owner: User;
}

export type Category = {
type: string;
}
