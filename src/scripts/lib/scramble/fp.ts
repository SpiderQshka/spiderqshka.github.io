export const identity = <T>(a: T): T => a

export const split =
  (char: string) =>
  (text: string): string[] =>
    text.split(char)

export const pipe = (...fns: any[]) => fns.reduce((prevFn, nextFn) => (value: any) => nextFn(prevFn(value)))

export const slice =
  (begin: number, end?: number) =>
  <T>(arr: T[]): T[] =>
    arr.slice(begin, end)

export const reverse = <T>(arr: T[]): T[] => Array.prototype.slice.call(arr, 0).reverse()

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export const tail = <T>(list: T[]): T => list[list.length - 1]
