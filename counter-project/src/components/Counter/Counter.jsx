import {useState, memo, useCallback, useMemo} from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo compare old and new props and prevent re-execution if they are the same.
// In this case, if the initialCount prop is the same, the Counter component will not re-render, even if the parent component (App) re-renders.
// This optimization can help improve performance by avoiding unnecessary renders of the Counter component when its props haven't changed.
const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);

  // useMemo allows to memoize the result of a function, so it will only be re-evaluated when its dependencies change.
  // In this case, the isPrime function will only be called again if the initialCount prop changes.
  // This can help improve performance by avoiding unnecessary calculations when the initialCount prop remains the same across renders.
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  const [counter, setCounter] = useState(initialCount);

  // useCallback allow optimize component rendering
  const handleDecrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
})

export default Counter;