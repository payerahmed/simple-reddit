/* eslint-env mocha */
import simpleReddit from '../src/index'
import { expect, should as chaiShould } from 'chai'

chaiShould()

describe('simple-reddit', function () {
  it('is a class (function)', function () {
    expect(simpleReddit).to.be.a('function')
  })
})
