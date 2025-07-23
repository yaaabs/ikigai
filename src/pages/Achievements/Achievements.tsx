import { useState, useRef, useEffect } from 'react';
import styles from './Achievements.module.css';

const certifications = [
	{
		title: 'IT Specialist - HTML5 Application Development',
		date: 'March 2025',
		image: '/src/assets/certificates/HTML5.png',
		pdf: '/src/assets/certificates/HTML5.pdf',
		link: 'https://www.credly.com/badges/32f7221c-baff-4662-b189-f5598d2b30d3/public_url',
		desc: 'Earned for demonstrating proficiency in HTML5 application development concepts and practices.',
	},
	{
		title: 'JavaScript Algorithms and Data Structures',
		date: 'February 2025',
		image: '/src/assets/certificates/JS.png',
		pdf: '',
		link: 'https://www.freecodecamp.org/certification/brianyabut/javascript-algorithms-and-data-structures-v8',
		desc: "Completed FreeCodeCamp's JavaScript Algorithms and Data Structures certification.",
	},
	{
		title: 'Responsive Web Design',
		date: 'December 2024',
		image: '/src/assets/certificates/RWD.png',
		pdf: '',
		link: 'https://www.freecodecamp.org/certification/brianyabut/responsive-web-design',
		desc: "Completed FreeCodeCamp's Responsive Web Design certification.",
	},
	{
		title: 'IT Specialist - Networking',
		date: 'July 2023',
		image: '/src/assets/certificates/networking.png',
		pdf: '/src/assets/certificates/networking.pdf',
		link: 'https://www.credly.com/badges/f560df2c-1630-4c89-b383-f8fb26ba1d70/linked_in_profile',
		desc: 'Earned for demonstrating proficiency in networking concepts and practices.',
	},
	{
		title: 'Best Web Application Capstone Project',
		date: 'April 2025',
		image: '/src/assets/certificates/bestweb.png',
		pdf: '/src/assets/certificates/bestweb.pdf',
		link: '',
		desc: 'Awarded for the Best Web Application Capstone Project during the TICAP 18 Project Exhibit and Presentation',
	},
	{
		title: 'Most Innovative Capstone Project',
		date: 'April 2025',
		image: '/src/assets/certificates/innovative.png',
		pdf: '/src/assets/certificates/innovative.pdf',
		link: '',
		desc: 'Awarded for the Most Innovative Capstone Project during the TICAP 18 Project Exhibit and Presentation',
	},
	{
		title: 'Spying the Spectrum: Software-Defined Radio (SDR) Hackathon - Best Idea',
		date: 'Nov 2023',
		image: '/src/assets/certificates/bestidea.jpg',
		pdf: '/src/assets/certificates/bestidea.pdf',
		link: '',
		desc: 'Recognized for Best Idea in SDR Hackathon.',
	},
	{
		title: "2TSY2122 CCSMA Dean's Lister (Bronze)",
		date: 'March 2022',
		image: '/src/assets/certificates/deanslister.jpg',
		pdf: '/src/assets/certificates/deanslister.pdf',
		link: '',
		desc: "Dean's Lister (Bronze) for academic excellence.",
	},
	// Add more certs as needed
];

function useModal(open: boolean, onClose: () => void) {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') onClose();
		}
		function handleClick(e: MouseEvent) {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				onClose();
			}
		}
		document.addEventListener('keydown', handleKey);
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('keydown', handleKey);
			document.removeEventListener('mousedown', handleClick);
		};
	}, [open, onClose]);

	return modalRef;
}

