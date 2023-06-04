import { Expression } from "./Expression"
import { Money } from "./Money"

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(to: string): Money {
    const amount = this.augend.amount + this.addend.amount
    return new Money(amount, to)
  }
}
