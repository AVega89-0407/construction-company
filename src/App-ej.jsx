import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// // ── Styles ──────────────────────────────────────────────────────────────────
// const styles = `




//   /* ── Page wrapper ── */
//   .page { padding-top: 80px; min-height: 100vh; }

//   /* ── Hero ── */
//   .hero {
//     min-height: calc(100vh - 80px);
//     display: grid; grid-template-columns: 1fr 1fr; align-items: center;
//     padding: 5rem 3rem 3rem;
//     gap: 4rem;
//   }
//   .hero-text h1 {
//     font-family: var(--serif);
//     font-size: clamp(3rem, 5vw, 5.5rem);
//     font-weight: 900;
//     line-height: 1.05;
//     letter-spacing: -0.03em;
//     color: var(--dark);
//   }
//   .hero-text h1 em { color: var(--accent); font-style: normal; }
//   .hero-text p {
//     margin-top: 1.5rem;
//     font-size: 1.1rem;
//     line-height: 1.75;
//     color: var(--muted);
//     max-width: 42ch;
//   }
//   .hero-cta {
//     margin-top: 2.5rem;
//     display: inline-flex; align-items: center; gap: 0.75rem;
//     background: var(--dark); color: var(--white);
//     padding: 1rem 2rem;
//     font-family: var(--sans); font-size: 0.875rem;
//     font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase;
//     text-decoration: none;
//     transition: background 0.2s, transform 0.2s;
//   }
//   .hero-cta:hover { background: var(--accent); transform: translateY(-2px); }
//   .hero-cta svg { transition: transform 0.2s; }
//   .hero-cta:hover svg { transform: translateX(4px); }

//   .hero-image {
//     aspect-ratio: 4/5;
//     background: var(--dark);
//     position: relative; overflow: hidden;
//   }
//   .hero-image img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; }
//   .hero-image::after {
//     content: '';
//     position: absolute; inset: 0;
//     border: 2px solid var(--accent);
//     transform: translate(12px, 12px);
//     pointer-events: none;
//   }

//   /* ── Section shared ── */
//   section { padding: 6rem 3rem; }
//   .section-label {
//     font-size: 0.75rem; font-weight: 500; letter-spacing: 0.15em;
//     text-transform: uppercase; color: var(--accent);
//     margin-bottom: 0.75rem;
//   }
//   .section-title {
//     font-family: var(--serif);
//     font-size: clamp(2rem, 3.5vw, 3rem);
//     font-weight: 900; line-height: 1.1;
//     letter-spacing: -0.02em;
//   }

//   /* ── Tjänster ── */
//   .services-grid {
//     display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//     gap: 2px; margin-top: 3.5rem;
//   }
//   .service-card {
//     background: var(--white);
//     padding: 2.5rem 2rem;
//     border-bottom: 3px solid transparent;
//     transition: border-color 0.2s, transform 0.2s;
//     cursor: default;
//   }
//   .service-card:hover { border-color: var(--accent); transform: translateY(-4px); }
//   .service-icon {
//     font-size: 2rem; margin-bottom: 1.25rem;
//     display: block;
//   }
//   .service-card h3 {
//     font-family: var(--serif); font-size: 1.3rem;
//     font-weight: 700; margin-bottom: 0.75rem;
//   }
//   .service-card p { font-size: 0.9rem; line-height: 1.7; color: var(--muted); }

//   /* ── Om oss ── */
//   .about-grid {
//     display: grid; grid-template-columns: 1fr 1fr;
//     gap: 5rem; align-items: center; margin-top: 3rem;
//   }
//   .about-image {
//     aspect-ratio: 3/4;
//     background: var(--dark); position: relative; overflow: hidden;
//   }
//   .about-image img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
//   .about-image::before {
//     content: '';
//     position: absolute; inset: 0;
//     background: linear-gradient(135deg, var(--accent) 0%, transparent 60%);
//     opacity: 0.2; z-index: 1;
//   }
//   .about-stats {
//     display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2.5rem;
//   }
//   .stat { border-left: 2px solid var(--accent); padding-left: 1rem; }
//   .stat-num {
//     font-family: var(--serif); font-size: 2.5rem;
//     font-weight: 900; color: var(--dark); line-height: 1;
//   }
//   .stat-label { font-size: 0.8rem; color: var(--muted); margin-top: 0.25rem; letter-spacing: 0.05em; }

