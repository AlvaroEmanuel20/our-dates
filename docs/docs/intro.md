---
sidebar_position: 1
---

# Welcome

A date utility library for simple use cases, zero dependency and lightweight. `our-dates` was created for some use cases and solve problems with fast and easy.

Working with dates in programming and in severals situations are boring and confusing. With this library this task is more easy. You can handle dates, calculate differences between dates, convert dates, and more. In addition to being able to use some utility methods.

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
import { differenceInHours } from 'our-dates';

const laterDate = new Date(2023, 4, 2, 15, 40);
const earlierDate = new Date(2023, 4, 2, 12, 40);
differenceInHours(laterDate, earlierDate) //3 hours
```
```js
// CommonJS
const { differenceInHours } = require('our-dates');

const laterDate = new Date(2023, 4, 2, 15, 40);
const earlierDate = new Date(2023, 4, 2, 12, 40);
differenceInHours(laterDate, earlierDate) //3 hours
```
