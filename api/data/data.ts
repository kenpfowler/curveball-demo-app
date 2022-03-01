import {User, Campagin, Category} from "../types";
 
export const data: User[] = [
   {
    id: 1,
    nickName: "Ryu",
    email: "ryu@streetfighter.com",
    password: "password",
    campaigns: []
  },
  {
    id: 2,
    nickName: "Ken",
    email: "ken@streetfighter.com",
    password: "password",
    campaigns: []
  },
  {
    id: 3,
    nickName: "Chun-li",
    email: "chunli@streetfighter.com",
    password: "password",
    campaigns: []
  },
  {
    id: 4,
    nickName: "Blanka",
    email: "Blanka@streetfighter.com",
    password: "password",
    campaigns: []
  },
  {
    id: 5,
    nickName: "M. Bision",
    email: "mbison@streetfighter.com",
    password: "password",
    campaigns: []
  },
];

export const campaginData: Campagin[] = [
  {
    title: "Monero Fund",
    category: [{type: "Reasearch & Development"}],
    description: "Money to fund the monero project",
    bannerImage: "mockbannerimages.com",
    goalAmount: 50,
    updates: "string",
    shareLink: "monero-fund",
    owner: data[0]

  },
  {
    title: "Bitcoin Fund",
    category: [{type: "Reasearch & Development"}],
    description: "Money to fund the bitcoin project",
    bannerImage: "mockbannerimages.com",
    goalAmount: 50,
    updates: "Things are going well",
    shareLink: "bitcoin-fund",
    owner: data[0]

  },  {
    title: "Dogecoin fund",
    category: [{type: "Reasearch & Development"}],
    description: "Money to fund the Dogecoin project",
    bannerImage: "mockbannerimages.com",
    goalAmount: 50,
    updates: "Doge is best",
    shareLink: "doge-fund",
    owner: data[0]

  }
]

export const categoryData: Category[] = [
  {type: "Research & Development"}
]