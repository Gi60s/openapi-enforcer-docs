// #region info-js
const { Info } = require('openapi-enforcer/v3')

// check for critial errors in the object
const [ error ] = Info.validate({
  title: 'My API',
  version: 'v1'
})
// #endregion info-js

// #region info-ts
import { Info } from 'openapi-enforcer/v3'

// check for critial errors in the object
const [ error ] = Info.validate({
  title: 'My API',
  version: 'v1'
})
// #endregion info-ts

// #region openapi-js
const { OpenAPI } = require('openapi-enforcer/v3')

// check for critial errors in the object
const [ error ] = OpenAPI.validate({
  openapi: '3.0.3',
  info: {
    title: 'My API',
    version: 'v1'
  },
  paths: {}
})
// #endregion openapi-js

// #region openapi-ts
import { OpenAPI } from 'openapi-enforcer/v3'

// check for critial errors in the object
const [ error ] = OpenAPI.validate({
  openapi: '3.0.3',
  info: {
    title: 'My API',
    version: 'v1'
  },
  paths: {}
})
// #endregion openapi-ts

// #region swagger-js
const { Swagger } = require('openapi-enforcer/v2')

// check for critial errors in the object
const [ error ] = Swagger.validate({
  swagger: '2.0',
  info: {
    title: 'My API',
    version: 'v1'
  },
  paths: {}
})
// #endregion swagger-js

// #region swagger-ts
import { Swagger } from 'openapi-enforcer/v2'

// check for critial errors in the object
const [ error ] = Swagger.validate({
  swagger: '2.0',
  info: {
    title: 'My API',
    version: 'v1'
  },
  paths: {}
})
// #endregion swagger-ts
