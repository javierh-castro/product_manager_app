import { object, string, number } from "valibot";

export const DraftProductSchema = Object({
    name: string(),
    price: number()
})