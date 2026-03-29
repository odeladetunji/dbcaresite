type Feature = {
  icon: string;
  title: string;
  text: string;
};

type Step = {
  step: string;
  title: string;
  text: string;
};

type AppShot = {
  title: string;
  text: string;
  image: string;
};

type Faq = {
  q: string;
  a: string;
};

const features: Feature[] = [
  {
    icon: "⚕",
    title: "Dedicated care team",
    text:
      "Built around coordinated support from a clinician-led care team instead of disconnected appointments.",
  },
  {
    icon: "📈",
    title: "Biomarker-focused plans",
    text:
      "Programs are centered on measurable outcomes such as A1C, fasting glucose, and kidney-health indicators.",
  },
  {
    icon: "💬",
    title: "Continuous support",
    text:
      "Members stay engaged through guided tasks, check-ins, reminders, and follow-up actions in one place.",
  },
  {
    icon: "🛡",
    title: "Data Privacy",
    text:
      "Your health data are encrypted and not shared with a third party.",
  },
];

const howItWorks: Step[] = [
  {
    step: "01",
    title: "Complete intake",
    text:
      "Members share health goals, background information, and relevant readings so the platform can structure the right program.",
  },
  {
    step: "02",
    title: "Start a focused challenge",
    text:
      "Users can join a guided A1C, fasting blood sugar, or kidney-health challenge with a defined timeline and clear responsibilities.",
  },
  {
    step: "03",
    title: "Follow daily tasks",
    text:
      "The app turns each program into simple daily actions, scheduled check-ins, and measurable milestones.",
  },
  {
    step: "04",
    title: "Review progress with the team",
    text:
      "Progress snapshots and biomarker trends make it easier to support members and keep the experience grounded in outcomes.",
  },
];

const appShots: AppShot[] = [
  {
    title: "Structured health challenges",
    text:
      "Members can start focused challenges for A1C, fasting blood sugar, and kidney health with clear durations and guided next steps.",
    image: "/images/app-1.png",
  },
  {
    title: "Daily accountability dashboard",
    text:
      "A clean daily workflow shows tasks, progress, challenge completion, and simple account summaries without clutter.",
    image: "/images/app-2.png",
  },
  {
    title: "Care team and biomarker tracking",
    text:
      "Key readings like fasting sugar, A1C, and eGFR are surfaced alongside the assigned care team and appointment actions.",
    image: "/images/app-3.png",
  },
  {
    title: "Actionable task flows",
    text:
      "Members always know what to do next, when it is due, and what the outcome of completion will be.",
    image: "/images/app-4.png",
  },
];

