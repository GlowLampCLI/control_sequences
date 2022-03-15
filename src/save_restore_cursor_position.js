import escape from './escape';

/**
 *
 * @returns {SaveCursorPosition}
 */
export function saveCursorPosition() {
  return `${escape}7`;
}

/**
 *
 * @returns {RestoreCursorPosition}
 */
export function restoreCursorPosition() {
  return `${escape}8`;
}
