import test from "tape";
import { MoveCursorAt } from '../src';

test('move cursor at #1', (t) => {
  const sequence = new MoveCursorAt(2, 3);

  t.equals(sequence.sequence, '\x1B[2;3H', 'escape sequence for CUP matches');
  t.end();
});

test('move cursor at #2', (t) => {
  const sequence1 = new MoveCursorAt(2, 3);
  const sequence2 = new MoveCursorAt(-3, 3);

  const sequence = sequence1.merge(sequence2);

  t.equals(sequence.sequence, '\x1B[1;6H', 'escape sequence for CUP matches');
  t.equals(sequence.x, -1, 'The x coordinate is the actual value after merge');
  t.equals(sequence.y, 6, 'The y coordinate matches');
  t.end();
});
