import { useState } from 'react';

const PHONE_DISPLAY = '(970) 775-8877';
const PHONE_LINK = 'tel:+19707758877';
const HERO_IMAGE = 'https://img1.wsimg.com/isteam/ip/2fd858d6-a7b3-49c6-b691-e5875ae14b5f/blob-0001.png';

const SOCIAL_LINKS = {
  yelp: 'https://www.yelp.com/biz/northern-colorado-tree-service-fort-collins',
  instagram: 'https://www.instagram.com/northern_colorado_tree_service',
  facebook: 'https://www.facebook.com/northerncoloradotreeservice/',
};

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Northern+Colorado+Tree+Service+Fort+Collins+reviews';

const serviceAreas = [
  'Ault',
  'Bellvue',
  'Carr',
  'Drake',
  'Fort Collins',
  'Livermore',
  'Loveland',
  'Red Feather Lakes',
  'Severance',
  'Windsor',
];

const reviews = [
  {
    quote: 'Northern Colorado Tree Service provided a very professional, educational, and trusting tree trimming service experience.',
    name: 'Barb Hardes',
  },
  {
    quote: 'Northern CO Tree Service far surpassed our expectations with their incredible work.',
    name: 'Krista Warnock',
  },
  {
    quote: 'They left the yard more neatly groomed than when they started. Highly recommend them!',
    name: 'Sheri McKelfresh',
  },
];

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



