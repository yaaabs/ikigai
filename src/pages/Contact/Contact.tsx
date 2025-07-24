import { useRef, useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload, FaFacebook, FaTwitter } from 'react-icons/fa';
import customodoroLogo from '../../assets/customodoro.png'; // Make sure this asset exists

const RESUME_URL = '/resume/Resume 2025.pdf'; 

const SOCIALS = [
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/brian-yabut/',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/yaaabs',
  },
  {
    icon: <FaFacebook />,
    label: 'Facebook',
    url: 'https://facebook.com/brianyabut',
  },
  {
    icon: <FaTwitter />,
    label: 'Twitter',
    url: 'https://twitter.com/brianyabut',
  },
];

const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const FORM_ENDPOINT = 'https://formspree.io/f/mvgqkjao'; 

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simple validation
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    setToast(null);

    try {
      // POST to Formspree (or your chosen endpoint)
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Message: form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
        setToast('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        if (formRef.current) formRef.current.reset();
        setTimeout(() => setSent(false), 3500);
        setTimeout(() => setToast(null), 3500);
      } else {
        // Try to extract error message from Formspree response
        let errorMsg = 'Failed to send message. Please try again later.';
        try {
          const data = await res.json();
          if (data && data.errors && data.errors.length > 0) {
            errorMsg = data.errors.map((e: any) => e.message).join(' ');
          }
        } catch {}
        setToast(errorMsg);
      }
    } catch (err) {
      setToast('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleResumeDownload() {
    setDownloading(true);
    setToast('Downloading resume...');
    setTimeout(() => setDownloading(false), 1200);
    setTimeout(() => setToast(null), 2200);
    // Let browser handle download via <a>
  }

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.subheading}>
        Have something in mind? Reach out and connect with YabuTech.
      </p>
      <div className={styles.contactGrid}>
        {/* Contact Details Panel */}
        <div className={styles.detailsPanel} aria-label="Contact Details">
          {/* Featured App Promo */}
          <div className={styles.featuredAppCard}>
            <div className={styles.featuredAppHeader}>
              <img
                src={customodoroLogo}
                alt="Customodoro Timer Logo"
                className={styles.featuredAppLogo}
              />
              <div>
                <div className={styles.featuredAppTitle}>Customodoro Timer</div>
                <div className={styles.featuredAppSubtitle}>Stay focused, stay productive</div>
              </div>
            </div>
            <div className={styles.featuredAppDesc}>
              🚀 Try my productivity app! <br />
              <span style={{ color: '#ff5a5a', fontWeight: 500 }}>Customizable Pomodoro Timer</span> for students, professionals, and creatives.<br />
              <a
                href="https://customodoro.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.featuredAppBtn}
              >
                Visit Customodoro
              </a>
              <div style={{ height: '1.5rem' }} /> {/* Add breathing space after button */}
            </div>
          </div>
          <div className={styles.detailItem}>
            <FaEnvelope className={styles.detailIcon} />
            <a href="mailto:bianyabutech@gmail.com" className={styles.detailLink}>
              bianyabutech@gmail.com
            </a>
          </div>
          <div className={styles.detailItem}>
            <FaPhone className={styles.detailIcon} />
            <a href="tel:+639560255905" className={styles.detailLink}>
              +63 956 025 5905
            </a>
          </div>
          {/* Social Icons */}
          <div className={styles.socials}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={styles.socialIcon}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          autoComplete="off"
          aria-label="Contact Form"
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && <span className={styles.error} id="name-error">{errors.name}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && <span className={styles.error} id="email-error">{errors.email}</span>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              value={form.message}
              onChange={handleChange}
              rows={5}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && <span className={styles.error} id="message-error">{errors.message}</span>}
          </div>
          <button type="submit" className={styles.submitBtn} disabled={sent || loading}>
            {loading ? 'Sending...' : sent ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
      {/* Resume Download Button */}
      <div className={styles.resumeWrap}>
        <a
          href={RESUME_URL}
          download
          className={styles.resumeBtn + (downloading ? ' ' + styles.downloading : '')}
          onClick={handleResumeDownload}
        >
          <FaDownload className={styles.resumeIcon} aria-hidden="true" />
          Download My Resume
        </a>
      </div>
      {/* Toast Message */}
      {toast && (
        <div className={styles.toast} role="status" aria-live="polite">
          {toast}
        </div>
      )}
      {/* Footer */}
      <footer className={styles.footer}>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {FOOTER_LINKS.map(link => (
            <a key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Brian Yabut. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
