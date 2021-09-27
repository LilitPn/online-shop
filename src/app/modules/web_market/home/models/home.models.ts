export interface IAccordion {
    buttons: Array<string>;
    context: string;
}

export interface IRibbons {
    link: string,
    src: string;
    text: string;
    price: string;
    hasSale: boolean
    hasNew: boolean
    hasGift: boolean
}