export type User = {
    id: number
 nickName: string
 email: string
 password: string
 campaigns?: Campagin[]
}

export type Campagin = {
    id: number
organizers: User[]
name: string
description: string
amountDonated: number
donationGoal: number
numberOfDonators: number
// as yyyy-mm-dd
dateCreated: string
category: Category[]
}

export type Category = {

}
/*
campagin:
user:
name:
description:
amountDonated:
donationGoal:
numberOfDonators:
dateCreated:
category:
*/