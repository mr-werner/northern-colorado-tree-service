import { useState } from 'react';

const PHONE_DISPLAY = '(970) 775-8877';
const PHONE_LINK = 'tel:+19707758877';
const HERO_IMAGE = 'https://img1.wsimg.com/isteam/ip/2fd858d6-a7b3-49c6-b691-e5875ae14b5f/blob-0001.png';

const services = [
  {
    number: '01',
    title: 'Tree Removal',
    text: 'Safe, controlled removal for dead, hazardous, diseased, or unwanted trees — including large and difficult-access projects.',
  },
  {
    number: '02',
    title: 'Trimming & Pruning',
    text: 'Thoughtful pruning that improves structure, clearance, appearance, and the long-term health of your trees.',
  },
  {
    number: '03',
    title: 'Stump Grinding',
    text: 'Clear unwanted stumps below grade so you can reclaim usable lawn and landscape space.',
  },
  {
    number: '04',
    title: 'Tree Health',
    text: 'Professional assessments to identify concerns, protect valuable trees, and create a practical care plan.',
  },
  {
    number: '05',
    title: 'Storm & Hazard Work',
    text: 'Prompt help for damaged limbs and unsafe trees threatening your home, vehicles, fencing, or property.',
  },
  {
    number: '06',
    title: 'Land Clearing',
    text: 'Efficient tree and vegetation clearing for residential and commercial properties across Northern Colorado.',
  },
];

const reviews = [
  {
    quote: 'Professional, educational, and trustworthy from the estimate through the final cleanup.',
    name: 'Northern Colorado homeowner',
  },
  {
    quote: 'The crew was efficient, careful around the property, and left the yard incredibly clean.',
    name: 'Fort Collins customer',
  },
  {
    quote: 'Excellent communication, fair pricing, and a team we would confidently call again.',
    name: 'Repeat customer',
  },
];

