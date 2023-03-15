import { describe, it, expect } from 'vitest'

import isDev from '../src/isDev'

describe.concurrent('isTest', () => {
  it('should work', () => {
    expect(isDev()).toEqual(true)
  })
})
