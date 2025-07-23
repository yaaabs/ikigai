import { useState } from 'react';
import styles from './Achievements.module.css';

const certifications = [
  {
    title: 'IT Specialist - HTML5 Application Development',
    date: 'March 2025',
    image: '/src/assets/certificates/HTML5.png',
    pdf: '/src/assets/certificates/HTML5.pdf',
    link: 'https://www.credly.com/badges/32f7221c-baff-4662-b189-f5598d2b30d3/public_url',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    date: 'February 2025',
    image: '/src/assets/certificates/JS.png',
    pdf: '',
    link: 'https://www.freecodecamp.org/certification/brianyabut/javascript-algorithms-and-data-structures-v8',
  },
  {
    title: 'Responsive Web Design',
    date: 'December 2024',
    image: '/src/assets/certificates/RWD.png',
    pdf: '',
    link: 'https://www.freecodecamp.org/certification/brianyabut/responsive-web-design',
  },
  {
    title: 'IT Specialist - Networking',
    date: 'July 2023',
    image: '/src/assets/certificates/networking.png',
    pdf: '/src/assets/certificates/networking.pdf',
    link: 'https://www.credly.com/badges/f560df2c-1630-4c89-b383-f8fb26ba1d70/linked_in_profile',
  },
  // Add more certs as needed
];

export default function Achievements() {
  const [pdfModal, setPdfModal] = useState<string | null>(null);
  const [pngModal, setPngModal] = useState<string | null>(null);

  return (
    <section className={styles.achievementsSection}>
      <h2 className={styles.heading}>Achievements</h2>
      <div className={styles.grid}>
        {certifications.map((cert, index) => {
          const hasPDF = !!cert.pdf;
          const hasCredential = !!cert.link;
          const hasImage = !!cert.image;

          return (
            <div key={index} className={styles.card} style={{ animationDelay: `${index * 0.08}s` }}>
              <div className={styles.imageWrap}>
                <div className={styles.aspectRatio}>
                  <img src={cert.image} alt={cert.title} className={styles.image} />
                </div>
                <span className={styles.typeBadge}>
                  {hasPDF ? 'PDF' : hasImage ? 'PNG' : ''}
                </span>
              </div>
              <h3 className={styles.title}>{cert.title}</h3>
              {cert.date && <div className={styles.date}>{cert.date}</div>}
              <div style={{ height: '1.2rem' }} /> {/* breathing space above buttons */}
              <div className={styles.buttonRow}>
                {/* Scenario #1: PDF and Credential */}
                {hasPDF && hasCredential && (
                  <>
                    <button
                      className={styles.pdfBtn}
                      onClick={() => setPdfModal(cert.pdf)}
                    >
                      View PDF
                    </button>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credentialBtn}
                    >
                      Credential
                    </a>
                  </>
                )}
                {/* Scenario #2: PNG and Credential, no PDF */}
                {!hasPDF && hasImage && hasCredential && (
                  <>
                    <button
                      className={styles.pdfBtn}
                      onClick={() => setPngModal(cert.image)}
                    >
                      View PNG
                    </button>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.credentialBtn}
                    >
                      Credential
                    </a>
                  </>
                )}
                {/* Scenario #3: PNG only, no PDF, no Credential */}
                {!hasPDF && hasImage && !hasCredential && (
                  <button
                    className={styles.pdfBtn}
                    onClick={() => setPngModal(cert.image)}
                  >
                    View PNG
                  </button>
                )}
              </div>
              <div style={{ height: '0.7rem' }} /> {/* breathing space below buttons */}
            </div>
          );
        })}
      </div>
      {/* PDF Modal */}
      {pdfModal && (
        <div className={styles.pdfBackdrop} onClick={() => setPdfModal(null)}>
          <div className={styles.pdfModal} onClick={e => e.stopPropagation()}>
            <div className={styles.pdfHeader}>
              <span className={styles.pdfTitle}>Certificate PDF</span>
              <button className={styles.pdfClose} onClick={() => setPdfModal(null)} aria-label="Close PDF">&times;</button>
            </div>
            <iframe
              src={pdfModal}
              title="Certificate PDF"
              className={styles.pdfFrame}
              frameBorder="0"
            />
            <a
              href={pdfModal}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfBtn}
              style={{ marginTop: '1rem' }}
            >
              Open PDF in New Tab
            </a>
          </div>
        </div>
      )}
      {/* PNG Modal */}
      {pngModal && (
        <div className={styles.pdfBackdrop} onClick={() => setPngModal(null)}>
          <div className={styles.pdfModal} onClick={e => e.stopPropagation()}>
            <div className={styles.pdfHeader}>
              <span className={styles.pdfTitle}>Certificate Image</span>
              <button className={styles.pdfClose} onClick={() => setPngModal(null)} aria-label="Close PNG">&times;</button>
            </div>
            <img
              src={pngModal}
              alt="Certificate"
              style={{
                width: '100%',
                maxHeight: '60vh',
                objectFit: 'contain',
                borderRadius: '0.7rem',
                background: '#23232b',
                boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                marginBottom: '0.7rem'
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
