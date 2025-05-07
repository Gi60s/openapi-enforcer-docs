const Enforcer = require('openapi-enforcer')

async function run () {
  // Because we don't specify `fullResult: true`, any errors will throw an exception and
  // warnings will be logged to the console.
  const openapi = await Enforcer('./path/to/openapi.yml')

  // If the request is valid then the req object will contain the parsed and validated request.
  // If it is invalid then the error will contain details about what was wrong with the
  // request and these details are safe to return to the client that made the request.
  const [ req, error ] = openapi.request({
    method: 'POST',
    path: '/tasks',
    // the body should be parsed by a JSON.parse() prior to passing in (if applicable).
    body: { task: 'Buy Milk', quantity: 2 }
  })

  // You can use the req.operation property to look at the properties from your OpenAPI document.
  // A good use of this is to look at the operationId you defined there to determine which path
  // is being used to handle the request.
  if (req.operaton.operationId === 'my-operation-id') {
    // ... additional request processing
  }
}

run().catch(console.error)
