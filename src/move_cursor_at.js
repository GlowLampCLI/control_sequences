import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} x
 * @param {int} y
 * @returns {CursorPosition}
 */
export function moveCursorAt(x, y) {
  return `${CSI}${x};${y}H`;
}

function atLeast1(i) {
  return i < 1 ? 1 : i;
}

/**
 * @class
 */
export default class MoveCursorAt {
  /**
   * @constructor
   * @param {int} x
   * @param {int} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sequence = moveCursorAt(atLeast1(this.x), atLeast1(this.y));
  }

  /**
   * To apply adjustment to the this cursor position. Move the cursor to the relative
   * @method
   * @param {MoveCursorAt} sequence
   * @returns {MoveCursorAt}
   */
  merge(sequence) {
    return new MoveCursorAt(this.x + sequence.x, this.y + sequence.y);
  }
}
