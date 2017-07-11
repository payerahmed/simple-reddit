import 'babel-polyfill'

class SimpleReddit {
  constructor (options) {
    Object.assign(this.options, options)
  }

  options = {
    https: true
  }

  hot (subreddit) {
    Object.assign(this.options, {
      subreddit,
      resource: 'hot'
    })
    return this
  }
}

export default SimpleReddit
