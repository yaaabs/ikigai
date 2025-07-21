import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h2>Home</h2>
        <p>Welcome to my portfolio! Explore my work and learn more about me.</p>
        <p>
          Scroll down to see more about my background, projects, and how to contact me.
        </p>
      </div>
    </div>
  );
}

export default Home;