const faqs: Faq[] = [
  {
    q: "What is DB Care Team?",
    a:
      "DB Care Team is a digital care platform designed to support diabetes and kidney-health management through guided challenges, monitoring, and coordinated care-team workflows.",
  },
  {
    q: "Who is it for?",
    a:
      "It is designed for people who need more structured support around A1C, fasting blood sugar, kidney-health markers, daily adherence, and long-term habit change.",
  },
  {
    q: "Does the platform replace a doctor?",
    a:
      "No. The platform is best positioned as an ongoing support and monitoring layer that complements clinical care rather than replacing it.",
  },
  {
    q: "How can someone get started?",
    a:
      "Users can book a consultation, contact the team directly, or begin with a guided onboarding process inside the app.",
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <div className="brand-mark">CT</div>
            <div>
              <div className="brand-title">DB Care Team</div>
              <div className="brand-subtitle">Diabetes and Kidney care management</div>
            </div>
          </a>

          <nav className="site-nav">
            <a href="#how-it-works">How it works</a>
            <a href="#platform">Platform</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            {/* <a className="button button-secondary desktop-only" href="#contact">
              Book a demo
            </a> */}
            <a className="button button-primary" href="#contact">
              Get started
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-gradient" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span>❤</span>
                <span>Diabetes and kidney support</span>
              </div>
              {/* <h1>A cleaner, more credible digital front door for diabetes care.</h1> */}
              <h1>An AI-powered digital care platform for better management of diabetes and kidney disease.</h1>
              {/* <h1>Daily check-ins that feel rewarding — and keep you accountable.</h1> */}
              <p className="lead">
              DB Care Team combines guided programs, real-time tracking, and coordinated care 
              support to help individuals take control of their health. By focusing on measurable
               outcomes like A1C, blood glucose, and kidney function, the platform turns complex
                care into clear, manageable daily actions.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Start your care plan
                </a>
                <a className="button button-secondary" href="#platform">
                  Explore the platform
                </a>
              </div>

              <div className="mini-grid">
                <div className="mini-card">
                  <h3>3-month programs</h3>
                  <p>Focused challenges for A1C, fasting glucose, and kidney health.</p>
                </div>
                <div className="mini-card">
                  <h3>Care-team workflow</h3>
                  <p>Tasks, check-ins, and appointments organized in one system.</p>
                </div>
                <div className="mini-card">
                  <h3>AI analysis</h3>
                  <p>AI care assisstant every step of the way. work with you as a care assistant</p>
                </div>
              </div>
            </div>

            <div className="preview-wrap">
              <div className="preview-card">
                <div className="preview-head">
                  {/* <div className="preview-kicker">Platform preview</div> */}
                  {/* <h3>Healthy challenges dashboard</h3> */}
                </div>
                <img
                  src="/images/app-2.png"
                  alt="CareTeam-D dashboard preview"
                  className="preview-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <div className="section-intro">
              {/* <div className="section-label">Why this version works better</div> */}
              <h2>Structured care, designed for better health outcomes.</h2>
            </div>

            <div className="feature-grid">
              {features.map((feature) => (
                <article className="card" key={feature.title}>
                  <div className="card-body">
                    <div className="icon-badge">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container split-grid">
            <div>
              <div className="section-label">How it works</div>
              <h2>Simple steps, structured care, and consistent progress.</h2>
              <p className="lead split-copy">
              DB Care Team is built around a simple, structured care journey that 
              users can follow every day. From starting a focused health challenge to 
              completing guided daily tasks and tracking progress over time, the platform 
              makes it easier to stay consistent and accountable without feeling overwhelmed.
              </p>
              <div className="notice-card">
              Consistency—not complexity—is what drives better health outcomes. 
              DB Care Team is designed to make that consistency easier to maintain 
              through clear guidance, daily actions, and ongoing support.
              </div>
            </div>

            <div className="steps-grid">
              {howItWorks.map((item) => (
                <article className="card" key={item.step}>
                  <div className="card-body">
                    <div className="step-number">Step {item.step}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="section platform-section">
          <div className="container">
            <div className="section-intro">
              <div className="section-label">Platform experience</div>
              <h2>the mobile App</h2>
              <p className="lead">
              DB Care Team is a digital care platform designed to support individuals 
              managing diabetes and kidney disease through structured programs, 
              real-time tracking, and continuous support. By combining guided challenges,
              daily tasks, and care-team coordination, the app helps turn complex 
              treatment plans into clear, consistent actions that lead to better health outcomes.
              </p>
            </div>

            <div className="shots-grid">
              {appShots.map((shot) => (
                <article className="card shot-card" key={shot.title}>
                  <div className="shot-layout">
                    <div className="shot-media">
                      <img src={shot.image} alt={shot.title} />
                    </div>
                    <div className="shot-copy">
                      <h3>{shot.title}</h3>
                      <p>{shot.text}</p>
                      <span className="arrow-link">Designed for clarity →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <article className="card dark-card">
              <div className="card-body large-pad">
                <div className="section-label dark-label">Core offer</div>
                <h2>One connected care experience instead of scattered care touchpoints.</h2>

                <div className="bullet-grid">
                  {[
                    "Guided A1C and glucose management programs",
                    "Kidney-health and eGFR support journeys",
                    "Task-based daily accountability and reminders",
                    "Appointment and care-team coordination",
                    "Progress snapshots tied to measurable readings",
                    "A cleaner information architecture for trust",
                  ].map((item) => (
                    <div className="bullet-item" key={item}>
                      <span className="bullet-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article id="contact" className="card contact-card">
              <div className="card-body large-pad">
                <div className="section-label">Contact</div>
                <h2>Talk to the team</h2>
                <p className="lead small-lead">
                  This contact section is intentionally simple and credible. It works
                  better than generic template calls to action because it gives visitors
                  a clear next step without over-selling.
                </p>

                <div className="contact-list">
                  <div className="contact-item">
                    <div className="contact-icon">✉</div>
                    <div>
                      <strong>Email</strong>
                      <p>tunji@dbcareteam.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">☎</div>
                    <div>
                      <strong>Phone</strong>
                      <p>+1 (929) 437-6782</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">⌂</div>
                    <div>
                      <strong>Address</strong>
                      <p>447 Broadway, 2nd Floor Suite #2281, New York, New York 10013</p>
                    </div>
                  </div>
                </div>

                <div className="hero-actions">
                  <a className="button button-primary" href="mailto:support@dbcareteam.com">
                    Contact support
                  </a>
                  {/* <a className="button button-secondary" href="tel:+19294376782">
                    Schedule a consultation
                  </a> */}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <div className="section-intro">
              <div className="section-label">Common questions</div>
              <h2>FAQ</h2>
            </div>

            <div className="faq-grid">
              {faqs.map((item) => (
                <article className="card" key={item.q}>
                  <div className="card-body">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <div className="brand-mark">CT</div>
              <div>
                <div className="brand-title">DB Care Team</div>
                <div className="brand-subtitle">
                  A structured diabetes and kidney care management platform
                </div>
              </div>
            </div>
            <p className="footer-copy">
            DB Care Team is a digital care platform designed to support individuals 
            managing diabetes and kidney disease through structured programs, 
            real-time tracking, and coordinated care support. Our goal is to 
            make long-term health management clearer, more consistent, and easier to follow.
            </p>
          </div>

          <div className="footer-links-grid">
            <div>
              <div className="footer-title">Explore</div>
              <a href="#how-it-works">How it works</a>
              <a href="#platform">Platform</a>
              <a href="#contact">Contact</a>
              <a href="#">Privacy policy</a>
            </div>
            <div>
              <div className="footer-title">Reach us</div>
              <p>support@dbcareteam.com</p>
              <p>+1 (929) 437-6782</p>
              <p>New York, United States</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
