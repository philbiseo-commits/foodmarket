import { useEffect, useState } from "react";

const proofItems = [
  {
    icon: "solar:calendar-linear",
    eyebrow: "Weekly run",
    title: "Every Sunday at Redcliffe Markets",
    body: "The page is built for market traffic first. Fast to scan, easy to trust, and clear about where to find you."
  },
  {
    icon: "solar:fire-square-linear",
    eyebrow: "Signature finish",
    title: "Torched to order",
    body: "The torch is positioned as both flavour and theatre, giving people a reason to stop, watch, and buy."
  },
  {
    icon: "solar:box-linear",
    eyebrow: "Tighter menu",
    title: "Two hero boxes, less friction",
    body: "A smaller menu helps quality, speeds up service, and keeps the first website focused on conversion instead of complexity."
  }
];

const menuItems = [
  {
    title: "Galbi Loaded Chips",
    price: "$19",
    image: "https://picsum.photos/seed/galbi-loaded-chips-redcliffe/1200/1400",
    copy:
      "Crispy golden chips topped with sweet soy pork tenderloin, finished with a quick torch, special mayo, fresh spring onion, and sesame.",
    noteA: "Big flavour, casual sharing, waterfront walk fuel",
    noteB: "Optional spice callout can be added later"
  },
  {
    title: "Galbi Rice Bowl",
    price: "$18",
    image: "https://picsum.photos/seed/galbi-rice-bowl-redcliffe/1200/1400",
    copy:
      "Warm fluffy rice topped with smoky soy-glazed pork, scallions, sesame, and a cleaner, more comforting finish for an easy market meal.",
    noteA: "Balanced, filling, easy to carry",
    noteB: "Works equally well for breakfast or lunch"
  }
];

const featureCards = [
  {
    icon: "solar:plate-linear",
    title: "Boneless, cleaner to eat",
    body: "A market box should feel generous without becoming messy. Sliced pork tenderloin keeps the format easy and approachable for local foot traffic."
  },
  {
    icon: "solar:chef-hat-linear",
    title: "Short menu, sharper quality",
    body: "Fewer decisions creates faster service and a more consistent plate, especially important when the queue builds on a busy Sunday."
  },
  {
    icon: "solar:smile-circle-linear",
    title: "Built for local first impressions",
    body: "The page speaks to Redcliffe and North Brisbane customers directly, rather than sounding like a generic Korean restaurant site."
  },
  {
    icon: "solar:suitcase-tag-linear",
    title: "Ready to expand into events",
    body: "The website leaves room for future catering and private event demand without overpromising before launch."
  }
];

