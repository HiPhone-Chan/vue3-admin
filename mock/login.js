module.exports = [
  {
    pattern: '/api/authenticate',
    method: 'POST',
    handle: (req, res) => {
      res.end('merchant1:' + req.url)
    }
  },
  {
    pattern: '/api/account',
    method: 'GET',
    handle: (req, res) => {
      res.end('merchant2:' + req.url)
    }
  }
]
