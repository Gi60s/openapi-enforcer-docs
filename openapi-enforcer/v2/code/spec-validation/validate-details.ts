// #region javascript
const { load, OpenAPI } = require('openapi-enforcer/v3')

(async () => {
  const doc = await load('./openapi.yml')
  const [ error, warning, suggestion, ignore ] = OpenAPI.validate(doc)

  // errors indicate critical problems
  if (error === undefined) {
    console.log('No errors')
  } else {
    console.log(error)
  }

  // warning indicate that their may be a problem
  if (warning === undefined) {
    console.log('No warnings')
  } else {
    console.log(warning)
  }

  // suggestions indicate areas for improvement
  if (suggestion === undefined) {
    console.log('No suggestions')
  } else {
    console.log(suggestion)
  }

  // these are exceptions that are deemed unimportant
  if (ignore === undefined) {
    console.log('Nothing ignored')
  } else {
    console.log(ignore)
  }
})()
// #endregion javascript

// #region typescript
import { load, OpenAPI } from 'openapi-enforcer/v3'

(async () => {
  const doc = await load('./openapi.yml')
  const [ error, warning, suggestion, ignore ] = OpenAPI.validate(doc)

  // errors indicate critical problems
  if (error === undefined) {
    console.log('No errors')
  } else {
    console.log(error)
  }

  // warning indicate that their may be a problem
  if (warning === undefined) {
    console.log('No warnings')
  } else {
    console.log(warning)
  }

  // suggestions indicate areas for improvement
  if (suggestion === undefined) {
    console.log('No suggestions')
  } else {
    console.log(suggestion)
  }

  // these are exceptions that are deemed unimportant
  if (ignore === undefined) {
    console.log('Nothing ignored')
  } else {
    console.log(ignore)
  }
})()
// #endregion typescript