function TreeMark() {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className="tree-mark">
      <path d="M6 52 22 31l8 10L43 20l23 32H6Z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M36 15c-7 8-11 14-11 21 0 7 4 11 9 13v12h4V49c6-2 10-7 10-13 0-7-5-14-12-21Z" fill="currentColor" />
      <path d="M18 58h36" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function SocialIcon({ network }) {
  const paths = {
    facebook: <path d="M14.5 8H17V4.2c-.4-.1-1.8-.2-3.4-.2-3.3 0-5.6 2-5.6 5.8V13H4v4.3h4V28h4.9V17.3H17l.7-4.3h-4.8V10c0-1.2.3-2 1.6-2Z" fill="currentColor" />,
    instagram: <>
      <rect x="5" y="5" width="22" height="22" rx="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="16" cy="16" r="5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="23.5" cy="8.7" r="1.4" fill="currentColor" />
    </>,
    yelp: <>
      <path d="m15.3 13.4-2-8.8c-.2-.8.3-1.5 1.1-1.7l3.1-.7c.8-.2 1.5.4 1.5 1.2l-.3 9.2c0 1.9-3 2.6-3.4.8Z" fill="currentColor" />
      <path d="m12.5 16.4-7.8-1.8c-.8-.2-1.2-1-.8-1.7l1.5-2.8c.4-.7 1.3-.8 1.9-.2l6 5.2c1.4 1.2.9 1.7-.8 1.3Zm2.1 3.1-5.8 5.7c-.6.6-1.5.4-1.8-.3l-1.2-2.9c-.3-.7.1-1.5.9-1.7l7.3-2.1c1.8-.5 1.9 0 .6 1.3Zm3.9-.1 3.8 7.2c.4.7 0 1.6-.8 1.7l-3.1.5c-.8.1-1.4-.5-1.4-1.3l-.2-7.7c-.1-1.8.9-2 1.7-.4Zm2.1-3.2 7.8-2.2c.8-.2 1.5.4 1.5 1.2l-.1 3.2c0 .8-.8 1.3-1.5 1l-7.3-2.2c-1.8-.5-2.1-.5-.4-1Z" fill="currentColor" />
    </>,
  };
  return <svg viewBox="0 0 32 32" aria-hidden="true">{paths[network]}</svg>;
}

function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`} aria-label="Social media">
      {Object.entries(SOCIAL_LINKS).map(([network, href]) => (
        <a key={network} href={href} target="_blank" rel="noreferrer" aria-label={`Northern Colorado Tree Service on ${network}`}>
          <SocialIcon network={network} />
        </a>
      ))}
    </div>
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
          <span className="brand-copy">
            <strong>Northern Colorado</strong>
            <small>Tree Service</small>
            <em>Professional Arborist Services</em>
          </span>
        </a>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#reviews" onClick={closeMenu}>Reviews</a>
          <a href="#service-area" onClick={closeMenu}>Service Area</a>
          <a href="#estimate" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-contact">
          <a className="header-callout" href={PHONE_LINK}>
            <span>Free Consultation</span>
            <strong><PhoneIcon /> {PHONE_DISPLAY}</strong>
          </a>
          <a className="header-callout emergency" href={PHONE_LINK}>
            <span>24/7 Emergency Service</span>
            <strong>Call Now</strong>
          </a>
          <SocialLinks className="header-socials" />
        </div>
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
            <SocialLinks className="hero-socials" />
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
              <small>Google customer reviews</small>
              <a className="google-review-link" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Read all Google reviews <ArrowIcon /></a>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review, index) => (
              <blockquote key={index}>
                <span className="quote-mark">“</span>
                <p>{review.quote}</p>
                <footer>{review.name}<span className="google-source">Google Review</span></footer>
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
          <div className="service-area-visual">
            <div className="map-frame">
              <iframe
                title="Northern Colorado Tree Service service area map"
                src="https://www.google.com/maps?q=Fort+Collins,+Colorado&z=8&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-badge">Serving Northern Colorado</div>
            </div>
            <div className="city-grid">
              {serviceAreas.map((city) => <span key={city}>{city}</span>)}
            </div>
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
            <a href="#top" className="brand brand-light"><TreeMark /><span className="brand-copy"><strong>Northern Colorado</strong><small>Tree Service</small><em>Professional Arborist Services</em></span></a>
            <p>Professional tree care rooted in Northern Colorado.</p>
            <SocialLinks className="footer-socials" />
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
            <a className="footer-emergency" href={PHONE_LINK}>24/7 Emergency Service</a>
          </div>
        </div>
        <div className="container credential-strip">
          <div><strong>#1 Tree Service</strong><span>Northern Colorado · 2021–2025</span></div>
          <div><strong>ISA Certified</strong><span>Certified arborist expertise</span></div>
          <div><strong>Licensed & Insured</strong><span>Liability + workers’ compensation</span></div>
          <div><strong>Family Owned</strong><span>10+ years serving Northern Colorado</span></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Northern Colorado Tree Service</span>
          <span>Concept redesign by Blueprint WebStudio</span>
        </div>
      </footer>

      <style>{`
        .brand-copy { display:flex; flex-direction:column; line-height:1; }
        .brand-copy em { margin-top:.32rem; font-size:.55rem; letter-spacing:.16em; text-transform:uppercase; font-style:normal; opacity:.65; }
        .header-contact { display:flex; align-items:center; gap:1rem; margin-left:auto; }
        .header-callout { display:flex; flex-direction:column; text-decoration:none; color:inherit; line-height:1.15; white-space:nowrap; }
        .header-callout span { font-size:.62rem; letter-spacing:.12em; text-transform:uppercase; opacity:.65; }
        .header-callout strong { display:flex; align-items:center; gap:.3rem; font-size:.82rem; margin-top:.25rem; }
        .header-callout svg { width:14px; height:14px; }
        .header-callout.emergency { border-left:1px solid rgba(0,0,0,.14); padding-left:1rem; }
        .header-callout.emergency strong { color:#9d2d20; }
        .social-links { display:flex; gap:.45rem; align-items:center; }
        .social-links a { width:32px; height:32px; border:1px solid currentColor; border-radius:50%; display:grid; place-items:center; color:inherit; opacity:.82; transition:.2s ease; }
        .social-links a:hover { opacity:1; transform:translateY(-2px); }
        .social-links svg { width:16px; height:16px; }
        .hero-socials { margin-top:1.4rem; color:#fff; }
        .hero-socials a { background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.5); }
        .google-review-link { display:flex; align-items:center; gap:.35rem; margin-top:.65rem; font-size:.78rem; color:inherit; }
        .google-review-link svg { width:16px; }
        .google-source { display:block; margin-top:.25rem; font-size:.68rem; opacity:.55; text-transform:uppercase; letter-spacing:.08em; }
        .service-area-visual { display:grid; gap:1.25rem; }
        .map-frame { position:relative; min-height:390px; overflow:hidden; border-radius:2px; background:#ddd; }
        .map-frame iframe { width:100%; height:390px; border:0; display:block; filter:saturate(.7) contrast(.95); }
        .map-badge { position:absolute; left:1rem; bottom:1rem; background:#173c2a; color:#fff; padding:.7rem 1rem; font-size:.75rem; letter-spacing:.08em; text-transform:uppercase; box-shadow:0 8px 24px rgba(0,0,0,.16); }
        .footer-socials { margin-top:1.25rem; }
        .footer-socials a { border-color:rgba(255,255,255,.35); }
        .footer-emergency { margin-top:.45rem; font-weight:700; }
        .credential-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; margin-top:2.25rem; border-top:1px solid rgba(255,255,255,.15); border-bottom:1px solid rgba(255,255,255,.15); }
        .credential-strip div { padding:1.25rem 1rem; display:flex; flex-direction:column; }
        .credential-strip strong { font-size:.9rem; }
        .credential-strip span { margin-top:.3rem; font-size:.7rem; opacity:.6; }
        @media (max-width:1100px) {
          .header-contact .header-socials { display:none; }
          .header-callout.emergency { display:none; }
        }
        @media (max-width:820px) {
          .header-contact { margin-left:auto; margin-right:.5rem; }
          .header-callout span { display:none; }
          .header-callout strong { font-size:.72rem; }
          .credential-strip { grid-template-columns:1fr 1fr; }
          .map-frame, .map-frame iframe { min-height:320px; height:320px; }
        }
        @media (max-width:560px) {
          .header-contact { display:none; }
          .credential-strip { grid-template-columns:1fr; }
          .hero-socials { margin-top:1rem; }
        }
      `}</style>
    </div>
  );
}
