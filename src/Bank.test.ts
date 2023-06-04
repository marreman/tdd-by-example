import { Bank } from "./Bank"
import { Expression } from "./Expression"
import { Money } from "./Money"
import { Sum } from "./Sum"

test("simple addition", () => {
  const five = Money.dollar(5)
  const sum = five.plus(Money.dollar(5))
  const bank = new Bank()
  const reduced = bank.reduce(sum, "USD")
  expect(reduced).toEqual(Money.dollar(10))
})

test("reduce sum", () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4))
  const bank = new Bank()
  const result = bank.reduce(sum, "USD")
  expect(result).toEqual(Money.dollar(7))
})

test("reduce money", () => {
  const bank = new Bank()
  const result = bank.reduce(Money.dollar(1), "USD")
  expect(result).toEqual(Money.dollar(1))
})

test("reduce money different currency", () => {
  const bank = new Bank()
  bank.addRate("CHF", "USD", 2)
  const result = bank.reduce(Money.franc(2), "USD")
  expect(result).toEqual(Money.dollar(1))
})

test("add rate", () => {
  const bank = new Bank()
  bank.addRate("SEK", "USD", 10)
  const rate = bank.rate("SEK", "USD")
  expect(rate).toEqual(10)
})

test("mixed addition", () => {
  const fiveBucks: Expression = Money.dollar(5)
  const tenFrancs: Expression = Money.franc(10)
  const bank = new Bank()
  bank.addRate("CHF", "USD", 2)
  const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
  expect(result).toEqual(Money.dollar(10))
})
