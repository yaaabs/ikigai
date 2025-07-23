import { useRef, useEffect, useState } from 'react';
import styles from './About.module.css';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaLaravel, FaSearch, FaPython, FaJava, FaSwift, FaGit, FaAndroid, FaGithub
} from 'react-icons/fa';
import { 
  SiCodeigniter, SiPwa, SiMysql, SiXcode, SiTypescript, SiVite, SiNextdotjs, SiReact, SiNodedotjs,
  SiKotlin, SiFigma, SiAdobephotoshop, SiVercel, SiSupabase, SiFirebase, SiNotion, SiMongodb
} from 'react-icons/si';
import { TbSeo } from 'react-icons/tb';
import notepadppIcon from '../../assets/notepad++.png';
import wordIcon from '../../assets/msword.svg';
import excelIcon from '../../assets/msexcel.svg';
import pptIcon from '../../assets/msppt.svg';
import inspireIcon from '../../assets/inspire.png';
import scalerIcon from '../../assets/scaler.png';
import msqlIcon from '../../assets/msql.svg';
import canvaIcon from '../../assets/canva.png'; 
import navicatIcon from '../../assets/navicat.png'; 

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
      { name: 'SEO', icon: <TbSeo />, accent: '#3cb371' },
      { name: 'PWA', icon: <SiPwa />, accent: '#5a0fc8' },
      { name: 'PSI', icon: <FaSearch />, accent: '#00bcd4' },
      { name: 'MySQL', icon: <SiMysql />, accent: '#00758f' },
      { name: 'Navicat for MySQL', icon: <img src={navicatIcon} alt="Navicat for MySQL" style={{height: '2rem'}} />, accent: '#4fa463' }, 
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
      { name: 'Figma', icon: <SiFigma />, accent: '#a259ff' },
      { name: 'Adobe Photoshop', icon: <SiAdobephotoshop />, accent: '#31a8ff' },
      { name: 'Canva', icon: <img src={canvaIcon} alt="Canva" style={{height: '2rem'}} />, accent: '#00c4cc' }, 
      { name: 'Notion', icon: <SiNotion />, accent: '#fff' },
      { name: 'Xcode', icon: <SiXcode />, accent: '#1575f9' },
      { name: 'Android Studio', icon: <FaAndroid />, accent: '#3ddc84' },
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
      { name: 'Next.js', icon: <SiNextdotjs />, accent: '#fff' },
      { name: 'Supabase', icon: <SiSupabase />, accent: '#3ecf8e' },
      { name: 'Firebase', icon: <SiFirebase />, accent: '#ffca28' },
      { name: 'MongoDB', icon: <SiMongodb />, accent: '#47A248' }, // Added MongoDB
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
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.7rem',
          marginBottom: '1.7rem'
        }}>
          {modeOptions.map(opt => (
            <button
              key={opt.key}
              type="button"
              onClick={() => setAnimMode(opt.key as any)}
              aria-pressed={animMode === opt.key}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '1.2rem',
                border: animMode === opt.key ? '2px solid #69f0ae' : '2px solid #23232b',
                background: animMode === opt.key ? '#23232b' : '#181820',
                color: animMode === opt.key ? '#fff' : '#bdbdbd',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                outline: animMode === opt.key ? '2px solid #69f0ae' : 'none',
                transition: 'all 0.18s'
              }}
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
      </section>
    </div>
  );
}
