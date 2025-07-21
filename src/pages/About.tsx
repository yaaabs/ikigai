import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaLaravel, FaPython, FaJava, FaGit, FaReact, FaNodeJs,
  FaCuttlefish, FaSwift, FaAndroid, FaMicrosoft, FaSearch, FaRocket, FaCogs
} from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiTypescript, SiVite, SiNextdotjs, SiXcode } from 'react-icons/si';

function About() {
  return (
    <div style={{ color: '#fff', paddingBottom: '2rem' }}>
      <h2>About</h2>
      <p>
        I'm a passionate developer who loves building web applications and learning new technologies.
        <br />
        Here are some of the technologies and tools I've worked with:
      </p>

      {/* Web Development */}
      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 0 }}>Web Development</h3>
        <div style={{ color: '#aaa', marginBottom: '1.2rem', fontSize: '1rem' }}>
          A collection of frontend, backend, and optimization tools I've worked with during internships and real-world web development projects.
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2.5rem 2.5rem', alignItems: 'center', marginBottom: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <FaHtml5 size={48} color="#e44d26" title="HTML5" />
            <div>HTML5</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaCss3Alt size={48} color="#1572b6" title="CSS3" />
            <div>CSS3</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaBootstrap size={48} color="#7952b3" title="Bootstrap" />
            <div>Bootstrap</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaJs size={48} color="#f7df1e" title="JavaScript" />
            <div>JavaScript</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaLaravel size={48} color="#ff2d20" title="Laravel" />
            <div>Laravel</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiCodeigniter size={48} color="#ee4623" title="CodeIgniter" />
            <div>CodeIgniter</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaSearch size={48} color="#4caf50" title="SEO" />
            <div>SEO</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaRocket size={48} color="#00bcd4" title="PWA/PageSpeed" />
            <div>PWA/PSI</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiMysql size={48} color="#00758f" title="MySQL" />
            <div>MySQL</div>
          </div>
        </div>
      </div>

      {/* Automation / Document Composition */}
      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 0 }}>Automation / Document Composition</h3>
        <div style={{ color: '#aaa', marginBottom: '1.2rem', fontSize: '1rem' }}>
          Tools I’ve used during my internship as an Exhibit Developer.
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2.5rem 2.5rem', alignItems: 'center', marginBottom: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <FaCogs size={48} color="#00bcd4" title="Quadient Inspire Designer" />
            <div>Quadient Inspire Designer</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaCogs size={48} color="#888" title="Quadient Inspire Scaler" />
            <div>Quadient Inspire Scaler</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaMicrosoft size={48} color="#0078d4" title="Microsoft SQL Server" />
            <div>Microsoft SQL Server
Management Studio</div>
          </div>
        </div>
      </div>

      {/* Other Languages / Tools */}
      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 0 }}>Other Languages / Tools</h3>
        <div style={{ color: '#aaa', marginBottom: '1.2rem', fontSize: '1rem' }}>
          Technologies I've explored through academic projects and coursework during my college journey.
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2.5rem 2.5rem', alignItems: 'center', marginBottom: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <FaPython size={48} color="#3776ab" title="Python" />
            <div>Python</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaCuttlefish size={48} color="#00599c" title="C++" />
            <div>C++</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaJava size={48} color="#007396" title="Java" />
            <div>Java</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaSwift size={48} color="#fa7343" title="Swift" />
            <div>Swift</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaGit size={48} color="#f05032" title="Git" />
            <div>Git</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiXcode size={48} color="#1575f9" title="Xcode" />
            <div>Xcode</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaAndroid size={48} color="#3ddc84" title="Android Studio" />
            <div>Android Studio</div>
          </div>
        </div>
      </div>

      {/* Trying to Learn */}
      <div style={{ marginTop: '2.5rem' }}>
        <h3 style={{ fontWeight: 700, marginBottom: 0 }}>Trying to Learn Right Now</h3>
        <div style={{ color: '#aaa', marginBottom: '1.2rem', fontSize: '1rem' }}>
          Modern web frameworks and tools I'm currently exploring.
        </div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '2.5rem 2.5rem', alignItems: 'center', marginBottom: '2rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <FaReact size={48} color="#61dafb" title="React" />
            <div>React</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiTypescript size={48} color="#3178c6" title="TypeScript" />
            <div>TypeScript</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiVite size={48} color="#646cff" title="Vite" />
            <div>Vite</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaNodeJs size={48} color="#3c873a" title="Node.js" />
            <div>Node.js</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiNextdotjs size={48} color="#fff" title="Next.js" />
            <div>Next.js</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
