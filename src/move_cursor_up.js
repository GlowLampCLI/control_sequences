import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} n
 * @returns {`${CSI}${int}A`}
 */
export default function moveCursorUp(n = 1) {
  return `${CSI}${n}A`;
}
