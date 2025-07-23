import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/YABUTEK.png';
import yabutechIcon from '../assets/yabutech.png';
import jsIcon from '../assets/js.png';
import customodoroIcon from '../assets/customodoro.png';
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
  }, []);

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
  }, []);

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

        // Find the section that's most visible
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => {
            // Sort by how much of the section is visible (intersection ratio)
            // and prioritize sections that are closer to the top
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            
            // If both sections are in view, prioritize the one closer to the top
            if (a.intersectionRatio > 0.1 && b.intersectionRatio > 0.1) {
              return Math.abs(aTop) - Math.abs(bTop);
            }
            
            // Otherwise, prioritize by intersection ratio
            return b.intersectionRatio - a.intersectionRatio;
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
        rootMargin: '-20% 0px -60% 0px', // Start detecting when section is 20% from top
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1.0]
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
                {/* Only show label on desktop */}
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
                  {/* Show custom icon and label on mobile */}
                  <span
                    className={`${styles.linkIcon} ${activeHash === link.href ? styles.iconActive : styles.iconInactive}`}
                    aria-hidden="true"
                  >
                    {idx === 0 && <img src={yabutechIcon} alt="Home" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                    {idx === 1 && <img src={jsIcon} alt="About" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                    {idx === 2 && <img src={customodoroIcon} alt="Projects" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
                    {idx === 3 && <img src={linkedinIcon} alt="Contact" style={{ width: 20, height: 20, verticalAlign: 'middle' }} />}
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