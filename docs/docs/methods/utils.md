---
sidebar_position: 4
---

# Utils

Utilitarys methods for you use when work with dates.

## Methods

- `isDate`
- `isEqual`
- `monthLength`

## isDate

Returns true if value passed is a valid date.

Usage:
```javascript
import { isDate } from "datelib-simple";

isDate(new Date()); //true
isDate("2014-02-31"); //false
```

## isEqual

Returns true if two dates passed are equals.

Usage:
```javascript
import { isEqual } from "datelib-simple";

isEqual(new Date(2023, 2, 20), new Date(2023, 2, 20)) //true
isEqual(new Date(2023, 1, 20), new Date(2023, 2, 20)) //false
```

## monthLength

Get the last day (month length) of a month.

Usage:
```javascript
import { monthLength } from "datelib-simple";

monthLength(1, 2023); //28
monthLength(1, 2024); //29
```

