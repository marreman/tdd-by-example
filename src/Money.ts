class Money {
  constructor(protected amount: number) {}
}

export class Franc extends Money {
  times(multiplier: number) {
    return new Franc(this.amount * multiplier)
  }
}

export class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier)
  }
}
