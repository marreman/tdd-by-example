import { Money } from "./Money"

test("dollar multiplication", () => {
  const five = Money.dollar(5)
  expect(five.times(2)).toEqual(Money.dollar(10))
  expect(five.times(3)).toEqual(Money.dollar(15))
})

test("franc multiplication", () => {
  const five = Money.franc(5)
  expect(five.times(2)).toEqual(Money.franc(10))
  expect(five.times(3)).toEqual(Money.franc(15))
})

test("equality", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
  expect(Money.franc(5).equals(Money.dollar(5))).toBe(false)
})

test("currency", () => {
  expect(Money.dollar(1).currency()).toBe("USD")
  expect(Money.franc(1).currency()).toBe("CHF")
})

test("simple addition", () => {
  const sum = Money.dollar(5).plus(Money.dollar(5))
  expect(sum).toEqual(Money.dollar(10))
})
