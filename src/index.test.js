import { describe } from 'ava-spec'
import SimpleReddit from './index'

describe('Simple-reddit', it => {
  it('exports a class(function)', t => {
    t.is(typeof SimpleReddit, 'function')
  })
  it('exports .hot method', t => {
    const red = new SimpleReddit()
    t.is(typeof red.hot, 'function')
  })
})
