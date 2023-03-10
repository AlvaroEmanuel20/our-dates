---
sidebar_position: 2
---

# Handle

Handle dates with a set of functions.

## Methods

This library offers the follow functions for handle dates with efficiency.

- `addDays`
- `addMonths`
- `addYears`
- `addHours`
- `addMinutes`
- `addSeconds`
- `addMilliseconds`
- `subDays`
- `subMonths`
- `subYears`
- `subHours`
- `subMinutes`
- `subSeconds`
- `subMilliseconds`
## Sintax

Each function listed above receive two arguments:

- `date` - Date to use in operation
- `qty` - The quantity to add or sub of the date

See below how to use.

```javascript
import { addDays } from "our-dates";

const date = new Date(2023, 2, 5); //2023-03-05T00:00:00.000Z
addDays(date, 3); //2023-03-08T00:00:00.000Z
```

## Examples
```javascript
import { addDays, addHours, subYears } from "our-dates";

const date = new Date(2023, 2, 5); //2023-03-05T00:00:00.000Z
addDays(date, 3); //2023-03-08T00:00:00.000Z
addHours(date, 5); //2023-03-08T05:00:00.000Z
subYears(date, 3); //2020-03-08T05:00:00.000Z
```
