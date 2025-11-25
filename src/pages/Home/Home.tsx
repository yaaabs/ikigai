import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import profileImg from "../../assets/profile.webp";
import profileAltImg from "../../assets/profile2.webp";

const phrases = [
  "Web Developer",
  "Learning never stops",
  "Junior Systems Developer",
  "Exhibit Developer",
  "Customodoro Developer",
  "Full Stack Developer",
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
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? typingSpeed / 2 : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, pause]);

  return words[index].substring(0, subIndex);
}

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const typing = useTypewriter(phrases);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleProjectsClick = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeClick = () => {
    window.open("/resume/BrianYabut_Resume_2025.pdf", "_blank");
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/BrianYabut_Resume_2025.pdf";
    link.download = "BrianYabut_Resume_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${fadeIn ? styles.fadeUp : ""}`}
      aria-label="Hero Section"
    >
      <div className={styles.centerContent}>
        <div
          className={styles.profileWrapper}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <img
            src={profileImg}
            alt="Profile"
            className={`${styles.profileImg} ${styles.primaryImg} ${isHovered ? styles.hidden : ""}`}
            loading="lazy"
          />
          <img
            src={profileAltImg}
            alt="Profile Alternative"
            className={`${styles.profileImg} ${styles.altImg} ${isHovered ? styles.visible : ""}`}
            loading="lazy"
          />
        </div>
        <h1 className={styles.greeting}>
          Hi, I'm <span className={styles.brand}>YabuTech</span>
        </h1>
        <h2 className={styles.typing}>
          <span aria-live="polite">{typing}</span>
          <span className={styles.cursor} aria-hidden="true">
            |
          </span>
        </h2>

        <div className={styles.ctaGroup}>
          <button
            className={`${styles.cta} ${styles.ctaPrimary}`}
            onClick={handleResumeClick}
            aria-label="View Resume"
          >
            <svg
              className={styles.ctaIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Resume
          </button>

          <button
            className={`${styles.cta} ${styles.ctaSecondary}`}
            onClick={handleProjectsClick}
            aria-label="View Projects"
          >
            View Projects
          </button>
        </div>

        <button
          className={styles.downloadBtn}
          onClick={handleResumeDownload}
          aria-label="Download Resume PDF"
          title="Download Resume"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </button>

        <button
          className={`${styles.backToTopBtn} ${showBackToTop ? styles.visible : ""}`}
          onClick={handleBackToTop}
          aria-label="Back to Top"
          title="Back to Top"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
      {/* Optional blurred/glow background */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />
    </section>
  );
}

export default Home;