function TreeMark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="tree-mark">
      <path d="M32 5c-8 8-14 15-14 23 0 5 3 9 8 11-5 1-9 5-9 10 0 6 5 10 12 10h2V39h3v20h2c7 0 12-4 12-10 0-5-4-9-9-10 5-2 8-6 8-11 0-8-7-15-15-23Z" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.4 3.5 10 8 7.9 9.8c1 2.1 2.2 3.6 4.3 4.8L14.1 12l4.5 2.6c.5.3.7.8.5 1.3-.7 2.4-2.8 4.1-5.3 3.7-5.2-.9-9.4-5.2-10.3-10.4C3.1 6.8 4.7 4.6 7.4 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.website) return;
    setFormStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Request failed');
      setFormStatus('success');
      form.reset();
    } catch {
      // Keeps the prospect demo usable even before Resend is configured.
      setFormStatus('demo');
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="award-bar">Voted #1 Tree Service in Northern Colorado · 2021–2025</div>

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Northern Colorado Tree Service home">
          <TreeMark />
          <span>
            <strong>Northern Colorado</strong>
            <small>Tree Service</small>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#service-area" onClick={closeMenu}>Service Area</a>
          <a href="#estimate" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-phone" href={PHONE_LINK}><PhoneIcon />{PHONE_DISPLAY}</a>
        <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /> <span />
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <p className="eyebrow light">Fort Collins · Northern Colorado</p>
            <h1>Expert tree care.<br /><em>Local roots.</em></h1>
            <p className="hero-copy">Professional tree removal, pruning, stump grinding, and arborist services delivered with the skill, equipment, and care your property deserves.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#estimate">Get a Free Estimate <ArrowIcon /></a>
              <a className="text-link light-link" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="hero-proof">
            <div><strong>11+</strong><span>Years serving NoCo</span></div>
            <div><strong>4.9★</strong><span>Customer rating</span></div>
            <div><strong>ISA</strong><span>Certified arborist</span></div>
            <div><strong>Local</strong><span>Family owned</span></div>
          </div>
        </section>

        <section className="intro section container">
          <div>
            <p className="eyebrow">Tree care done right</p>
            <h2>Your trees are part of your property’s value.</h2>
          </div>
          <div className="intro-copy">
            <p>From routine pruning to technical removals, Northern Colorado Tree Service helps homeowners and property managers make confident decisions about their trees.</p>
            <p>We combine professional equipment, knowledgeable crews, and neighborly service for work that is safe, clean, and built around the long-term health of your landscape.</p>
          </div>
        </section>

        <section id="services" className="services-section section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">What we do</p>
                <h2>Complete tree service.<br />One trusted crew.</h2>
              </div>
              <a className="text-link" href="#estimate">Talk with a tree expert <ArrowIcon /></a>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-photo" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
          <div className="about-content">
            <p className="eyebrow light">Why Northern Colorado Tree Service</p>
            <h2>Big-company capability.<br />Neighborhood service.</h2>
            <p>Tree work can be technical, dangerous, and disruptive. Our goal is to make the process straightforward: clear recommendations, careful execution, and a property that looks clean when the work is complete.</p>
            <div className="check-list">
              <span>ISA-certified arborist expertise</span>
              <span>Experienced, professional crews</span>
              <span>Equipment for large and complex removals</span>
              <span>Residential & commercial service</span>
              <span>Free estimates</span>
            </div>
            <a className="button button-outline-light" href="#estimate">Schedule an Estimate <ArrowIcon /></a>
          </div>
        </section>

        <section id="reviews" className="reviews-section section container">
          <div className="review-header">
            <div>
              <p className="eyebrow">Reputation matters</p>
              <h2>Known for the work.<br />Remembered for the cleanup.</h2>
            </div>
            <div className="rating-block">
              <strong>4.9</strong>
              <span className="stars">★★★★★</span>
              <small>Highly rated by Northern Colorado customers</small>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <blockquote key={index}>
                <span className="quote-mark">“</span>
                <p>{review.quote}</p>
                <footer>{review.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="statement-section">
          <div className="container statement-inner">
            <p>When we’re finished,</p>
            <h2>the only thing missing<br />should be the tree.</h2>
          </div>
        </section>

        <section id="service-area" className="area-section section container">
          <div className="area-copy">
            <p className="eyebrow">Proudly local</p>
            <h2>Serving Fort Collins and communities across Northern Colorado.</h2>
            <p>Professional tree services for homeowners, businesses, and property managers throughout the region.</p>
          </div>
          <div className="city-grid">
            {['Fort Collins', 'Loveland', 'Windsor', 'Timnath', 'Wellington', 'Severance', 'Laporte', 'Northern Colorado'].map((city) => <span key={city}>{city}</span>)}
          </div>
        </section>

        <section id="estimate" className="estimate-section">
          <div className="container estimate-grid">
            <div className="estimate-copy">
              <p className="eyebrow light">Free estimates</p>
              <h2>Tell us what’s going on with your trees.</h2>
              <p>Whether you know exactly what you need or just want a professional opinion, send us a few details and we’ll help you figure out the next step.</p>
              <a href={PHONE_LINK} className="big-phone">{PHONE_DISPLAY}</a>
              <small>Call or text during business hours</small>
            </div>

            <form className="estimate-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>Name<input name="name" type="text" required placeholder="Your name" /></label>
                <label>Phone<input name="phone" type="tel" required placeholder="(970) 555-0100" /></label>
              </div>
              <div className="field-row">
                <label>Email<input name="email" type="email" required placeholder="you@email.com" /></label>
                <label>City<input name="city" type="text" placeholder="Fort Collins" /></label>
              </div>
              <label>What can we help with?
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Tree Removal</option>
                  <option>Trimming / Pruning</option>
                  <option>Stump Grinding</option>
                  <option>Tree Health</option>
                  <option>Storm / Hazard Work</option>
                  <option>Land Clearing</option>
                  <option>Not Sure Yet</option>
                </select>
              </label>
              <label>Tell us about the project<textarea name="message" rows="4" required placeholder="Tree size, location, concerns, or anything else that would help us understand the job." /></label>
              <input className="honeypot" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
              <button className="button button-dark submit-button" type="submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending…' : 'Request Free Estimate'} <ArrowIcon />
              </button>
              {formStatus === 'success' && <p className="form-message">Thanks — your request was sent successfully.</p>}
              {formStatus === 'demo' && <p className="form-message">Demo form submitted. Add your Resend environment variables in Vercel to enable email delivery.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand brand-light"><TreeMark /><span><strong>Northern Colorado</strong><small>Tree Service</small></span></a>
            <p>Professional tree care rooted in Northern Colorado.</p>
          </div>
          <div>
            <h4>Services</h4>
            <a href="#services">Tree Removal</a><a href="#services">Pruning</a><a href="#services">Stump Grinding</a><a href="#services">Tree Health</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a><a href="#reviews">Reviews</a><a href="#service-area">Service Area</a><a href="#estimate">Free Estimate</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
            <span>Fort Collins, Colorado</span>
            <span>Mon–Fri · 8AM–5PM</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Northern Colorado Tree Service</span>
          <span>Concept redesign by Blueprint WebStudio</span>
        </div>
      </footer>
    </div>
  );
}
