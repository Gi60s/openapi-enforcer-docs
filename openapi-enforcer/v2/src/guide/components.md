# Components

## Extending Components

### Add Additional Validation

### Add Additional Build Instructions

### Add Static Properties / Functionality

```ts
// import the component class that you wish to add functionality to
import { Operation } from 'openapi-enforcer/v3'

// add the functionality to class directly
Operation.isOperation = function () {
  return true
} 

const isOperation = Operation.isOperation() // true
```

### Add Instance Properties / Functionality

You can extend any component with additional properties or functionality by using the JavaScript prototype. 

As a simple example, imagine that you want to add a function called `hasTag` to your [Operation component](#).

```ts
// import the component class that you wish to add functionality to
import { Operation } from 'openapi-enforcer/v3'

// add the functionality to the prototype
Operation.prototype.hasTag = function (tag: string): boolean {
  return this.tags.includes(tag)
}

// create a new operation instance
const operation = new Operation({
  tags: ['tag-1', 'tag-2'],
  responses: {
    200: {
      description: 'OK'
    }
  }
})

// check to see if the operation instance has the tag "tag-1"
const hasTag1 = operation.hasTag('tag-1') // true
```
