import PortfolioEffects from '../components/PortfolioEffects';

export default function Home() {
  return (
    <>
      <PortfolioEffects />

      <canvas id="bg-canvas"></canvas>
      <div className="aurora aurora-one"></div>
      <div className="aurora aurora-two"></div>
      <div className="aurora aurora-three"></div>
      <div className="color-comets" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="starfall" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="space-bodies" aria-hidden="true">
        <div className="black-hole"></div>
        <div className="wormhole"></div>
        <div className="earth">
          <span className="moon"></span>
        </div>
      </div>
      <div className="mesh-grid"></div>
      <div className="vignette"></div>

      <header className="navbar">
        <div className="logo">
          <span className="terminal-prompt">&gt;</span> J Likith Sagar<span className="cursor">_</span>
        </div>
        <button className="menu-toggle" id="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="nav-menu" aria-label="Primary navigation">
          <ul className="nav-links">
            <li><a href="#mission" className="nav-item">01 // MISSION</a></li>
            <li><a href="#projects" className="nav-item">02 // SYSTEMS</a></li>
            <li><a href="#skills" className="nav-item">03 // ARSENAL</a></li>
            <li><a href="#research" className="nav-item">04 // RESEARCH</a></li>
            <li><a href="#achievements" className="nav-item">05 // ACHIEVEMENTS</a></li>
            <li><a href="#contact" className="nav-item">06 // UPLINK</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="container hero-container">
            <div className="hero-content fade-in-up">
              <p className="mono-label">SYSTEM_STATUS: ONLINE</p>
              <h1 className="glitch-text" data-text="ENGINEERING AI SYSTEMS">
                ENGINEERING <br /> AI SYSTEMS
              </h1>
              <p className="hero-desc">
                Building production-ready AI systems, RAG pipelines, and machine learning systems that bridge
                research and real-world deployment.
              </p>
              <div className="hero-metrics" aria-label="Portfolio highlights">
                <span><strong>95%+</strong> accuracy</span>
                <span><strong>50K+</strong> files</span>
                <span><strong>AI/ML</strong> systems</span>
              </div>
              <div className="hero-actions">
                <a href="#projects" className="btn primary-btn">VIEW SYSTEMS</a>
                <a href="#mission" className="btn secondary-btn">READ PROFILE</a>
              </div>
            </div>
            <div className="hero-orb fade-in-up delay-2" aria-hidden="true">
              <div className="orb-core"></div>
              <div className="orb-ring ring-one"></div>
              <div className="orb-ring ring-two"></div>
              <div className="orb-chip chip-one">RAG</div>
              <div className="orb-chip chip-two">MLOps</div>
              <div className="orb-chip chip-three">Agents</div>
              <div className="orb-chip chip-four">LangGraph</div>
              <div className="orb-chip chip-five">FastAPI</div>
              <div className="orb-chip chip-six">Vector DB</div>
              <div className="orb-chip chip-seven">PyTorch</div>
              <div className="orb-chip chip-eight">AWS</div>
            </div>
          </div>
        </section>

        <section id="mission" className="section mission">
          <div className="container">
            <div className="section-header fade-in-up">
              <span className="section-num">01</span>
              <h2 className="section-title">THE PHILOSOPHY</h2>
            </div>

            <div className="grid-2-col">
              <div className="text-block fade-in-up">
                <p className="lead">
                  AI systems should be <span className="highlight">understandable</span>,
                  <span className="highlight"> reliable</span>, and
                  <span className="highlight"> designed for scale</span>.
                </p>
                <p>
                  My work focuses on engineering AI systems that remain controllable under uncertainty.
                  I design multi-agent architectures, retrieval-augmented pipelines, and machine learning
                  workflows that prioritize interpretability, performance, and operational stability.
                </p>
                <p>
                  Rather than treating models as isolated components, I approach AI as a system-level
                  discipline where data flow, orchestration, deployment, and monitoring are as critical
                  as model accuracy. The objective is consistent: build intelligent systems that can be
                  trusted in real-world environments.
                </p>
              </div>
              <div className="stat-block fade-in-up delay-1">
                <div className="stat-card">
                  <span className="stat-val">95%+</span>
                  <span className="stat-label">Model Accuracy</span>
                </div>
                <div className="stat-card">
                  <span className="stat-val">50K+</span>
                  <span className="stat-label">Files Processed</span>
                </div>
                <div className="stat-card">
                  <span className="stat-val">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-header fade-in-up">
              <span className="section-num">02</span>
              <h2 className="section-title">ACTIVE SYSTEMS</h2>
            </div>

            <div className="project-grid">
              <article className="project-card fade-in-up delay-1">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="mono-tag">MULTI-AGENT AI</span>
                    <h3>MindMate AI</h3>
                  </div>
                  <p>
                    AI-powered mental health assistant using multi-agent architecture with emotion detection
                    and CBT-based recommendations. Designed for privacy-first, low-latency interaction.
                  </p>
                  <ul className="tech-list">
                    <li>LangChain</li>
                    <li>LangGraph</li>
                    <li>FastAPI</li>
                  </ul>
                  <a href="https://github.com/Nithin218/MindMate-AI" className="link-arrow" target="_blank" rel="noopener noreferrer">ACCESS NODE</a>
                </div>
              </article>

              <article className="project-card fade-in-up delay-2">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="mono-tag">FINANCE AI</span>
                    <h3>FinPilot</h3>
                  </div>
                  <p>
                    Intelligent financial assistant delivering real-time stock, crypto, and mutual fund
                    insights with predictive analytics and personalized recommendations.
                  </p>
                  <ul className="tech-list">
                    <li>Python</li>
                    <li>LLMs</li>
                    <li>FastAPI</li>
                  </ul>
                  <a href="https://github.com/Likithsatya192/FinPilot" className="link-arrow" target="_blank" rel="noopener noreferrer">ACCESS NODE</a>
                </div>
              </article>

              <article className="project-card fade-in-up delay-3">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="mono-tag">HEALTH AI</span>
                    <h3>Health Diagnostics Agent</h3>
                  </div>
                  <p>
                    Multi-model AI agent system for medical diagnostics with risk analysis, parameter
                    interpretation, and RAG-based chatbot support.
                  </p>
                  <ul className="tech-list">
                    <li>ML</li>
                    <li>LangChain</li>
                    <li>Multi-Model Agents</li>
                  </ul>
                  <a href="https://github.com/Likithsatya192/Multi-Model-AI-Agent-for-Health-Diagnostics" className="link-arrow" target="_blank" rel="noopener noreferrer">ACCESS NODE</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="container">
            <div className="section-header fade-in-up">
              <span className="section-num">03</span>
              <h2 className="section-title">TECHNICAL ARSENAL</h2>
            </div>

            <div className="skills-wrapper fade-in-up">
              <div className="skill-category">
                <h4>[ AI / ML ]</h4>
                <ul>
                  <li>LangChain &amp; LangGraph</li>
                  <li>Transformers &amp; RAG</li>
                  <li>NLP &amp; Computer Vision</li>
                  <li>TensorFlow / PyTorch</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>[ ENGINEERING ]</h4>
                <ul>
                  <li>Python, SQL, Java</li>
                  <li>FastAPI</li>
                  <li>Docker &amp; Git</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>[ CLOUD / MLOPS ]</h4>
                <ul>
                  <li>AWS</li>
                  <li>GitHub Actions</li>
                  <li>MLflow</li>
                  <li>Vector Databases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section research">
          <div className="container">
            <div className="section-header fade-in-up">
              <span className="section-num">04</span>
              <h2 className="section-title">RESEARCH &amp; PUBLICATION</h2>
            </div>

            <div className="research-grid fade-in-up">
              <article className="research-card">
                <div className="research-header">
                  <span className="mono-tag">PUBLISHED</span>
                  <h3>Multi-Model AI Agent for Health Diagnostics</h3>
                </div>
                <p className="research-authors">
                  Jamparangi Likith Sagar, Carlos Antonio Cherindza, Tathapudi Vamsi, Dr. Bharati Bidikar
                </p>
                <p className="research-desc">
                  A LangGraph-orchestrated pipeline for medical report analysis with retrieval-augmented generation.
                  8-node DAG orchestrating modular AI agents for OCR ingestion, parameter extraction, clinical validation,
                  3-model interpretation, and RAG indexing with 95%+ accuracy across 500+ test reports.
                </p>
                <div className="research-meta">
                  <span><strong>Journal:</strong> International Journal for Research in Applied Science &amp; Engineering Technology (IJRASET)</span>
                  <span><strong>Published:</strong> April 2026 | Volume 14, Issue IV</span>
                  <span><strong>DOI:</strong> <a href="https://doi.org/10.22214/ijraset.2026.80986" target="_blank" rel="noopener noreferrer">10.22214/ijraset.2026.80986</a> | <strong>Impact Factor:</strong> 7.538</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="achievements" className="section achievements">
          <div className="container">
            <div className="section-header fade-in-up">
              <span className="section-num">05</span>
              <h2 className="section-title">ACHIEVEMENTS &amp; RECOGNITION</h2>
            </div>

            <div className="achievements-grid fade-in-up">
              <div className="achievement-card fade-in-up delay-1">
                <span className="achievement-badge">SILVER / 2nd PLACE</span>
                <h3>Smart India Internal Hackathon</h3>
                <p><strong>AUCE 2024</strong></p>
                <p className="achievement-desc">
                  Led a 6-member team to build an AI Media Verification System achieving 95.3% accuracy on deepfake detection,
                  outperforming 65+ competing teams.
                </p>
              </div>

              <div className="achievement-card fade-in-up delay-2">
                <span className="achievement-badge">BRONZE / 3RD PLACE</span>
                <h3>Ideathon</h3>
                <p><strong>AUCE 2025</strong></p>
                <p className="achievement-desc">
                  Developed a RAG-based financial intelligence chatbot using LLM-driven retrieval and financial reasoning,
                  outperforming 60+ teams and recognized for innovation in applied NLP.
                </p>
              </div>

              <div className="achievement-card fade-in-up delay-3">
                <span className="achievement-badge">300+ SOLVED</span>
                <h3>LeetCode Problem Solving</h3>
                <p><strong>Competitive Programming</strong></p>
                <p className="achievement-desc">
                  Solved 300+ Data Structures &amp; Algorithms problems across arrays, trees, graphs, dynamic programming,
                  and system design. Ongoing commitment to algorithmic excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="footer section">
          <div className="container footer-container fade-in-up">
            <h2 className="footer-cta">ESTABLISH UPLINK</h2>
            <p>Open to AI/ML roles, internships, and research collaboration.</p>
            <a href="mailto:likithsatya192@gmail.com" className="email-btn">
              likithsatya192@gmail.com
            </a>

            <div className="footer-links">
              <a href="https://github.com/Likithsatya192" target="_blank" rel="noopener noreferrer">GITHUB</a>
              <a href="https://www.linkedin.com/in/likith-sagar/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
              <a href="https://leetcode.com/u/likith_/" target="_blank" rel="noopener noreferrer">LEETCODE</a>
            </div>

            <div className="copyright">
              <p>SYSTEM TIMESTAMP: 2026. ALL SYSTEMS STABLE.</p>
              <p>&copy; Likith Sagar. Built in the dark.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