export default function Achievements() {
	const [selected, setSelected] = useState<number | null>(null);
	const modalRef = useModal(selected !== null, () => setSelected(null));

	return (
		<section className={styles.achievementsSection}>
			<h2 className={styles.heading}>Achievements</h2>
			<p className={styles.bio}>
				This section highlights some of the certifications, awards, and recognitions I’ve earned throughout my journey — reflecting both my technical growth and dedication to excellence in the field of software development.
			</p>
			<div className={styles.grid}>
				{certifications.map((cert, index) => (
					<div key={index} className={styles.card} style={{ animationDelay: `${index * 0.08}s` }}>
						<div className={styles.imageWrap}>
							<div className={styles.aspectRatio}>
								<img src={cert.image} alt={cert.title} className={styles.image} />
							</div>
							<span className={styles.typeBadge}>
								{cert.pdf ? 'PDF' : cert.image ? 'PNG' : ''}
							</span>
						</div>
						<h3 className={styles.title}>{cert.title}</h3>
						{cert.date && <div className={styles.date}>{cert.date}</div>}
						<div style={{ height: '1.2rem' }} />
						<div className={styles.buttonRow}>
							<button
								className={styles.pdfBtn}
								onClick={() => setSelected(index)}
							>
								View More
							</button>
						</div><br></br>
						<div style={{ height: '0.7rem' }} />
					</div>
				))}
			</div>
			{/* Modal for certificate details */}
			{selected !== null && (
				<div className={styles.pdfBackdrop}>
					<div
						className={styles.pdfModal}
						ref={modalRef}
						role="dialog"
						aria-modal="true"
						tabIndex={-1}
						style={{
							maxWidth: 480,
							width: '95vw',
							maxHeight: '90vh',
							overflowY: 'auto',
							background: '#18181f',
							borderRadius: '1.2rem',
							boxShadow: '0 8px 32px 0 rgba(0,0,0,0.22)',
							padding: '2.2rem 2rem 1.7rem 2rem',
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							animation: 'modalPop 0.28s cubic-bezier(.4,0,.2,1)',
						}}
					>
						<button
							className={styles.pdfClose}
							onClick={() => setSelected(null)}
							aria-label="Close"
							style={{
								position: 'absolute',
								top: '2.1rem',
								right: '1.3rem',
								background: 'none',
								border: 'none',
								fontSize: '2.1rem',
								cursor: 'pointer',
								zIndex: 10,
								width: '2.5rem',
								height: '2.5rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							&times;
						</button>
						<h2
							className={styles.modalTitle}
							style={{
								fontSize: '1.5rem',
								fontWeight: 700,
								marginBottom: '0.7rem',
								textAlign: 'center',
							}}
						>
							{certifications[selected].title}
						</h2>
						<div
							style={{
								marginBottom: '0.7rem',
								color: '#bdbdbd',
								fontWeight: 500,
								textAlign: 'center',
							}}
						>
							{certifications[selected].date}
						</div>
						<img
							src={certifications[selected].image}
							alt={certifications[selected].title}
							style={{
								width: '100%',
								maxHeight: '38vh',
								objectFit: 'contain',
								borderRadius: '0.7rem',
								background: '#23232b',
								boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
								marginBottom: '0.7rem',
							}}
						/>
						{certifications[selected].desc && (
							<div
								style={{
									color: '#e5e5e5',
									fontSize: '1.08rem',
									marginBottom: '1.1rem',
									textAlign: 'center',
								}}
							>
								{certifications[selected].desc}
							</div>
						)}
						<div
							className={styles.modalActions}
							style={{
								display: 'flex',
								gap: '1.1rem',
								marginTop: '1.2rem',
							}}
						>
							{certifications[selected].pdf && (
								<a
									href={certifications[selected].pdf}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.pdfBtn}
									style={{
										background: '#c62828',
										color: '#fff',
										border: 'none',
										borderRadius: '0.7rem',
										padding: '0.7rem 1.5rem',
										fontSize: '1.08rem',
										fontWeight: 600,
										textDecoration: 'none',
										boxShadow: '0 2px 8px 0 rgba(198,40,40,0.13)',
										transition: 'background 0.18s, color 0.18s',
									}}
								>
									View PDF
								</a>
							)}
							{certifications[selected].link && (
								<a
									href={certifications[selected].link}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.credentialBtn}
									style={{
										background: 'linear-gradient(90deg, #fff 0%, #e3e3e3 100%)',
										color: '#0072c6',
										border: 'none',
										borderRadius: '0.7rem',
										padding: '0.7rem 1.5rem',
										fontSize: '1.08rem',
										fontWeight: 600,
										textDecoration: 'none',
										boxShadow: '0 2px 8px 0 rgba(0,114,198,0.13)',
										transition: 'background 0.18s, color 0.18s',
									}}
								>
									Credential
								</a>
							)}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
