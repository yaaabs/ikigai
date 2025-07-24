import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/YABUTEK.png';
import yabutechIcon from '../assets/yabutech.png';
import jsIcon from '../assets/js.png';
import customodoroIcon from '../assets/customodoro.png';
import freeCodeCampIcon from '../assets/fcc.png';
import linkedinIcon from '../assets/linkedin.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');
  const navRef = useRef<HTMLDivElement>(null);
  const isManualClick = useRef(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' }, // <-- Add Achievements
    { href: '#contact', label: 'Contact' },
  ];

  // Change navbar color on scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          isManualClick.current = true;
          setActiveHash(target.hash);
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMenuOpen(false);
          
          // Reset manual click flag after scroll animation
          setTimeout(() => {
            isManualClick.current = false;
          }, 1000);
        }
      }
    };
    const nav = navRef.current;
    nav?.addEventListener('click', handleAnchorClick);
    return () => nav?.removeEventListener('click', handleAnchorClick);
  }, [navLinks]);

  // Track active link based on hash change
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash || '#home';
      const validHashes = navLinks.map(l => l.href);
      if (validHashes.includes(hash)) {
        setActiveHash(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navLinks]);

  // IntersectionObserver for scroll syncing
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update if user just clicked a nav link
        if (isManualClick.current) return;

        // Find the section whose top is closest to the top of the viewport and is intersecting
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => {
            // Prioritize the section whose top is closest to the top of the viewport
            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
          });

        if (visibleSections.length > 0) {
          const activeSection = `#${visibleSections[0].target.id}`;
          if (activeSection !== activeHash) {
            setActiveHash(activeSection);
            // Update URL hash without triggering scroll
            window.history.replaceState(null, '', activeSection);
          }
        }
      },
      {
        root: null,
        // Make the observer more sensitive to section changes:
        // When the top 30% of the viewport hits a section, it becomes active
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.1, 0.15, 0.2, 0.25, 0.3, 0.5, 0.75, 1.0]
      }
    );

    sections.forEach(section => observer.observe(section));
    
    return () => {
      observer.disconnect();
    };
  }, [activeHash]);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      ref={navRef}
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <a href="#home" className={styles.logo} tabIndex={-1} aria-label="Home">
          <img
            src={logo}
            alt="YabuTek Logo"
            className={styles.logoImg}
            draggable={false}
          />
        </a>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
        {/* Desktop menu */}
        <ul
          className={styles.links}
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className={`${styles.link} ${activeHash === link.href ? styles.active : ''}`}
                role="menuitem"
                tabIndex={window.innerWidth > 768 ? 0 : -1}
                aria-current={activeHash === link.href ? 'page' : undefined}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span className={styles.linkLabel}>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        {menuOpen && (
          <ul
            id="nav-menu"
            className={`${styles.links} ${styles.open}`}
            role="menu"
            aria-modal="true"
          >
            {navLinks.map((link, idx) => (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  className={`${styles.link} ${activeHash === link.href ? styles.active : ''}`}
                  role="menuitem"
                  tabIndex={0}
                  aria-current={activeHash === link.href ? 'page' : undefined}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className={`${styles.linkIcon} ${activeHash === link.href ? styles.iconActive : styles.iconInactive}`}
                    aria-hidden="true"
                  >
                    {idx === 0 && <img src={yabutechIcon} alt="Home" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                    {idx === 1 && <img src={jsIcon} alt="About" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                    {idx === 2 && <img src={customodoroIcon} alt="Projects" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                    {idx === 3 && <img src={freeCodeCampIcon} alt="Achievements" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />} 
                    {idx === 4 && <img src={linkedinIcon} alt="Contact" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                  </span>
                  <span className={styles.linkLabel}>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;