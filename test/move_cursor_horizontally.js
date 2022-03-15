import test from 'tape';
import { MoveCursorHorizontally } from '../src';

test('move cursor horizontally #1', (t) => {
  const sequence = new MoveCursorHorizontally(1);

  t.equals(sequence.sequence, '\x1B[1C', 'escape sequence for moving cursor forward');
  t.equals(sequence.n, 1, 'n value matches');
  t.end();
});

test('move cursor horizontally #2', (t) => {
  const sequence = new MoveCursorHorizontally(-1);

  t.equals(sequence.sequence, '\x1B[1D', 'escape sequence for moving cursor backwards');
  t.equals(sequence.n, -1, 'n value matches');
  t.end();
});

test('move cursor horizontally #3', (t) => {
  const sequence1 = new MoveCursorHorizontally(-1);
  const sequence2 = new MoveCursorHorizontally(1);

  const sequence = sequence1.merge(sequence2);

  t.equals(sequence.sequence, '\x1B[0C', 'escape sequence for moving cursor forward');
  t.equals(sequence.n, 0, 'n value matches');
  t.end();
});

test('move cursor horizontally #4', (t) => {
  const sequence1 = new MoveCursorHorizontally(-1);
  const sequence2 = new MoveCursorHorizontally(1);

  const sequence = sequence2.merge(sequence1);

  t.equals(sequence.sequence, '\x1B[0C', 'escape sequence for moving cursor forward');
  t.equals(sequence.n, 0, 'n value matches');
  t.end();
});
