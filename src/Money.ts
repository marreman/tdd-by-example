export class Money implements Expression {
  static dollar(amount: number) {
    return new Money(amount, "USD")
  }

  static franc(amount: number) {
    return new Money(amount, "CHF")
  }

  constructor(protected amount: number, protected _currency: string) {}

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
    return new Money(this.amount + addend.amount, this._currency)
  }
}
