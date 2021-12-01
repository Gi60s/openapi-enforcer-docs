# Spec Validation

You can validate an entire OpenAPI or Swagger document, or you can validate parts of it. See below for some examples.

## Validate Result Details

When you call the `validate` function on a component the result will be an iterable that allows you to get error, warning, suggestion, and ignore messages.

The exception levels are:

- *error* - Critical errors that will should not be ignored.
- *warning* - Possible problems that you might want to look at.
- *suggestion* - Areas for improvement, but nothing technically wrong.
- *ignore* - Unimportant messages.

<CodeSwitcher :languages="{js: 'JavaScript',ts: 'TypeScript'}">
<template v-slot:js>

<<< @/code/spec-validation/validate-details.ts#javascript

</template>
<template v-slot:ts>

<<< @/code/spec-validation/validate-details.ts#typescript

</template>
</CodeSwitcher>

## Validate an OpenAPI Object

<CodeSwitcher :languages="{js: 'JavaScript',ts: 'TypeScript'}">
<template v-slot:js>

<<< @/code/spec-validation/validate-component.ts#openapi-js

</template>
<template v-slot:ts>

<<< @/code/spec-validation/validate-component.ts#openapi-ts

</template>
</CodeSwitcher>

## Validate a Swagger Object

<CodeSwitcher :languages="{js: 'JavaScript',ts: 'TypeScript'}">
<template v-slot:js>

<<< @/code/spec-validation/validate-component.ts#swagger-js

</template>
<template v-slot:ts>

<<< @/code/spec-validation/validate-component.ts#swagger-ts

</template>
</CodeSwitcher>

## Validate an Info Object

<CodeSwitcher :languages="{js: 'JavaScript',ts: 'TypeScript'}">
<template v-slot:js>

<<< @/code/spec-validation/validate-component.ts#info-js

</template>
<template v-slot:ts>

<<< @/code/spec-validation/validate-component.ts#info-ts

</template>
</CodeSwitcher>