//   /* ── Kontakt ── */
//   .contact-layout {
//     display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; margin-top: 3rem;
//   }
//   .contact-info p { line-height: 1.8; color: var(--muted); margin-bottom: 2rem; }
//   .contact-detail { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem; }
//   .contact-detail-icon { font-size: 1.25rem; margin-top: 0.1rem; }
//   .contact-detail-text { font-size: 0.9rem; color: var(--muted); line-height: 1.6; }
//   .contact-detail-text strong { color: var(--dark); display: block; margin-bottom: 0.15rem; }

//   form { display: flex; flex-direction: column; gap: 1.25rem; }
//   .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
//   label { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
//   input, textarea {
//     background: var(--white);
//     border: 1px solid rgba(0,0,0,0.12);
//     padding: 0.9rem 1rem;
//     font-family: var(--sans); font-size: 0.95rem; color: var(--dark);
//     outline: none;
//     transition: border-color 0.2s;
//   }
//   input:focus, textarea:focus { border-color: var(--accent); }
//   textarea { resize: vertical; min-height: 130px; }
//   .form-submit {
//     background: var(--dark); color: var(--white);
//     border: none; padding: 1rem 2rem;
//     font-family: var(--sans); font-size: 0.875rem;
//     font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase;
//     cursor: pointer; transition: background 0.2s;
//     align-self: flex-start;
//   }
//   .form-submit:hover { background: var(--accent); }

//   /* ── Footer ── */
//   footer {
//     background: var(--dark); color: rgba(255,255,255,0.5);
//     text-align: center; padding: 2rem 3rem;
//     font-size: 0.8rem; letter-spacing: 0.05em;
//   }
//   footer span { color: var(--accent); }

//   /* ── Responsive ── */
//   @media (max-width: 768px) {
//     nav { padding: 1.2rem 1.5rem; }
//     .nav-links { gap: 1.5rem; }
//     .hero { grid-template-columns: 1fr; padding: 3rem 1.5rem; gap: 2.5rem; }
//     .hero-image { display: none; }
//     section { padding: 4rem 1.5rem; }
//     .about-grid, .contact-layout { grid-template-columns: 1fr; gap: 2.5rem; }
//     .about-image { display: none; }
//   }
// `;

// ── Components ──────────────────────────────────────────────────────────────
// function Navbar() {
//   const location = useLocation();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav className={scrolled ? "scrolled" : ""}>
//       <Link to="/" className="nav-logo">Bygg<span>AB</span></Link>
//       <ul className="nav-links">
//         {[["/" , "Hem"], ["/tjanster", "Tjänster"], ["/om-oss", "Om oss"], ["/kontakt", "Kontakt"]].map(([path, label]) => (
//           <li key={path}>
//             <Link to={path} className={location.pathname === path ? "active" : ""}>{label}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// function Home() {
//   return (
    // <div className="page">
    //   <div className="hero">
    //     <div className="hero-text">
    //       <p className="section-label">Byggföretag i [stad] sedan 1998</p>
    //       <h1>Vi bygger det<br/>du <em>drömmer</em><br/>om.</h1>
    //       <p>Vi är ett familjeägt byggföretag med lång erfarenhet av nybyggnation, renovering och tillbyggnad. Kvalitet och ärlighet i varje projekt.</p>
    //       <Link to="/kontakt" className="hero-cta">
    //         Begär offert
    //         <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    //           <path d="M5 12h14M12 5l7 7-7 7"/>
    //         </svg>
    //       </Link>
    //     </div>
    //     <div className="hero-image">
    //       {/* Byt ut mot en riktig bild: <img src="/images/hero.jpg" alt="Byggprojekt" /> */}
    //     </div>
    //   </div>
    // </div>
//   );
// }

