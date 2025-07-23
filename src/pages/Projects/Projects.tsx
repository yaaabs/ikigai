import { useState, useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
	{
		title: 'Customodoro Timer',
		desc: 'SEO-Optimized Progressive Web App (PWA) | Co-Founder & Lead Developer',
		tech: [
			'JavaScript',
			'HTML5',
			'CSS3',
			'Semantic HTML',
			'PWA',
			'SEO',
			'PageSpeed Insights',
		],
		image: '/src/assets/customodoro2.png',
		images: ['/src/assets/classic.png', '/src/assets/reverse.png', '/src/assets/customodoro1.png', '/src/assets/customodoro4.jpg'],
		github: 'https://github.com/yaaabs/customodoro',
		demo: 'https://customodoro.vercel.app',
		tags: [
			'JavaScript',
			'PWA',
			'SEO',
			'Web Development',
			'PageSpeed Insights',
		],
		fullDesc:
			'Customodoro is a powerful and fully customizable Pomodoro timer designed to help students, professionals, and creatives stay focused and productive. Featuring classic and reverse Pomodoro modes, immersive audio, beautiful themes, task tracking, and smart automation — all in one sleek, distraction-free app. Built with Vanilla JavaScript, Semantic HTML, CSS3, and optimized for SEO and PWA best practices. PageSpeed Insights aware.',
	},
	{
		title: 'TransitEase',
		desc: 'An Online Ticket Management System with Mobile Application using NFC for LRT-1 | Researcher & Full-Stack Web Developer',
		tech: [
			'Laravel',
			'Kotlin',
			'HTML5',
			'Bootstrap',
			'JavaScript',
			'CSS',
			'Web Application Development',
			'Responsive Web Design',
			'NFC',
		],
		image: '/src/assets/transitease.png',
		images: ['/src/assets/transitease1.jpg', '/src/assets/transitease2.jpg', '/src/assets/transitease3.jpg'],
		github: 'https://github.com/yaaabs/transitease',
		demo: 'https://transitease.tech',
		tags: [
			'Laravel',
			'Kotlin',
			'HTML5',
			'Bootstrap',
			'JavaScript',
			'CSS',
			'Web Development',
			'NFC',
		],
		fullDesc:
			'TransitEase is our capstone thesis project — a web and mobile application for online ticketing, monitoring, and management system. It was designed to innovate the commuting experience for users and optimize business operations for LRT-1. TransitEase integrates NFC payment to help lessen crowd congestion. The added feature of the system also incorporates monitoring the crowd status in the station.',
	},
	{
		title: 'Associates Portal - HRIS',
		desc: 'HRIS for FEU Tech, FEU Alabang, and FEU Diliman | Junior Systems Developer',
		tech: [
			'CodeIgniter',
			'Navicat for MySQL',
			'PHP',
			'MySQL',
			'Database Triggers',
			'JavaScript',
			'jQuery',
			'AJAX',
			'Bootstrap',
			'HTML',
			'CSS',
		],
		image: '/src/assets/assoc.jpg',
		images: ['/src/assets/assoc.png', '/src/assets/assoc2.png', '/src/assets/assoc1.png'],
		github: '', 
		demo: '', 
		tags: [
			'CodeIgniter',
			'Navicat for MySQL',
			'PHP',
			'MySQL',
			'Bootstrap',
			'JavaScript',
		],
		fullDesc:
			"The FEU Alabang, FEU Diliman, and FEU Institute of Technology Associates’ Portal is a web-based application that enables associates to create profiles and manage their work information, including attendance, overtime, leave, official business, and work schedules.<br><br>As a Junior Systems Developer, I was part of the development team responsible for creating and improving the Associates Portal - Human Resources Information System (HRIS) used across FEU Tech, FEU Alabang, and FEU Diliman. <br>",
	},
	{
		title: 'FEU Tech Capstone Project Repository',
		desc: 'Academic Showcase Platform | Full-Stack Developer',
		tech: [
			'PHP',
      'Web Development',
      'Responsive Web Design',
			'HTML5',
			'JavaScript',
			'Bootstrap',
      'CSS',
		],
		image: '/src/assets/fitcpr.png',
		images: ['/src/assets/fitcpr2.png', '/src/assets/fitcpr1.png'],
		github: '', 
		demo: '', 
		tags: [
			'PHP',
			'HTML5',
			'JavaScript',
			'Bootstrap',
			'Web Development',
		],
		fullDesc:
			'The FEU Tech Capstone Project Repository is a dynamic platform that highlights the innovative and impactful projects of students and faculty from the Far Eastern University - Institute of Technology. It serves as a showcase of technical expertise, research excellence, and problem-solving skills, reflecting the institution\'s commitment to academic excellence and real-world transformation.',
	},
	{
		title: 'Wakey Wakey',
		desc: 'Keep your computer awake | Developer & Designer',
		tech: [
			'JavaScript',
			'HTML5',
			'CSS3',
			'PWA'
		],
		image: '/src/assets/wakeywakey1.png',
		images: ['/src/assets/wakeywakey.png', '/src/assets/wakeywakey1.png', '/src/assets/wakeywakey2.png'],
		github: 'https://github.com/yaaabs/wakey-wakey',
		demo: 'https://wakey2x.vercel.app/',
		tags: [
			'JavaScript',
			'PWA'
		],
		fullDesc:
			`<br><strong>What is Wakey Wakey?</strong><br>
		Wakey Wakey keeps your computer awake without needing to install software or change settings.<br><br>
		<strong>Why I Built This?</strong><br>
		As an intern on the graveyard shift, my work laptop would sleep every 5 minutes — and I couldn’t change the settings. I built this so I could eat lunch, grab a snack, or take a break without constant interruptions.<br>`
	},
	
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

export default function Projects() {
	const [selected, setSelected] = useState<number | null>(null);
	const [filter, setFilter] = useState<string>('All');
	const [imgModal, setImgModal] = useState<{projectIdx: number, imgIdx: number} | null>(null); // image modal state
	const modalRef = useModal(selected !== null, () => setSelected(null));
	const imgModalRef = useModal(imgModal !== null, () => setImgModal(null));
	const majorTags = ['Laravel', 'JavaScript', 'PWA', 'Kotlin', 'CodeIgniter'];

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter(p => p.tags?.includes(filter));

	return (
		<div className={styles.projectsPage}>
			<h2 className={styles.heading}>Projects</h2>
			<p className={styles.subheading}>
				A collection of real-world and personal projects I’ve developed during my
				internship, 4th year in college, and in my own time—each solving
				practical problems through thoughtful design and code.
			</p>
			<div className={styles.filters}>
				<button
					className={
						styles.filterAll +
						(filter === 'All' ? ' ' + styles.activeFilter : '')
					}
					onClick={() => setFilter('All')}
				>
					All
				</button>
				{majorTags.map(tag => {
					let tagClass = styles.filterBtnRed;
					if (tag === 'Laravel') tagClass += ' ' + styles.filterLaravel;
					if (tag === 'JavaScript') tagClass += ' ' + styles.filterJavaScript;
					if (tag === 'PWA') tagClass += ' ' + styles.filterPWA;
					if (tag === 'Kotlin') tagClass += ' ' + styles.filterKotlin;
					if (tag === 'CodeIgniter') tagClass += ' ' + styles.filterCodeIgniter;
					return (
						<button
							key={tag}
							className={
								tagClass +
								(filter === tag ? ' ' + styles.activeFilter : '')
							}
							onClick={() => setFilter(tag)}
						>
							{tag}
						</button>
					);
				})}
			</div>
			<div className={styles.grid}>
				{filteredProjects.map((project, idx) => (
					<div
						key={project.title}
						className={styles.card}
						tabIndex={0}
						onClick={() => setSelected(idx)}
						onKeyDown={e => {
							if (e.key === 'Enter') setSelected(idx);
						}}
					>
						<div className={styles.thumbWrap}>
							<img
								src={project.image}
								alt={project.title}
								className={styles.thumb}
							/>
							<div className={styles.overlay}>
								<button className={styles.viewMoreRed}>View More</button>
							</div>
						</div>
						<div className={styles.cardContent}>
							<h3 className={styles.cardTitle}>{project.title}</h3>
							<p className={styles.cardDesc}>
								{project.title === 'Customodoro Timer'
									? <>
										SEO-Optimized Progressive Web App (PWA) | <strong>Co-Founder &amp; Lead Developer</strong>
									</>
									: project.title === 'TransitEase'
									? <>
										An Online Ticket Management System with Mobile Application using NFC for LRT-1 | <strong>Researcher &amp; Full-Stack Web Developer</strong>
									</>
									: project.title === 'Associates Portal - HRIS'
									? <>
										HRIS for FEU Tech, FEU Alabang, and FEU Diliman | <strong>Junior Systems Developer</strong>
									</>
									: project.title === 'FEU Tech Capstone Project Repository'
									? <>
										Academic Showcase Platform | <strong>Full-Stack Web Developer</strong>
									</>
									: project.title === 'Wakey Wakey'
									? <>
										Keep your computer awake | <strong>Developer &amp; Designer</strong>
									</>
									: project.desc
								}
							</p>
							<div className={styles.techList}>
								{project.tech.map(t => (
									<span key={t} className={styles.tech}>
										{t}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			{selected !== null && (
				<div className={styles.modalBackdrop}>
					<div
						className={styles.modal}
						ref={modalRef}
						role="dialog"
						aria-modal="true"
						tabIndex={-1}
					>
						<button
							className={styles.closeBtn}
							onClick={() => setSelected(null)}
							aria-label="Close"
						>
							&times;
						</button>
						<h2 className={styles.modalTitle}>
							{filteredProjects[selected].title}
						</h2>
						<p
							className={styles.modalDesc}
							dangerouslySetInnerHTML={{
								__html:
									filteredProjects[selected].title === 'Customodoro Timer'
										? filteredProjects[selected].fullDesc.replace(
											'Co-Founder & Lead Developer',
											'<strong>Co-Founder &amp; Lead Developer</strong>'
										)
									: filteredProjects[selected].title === 'TransitEase'
										? filteredProjects[selected].fullDesc.replace(
											'Researcher & Full-Stack Web Developer',
											'<strong>Researcher &amp; Full-Stack Web Developer</strong>'
										)
									: filteredProjects[selected].title === 'Associates Portal - HRIS'
										? filteredProjects[selected].fullDesc.replace(
											'Junior Systems Developer',
											'<strong>Junior Systems Developer</strong>'
										)
									: filteredProjects[selected].title === 'FEU Tech Capstone Project Repository'
										? filteredProjects[selected].fullDesc.replace(
											'Full-Stack Developer',
											'<strong>Full-Stack Developer</strong>'
										)
									: filteredProjects[selected].title === 'Wakey Wakey'
										? filteredProjects[selected].fullDesc.replace(
											'Developer & Designer',
											'<strong>Developer &amp; Designer</strong>'
										)
									: filteredProjects[selected].fullDesc
							}}
						/>
						{filteredProjects[selected].title === 'FEU Tech Capstone Project Repository' && (
							<div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1.1rem 0 0.7rem 0', color: '#ffb74d', fontSize: '1.08rem' }}>
								<FaInfoCircle style={{ fontSize: '1.2em', verticalAlign: 'middle' }} />
								<span>
									Please note that this is not the official website of the school but a final project created for the course IT0129 IT Elective - System Integration & Architecture 2.
								</span>
							</div>
						)}
						<div style={{ height: '1.2rem' }} /> {/* Safe vertical space, similar to <br> but for spacing */}
						<div className={styles.modalTechList}>
							{filteredProjects[selected].tech.map(t => (
								<span key={t} className={styles.tech}>
									{t}
								</span>
							))}
						</div>
						<div style={{ height: '1.2rem' }} /> {/* Spacer between tech stack and screenshots */}
						{filteredProjects[selected].images &&
							filteredProjects[selected].images.length > 0 && (
								<div className={styles.slider}>
									{filteredProjects[selected].images.map((img, i) => (
										<img
											key={img}
											src={img}
											alt={`${filteredProjects[selected].title} screenshot ${i + 1}`}
											className={styles.sliderImg}
											style={{ cursor: 'pointer' }}
											onClick={() => setImgModal({projectIdx: selected, imgIdx: i})}
										/>
									))}
								</div>
							)}
						<div style={{ height: '1.2rem' }} /> {/* Spacer before buttons */}
						<div className={styles.modalActions}>
							{filteredProjects[selected].github ? (
								<a
									href={filteredProjects[selected].github}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.actionBtnRed + ' ' + styles.githubBtn}
								>
									<span className={styles.githubIcon}><FaGithub /></span>
									GitHub
								</a>
							) : (
								<span className={styles.actionBtnGray + ' ' + styles.githubBtn} tabIndex={-1} aria-disabled="true">
									<span className={styles.githubIcon}><FaGithub /></span>
									GitHub
								</span>
							)}
							{/* LinkedIn button only for Customodoro Timer */}
							{filteredProjects[selected].title === 'Customodoro Timer' && (
								<a
									href="https://www.linkedin.com/company/customodoro/"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.actionBtnLinkedin + ' ' + styles.linkedinBtn}
								>
									<span className={styles.linkedinIcon}><FaLinkedin /></span>
									LinkedIn
								</a>
							)}
							{filteredProjects[selected].demo ? (
								<a
									href={filteredProjects[selected].demo}
									target="_blank"
									rel="noopener noreferrer"
									className={styles.actionBtnRed + ' ' + styles.demoBtn}
								>
									<span className={styles.demoIcon}><FaExternalLinkAlt /></span>
									Live Demo
								</a>
							) : (
								<span className={styles.actionBtnGray + ' ' + styles.demoBtn} tabIndex={-1} aria-disabled="true">
									<span className={styles.demoIcon}><FaExternalLinkAlt /></span>
									Live Demo
								</span>
							)}
						</div>
					</div>
				</div>
			)}
			{/* Image Modal */}
			{imgModal !== null && (
				<div className={styles.modalBackdrop} style={{ zIndex: 9999 }}>
					<div
						ref={imgModalRef}
						style={{
							background: '#222',
							padding: '1.5rem',
							borderRadius: '1rem',
							maxWidth: '90vw',
							maxHeight: '90vh',
							margin: 'auto',
							position: 'relative',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							boxShadow: '0 2px 24px rgba(0,0,0,0.7)'
						}}
						role="dialog"
						aria-modal="true"
						tabIndex={-1}
					>
					<button
    					className={styles.imgModalCloseBtn}
    					onClick={() => setImgModal(null)}
    					aria-label="Close"
                    >
    					&times;
					</button>
						{/* FB-style Previous Button */}
						{filteredProjects[imgModal.projectIdx].images.length > 1 && (
							<button
								onClick={() =>
									setImgModal(modal => ({
										projectIdx: modal!.projectIdx,
										imgIdx:
											(modal!.imgIdx - 1 + filteredProjects[modal!.projectIdx].images.length) %
											filteredProjects[modal!.projectIdx].images.length
									}))
								}
								style={{
									position: 'absolute',
									left: 18,
									top: '50%',
									transform: 'translateY(-50%)',
									background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
									border: 'none',
									width: '40px',
									height: '40px',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
									cursor: 'pointer',
									transition: 'background 0.2s, box-shadow 0.2s',
									zIndex: 2,
									outline: 'none',
									padding: 0
								}}
								onMouseOver={e => {
									e.currentTarget.style.background = 'linear-gradient(135deg, #232526 0%, #666 100%)';
									e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.35)';
								}}
								onMouseOut={e => {
									e.currentTarget.style.background = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
									e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
								}}
								aria-label="Previous image"
							>
								<span style={{
									color: '#fff',
									fontSize: '1.8rem',
									fontWeight: 700,
									lineHeight: '35px',
									width: '40px',
									height: '40px',
									textAlign: 'center',
									display: 'inline-block',
									userSelect: 'none',
									fontFamily: 'inherit',
									verticalAlign: 'middle'
								}}>&lt;</span>
							</button>
						)}
						<img
							src={filteredProjects[imgModal.projectIdx].images[imgModal.imgIdx]}
							alt={`${filteredProjects[imgModal.projectIdx].title} screenshot ${imgModal.imgIdx + 1}`}
							style={{
								maxWidth: '80vw',
								maxHeight: '70vh',
								borderRadius: '0.7rem',
								boxShadow: '0 2px 16px rgba(0,0,0,0.5)'
							}}
						/>
						{/* FB-style Next Button */}
						{filteredProjects[imgModal.projectIdx].images.length > 1 && (
							<button
								onClick={() =>
									setImgModal(modal => ({
										projectIdx: modal!.projectIdx,
										imgIdx:
											(modal!.imgIdx + 1) % filteredProjects[modal!.projectIdx].images.length
									}))
								}
								style={{
									position: 'absolute',
									right: 18,
									top: '50%',
									transform: 'translateY(-50%)',
									background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
									border: 'none',
									width: '40px',
									height: '40px',
									borderRadius: '50%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
									cursor: 'pointer',
									transition: 'background 0.2s, box-shadow 0.2s',
									zIndex: 2,
									outline: 'none',
									padding: 0
								}}
								onMouseOver={e => {
									e.currentTarget.style.background = 'linear-gradient(135deg, #232526 0%, #666 100%)';
									e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.35)';
								}}
								onMouseOut={e => {
									e.currentTarget.style.background = 'linear-gradient(135deg, #232526 0%, #414345 100%)';
									e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
								}}
								aria-label="Next image"
							>
								<span style={{
									color: '#fff',
									fontSize: '1.8rem',
									fontWeight: 700,
									lineHeight: '35px',
									width: '40px',
									height: '40px',
									textAlign: 'center',
									display: 'inline-block',
									userSelect: 'none',
									fontFamily: 'inherit',
									verticalAlign: 'middle'
								}}>&gt;</span>
							</button>
						)}
						<div style={{ color: '#fff', marginTop: '0.7rem', fontSize: '1rem' }}>
							{filteredProjects[imgModal.projectIdx].title} — Preview {imgModal.imgIdx + 1} / {filteredProjects[imgModal.projectIdx].images.length}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}