const shotList = [
  "Hero flame shot with visible torch and rising steam",
  "Top-down loaded chips with generous meat coverage",
  "Rice bowl close-up showing glaze and sesame texture",
  "Authentic Redcliffe foreshore or market atmosphere image"
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formFeedback, setFormFeedback] = useState("");

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * 70}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  function handleInquirySubmit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name") || "";
    const email = form.get("email") || "";
    const date = form.get("date") || "Not specified";
    const guests = form.get("guests") || "Not specified";
    const message = form.get("message") || "";

    const subject = encodeURIComponent(`Event inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEvent date: ${date}\nEstimated guests: ${guests}\n\nMessage:\n${message}`
    );

    setFormFeedback(
      "Your email app is opening now so the inquiry can be sent straight to your inbox. This can later be replaced with Formspree or Resend before launch."
    );
    window.location.href = `mailto:hello@foodmarket.com.au?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  }

  return (
    <div className="site-shell">
      <div className="noise-layer" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <header className="site-header">
        <nav className="nav-pill container">
          <a href="#top" className="brand-mark">
            Redcliffe K-BBQ
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <iconify-icon icon="solar:hamburger-menu-line-duotone" />
          </button>

          <div className="nav-links desktop-only">
            <a href="#story">Story</a>
            <a href="#menu">Menu</a>
            <a href="#visit">Visit</a>
            <a href="#events">Events</a>
            <a href="#events" className="button button-primary nav-button">
              <span>Book an inquiry</span>
              <span className="button-icon">
                <iconify-icon icon="solar:arrow-right-linear" />
              </span>
            </a>
          </div>
        </nav>

        {menuOpen ? (
          <div className="mobile-panel">
            <a href="#story" onClick={() => setMenuOpen(false)}>
              Story
            </a>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>
              Visit
            </a>
            <a href="#events" onClick={() => setMenuOpen(false)}>
              Events
            </a>
            <a href="#visit" className="button button-primary" onClick={() => setMenuOpen(false)}>
              <span>Find us this Sunday</span>
              <span className="button-icon">
                <iconify-icon icon="solar:map-point-linear" />
              </span>
            </a>
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="hero-section section-space">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">Redcliffe Markets | Sundays | North Brisbane</span>
              <h1 className="display hero-title">
                Torched Korean BBQ pork,
                <span className="accent-text"> finished fresh </span>
                by the waterfront.
              </h1>
              <p className="hero-body">
                Smoky soy-glazed pork tenderloin, seared to order with a signature torch and served
                the way market food should be: fast, generous, and impossible to ignore.
              </p>
              <div className="hero-actions">
                <a href="#menu" className="button button-primary">
                  <span>View menu</span>
                  <span className="button-icon">
                    <iconify-icon icon="solar:arrow-right-linear" />
                  </span>
                </a>
                <a href="#visit" className="button button-secondary">
                  <span>Find us this Sunday</span>
                  <span className="button-icon">
                    <iconify-icon icon="solar:map-point-linear" />
                  </span>
                </a>
              </div>

              <div className="micro-grid">
                <div className="double-bezel reveal">
                  <div className="double-bezel-inner info-card">
                    <p className="mini-label">Fresh every run</p>
                    <h3>Made on market day</h3>
                  </div>
                </div>
                <div className="double-bezel reveal">
                  <div className="double-bezel-inner info-card">
                    <p className="mini-label">Signature finish</p>
                    <h3>Torched to order</h3>
                  </div>
                </div>
                <div className="double-bezel reveal">
                  <div className="double-bezel-inner info-card">
                    <p className="mini-label">Sunday note</p>
                    <h3>Limited boxes each run</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual double-bezel reveal">
              <div className="double-bezel-inner hero-media">
                <img
                  src="https://picsum.photos/seed/hero-redcliffe-torch/960/1280"
                  alt="Torched Korean BBQ pork in a dramatic hero shot"
                />
                <div className="hero-badge glass-panel">Torch finish in front of you</div>
                <div className="hero-overlay-grid">
                  <div className="glass-panel">
                    <p className="mini-label">This Sunday at Redcliffe</p>
                    <h3 className="display">
                      Two signature boxes. One smoky finish. Straight off the torch.
                    </h3>
                  </div>
                  <div className="glass-panel">
                    <p className="mini-label">Best enjoyed</p>
                    <p>
                      Hot chips or fluffy rice, fresh spring onion, a glossy soy finish, and a walk
                      back to the foreshore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-grid">
            {proofItems.map((item) => (
              <article key={item.title} className="double-bezel reveal">
                <div className="double-bezel-inner proof-card">
                  <span className="proof-icon">
                    <iconify-icon icon={item.icon} />
                  </span>
                  <p className="mini-label">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="section-space">
          <div className="container story-grid">
            <div className="reveal">
              <span className="eyebrow">The Art of K-BBQ</span>
              <h2 className="display section-title">
                Street food with a cleaner cut, richer finish, and a little theatre.
              </h2>
              <p className="section-body">
                This homepage treats your stall like a premium food brand, not a generic market
                flyer. The product is framed around what customers actually experience: glossy soy,
                tender pork, a quick flash of flame, and immediate local context.
              </p>
            </div>

            <div className="story-cards">
              <div className="double-bezel reveal story-image-card">
                <div className="double-bezel-inner image-wrap">
                  <img
                    src="https://picsum.photos/seed/story-closeup-kbbq/1100/1400"
                    alt="Close-up of glossy Korean BBQ pork texture"
                  />
                </div>
              </div>
              <article className="double-bezel reveal">
                <div className="double-bezel-inner info-card">
                  <p className="mini-label">No bones, just flavour</p>
                  <h3 className="display">Premium pork tenderloin</h3>
                  <p>
                    A lean, tender cut that feels generous without becoming awkward to eat while
                    standing, walking, or sitting by the water.
                  </p>
                </div>
              </article>
              <article className="double-bezel reveal">
                <div className="double-bezel-inner info-card">
                  <p className="mini-label">The finish</p>
                  <h3 className="display">Sweet soy, flame, and edge</h3>
                  <p>
                    The torch gives the glaze a smoky caramelised surface and turns the final handoff
                    into a memorable visual moment.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="menu" className="section-space menu-section">
          <div className="container menu-layout">
            <div className="menu-intro reveal">
              <span className="eyebrow eyebrow-dark">Our Curated Menu</span>
              <h2 className="display section-title dark-text">
                Two boxes, one signature flavour profile.
              </h2>
              <p className="section-body dark-body">
                Built for hungry market mornings and easy decisions. Choose your base, get the torch
                finish, and head back to the water.
              </p>
              <div className="launch-notes">
                <p className="mini-label dark-mini">Launch notes</p>
                <ul>
                  <li>Final prices are already surfaced in a way that can be swapped quickly.</li>
                  <li>Allergen notes can be added once sauce and mayo details are locked.</li>
                  <li>Optional chilli or extra sauce can be layered in later without redesigning the page.</li>
                </ul>
              </div>
            </div>

            <div className="menu-grid">
              {menuItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`menu-card reveal ${index === 1 ? "menu-card-dark" : ""}`}
                >
                  <div className="menu-image-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="menu-content">
                    <div className="menu-heading">
                      <div>
                        <p className="mini-label">Signature box 0{index + 1}</p>
                        <h3 className="display">{item.title}</h3>
                      </div>
                      <span className="price-tag">{item.price}</span>
                    </div>
                    <p>{item.copy}</p>
                    <div className="menu-notes">
                      <div>
                        <p className="mini-label">Best for</p>
                        <p>{item.noteA}</p>
                      </div>
                      <div>
                        <p className="mini-label">Good to know</p>
                        <p>{item.noteB}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container feature-layout">
            <div className="double-bezel reveal">
              <div className="double-bezel-inner feature-panel">
                <span className="eyebrow">Why this direction works</span>
                <h2 className="display section-title">
                  Built for the market queue, not the dining room.
                </h2>
                <div className="feature-grid">
                  {featureCards.map((card) => (
                    <article key={card.title} className="feature-card">
                      <span className="feature-icon">
                        <iconify-icon icon={card.icon} />
                      </span>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal side-stack">
              <div className="double-bezel">
                <div className="double-bezel-inner image-wrap">
                  <img
                    src="https://picsum.photos/seed/redcliffe-waterfront-market/1000/900"
                    alt="Redcliffe waterfront atmosphere"
                  />
                </div>
              </div>
              <div className="double-bezel">
                <div className="double-bezel-inner info-card">
                  <p className="mini-label">Recommended shoot list</p>
                  <ol className="shot-list">
                    {shotList.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="visit" className="section-space visit-section">
          <div className="container visit-grid">
            <div className="visit-copy reveal">
              <span className="eyebrow">Visit The Stand</span>
              <h2 className="display section-title">
                Come hungry. Come early. Catch us on the Redcliffe foreshore.
              </h2>
              <p className="section-body">
                The visit section is written to reduce uncertainty. It gives location clarity,
                realistic market-hour guidance, and the subtle urgency you need for a fresh-made food
                offer.
              </p>
              <div className="visit-stack">
                <div className="double-bezel">
                  <div className="double-bezel-inner info-card">
                    <p className="mini-label">Where</p>
                    <h3>Redcliffe Markets, Redcliffe Parade, Redcliffe QLD</h3>
                  </div>
                </div>
                <div className="double-bezel">
                  <div className="double-bezel-inner info-card">
                    <p className="mini-label">When</p>
                    <h3>Every Sunday</h3>
                    <p>Current official guidance is 8 AM to 2 PM from March to November, with earlier summer starts.</p>
                  </div>
                </div>
                <div className="double-bezel">
                  <div className="double-bezel-inner info-card">
                    <p className="mini-label">Fast advice</p>
                    <h3>Sold out early often happens</h3>
                    <p>If people are travelling mainly for the food, the earlier half of the market is the safest window.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="double-bezel reveal">
              <div className="double-bezel-inner map-panel">
                <iframe
                  title="Redcliffe Markets map"
                  src="https://www.google.com/maps?q=Redcliffe%20Markets%20Redcliffe%20Parade%20Redcliffe%20QLD&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="map-card">
                  <div>
                    <p className="mini-label">Plan your stop</p>
                    <p>
                      Use the map for the foreshore, then confirm the morning details on Instagram
                      once your handle is ready to go live.
                    </p>
                  </div>
                  <a
                    className="button button-primary"
                    href="https://www.google.com/maps/search/?api=1&query=Redcliffe+Markets+Redcliffe+Parade+Redcliffe+QLD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Get directions</span>
                    <span className="button-icon">
                      <iconify-icon icon="solar:map-arrow-right-linear" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="section-space">
          <div className="container event-grid">
            <div className="double-bezel reveal">
              <div className="double-bezel-inner event-copy">
                <span className="eyebrow">Bring K-BBQ to Your Event</span>
                <h2 className="display section-title">
                  Private party, office lunch, or one-off gathering?
                </h2>
                <p className="section-body">
                  The event section is framed as inquiry-ready, not overcommitted. It lets you start
                  collecting demand now and upgrade to Formspree or Resend as soon as the inbox flow
                  is locked.
                </p>
                <div className="event-bullets">
                  <div>
                    <p className="mini-label">Good fit</p>
                    <p>Private celebrations, community events, studio launches, and team lunches.</p>
                  </div>
                  <div>
                    <p className="mini-label">Format</p>
                    <p>Boxed service with simplified options and a practical setup for medium-size groups.</p>
                  </div>
                  <div>
                    <p className="mini-label">Next step</p>
                    <p>Swap the mailto flow for Formspree or Resend before launch and begin qualifying dates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-shell reveal">
              <div className="form-card">
                <div className="form-head">
                  <div>
                    <p className="mini-label dark-mini">Inquiry form</p>
                    <h3 className="display">Start an event request</h3>
                  </div>
                  <span className="form-badge">Launch-ready</span>
                </div>

                <form className="contact-form" onSubmit={handleInquirySubmit}>
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@example.com" required />
                  </label>
                  <div className="split-inputs">
                    <label>
                      <span>Event date</span>
                      <input type="date" name="date" />
                    </label>
                    <label>
                      <span>Estimated guests</span>
                      <input type="number" name="guests" min="1" placeholder="40" />
                    </label>
                  </div>
                  <label>
                    <span>Message</span>
                    <textarea
                      name="message"
                      placeholder="Tell us about the event, timing, and what kind of service you need."
                      required
                    />
                  </label>
                  <div className="form-actions">
                    <button className="button button-dark" type="submit">
                      <span>Submit inquiry</span>
                      <span className="button-icon">
                        <iconify-icon icon="solar:letter-linear" />
                      </span>
                    </button>
                    <a href="mailto:hello@foodmarket.com.au" className="direct-link">
                      Email directly: hello@foodmarket.com.au
                    </a>
                  </div>
                  {formFeedback ? <p className="form-feedback">{formFeedback}</p> : null}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-layout">
          <div>
            <p className="display footer-brand">Redcliffe K-BBQ</p>
            <p className="footer-copy">
              Korean street food built for the Redcliffe foreshore. Torched pork boxes, Sunday market
              energy, and a cleaner way to do barbecue by the water.
            </p>
          </div>
          <div className="footer-links">
            <a href="#menu">View menu</a>
            <a href="#visit">Visit the stand</a>
            <a href="mailto:hello@foodmarket.com.au">hello@foodmarket.com.au</a>
            <span>Copyright ¨Ï 2026 Redcliffe K-BBQ. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
