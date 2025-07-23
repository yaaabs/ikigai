import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/YABUTEK.png';
import { FaHome, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');
  const navRef = useRef<HTMLDivElement>(null);

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
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMenuOpen(false);
        }
      }
    };
    const nav = navRef.current;
    nav?.addEventListener('click', handleAnchorClick);
    return () => nav?.removeEventListener('click', handleAnchorClick);
  }, []);

  // Track active link based on hash
  useEffect(() => {
    const onHashChange = () => {
      // Default to #home if hash is empty or not matching any navLinks
      const hash = window.location.hash || '#home';
      const validHashes = navLinks.map(l => l.href);
      setActiveHash(validHashes.includes(hash) ? hash : '#home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: <FaHome /> },
    { href: '#about', label: 'About', icon: <FaUser /> },
    { href: '#projects', label: 'Projects', icon: <FaFolderOpen /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

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
            {navLinks.map((link) => (
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
                  {/* Show icon and label on mobile */}
                  <span
                    className={`${styles.linkIcon} ${activeHash === link.href ? styles.iconActive : styles.iconInactive}`}
                    aria-hidden="true"
                  >
                    {link.icon}
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
