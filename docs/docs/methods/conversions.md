---
sidebar_position: 2
---

# Conversions

Methods for converts dates and times.
## Methods

This library offers the follow functions for convert dates and times.

- `daysToWeek`
- `hoursToMinutes`
- `hoursToSeconds`
- `hoursToMilliseconds`
- `minutesToHours`
- `minutesToSeconds`
- `minutesToMilliseconds`
- `secondsToHours`
- `secondsToMinutes`
- `secondsToMilliseconds`
- `millisecondsToHours`
- `millisecondsToMinutes`
- `millisecondsToSeconds`
## daysToWeek

Convert a quantity of days to week.

Usage:
```javascript
import { daysToWeek } from 'our-dates';

daysToWeek(14); //2
daysToWeek(12); //2 //Returns only integer part
```

## hoursTo*

Convert a quantity of hours to minutes, seconds or milliseconds.

Usage:
```javascript
import { hoursToMinutes } from 'our-dates';
import { hoursToSeconds } from 'our-dates';
import { hoursToMilliseconds } from 'our-dates';

hoursToMinutes(2); //120
hoursToSeconds(2); //7200
hoursToMilliseconds(2); //7200000
```

## minutesTo*

Convert a quantity of minutes to hours, seconds or milliseconds.

Usage:
```javascript
import { minutesToHours } from 'our-dates';
import { minutesToSeconds } from 'our-dates';
import { minutesToMilliseconds } from 'our-dates';

minutesToHours(120); //2
minutesToSeconds(2); //120
minutesToMilliseconds(2); //120000
```

## secondsTo*

Convert a quantity of seconds to hours, minutes or milliseconds.

Usage:
```javascript
import { secondsToHours } from 'our-dates';
import { secondsToMinutes } from 'our-dates';
import { secondsToMilliseconds } from 'our-dates';

secondsToHours(7200); //2
secondsToMinutes(120); //2
secondsToMilliseconds(2); //2000
```

## millisecondsTo*

Convert a quantity of milliseconds to hours, minutes or seconds.

Usage:
```javascript
import { millisecondsToHours } from 'our-dates';
import { millisecondsToMinutes } from 'our-dates';
import { millisecondsToSeconds } from 'our-dates';

millisecondsToHours(3600000); //1
millisecondsToMinutes(60000); //1
millisecondsToSeconds(2000); //2
```
