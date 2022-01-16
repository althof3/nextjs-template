import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'redux/counterSlice';
import styles from './styles.module.css';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={handleDecrement}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label="Increment value" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
