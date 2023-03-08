---
sidebar_position: 1
---

# Welcome

:::caution
This library is recommended for only simple projects or simple cases. For complex projects is really not recommended.
:::

A date utility library for simple use cases, zero dependency and lightweight. `datelib-simple` was created for some use cases and solve problems with fast and easy.

Working with dates in programming and in severals situations are boring and confusing. With this library this task is more easy. You can handle, format and converter dates. In addition to being able to use some utility methods.

## Getting Started

Several methods are included in this library. For start to use you need install, `datelib-simple` can be installed with `yarn` or `npm`.

```shell
# with yarn
yarn add datelib-simple
```

```shell
# with npm
npm install datelib-simple
```

## Usage

After you install `datelib-simple`, you can start using by importing the library.

```js
// ES modules
import { format } from "datelib-simple";
console.log(format(new Date(2023, 2, 7), "dd/MM/yyyy")) // 07/03/2023
```
```js
// CommonJS
const { format } = require("datelib-simple");
console.log(format(new Date(2023, 2, 7), "dd/MM/yyyy")) // 07/03/2023
```
