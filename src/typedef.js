/**
 * @typedef {'\x1b'} escape
 */

/**
 * @typedef {`${escape}[`} CSI
 */

/**
 * @typedef {`${escape}7`} SaveCursorPosition
 */

/**
 * @typedef {`${escape}8`} RestoreCursorPosition
 */

/**
 * @typedef {`${string}38;2;${string}m`} ForegroundColor
 */

/**
 * @typedef {`${CSI}${int}A`} MoveCursorUp
 */

/**
 * @typedef {`${CSI}${int}B`} MoveCursorDown
 */

/**
 * @typedef {`${CSI}${int}C`} MoveCursorForward
 */

/**
 * @typedef {`${CSI}${int}D`} MoveCursorBack
 */

/**
 * @typedef {`${CSI}${int};${int}H`} CursorPosition
 */

/**
 * @typedef {`${CSI}${int}S`} ScrollDown
 */
