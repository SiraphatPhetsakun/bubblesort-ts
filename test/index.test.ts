import merge from '../src'

describe('testing merge function', () => {
  test('empty conlection', () => {
    expect(merge([], [])).toEqual([])
  })

  test('empty conlection one', () => {
    expect(merge([], [3, 2])).toEqual([2, 3])
  })

  test('empty conlection two', () => {
    expect(merge([], [3, 2, 5])).toEqual([2, 3, 5])
  })

  test('sort conlection', () => {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })

  test('not sort conlection', () => {
    expect(merge([5, 9, 3], [9, 6])).toEqual([3, 5, 6, 9, 9])
  })

  test('same conlection', () => {
    expect(merge([1, 2], [1, 2])).toEqual([1, 1, 2, 2])
  })
})
