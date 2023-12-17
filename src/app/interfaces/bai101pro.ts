import { Bai101rate } from "./bai101rate"

export interface Bai101pro {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rate: Bai101rate
}
