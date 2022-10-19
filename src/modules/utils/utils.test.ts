import {removeNull, removeUndefined, removeUndefinedAndNull} from '@utils'


describe('Test Utils', () => {
  it('removeUndefinedAndNull', () => {
    const mixedArray: Array<null | undefined | number> = [null, undefined, 4, 5]

    const result = removeUndefinedAndNull(mixedArray)
    const expected = [4, 5]

    expect(result).toEqual(expected)
  })

  it('removeUndefined', () => {
    const mixedArray: Array<null | undefined | number> = [null, undefined, 4, 5]

    const result = removeUndefined(mixedArray)
    const expected = [null, 4, 5]

    expect(result).toEqual(expected)
  })

  it('removeNull', () => {
    const mixedArray: Array<null | undefined | number> = [null, undefined, 4, 5]

    const result = removeNull(mixedArray)
    const expected = [undefined, 4, 5]

    expect(result).toEqual(expected)
  })
})
