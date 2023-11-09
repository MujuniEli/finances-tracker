import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,

    ){}

    format(){
        return `${this.recipient} is owed Shs${this.amount} for ${this.details}`
    }
}
