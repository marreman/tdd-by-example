import { Expression } from "./Expression"
import { Sum } from "./Sum"

export class Money implements Expression {
  static dollar(amount: number) {
    return new Money(amount, "USD")
  }

  static franc(amount: number) {
    return new Money(amount, "CHF")
  }

  constructor(public amount: number, public _currency: string) {}

  currency() {
    return this._currency
  }

  equals(money: Money) {
    return this._currency === money._currency && this.amount === money.amount
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency)
  }

  plus(addend: Money) {
    return new Sum(this, addend)
  }

  reduce(_to: string) {
    return this
  }
}
