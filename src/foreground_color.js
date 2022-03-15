import CSI from './control_sequence_introducer';

/**
 *
 * @param {color} color
 * @returns {ForegroundColor}
 */
export default function foregroundColor(color) {
  return `${CSI}38;2;${color}m`;
}
