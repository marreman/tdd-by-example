import { Expression } from "./Expression"

export class Bank {
  rates = new Dictionary<number>()

  reduce(source: Expression, to: string) {
    return source.reduce(this, to)
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set([from, to], rate)
  }

  rate(from: string, to: string) {
    if (from === to) return 1
    return this.rates.get([from, to]) as number
  }
}

/**
 * Supports composite keys, apart from regular Maps
 */
class Dictionary<T> {
  entries = new Map<string, T>()

  set(key: any, value: T) {
    this.entries.set(JSON.stringify(key), value)
  }

  get(key: any) {
    return this.entries.get(JSON.stringify(key))
  }
}
