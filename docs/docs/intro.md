---
sidebar_position: 1
---

# Welcome

:::caution
This library is only recommended for simple projects or simple cases. For complex projects is really not recommended.
:::

A date utility library for simple use cases, zero dependency and lightweight. `our-dates` was created for some use cases and solve problems with fast and easy.

Working with dates in programming and in severals situations are boring and confusing. With this library this task is more easy. You can handle, format and converter dates. In addition to being able to use some utility methods.

## Getting Started

Several methods are included in this library. For start to use you need install, `our-dates` can be installed with `yarn` or `npm`.

```shell
# with yarn
yarn add our-dates
```

```shell
# with npm
npm install our-dates
```

## Usage

After you install `our-dates`, you can start using by importing the library.

```js
// ES modules
import { format } from "our-dates";

format(new Date(2023, 2, 7), "dd/MM/yyyy"); // 07/03/2023
```
```js
// CommonJS
const { format } = require("our-dates");

format(new Date(2023, 2, 7), "dd/MM/yyyy"); // 07/03/2023
```
