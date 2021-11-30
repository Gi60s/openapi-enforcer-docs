# Getting Started

## Installation

Begin by installing the `openapi-enforcer` package.

<CodeSwitcher :languages="{npm: 'NPM',yarn: 'Yarn'}">
<template v-slot:npm>

```shell
npm install openapi-enforcer
```

</template>
<template v-slot:yarn>

```shell
yarn add openapi-enforcer
```

</template>
</CodeSwitcher>

## Loading and Validating a Document

Use the Enforcer to load and resolve all $ref values and then to validate the complete document.

<<< @/code/validate-document.js

## Processing an Incoming Request

<<< @/code/process-request.js

## Producing a Valid Result

<<< @/code/process-response.js

