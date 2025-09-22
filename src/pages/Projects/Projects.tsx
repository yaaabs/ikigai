import { useState, useRef, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt, FaInfoCircle, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap, FaPhp, FaPython } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiSupabase, SiLaravel, SiKotlin, SiCodeigniter, SiJquery, SiFlask } from 'react-icons/si';
import { SiVercel, SiRender, SiRailway } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import Marquee from 'react-fast-marquee';
// Map tech names to icon components

const techIconMeta: Record<string, { icon: React.ReactElement, color: string, url?: string }> = {
    'JavaScript': { icon: <FaJs title="JavaScript" />, color: '#f7df1e', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
    'HTML5': { icon: <FaHtml5 title="HTML5" />, color: '#e44d26', url: 'https://developer.mozilla.org/docs/Web/HTML' },
    'CSS': { icon: <FaCss3Alt title="CSS" />, color: '#1572b6', url: 'https://developer.mozilla.org/docs/Web/CSS' },
    'Express.js': { icon: <SiExpress title="Express.js" />, color: '#444', url: 'https://expressjs.com/' },
    'PostgreSQL': { icon: <SiPostgresql title="PostgreSQL" />, color: '#336791', url: 'https://www.postgresql.org/' },
    'Node.js': { icon: <FaNodeJs title="Node.js" />, color: '#3c873a', url: 'https://nodejs.org/' },
    'Supabase': { icon: <SiSupabase title="Supabase" />, color: '#3ecf8e', url: 'https://supabase.com/' },
    'Laravel': { icon: <SiLaravel title="Laravel" />, color: '#ff2d20', url: 'https://laravel.com/' },
    'Kotlin': { icon: <SiKotlin title="Kotlin" />, color: '#7f52ff', url: 'https://kotlinlang.org/' },
    'Bootstrap': { icon: <FaBootstrap title="Bootstrap" />, color: '#7952b3', url: 'https://getbootstrap.com/' },
    'CodeIgniter': { icon: <SiCodeigniter title="CodeIgniter" />, color: '#ee4623', url: 'https://codeigniter.com/' },
    'PHP': { icon: <FaPhp title="PHP" />, color: '#777bb4', url: 'https://www.php.net/' },
    'MySQL': { icon: <SiMysql title="MySQL" />, color: '#00758f', url: 'https://www.mysql.com/' },
    'jQuery': { icon: <SiJquery title="jQuery" />, color: '#0769ad', url: 'https://jquery.com/' },
    'Python': { icon: <FaPython title="Python" />, color: '#3776ab', url: 'https://www.python.org/' },
    'Flask': { icon: <SiFlask title="Flask" />, color: '#000', url: 'https://flask.palletsprojects.com/' },
    'Vercel': { icon: <SiVercel title="Vercel" />, color: '#fff', url: 'https://vercel.com/' },
    'Render': { icon: <SiRender title="Render" />, color: '#0099e5', url: 'https://render.com/' },
    'Railway': { icon: <SiRailway title="Railway" />, color: '#fff', url: 'https://railway.app/' },
};
import styles from './Projects.module.css';

import customodoro2 from '../../assets/customodoro2.png';
import classic from '../../assets/classic.png';
import reverse from '../../assets/reverse.png';
import customodoro1 from '../../assets/customodoro1.png';
import customodoro4 from '../../assets/customodoro4.jpg';

import transitease from '../../assets/transitease.png';
import transitease1 from '../../assets/transitease1.jpg';
import transitease2 from '../../assets/transitease2.jpg';
import transitease3 from '../../assets/transitease3.jpg';

import assoc from '../../assets/assoc.jpg';
import assocPng from '../../assets/assoc.png';
import assoc2 from '../../assets/assoc2.png';
import assoc1 from '../../assets/assoc1.png';

import fitcpr from '../../assets/fitcpr.png';
import fitcpr2 from '../../assets/fitcpr2.png';
import fitcpr1 from '../../assets/fitcpr1.png';

import wakeywakey1 from '../../assets/wakeywakey1.png';
import wakeywakey from '../../assets/wakeywakey.png';
import wakeywakey2 from '../../assets/wakeywakey2.png';

import ukiyo from '../../assets/ukiyo.png';
import ukiyo1 from '../../assets/ukiyo1.png';
import ukiyo2 from '../../assets/ukiyo2.png';

// Import the new images for the marquee
import customodoroLogo from '../../assets/customodoro.png';
import ukiyoLogo from '../../assets/ukiyo-logo.png';
import wakeyLogo from '../../assets/wakey2x-logo.png';
import loverLogo from '../../assets/lover-logo.png';
import assocLogo from '../../assets/assoc.png';
import transiteaseLogo from '../../assets/transitease-logo.png';
import feutechLogo from '../../assets/feutech-logo.png';
import drinkLogo from '../../assets/drink-logo.png';
import yabutechLogo from '../../assets/yabutech.png';

const projects = [
	{
		title: 'Customodoro Timer',
		desc: 'The ultimate customizable Pomodoro timer for productive work | Co-Founder & Lead Developer',
		tech: [
			'JavaScript',
			'HTML5',
			'CSS',
			'Express.js',
			'PostgreSQL',
			'PWA',
			'Node.js',
			'Supabase',
			'Vercel',
			'Render',
		],
		image: customodoro2,
		images: [classic, reverse, customodoro1, customodoro4],
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
			'Customodoro is a powerful and fully customizable Pomodoro timer designed to help students, professionals, and creatives stay focused and productive. Featuring classic and reverse Pomodoro modes, immersive audio, beautiful themes, task tracking, and smart automation — all in one sleek, distraction-free app.',
	},
	{
		title: 'TransitEase',
		desc: 'An Online Ticket Management System with Mobile Application using NFC for LRT-1 | Researcher & Full-Stack Web Developer',
		tech: [
			'Laravel',
			'PHP',
			'Kotlin',
			'JavaScript',
			'HTML5',
			'CSS',
			'Bootstrap',
			'NFC',
			'Capstone Project',
			'Railway',


		],
		image: transitease,
		images: [transitease1, transitease2, transitease3],
		github: 'https://github.com/yaaabs/transitease',
		demo: 'https://transitease.up.railway.app/',
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
			'TransitEase is our capstone project — a web and mobile application for online ticketing, monitoring, and management system. It was designed to innovate the commuting experience for users and optimize business operations for LRT-1. TransitEase integrates NFC payment to help lessen crowd congestion.',
	},
	{
		title: 'Associates Portal - HRIS',
		desc: 'HRIS for FEU Tech, FEU Alabang, and FEU Diliman | Junior Systems Developer',
		tech: [
			'CodeIgniter',
			'Navicat for MySQL',
			'PHP',
			'MySQL', 
			'JavaScript',
			'HTML5',
			'CSS',
			'jQuery',
			'AJAX',
			'Bootstrap',
		],
		image: assoc,
		images: [assocPng, assoc2, assoc1],
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
			"The FEU Alabang, FEU Diliman, and FEU Institute of Technology Associates’ Portal is a web-based application that enables associates to create profiles and manage their work information, including attendance, overtime, leave, official business, and work schedules.<br><br>As a Junior Systems Developer, my role focused on Profile Management, implementing key features, etc. <br>",
	},
		{
				title: 'FEU Tech Capstone Project Repository',
				desc: 'Academic Showcase Platform | Full-Stack Web Developer',
				tech: [
						'PHP',
						'JavaScript',
						'HTML5',
						'CSS',
						'Bootstrap',
						'MySQL',
				],
		image: fitcpr,
		images: [fitcpr2, fitcpr1],
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
			'CSS',
			'PWA',
			'Web APIs',
			'Vercel'

		],
		image: wakeywakey1,
		images: [wakeywakey, wakeywakey1, wakeywakey2],
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
		{
		title: 'Ukiyo QR',
        desc: 'Lightweight QR generator for everyone | Full-Stack Web Developer',
        tech: [
            'Python',
            'Flask',
            'JavaScript',
            'HTML5',
            'CSS',
            'PWA',
            'QRCode Generation',
			'Vercel',

        ],
		image: ukiyo,
		images: [ukiyo, ukiyo1, ukiyo2],
		github: 'https://github.com/yaaabs/ukiyo',
		demo: 'https://ukiyo-qr.onrender.com/',
		tags: [
			'Python',
			'JavaScript'
		],
		fullDesc:
			`Inspired by the Japanese concept of "ukiyo" (浮世) - meaning "floating world" or "living in the moment" - our tool embodies the philosophy of finding beauty in transient connections. Just as Hokusai's "The Great Wave off Kanagawa" captures a moment of natural power and beauty, QR codes create momentary bridges between the physical and digital worlds.`
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
			const node = modalRef.current;
			if (node && !node.contains(e.target as Node)) {
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

function useImgModal(
	open: boolean,
	imgModal: { projectIdx: number; imgIdx: number } | null,
	setImgModal: React.Dispatch<React.SetStateAction<{ projectIdx: number; imgIdx: number } | null>>,
	imagesLength: number
) {
	const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!open) return;
        let touchStartX: number | null = null;
        let touchEndX: number | null = null;
        function handleKey(e: KeyboardEvent) {
			if (e.key === 'Escape') setImgModal(null);
			if (e.key === 'ArrowLeft' && imgModal) {
				setImgModal(modal => ({
					projectIdx: modal ? modal.projectIdx : 0,
					imgIdx: modal ? (modal.imgIdx - 1 + imagesLength) % imagesLength : 0
				}));
			}
			if (e.key === 'ArrowRight' && imgModal) {
				setImgModal(modal => ({
					projectIdx: modal ? modal.projectIdx : 0,
					imgIdx: modal ? (modal.imgIdx + 1) % imagesLength : 0
				}));
			}
		}
		function handleClick(e: MouseEvent) {
			const node = modalRef.current;
			if (node && !node.contains(e.target as Node)) {
				setImgModal(null);
			}
		}
		function handleTouchStart(e: TouchEvent) {
            touchStartX = e.touches[0].clientX;
        }
        function handleTouchEnd(e: TouchEvent) {
            touchEndX = e.changedTouches[0].clientX;
            if (touchStartX !== null && touchEndX !== null && imgModal) {
                const diff = touchStartX - touchEndX;
                if (Math.abs(diff) > 50) { // threshold for swipe
                    if (diff > 0) {
                        // Swipe left (next image)
                        setImgModal(modal => ({
                            projectIdx: modal ? modal.projectIdx : 0,
                            imgIdx: modal ? (modal.imgIdx + 1) % imagesLength : 0
                        }));
                    } else {
                        // Swipe right (prev image)
                        setImgModal(modal => ({
                            projectIdx: modal ? modal.projectIdx : 0,
                            imgIdx: modal ? (modal.imgIdx - 1 + imagesLength) % imagesLength : 0
                        }));
                    }
                }
            }
            touchStartX = null;
            touchEndX = null;
        }
		document.addEventListener('keydown', handleKey);
		document.addEventListener('mousedown', handleClick);
		const node = modalRef.current;
		if (node) {
			node.addEventListener('touchstart', handleTouchStart);
			node.addEventListener('touchend', handleTouchEnd);
		}
		return () => {
			document.removeEventListener('keydown', handleKey);
			document.removeEventListener('mousedown', handleClick);
			if (node) {
				node.removeEventListener('touchstart', handleTouchStart);
				node.removeEventListener('touchend', handleTouchEnd);
			}
		};
    }, [open, imgModal, setImgModal, imagesLength]);
    return modalRef;
}

export default function Projects() {
	const [selected, setSelected] = useState<number | null>(null);
	const [filter, setFilter] = useState<string>('All');
	const [imgModal, setImgModal] = useState<{projectIdx: number, imgIdx: number} | null>(null);
	const majorTags = ['JavaScript', 'PWA', 'Python', 'Laravel', 'Kotlin', 'CodeIgniter'];

	const filteredProjects =
		filter === 'All'
			? projects
			: projects.filter(p => p.tags?.includes(filter));

	const modalRef = useModal(selected !== null, () => setSelected(null));
	const imgModalRef = useImgModal(
		imgModal !== null,
		imgModal,
		setImgModal,
		imgModal !== null ? filteredProjects[imgModal.projectIdx].images.length : 0
	);
	
	// Remove the custom handler and use simple function
	const handleCardClick = (idx: number) => {
		setSelected(idx);
	};

	return (
		<div className={styles.projectsPage}>
			<h2 className={styles.heading}>Projects</h2>
			<p className={styles.subheading}>
				A collection of real-world and personal projects I've developed during my
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
					if (tag === 'Python') tagClass += ' ' + styles.filterPython;
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
						onClick={() => handleCardClick(idx)}
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
							{/* Award badge for TransitEase */}
							{project.title === 'TransitEase' && (
								<div className={styles.awardBadge}>
									<span className={styles.awardIcon}>🏆</span>
									<span className={styles.awardText}>Award Winner</span>
								</div>
							)}
							<div className={styles.overlay}>
								<button className={styles.viewMoreRed}>View More</button>
							</div>
						</div>
						<div className={styles.cardContent}>
							<h3 className={styles.cardTitle}>{project.title}</h3>
							<p className={styles.cardDesc}>
								{project.title === 'Customodoro Timer'
									? <>
										The ultimate customizable Pomodoro timer for productive work | <strong>Co-Founder &amp; Lead Developer</strong>
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
									: project.title === 'Ukiyo QR'
        							? <>
            							Lightweight QR generator for everyone | <strong>Full-Stack Web Developer</strong>
       								</>
									: project.desc
									
								}
							</p>
							<div className={styles.techList} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.3rem' }}>
								{(() => {
									const techsWithIcons = project.tech.filter(t => techIconMeta[t]);
									return (
										<>
											{techsWithIcons.map(t => {
												const meta = techIconMeta[t];
												return meta.url ? (
													<a
														key={t}
														href={meta.url}
														target="_blank"
														rel="noopener noreferrer"
														className={styles.tech}
														title={t}
														style={{
															background: '#18181f',
															borderRadius: '0.6rem',
															padding: '0.35rem 0.6rem',
															boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
															display: 'inline-flex',
															alignItems: 'center',
															justifyContent: 'center',
															fontSize: '1.45rem',
															color: meta.color,
															transition: 'transform 0.18s, box-shadow 0.18s',
															cursor: 'pointer',
														}}
														tabIndex={0}
														aria-label={t}
														onMouseOver={e => {
															e.currentTarget.style.transform = 'scale(1.18)';
															e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
														}}
														onMouseOut={e => {
															e.currentTarget.style.transform = 'scale(1)';
															e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.13)';
														}}
													>
														{meta.icon}
													</a>
												) : (
													<span
														key={t}
														className={styles.tech}
														title={t}
														style={{
															background: '#18181f',
															borderRadius: '0.6rem',
															padding: '0.35rem 0.6rem',
															boxShadow: '0 2px 8px rgba(0,0,0,0.13)',
															display: 'inline-flex',
															alignItems: 'center',
															justifyContent: 'center',
															fontSize: '1.45rem',
															color: meta.color,
															transition: 'transform 0.18s, box-shadow 0.18s',
															cursor: 'pointer',
														}}
														tabIndex={0}
														aria-label={t}
														onMouseOver={e => {
															e.currentTarget.style.transform = 'scale(1.18)';
															e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
														}}
														onMouseOut={e => {
															e.currentTarget.style.transform = 'scale(1)';
															e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.13)';
														}}
													>
														{meta.icon}
													</span>
												);
											})}
										</>
									);
								})()}
							</div>
						</div>
					</div>
				))}
			</div>
			
			{/* Technology Showcase Marquee - Fixed width implementation */}
			<div className={styles.marqueeSection}>
        <div className={styles.marqueeInner}>
          <h3 className={styles.marqueeHeading}>Projects I've Brought to Life</h3>
          <p className={styles.marqueeSubheading}>
            Hover over the showcase below to pause and explore
          </p>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeContainer}>
            <Marquee
              pauseOnHover={true}
              speed={40}
              gradientWidth={100}
              gradient={true}
              gradientColor="#000"
              className={styles.marqueeContent}
            >
              <div className={styles.marqueeItemContainer}>
                {/* Customodoro Timer */}
                <div className={styles.marqueeItem}>
                  <img src={customodoroLogo} alt="Customodoro Timer" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>Customodoro Timer</h4>
                    <p>The ultimate customizable Pomodoro timer</p>
                  </div>
                </div>
                {/* Ukiyo QR */}
                <div className={styles.marqueeItem}>
                  <img src={ukiyoLogo} alt="Ukiyo QR" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>Ukiyo QR</h4>
                    <p>Lightweight QR generator for everyone</p>
                  </div>
                </div>
                {/* Wakey Wakey */}
                <div className={styles.marqueeItem}>
                  <img src={wakeyLogo} alt="Wakey Wakey" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>Wakey Wakey</h4>
                    <p>Wakey wakey, wakey wakey! It's time for scoo!</p>
                  </div>
                </div>
                {/* Lover App */}
                <div className={styles.marqueeItem}>
                  <img src={loverLogo} alt="Lover App" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>Lover App</h4>
                    <p>Tinder, but it's only your lover</p>
                  </div>
                </div>
                {/* Associates Portal - HRIS */}
                <div className={styles.marqueeItem}>
                  <img src={assocLogo} alt="Associates Portal - HRIS" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>Associates Portal - HRIS</h4>
                    <p>HRIS for FEU Tech, FEU Alabang, and FEU Diliman</p>
                  </div>
                </div>
                {/* TransitEase */}
                <div className={styles.marqueeItem}>
                  <img src={transiteaseLogo} alt="TransitEase" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>TransitEase</h4>
                    <p>Web & Mobile Application using NFC for LRT - 1</p>
                  </div>
                </div>
                {/* FEU Tech Capstone Project Repository */}
                <div className={styles.marqueeItem}>
                  <img src={feutechLogo} alt="FEU Tech Capstone Project Repository" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>FEU Tech Capstone Project Repository</h4>
                    <p>Unofficial Academic Showcase Platform for FEU Tech</p>
                  </div>
                </div>
                {/* Drink PH - Not Official */}
                <div className={styles.marqueeItem}>
                  <img src={drinkLogo} alt="Drink PH" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>Drink PH - Not Official</h4>
                    <p>Client Communication Portal Demo for Interview</p>
                  </div>
                </div>
                {/* YabuTech */}
                <div className={styles.marqueeItem}>
                  <img src={yabutechLogo} alt="YabuTech" className={styles.marqueeLogo} />
                  <div className={styles.marqueeItemText}>
                    <h4>YabuTech</h4>
                    <p>Learning never stops</p>
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
			
			{/* Project Modal - Fix position and z-index */}
			{selected !== null && (
				<div 
          className={styles.modalBackdrop}
          onClick={(e) => {
            // Close modal when clicking the backdrop (but not the modal itself)
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
					<div
						className={styles.modal}
						ref={modalRef}
						role="dialog"
						aria-modal="true"
						tabIndex={-1}
						onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling up
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
											'Full-Stack Web Developer',
											'<strong>Full-Stack Web Developer</strong>'
										)
									: filteredProjects[selected].title === 'Wakey Wakey'
										? filteredProjects[selected].fullDesc.replace(
											'Developer & Designer',
											'<strong>Developer &amp; Designer</strong>'
										)
									: filteredProjects[selected].title === 'Ukiyo QR'
            							? filteredProjects[selected].fullDesc.replace(
                							'Full-Stack Web Developer',
                							'<strong>Full-Stack Web Developer</strong>'
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
						{/* Award information for TransitEase */}
						{filteredProjects[selected].title === 'TransitEase' && (
							<div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1.1rem 0 0.7rem 0', color: '#ffd700', fontSize: '1.08rem' }}>
								<div>
									<div style={{ fontWeight: '600', marginBottom: '0.2rem' }}>🏆 Award-Winning Project</div>
									<div style={{ fontSize: '0.95rem', opacity: '0.9' }}>
										• Best Web Application Capstone Project<br />
										• Most Innovative Capstone Project
									</div>
								</div>
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
				<div 
          className={styles.modalBackdrop} 
          style={{ zIndex: 1050 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setImgModal(null);
          }}
        >
					<div
						ref={imgModalRef}
						style={{
							background: '#222',
							padding: '1.5rem',
							borderRadius: '1rem',
							maxWidth: '90vw',
							maxHeight: '85vh', /* Smaller to prevent overflow */
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
						onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling up
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