import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} n
 * @returns {MoveCursorNextLine}
 */
export default function scrollCursorDown(n = 1) {
  return n === 0 ? '' : `${CSI}${n}S`;
}
