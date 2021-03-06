import Counter from 'components/Counter';
import Like from 'components/Like';
import type { NextPage } from 'next';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src="/logo.svg" className={styles['App-logo']} alt="logo" />
        <Counter />
        <Like />
        <p style={{ width: '100%', maxWidth: '800px' }}>
          Try to reload this page.
          <br /> You will see the same value everytime. <br /> Because the global state is persisted and
          saved in the localstorage
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles['App-link']}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles['App-link']}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles['App-link']}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles['App-link']}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default Home;