// function Services() {
//   const services = [
//     { icon: "🏗️", title: "Nybyggnation", desc: "Vi uppför nya bostäder och kommersiella byggnader från grunden. Från ritning till nyckelklart — vi hanterar hela processen." },
//     { icon: "🔨", title: "Renovering", desc: "Badrum, kök, fasader eller hela huset. Vi renoverar med hantverksskicklighet och respekt för din bostad." },
//     { icon: "📐", title: "Tillbyggnad", desc: "Utöka ditt hem med ett garage, en altan eller ett extra rum. Vi planerar och utför tillbyggnader anpassade efter dina behov." },
//     { icon: "🪵", title: "Snickeri", desc: "Fönster, dörrar, trappor och inredningssnickeri. Hantverk av högsta klass med fokus på detaljer." },
//     { icon: "🏠", title: "Takarbeten", desc: "Byte av tak, taktäckning och plåtslageri. Vi arbetar med alla typer av takmaterial." },
//     { icon: "🧱", title: "Markarbeten", desc: "Dränering, plattsättning och anläggning av utemiljöer. Vi skapar utemiljöer som håller länge." },
//   ];
//   return (
//     <div className="page">
//       <section>
//         <p className="section-label">Vad vi erbjuder</p>
//         <h2 className="section-title">Våra tjänster</h2>
//         <div className="services-grid">
//           {services.map((s) => (
//             <div className="service-card" key={s.title}>
//               <span className="service-icon">{s.icon}</span>
//               <h3>{s.title}</h3>
//               <p>{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// function About() {
//   return (
    // <div className="page">
    //   <section>
    //     <p className="section-label">Vilka vi är</p>
    //     <h2 className="section-title">Om oss</h2>
    //     <div className="about-grid">
    //       <div>
    //         <p style={{ lineHeight: 1.85, color: "var(--muted)", marginBottom: "1.5rem" }}>
    //           Vi grundades 1998 av [Namn] med en enkel vision: leverera byggarbeten med äkta hantverk och ärlig kommunikation. Idag är vi ett team på [X] hantverkare som delar samma passion för kvalitet.
    //         </p>
    //         <p style={{ lineHeight: 1.85, color: "var(--muted)" }}>
    //           Vi tar oss an projekt av alla storlekar — från ett nytt badrum till ett helt bostadshus. Varje uppdrag får samma omsorg och noggrannhet. Vi är stolta över att majoriteten av våra kunder kommer via rekommendationer.
    //         </p>
    //         <div className="about-stats">
    //           {[["25+", "År i branschen"], ["200+", "Avslutade projekt"], ["98%", "Nöjda kunder"], ["10", "Medarbetare"]].map(([num, label]) => (
    //             <div className="stat" key={label}>
    //               <div className="stat-num">{num}</div>
    //               <div className="stat-label">{label}</div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="about-image">
    //         {/* <img src="/images/team.jpg" alt="Vårt team" /> */}
    //       </div>
    //     </div>
    //   </section>
    // </div>
//   );
// }

// function Contact() {
//   const [sent, setSent] = useState(false);
//   return (
//     <div className="page">
//       <section>
//         <p className="section-label">Hör av dig</p>
//         <h2 className="section-title">Kontakta oss</h2>
//         <div className="contact-layout">
//           <div className="contact-info">
//             <p>Har du ett projekt på gång eller vill veta mer om vad vi kan hjälpa dig med? Fyll i formuläret så hör vi av oss inom 1–2 arbetsdagar.</p>
//             {[
//               ["📍", "Adress", "Exempelgatan 1\n123 45 [Stad]"],
//               ["📞", "Telefon", "070-000 00 00"],
//               ["✉️", "E-post", "info@byggab.se"],
//               ["🕐", "Öppettider", "Mån–Fre: 07.00–17.00"],
//             ].map(([icon, label, text]) => (
//               <div className="contact-detail" key={label}>
//                 <span className="contact-detail-icon">{icon}</span>
//                 <div className="contact-detail-text">
//                   <strong>{label}</strong>
//                   {text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {sent ? (
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--white)", padding: "3rem", textAlign: "center" }}>
//               <div>
//                 <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
//                 <h3 style={{ fontFamily: "var(--serif)", marginBottom: "0.5rem" }}>Tack för ditt meddelande!</h3>
//                 <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Vi återkommer inom 1–2 arbetsdagar.</p>
//               </div>
//             </div>
//           ) : (
//             /* Byt action-URL mot din Formspree-URL: https://formspree.io/f/XXXXXXX */
//             <form action="https://formspree.io/f/XXXXXXX" method="POST" onSubmit={() => setSent(true)}>
//               <div className="form-group">
//                 <label htmlFor="name">Namn</label>
//                 <input id="name" name="name" type="text" placeholder="Anna Svensson" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">E-post</label>
//                 <input id="email" name="email" type="email" placeholder="anna@exempel.se" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Telefon (valfritt)</label>
//                 <input id="phone" name="phone" type="tel" placeholder="070-000 00 00" />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Meddelande</label>
//                 <textarea id="message" name="message" placeholder="Berätta kort om ditt projekt..." required />
//               </div>
//               <button type="submit" className="form-submit">Skicka meddelande</button>
//             </form>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       © {new Date().getFullYear()} <span>ByggAB</span> · Alla rättigheter förbehållna
//     </footer>
//   );
// }

// // ── App ──────────────────────────────────────────────────────────────────────
// export default function App() {
//   return (
//     <Router>
//       <style>{styles}</style>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tjanster" element={<Services />} />
//         <Route path="/om-oss" element={<About />} />
//         <Route path="/kontakt" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }
