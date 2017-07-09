import { describe } from 'ava-spec'
import simpleReddit from './index'

describe('Simple Reddit', it => {
  it('exports an object', t => {
    t.is(typeof simpleReddit, 'object')
  })
  it.todo('something else')
})
