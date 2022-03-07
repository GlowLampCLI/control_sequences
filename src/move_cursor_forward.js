import CSI from './control_sequence_introducer';

/**
 *
 * @param {int} n
 * @returns {`${CSI}${int}C`}
 */
export default function moveCursorForward(n = 4) {
  return `${CSI}${n}C`;
}
