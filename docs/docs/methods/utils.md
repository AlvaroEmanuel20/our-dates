---
sidebar_position: 3
---

# Utils

Utilitarys methods for you use when work with dates.

## Methods

- `isDate`
- `isEqual`
- `monthLength`
- `differenceInHours`
- `differenceInMinutes`
- `differenceInSeconds`
- `differenceInMilliseconds`

## isDate

Returns true if value passed is a valid date.

Usage:
```javascript
import { isDate } from 'our-dates';

isDate(new Date()); //true
isDate('2014-02-31'); //false
```

## isEqual

Returns true if two dates passed are equals.

Usage:
```javascript
import { isEqual } from 'our-dates';

isEqual(new Date(2023, 2, 20), new Date(2023, 2, 20)); //true
isEqual(new Date(2023, 1, 20), new Date(2023, 2, 20)); //false
```

## monthLength

Get the last day (month length) of a month.

Usage:
```javascript
import { monthLength } from 'our-dates';

monthLength(1, 2023); //28
monthLength(1, 2024); //29
```

## differenceInHours

Returns the difference between two dates in hours.

Usage:
```javascript
import { differenceInHours } from 'our-dates';

const laterDate = new Date(2023, 4, 2, 15, 40);
const earlierDate = new Date(2023, 4, 2, 12, 40);
differenceInHours(laterDate, earlierDate); //3 hours
```

## differenceInMinutes

Returns the difference between two dates in minutes.

Usage:
```javascript
import { differenceInMinutes } from 'our-dates';

const laterDate = new Date(2023, 4, 2, 15, 40);
const earlierDate = new Date(2023, 4, 2, 15, 20);
differenceInMinutes(laterDate, earlierDate); //20 minutes
```

## differenceInSeconds

Returns the difference between two dates in seconds.

Usage:
```javascript
import { differenceInSeconds } from 'our-dates';

const laterDate = new Date(2023, 4, 2, 15, 40, 50);
const earlierDate = new Date(2023, 4, 2, 15, 40, 30);
differenceInSeconds(laterDate, earlierDate); //20 seconds
```

## differenceInMilliseconds

Returns the difference between two dates in milliseconds.

Usage:
```javascript
import { differenceInMilliseconds } from 'our-dates';

const laterDate = new Date(2023, 4, 2, 15, 40, 50, 500);
const earlierDate = new Date(2023, 4, 2, 15, 40, 50, 200);
differenceInMilliseconds(laterDate, earlierDate); //300 milliseconds
```
