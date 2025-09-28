import { useRef, useEffect, useState } from 'react';
import styles from './About.module.css';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaLaravel, FaSearch, FaPython, FaJava, FaSwift, FaGit, FaAndroid, FaGithub, FaDatabase, FaBold
} from 'react-icons/fa';
import { 
  SiCodeigniter, SiPwa, SiPhp, SiMysql, SiXcode, SiTypescript, SiVite, SiNextdotjs, SiReact, SiNodedotjs,
  SiKotlin, SiFigma, SiAdobephotoshop, SiVercel, SiRender, SiRailway, SiHostinger, SiSupabase, SiFirebase, SiNotion, SiMongodb, SiExpress,
  SiWordpress, SiElementor, SiCanva, SiVirtualbox
} from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';
import notepadppIcon from '../../assets/notepad++.png';
import wordIcon from '../../assets/msword.svg';
import excelIcon from '../../assets/msexcel.svg';
import pptIcon from '../../assets/msppt.svg';
import inspireIcon from '../../assets/inspire.png';
import scalerIcon from '../../assets/scaler.png';
import msqlIcon from '../../assets/msql.svg';


const categories = [
  {
    title: 'Web Development',
    desc: 'A collection of frontend, backend, and optimization tools I\'ve worked with during internships and real-world web development projects.',
    tools: [
      { name: 'HTML5', icon: <FaHtml5 />, accent: '#e44d26' },
      { name: 'CSS3', icon: <FaCss3Alt />, accent: '#1572b6' },
      { name: 'Bootstrap', icon: <FaBootstrap />, accent: '#7952b3' },
      { name: 'JavaScript', icon: <FaJs />, accent: '#f7df1e' },
      { name: 'Laravel', icon: <FaLaravel />, accent: '#ff2d20' },
      { name: 'CodeIgniter', icon: <SiCodeigniter />, accent: '#ee4623' },
      { name: 'PHP', icon: <SiPhp />, accent: '#777bb3' },
      { name: 'SEO', icon: <TbSeo />, accent: '#3cb371' },
      { name: 'PWA', icon: <SiPwa />, accent: '#5a0fc8' },
      { name: 'PSI', icon: <FaSearch />, accent: '#00bcd4' },
      { name: 'MySQL', icon: <SiMysql />, accent: '#00758f' },
      { name: 'Navicat for MySQL', icon: <FaDatabase />, accent: '#4fa463' }, 
    ],
  },
  {
    title: 'Automation / Document Composition',
    desc: 'Tools I\'ve used during my internship as an Exhibit Developer.',
    tools: [
      { name: 'Inspire Designer', icon: <img src={inspireIcon} alt="Quadient Inspire Designer" style={{height: '2rem'}} />, accent: '#00bcd4' },
      { name: 'Inspire Scaler', icon: <img src={scalerIcon} alt="Quadient Inspire Scaler" style={{height: '2rem'}} />, accent: '#757575' },
      { name: 'SQL Server (SSMS)', icon: <img src={msqlIcon} alt="Microsoft SQL Server Management Studio" style={{height: '2rem'}} />, accent: '#0078d4' },
      { name: 'Notepad++', icon: <img src={notepadppIcon} alt="Notepad++" style={{height: '2rem'}} />, accent: '#8ec641' },
      { name: 'Microsoft Word', icon: <img src={wordIcon} alt="Microsoft Word" style={{height: '2rem'}} />, accent: '#2b579a' },
      { name: 'Microsoft Excel', icon: <img src={excelIcon} alt="Microsoft Excel" style={{height: '2rem'}} />, accent: '#217346' },
      { name: 'Microsoft PowerPoint', icon: <img src={pptIcon} alt="Microsoft PowerPoint" style={{height: '2rem'}} />, accent: '#d24726' },
    ],
  },
  {
    title: 'Other Languages / Tools',
    desc: 'Technologies I\'ve explored through academic projects and coursework during my college journey.',
    tools: [
      { name: 'Python', icon: <FaPython />, accent: '#3776ab' },
      { name: 'C++', icon: <span style={{fontSize: '2rem'}}>C++</span>, accent: '#00599c' },
      { name: 'Java', icon: <FaJava />, accent: '#007396' },
      { name: 'Kotlin', icon: <SiKotlin style={{fontSize: '2rem'}} />, accent: '#7f52ff' },
      { name: 'Swift', icon: <FaSwift />, accent: '#fa7343' },
      { name: 'Git', icon: <FaGit />, accent: '#f05032' },
      { name: 'GitHub', icon: <FaGithub />, accent: '#fff' },
      { name: 'Vercel', icon: <SiVercel />, accent: '#fff' },
      { name: 'Render', icon: <SiRender />, accent: '#0099e5' },
      { name: 'Railway', icon: <SiRailway />, accent: '#000' },
      { name: 'Hostinger', icon: <SiHostinger />, accent: '#FF6A00' },
      { name: 'Figma', icon: <SiFigma />, accent: '#a259ff' },
      { name: 'Adobe Photoshop', icon: <SiAdobephotoshop />, accent: '#31a8ff' },
      { name: 'Canva', icon: <SiCanva />, accent: '#00c4cc' },
      { name: 'Notion', icon: <SiNotion />, accent: '#fff' },
      { name: 'Xcode', icon: <SiXcode />, accent: '#1575f9' },
      { name: 'Android Studio', icon: <FaAndroid />, accent: '#3ddc84' },
      { name: 'Oracle VM VirtualBox', icon: <SiVirtualbox />, accent: '#183A61' },
    ],
  },
  {
    title: 'Trying to Learn Right Now',
    desc: 'Technologies and frameworks I’m currently exploring to expand my skills and keep up with modern web development.',
    tools: [
      { name: 'React', icon: <SiReact />, accent: '#61dafb' },
      { name: 'TypeScript', icon: <SiTypescript />, accent: '#3178c6' },
      { name: 'Vite', icon: <SiVite />, accent: '#646cff' },
      { name: 'Node.js', icon: <SiNodedotjs />, accent: '#3c873a' },
      { name: 'Express.js', icon: <SiExpress />, accent: '#fff' },
      { name: 'Next.js', icon: <SiNextdotjs />, accent: '#fff' },
      { name: 'Supabase', icon: <SiSupabase />, accent: '#3ecf8e' },
      { name: 'Firebase', icon: <SiFirebase />, accent: '#ffca28' },
      { name: 'MongoDB', icon: <SiMongodb />, accent: '#47A248' },
      { name: 'WordPress', icon: <SiWordpress />, accent: '#21759b' },
      { name: 'Bricks Builder', icon: <FaBold />, accent: '#FF6A00' },
      { name: 'Elementor', icon: <SiElementor />, accent: '#673ab7' }, 
    ],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animMode, setAnimMode] = useState<'none' | 'breathing' | 'wave'>('breathing');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const modeOptions = [
    { key: 'none', label: '🚫 No Animation' },
    { key: 'breathing', label: '🌬️ Breathing' },
    { key: 'wave', label: '🌊 Great Wave' }
  ];

  return (
    <div className={styles.aboutPage}>
      <section className={`${styles.section} ${visible ? styles.visible : ''}`} ref={ref}>
        <h1 className={styles.heading}>About</h1>
        <p className={styles.bio}>
          I'm a passionate developer who loves building web applications and learning new technologies.
          Here are some of the technologies and tools I've worked with:
        </p>
        {/* Mode Switcher Button/Segmented Control - placed above Web Development */}
        <div className={styles.modeSwitcher}>
          {modeOptions.map(opt => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setAnimMode(opt.key as 'none' | 'breathing' | 'wave')}
              aria-pressed={animMode === opt.key}
              className={styles.modeButton}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {/* Technologies and Tools categories */}
        {categories.map(({ title, desc, tools }) => (
          <div key={title} className={styles.category}>
            <h2 className={styles.categoryTitle}>{title}</h2>
            {desc && <p className={styles.categoryDesc}>{desc}</p>}
            <div
              className={
                styles.grid +
                ' ' +
                (animMode === 'none'
                  ? styles.noAnimMode
                  : animMode === 'wave'
                  ? styles.waveMode
                  : styles.breathingMode)
              }
            >
              {tools.map(({ name, icon, accent }, idx) => (
                <div
                  key={name}
                  className={styles.toolCard}
                  tabIndex={0}
                  style={{ '--accent': accent } as React.CSSProperties}
                  title={name}
                >
                  <span
                    className={styles.icon}
                    style={
                      animMode === 'wave'
                        ? { animationDelay: `${idx * 0.18}s` }
                        : undefined
                    }
                  >
                    {icon}
                  </span>
                  <span className={styles.tooltip}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
  {/* Timeline (scoped styles, visually similar to daisyUI timeline) */}
  <h2 className={styles.timelineHeading}>Experience</h2>
  <div className={styles.timelineWrapper} aria-label="timeline of milestones">
          <ul className={styles.timeline}>
            <li>
              <div className={styles.timelineMiddle} />
              <div className={styles.timelineStart}>
                <time className={styles.time}>Aug 2021</time>
                <div className={styles.eventTitle}>Bachelor of Science in Information and Technology</div>
                <p className={styles.eventText}>Studied at <strong><em>FEU Institute of Technology, specializing in Web and Mobile Application Development,</em></strong> with hands-on projects focused on creating responsive and user-friendly applications.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineMiddle} />
              <div className={styles.timelineEnd}>
                <time className={styles.time}>Jan 2025</time>
                <div className={styles.eventTitle}>Junior Systems Developer</div>
                <p className={styles.eventText}>Worked as a Junior Systems Developer at <strong><em>FEU Institute of Technology – Information Technology Services Office (ITSO)</em></strong> during Internship, contributing to the development of the Associates Portal x HRIS.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineMiddle} />
              <div className={styles.timelineStart}>
                <time className={styles.time}>April 2025</time>
                <div className={styles.eventTitle}>Exhibit Developer</div>
                <p className={styles.eventText}>Interned at <strong><em>Convey Health Solutions</em></strong>, where I created and maintained exhibits (automated letters) using Quadient Products. Contributed to workflow automation, built an Imaging File Mover, and assisted in QA testing to improve efficiency and accuracy of document processes.</p>
              </div>
            </li>
            <li>
              <div className={styles.timelineMiddle} />
              <div className={styles.timelineEnd}>
                <time className={styles.time}>May 2025</time>
                <div className={styles.eventTitle}>Customodoro Developer</div>
                <p className={styles.eventText}>Co-founded and led the development of <strong><em>Customodoro Timer</em></strong>, a fully customizable Pomodoro timer web app designed to help users improve focus, time management, and daily productivity.</p>
              </div>
            </li>
            <li className={styles.present}>
              <div className={styles.timelineMiddle} />
              <div className={styles.timelineStart}>
                <time className={styles.time}>October 2025</time>
                <div className={styles.eventTitle}>Web Developer</div>
                <p className={styles.eventText}>🔒 Hire me to unlock this quest.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
