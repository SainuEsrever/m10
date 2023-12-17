import { Bai103item } from "./bai103item";

export interface Bai103data {
    time: {
        updated: string;
        updatedISO: string;
        updateduk: string;
    };
    disclaimer: string;
    chartName: string;
    bpi: {
        USD: Bai103item;
        GBP: Bai103item;
        EUR: Bai103item;
    };
}
