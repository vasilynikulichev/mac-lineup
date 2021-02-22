export type IProductDate = string; //  "1998-02-02"

export const MAC_FAMILIES = <const>[
    "MacBook Air",
    "MacBook Pro 13",
    "MacBook Pro 16",
    "iMac",
];

export type IMacFamily = typeof MAC_FAMILIES[number];


export interface IProduct {
    title: string,
    intro: IProductDate,
    disc: IProductDate,
    order: string,
    model: string,
    family: string,
    macFamily: IMacFamily,
}

// export interface IMacProduct extends IProduct {
//   macType: string;
// }