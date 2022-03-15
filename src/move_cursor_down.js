import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} n
 * @returns {MoveCursorDown}
 */
export default function moveCursorDown(n = 4) {
  return `${CSI}${n}B`;
}
