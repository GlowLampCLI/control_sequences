import CSI from './control_sequence_introducer';

/**
 * @typedef {`${string}38;2;${string}m`} foreGroundColor
 */

/**
 *
 * @param {color} color
 * @returns {foreGroundColor}
 */
export default function foreGroundColor(color) {
  return `${CSI}38;2;${color}m`;
}
