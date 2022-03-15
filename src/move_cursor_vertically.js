import moveCursorUp from './move_cursor_up';
import moveCursorDown from './move_cursor_down';

/**
 * @class
 * @property {int} n
 * @property {MoveCursorUp|MoveCursorDown} sequence
 */
export default class MoveCursorVertically {
  constructor(n) {
    this.n = n;
    this.absoluteN = Math.abs(this.n);
    this.sequence = n > 0 ? moveCursorUp(this.absoluteN) : moveCursorDown(this.absoluteN);
  }

  /**
   * @method
   * @param sequence
   * @returns MoveCursorVertically
   */
  merge(sequence) {
    return new MoveCursorVertically(this.n + sequence.n);
  }
}
