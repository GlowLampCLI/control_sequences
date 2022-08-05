import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} n
 * @returns {MoveCursorBack}
 */
export default function moveCursorBack(n = 4) {
  return n === 0 ? '' : `${CSI}${n}D`;
}
