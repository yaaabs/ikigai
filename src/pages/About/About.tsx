import { useRef, useEffect, useState } from 'react';
import styles from './About.module.css';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaLaravel, FaSearch, FaPython, FaJava, FaSwift, FaGit, FaAndroid
} from 'react-icons/fa';
import { 
  SiCodeigniter, SiPwa, SiMysql, SiXcode, SiTypescript, SiVite, SiNextdotjs, SiReact, SiNodedotjs,
  SiKotlin
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
      { name: 'SEO', icon: <TbSeo />, accent: '#3cb371' },
      { name: 'PWA', icon: <SiPwa />, accent: '#5a0fc8' },
      { name: 'PSI', icon: <FaSearch />, accent: '#00bcd4' },
      { name: 'MySQL', icon: <SiMysql />, accent: '#00758f' },
    ],
  },
  {
    title: 'Automation / Document Composition',
    desc: 'Tools I\'ve used during my internship as an Exhibit Developer.',
    tools: [
      { name: 'Quadient Inspire Designer', icon: <img src={inspireIcon} alt="Quadient Inspire Designer" style={{height: '2rem'}} />, accent: '#00bcd4' },
      { name: 'Quadient Inspire Scaler', icon: <img src={scalerIcon} alt="Quadient Inspire Scaler" style={{height: '2rem'}} />, accent: '#757575' },
      { name: 'Microsoft SQL Server Management Studio', icon: <img src={msqlIcon} alt="Microsoft SQL Server Management Studio" style={{height: '2rem'}} />, accent: '#0078d4' },
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
    ],
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <div className={styles.aboutPage}>
      <section className={`${styles.section} ${visible ? styles.visible : ''}`} ref={ref}>
        <h1 className={styles.heading}>About</h1>
        <p className={styles.bio}>
          I'm a passionate developer who loves building web applications and learning new technologies.
          Here are some of the technologies and tools I've worked with:
        </p>
        {categories.map(({ title, desc, tools }) => (
          <div key={title} className={styles.category}>
            <h2 className={styles.categoryTitle}>{title}</h2>
            {desc && <p className={styles.categoryDesc}>{desc}</p>}
            <div className={styles.grid}>
              {tools.map(({ name, icon, accent }) => (
                <div
                  key={name}
                  className={styles.toolCard}
                  tabIndex={0}
                  style={{ '--accent': accent } as React.CSSProperties}
                  title={name}
                >
                  <span className={styles.icon}>{icon}</span>
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
