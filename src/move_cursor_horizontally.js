import moveCursorForward from './move_cursor_forward';
import moveCursorBack from './move_cursor_back';

/**
 * @class
 * @property {int} n
 * @property {MoveCursorForward|MoveCursorBack} sequence
 */
export default class MoveCursorHorizontally {
  constructor(n) {
    this.n = n;
    this.absoluteN = Math.abs(this.n);
    this.sequence = n >= 0 ? moveCursorForward(this.absoluteN) : moveCursorBack(this.absoluteN);
  }

  /**
   * @method
   * @param sequence
   * @returns MoveCursorHorizontally
   */
  merge(sequence) {
    return new MoveCursorHorizontally(this.n + sequence.n);
  }
}
