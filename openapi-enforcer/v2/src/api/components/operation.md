# Operation

## Instance

`enforcer`

This object contains a mapping of all parameters that apply to the operation, including those inherited from the [PathItem](#).

```ts
export interface EnforcerDataOperation2 {
  parameters: {
    body?: Parameter2
    formData?: Record<string, Parameter2>
    header?: Record<string, Parameter2>
    path?: Record<string, Parameter2>
    query?: Record<string, Parameter2>
  }
  requiredParameters: {
    body: boolean
    formData: string[]
    header: string[]
    path: string[]
    query: string[]
  }
}

export interface EnforcerDataOperation3 {
  parameters: {
    cookie?: Record<string, Parameter3>
    header?: Record<string, Parameter3>
    path?: Record<string, Parameter3>
    query?: Record<string, Parameter3>
  }
  requiredParameters: {
    cookie: string[]
    header: string[]
    path: string[]
    query: string[]
  }
}
```

`makeRequest (request: `
