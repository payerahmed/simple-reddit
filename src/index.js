const simpleReddit = {
  hot: function (subreddit) {
    return this.listing({
      subreddit,
      resource: 'hot'
    })
  }
}

export default simpleReddit
