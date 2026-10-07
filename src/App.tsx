import { useEffect, useRef, useState } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.bento-card, .project-card, .section-heading-wrapper');
    cards.forEach((card) => observer.observe(card));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <>
      <div className="bg-grid"></div>
      <div 
        className="cursor-glow" 
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>

      <div className="portfolio-container" ref={containerRef}>
        <section className="hero-section">
          <div className="glitch-wrapper">
            <h1 className="hero-title">Sivaperuman Elumalai</h1>
            <h2 className="hero-subtitle">Frontend Engineer/ MERN Stack Developer.</h2>
          </div>
          <div className="social-links" style={{flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <a href="https://github.com/Sivaperuman1999" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sivaperuman-e-506907211" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Sivaperuman_Resume.pdf" className="social-link" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </section>

        <section className="mui-grid-container">
          <div className="bento-card mui-col-xs-12">
            <h3 className="section-title">About Me</h3>
            <p className="summary-text">
              Frontend & MERN Stack Developer with 4+ Years of Experience architecting scalable web applications, responsive user interfaces, and modular backend APIs. Highly skilled in React.js, Next.js, TypeScript, Material UI (MUI), Zustand, Node.js, Express.js, and MongoDB. Experienced in containerizing applications with Docker, deploying resilient cloud workloads on AWS, and automating end-to-end CI/CD pipelines via GitHub Actions across Enterprise Management, Logistics, and Agritech domains. Immediately available to join.
            </p>
          </div>

          <div className="bento-card mui-col-xs-12">
            <h3 className="section-title">Tech Arsenal</h3>
            <div className="skills-container">
              <span className="skill-pill">React.js & Next.js</span>
              <span className="skill-pill">TypeScript</span>
              <span className="skill-pill">Node.js & Express</span>
              <span className="skill-pill">MongoDB & PostgreSQL</span>
              <span className="skill-pill">AWS (EC2, S3)</span>
              <span className="skill-pill">Docker & CI/CD</span>
              <span className="skill-pill">Zustand & Context API</span>
              <span className="skill-pill">Material UI , Bootstrap & PrimeReact</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">Storybook</span>
              <span className="skill-pill">WebSockets</span>
              <span className="skill-pill">Jest Testing</span>
              <span className="skill-pill">Zod & Formik</span>
              <span className="skill-pill">Nginx & Git</span>
            </div>
          </div>

          {/* Featured Enterprise Work */}
          <div className="section-heading-wrapper mui-col-xs-12">
            <h2>Featured Enterprise Work</h2>
            <p>Products engineered at Thinkinfinity Technology and Consulting.</p>
          </div>

          <div className="project-card mui-col-xs-12">
            <div className="project-visual" style={{ background: 'linear-gradient(135deg, #00f3ff, #7a00ff)' }}>
              <div className="visual-overlay">Logistics System</div>
            </div>
            <div className="project-content">
              <h3>Enterprise Inventory & Operations Management</h3>
              <p>Architected a modern, responsive frontend module for inventory tracking and operational workflows. Engineered multi-stage Docker containerization and automated CI/CD pipelines for zero-downtime AWS deployment.</p>
              <div className="project-tags">
                <span>React.js</span><span>TypeScript</span><span>Docker</span><span>AWS</span>
              </div>
            </div>
          </div>

          <div className="project-card mui-col-xs-12">
             <div className="project-visual" style={{ background: 'linear-gradient(135deg, #ff007a, #7a00ff)' }}>
              <div className="visual-overlay">Order Management</div>
            </div>
            <div className="project-content">
              <h3>Order & Warehouse Platform</h3>
              <p>Developed dynamic Next.js dashboards for purchase orders, shipments, and invoice processing. Implemented strict client-side validation using React Hook Form and Zod with JWT-based role access control.</p>
              <div className="project-tags">
                <span>Next.js</span><span>Zod</span><span>JWT</span><span>RBAC</span>
              </div>
            </div>
          </div>

          <div className="project-card mui-col-xs-12">
            <div className="project-visual" style={{ background: 'linear-gradient(135deg, #00ff88, #00f3ff)' }}>
              <div className="visual-overlay">Agritech Operations</div>
            </div>
            <div className="project-content">
              <h3>Global Workforce & Agri-Commerce</h3>
              <p>Built a central administrative command center dashboard to manage global partnerships and billing. Developed modular frontend architectures for tracking agri-inputs and ledgers with extensive Jest unit testing.</p>
              <div className="project-tags">
                <span>Zustand</span><span>Formik</span><span>Jest</span><span>MUI</span>
              </div>
            </div>
          </div>

          <div className="project-card mui-col-xs-12">
            <div className="project-visual" style={{ background: 'linear-gradient(135deg, #7a00ff, #ff007a)' }}>
              <div className="visual-overlay">Design System</div>
            </div>
            <div className="project-content">
              <h3>Enterprise UI Design System</h3>
              <p>Authored and maintained a shared Storybook component library, standardizing UI patterns and accelerating feature delivery across development teams. Constructed isolated component stories with PrimeReact and SCSS.</p>
              <div className="project-tags">
                <span>Storybook</span><span>PrimeReact</span><span>SCSS</span><span>UI Architecture</span>
              </div>
            </div>
          </div>

          {/* Independent Projects */}
          <div className="section-heading-wrapper mui-col-xs-12">
            <h2>Independent Projects</h2>
            <p>Full-stack applications and open APIs.</p>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{fontSize: '1.8rem'}}>Student Management System</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              A full-stack MERN CRUD platform tracking student records with dynamic data visualizations via MUI Data Grids. Features optimized RESTful endpoints for fast processing.
            </p>
            <div className="project-tags">
              <span>MERN</span><span>Express.js</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{fontSize: '1.8rem'}}>Real-Time Chat App</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              A highly responsive, bi-directional communication service using WebSockets for instant message exchange and reactive UI updates.
            </p>
             <div className="project-tags">
              <span>Socket.IO</span><span>Tailwind</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{fontSize: '1.8rem'}}>User Management API</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              A secure backend REST service featuring JWT authentication, role-based authorization, and automated OpenAPI documentation.
            </p>
             <div className="project-tags">
              <span>PostgreSQL</span><span>Swagger</span>
            </div>
          </div>

          <div className="bento-card mui-col-xs-12 mui-col-md-6" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h4 className="section-title" style={{fontSize: '1.8rem'}}>Corporate Business Solutions Website</h4>
            <p className="summary-text" style={{ flexGrow: 1, fontSize: '1.1rem' }}>
              Developed and maintained the official corporate website to showcase enterprise consulting services, career opportunities, and business solutions. Optimized site layouts for cross-device responsiveness, ensuring high accessibility, seamless navigation, and search visibility.
            </p>
             <div className="project-tags">
              <span>Frontend</span><span>UI/UX</span><span>Responsive</span>
            </div>
          </div>
          
          <div className="bento-card mui-col-xs-12">
            <h3 className="section-title">Details</h3>
            <div className="project-header" style={{flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
              <div className="project-title" style={{fontSize: '1.5rem'}}>Education</div>
              <div className="project-role" style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>B.E. in Computer Science and Engineering, DMI College of Engineering • 2018 - 2022</div>
            </div>
            
            <div className="project-header" style={{flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
              <div className="project-title" style={{fontSize: '1.5rem'}}>Languages</div>
              <div className="project-role" style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>English, Tamil</div>
            </div>

            <div className="project-header" style={{flexDirection: 'column', gap: '0.5rem'}}>
              <div className="project-title" style={{fontSize: '1.5rem'}}>Contact</div>
              <div className="project-role" style={{fontSize: '1rem', color: 'var(--text-secondary)'}}>sivaperuman744@gmail.com &nbsp;•&nbsp; +91 8072107491</div>
            </div>
          </div>
          
        </section>
      </div>
    </>
  );
}

export default App;
