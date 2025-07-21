import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import profileImg from '../../assets/profile.jpg'; // Place your profile image here

const phrases = [
  'Web Developer',
  'Learning never stops',
  'Junior Systems Developer',
  'Exhibit Developer',
  'Customodoro Developer'
];

function useTypewriter(words: string[], typingSpeed = 90, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, pause]);

  return words[index].substring(0, subIndex);
}

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const typing = useTypewriter(phrases);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleProjectsClick = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${fadeIn ? styles.fadeUp : ''}`}
      aria-label="Hero Section"
    >
      <div className={styles.centerContent}>
        <div className={styles.profileWrapper}>
          <img
            src={profileImg}
            alt="Profile"
            className={styles.profileImg}
            loading="lazy"
          />
        </div>
        <h1 className={styles.greeting}>Hi, I'm <span className={styles.brand}>YabuTech</span></h1>
        <h2 className={styles.typing}>
          <span aria-live="polite">{typing}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </h2>
        <button
          className={styles.cta}
          onClick={handleProjectsClick}
        >
          View My Projects
        </button>
      </div>
      {/* Optional blurred/glow background */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />
    </section>
  );
}

export default Home;
