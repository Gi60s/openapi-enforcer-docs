const Enforcer = require('openapi-enforcer')

async function run () {
  const openapi = await Enforcer('./path/to/openapi.yml')

  const [ req ] = openapi.request({
    method: 'POST',
    path: '/tasks',
    // the body should be parsed by a JSON.parse() prior to passing in (if applicable).
    body: { task: 'Buy Milk', quantity: 2 }
  })

  const body = { id: 1, task: 'Buy Milk', quantity: 2, dateCompleted: null }
  const headers = {}

  // This will validate the response code, body, and headers. It will also correctly serialize
  // the body and headers for sending to the client that made the request. Using this method
  // you'll never send back a response that does not match what your OpenAPI document defines.
  const [ res, error ] = req.response(200, body, headers)
  console.log(res.body, res.headers)
}

run.catch(console.error)
