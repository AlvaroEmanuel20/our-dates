type Formats = "MM-dd-yyyy" | "dd-MM-yyyy" | "MM/dd/yyyy" | "dd/MM/yyyy";

/**
 * @name format
 * @description Convert a date in a formatted date.
 *
 * @param {Date} date a date for format
 * @param {Formats} [formatString] a valid date format string
 * @returns {string} formatted date
 */

export default function format(date: Date, formatString?: Formats): string {
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();

    switch (formatString) {
        case "MM-dd-yyyy":
            return `${month}-${day}-${year}`;
        case "dd-MM-yyyy":
            return `${day}-${month}-${year}`;
        case "MM/dd/yyyy":
            return `${month}/${day}/${year}`;
        case "dd/MM/yyyy":
            return `${day}/${month}/${year}`;
        default:
            return `${month}/${day}/${year}`;
    }
}

/**
 * Add zero to days or month
 * @param {number} element a day or a month
 * @returns {(string | number)} day or month with zero to init
 */

function addZero(element: number): string | number {
    return element < 10 ? `0${element}` : element;
}
