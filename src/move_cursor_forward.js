import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} n
 * @returns {MoveCursorForward}
 */
export default function moveCursorForward(n = 4) {
  return n === 0 ? '' : `${CSI}${n}C`;
}
