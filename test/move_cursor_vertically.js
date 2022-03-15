import test from 'tape';
import { MoveCursorVertically } from '../src';

test('move cursor vertically #1', (t) => {
  const sequence = new MoveCursorVertically(1);

  t.equals(sequence.sequence, '\x1B[1A', 'escape sequence for moving cursor up');
  t.equals(sequence.n, 1, 'n value matches');
  t.end();
});

test('move cursor vertically #2', (t) => {
  const sequence = new MoveCursorVertically(-1);

  t.equals(sequence.sequence, '\x1B[1B', 'escape sequence for moving cursor down');
  t.equals(sequence.n, -1, 'n value matches');
  t.end();
});

test('move cursor vertically #3', (t) => {
  const sequence1 = new MoveCursorVertically(-1);
  const sequence2 = new MoveCursorVertically(1);

  const sequence = sequence1.merge(sequence2);

  t.equals(sequence.sequence, '\x1B[0B', 'escape sequence for moving cursor down');
  t.equals(sequence.n, 0, 'n value matches');
  t.end();
});

test('move cursor vertically #4', (t) => {
  const sequence1 = new MoveCursorVertically(-1);
  const sequence2 = new MoveCursorVertically(1);

  const sequence = sequence2.merge(sequence1);

  t.equals(sequence.sequence, '\x1B[0B', 'escape sequence for moving cursor down');
  t.equals(sequence.n, 0, 'n value matches');
  t.end();
});
