---
sidebar_position: 1
---

# Format

Returns a formatted date string from any date.

## Usage
```javascript
import { format } from "datelib-simple";

// Sintax:
// format(date, formatString);

format(new Date(2023, 2, 9), "dd/MM/yyyy") // 09/03/2023
```

## Format strings

The method accept fours differents format strings. List below:
- dd/MM/yyyy
- dd-MM-yyyy
- MM/dd/yyyy
- MM-dd-yyyy

## Examples
```javascript
import { format } from "datelib-simple";

format(new Date(2023, 2, 9), "dd/MM/yyyy") // 09/03/2023
format(new Date(2023, 2, 9), "dd-MM-yyyy") // 09-03-2023
format(new Date(2023, 2, 9), "MM-dd-yyyy") // 03-09-2023
```

