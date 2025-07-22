import { useState, useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
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
		image: '/src/assets/customodoro1.jpg',
		images: ['/src/assets/customodoro2.jpg', '/src/assets/customodoro3.jpg'],
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
		image: '/src/assets/customodoro1.jpg',
		images: ['/src/assets/customodoro2.jpg', '/src/assets/customodoro3.jpg'],
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
			'TransitEase is a web and mobile application for online ticketing, monitoring, and management system. It was designed to innovate the commuting experience for users and optimize business operations for LRT-1. TransitEase integrates NFC payment to help lessen crowd congestion. The added feature of the system also incorporates monitoring the crowd status in the station. Capstone thesis project.',
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
		image: '/src/assets/customodoro1.jpg',
		images: ['/src/assets/customodoro2.jpg', '/src/assets/customodoro3.jpg'],
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
		image: '/src/assets/customodoro1.jpg',
		images: ['/src/assets/customodoro2.jpg', '/src/assets/customodoro3.jpg'],
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
		image: '/src/assets/customodoro1.jpg',
		images: ['/src/assets/customodoro2.jpg', '/src/assets/customodoro3.jpg'],
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
	const modalRef = useModal(selected !== null, () => setSelected(null));
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
							{projects[selected].title}
						</h2>
						<p
							className={styles.modalDesc}
							dangerouslySetInnerHTML={{
								__html:
									selected !== null && projects[selected].title === 'Customodoro Timer'
										? projects[selected].fullDesc.replace(
											'Co-Founder & Lead Developer',
											'<strong>Co-Founder &amp; Lead Developer</strong>'
										)
									: selected !== null && projects[selected].title === 'TransitEase'
										? projects[selected].fullDesc.replace(
											'Researcher & Full-Stack Web Developer',
											'<strong>Researcher &amp; Full-Stack Web Developer</strong>'
										)
									: selected !== null && projects[selected].title === 'Associates Portal - HRIS'
										? projects[selected].fullDesc.replace(
											'Junior Systems Developer',
											'<strong>Junior Systems Developer</strong>'
										)
									: selected !== null && projects[selected].title === 'FEU Tech Capstone Project Repository'
										? projects[selected].fullDesc.replace(
											'Full-Stack Developer',
											'<strong>Full-Stack Developer</strong>'
										)
									: selected !== null && projects[selected].title === 'Wakey Wakey'
										? projects[selected].fullDesc.replace(
											'Developer & Designer',
											'<strong>Developer &amp; Designer</strong>'
										)
									: selected !== null && projects[selected].fullDesc
							}}
						/>
						{selected !== null && projects[selected].title === 'FEU Tech Capstone Project Repository' && (
							<div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1.1rem 0 0.7rem 0', color: '#ffb74d', fontSize: '1.08rem' }}>
								<FaInfoCircle style={{ fontSize: '1.2em', verticalAlign: 'middle' }} />
								<span>
									Please note that this is not the official website of the school but a final project created for the course IT0129 IT Elective - System Integration & Architecture 2.
								</span>
							</div>
						)}
						<div style={{ height: '1.2rem' }} /> {/* Safe vertical space, similar to <br> but for spacing */}
						<div className={styles.modalTechList}>
							{projects[selected].tech.map(t => (
								<span key={t} className={styles.tech}>
									{t}
								</span>
							))}
						</div>
						<div style={{ height: '1.2rem' }} /> {/* Spacer between tech stack and screenshots */}
						{projects[selected].images &&
							projects[selected].images.length > 0 && (
								<div className={styles.slider}>
									{projects[selected].images.map((img, i) => (
										<img
											key={img}
											src={img}
											alt={`${
												projects[selected].title
											} screenshot ${i + 1}`}
											className={styles.sliderImg}
										/>
									))}
								</div>
							)}
						<div style={{ height: '1.2rem' }} /> {/* Spacer before buttons */}
						<div className={styles.modalActions}>
							{projects[selected].github ? (
								<a
									href={projects[selected].github}
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
							{projects[selected].demo ? (
								<a
									href={projects[selected].demo}
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
		</div>
	);
}
