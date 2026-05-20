import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState, useRef } from "react";

import linux        from "./assets/logo/linux-svgrepo-com.svg";
import ts           from "./assets/ts.svg";
import portfolio5   from "./assets/portfolio5.png";
import sakusiswa    from "./assets/sakusiswa.png";
import ctf          from "./assets/logo/imagesctf.jpg";
import bootstrap    from "./assets/bootstrap.png";
import php          from "./assets/logo/php-svgrepo-com.svg";
import python       from "./assets/logo/python-svgrepo-com.svg";
import tailwind     from "./assets/logo/tailwind-svgrepo-com.svg";
import unity        from "./assets/gambar43.png";
import react        from "./assets/logo/react-svgrepo-com.svg";
import figma        from "./assets/logo/figma-svgrepo-com.svg";
import js           from "./assets/logo/js-svgrepo-com.svg";
import html         from "./assets/logo/html-5-svgrepo-com(1).svg";
import css          from "./assets/logo/css-3-svgrepo-com.svg";
import pelatihan    from "./assets/pelatihan.jpg";
import linkedinmicrosoft from "./assets/linkedinmicrosoft.png";
import cisco        from "./assets/cisco.png";
import mysql        from "./assets/logo/mysql-logo-svgrepo-com.svg";
import photoshop    from "./assets/logo/photoshop-cc-logo-svgrepo-com.svg";
import canva        from "./assets/canva.png";
import laravel      from "./assets/logo/laravel-svgrepo-com.svg";
import lightroom    from "./assets/logo/adobe-lightroom-svgrepo-com.svg";
import displaygambar from "./assets/display.png";
import flappymonkey from "./assets/gambar2.jpg";
import perpus       from "./assets/gambar2.png";
import cv           from "./assets/CV - Andika Cahya Rahman.pdf";
import git          from "./assets/gittt.png";
import github       from "./assets/github.webp";
import robloxstudio from "./assets/rstudio.png";
import profile from "./assets/profile.png";

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #030b03;
    --bg2:       #070f07;
    --bg3:       #0a140a;
    --surface:   #0e1a0e;
    --border:    #1a3a1a;
    --border2:   #245a24;
    --green:     #00ff41;
    --green2:    #00cc33;
    --green3:    #009922;
    --green-dim: #004d14;
    --amber:     #ffb700;
    --text:      #b8d4b8;
    --text2:     #6e9a6e;
    --font-mono: 'Share Tech Mono', monospace;
    --font-body: 'Rajdhani', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* scanline overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,255,65,0.015) 2px,
      rgba(0,255,65,0.015) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--green3); border-radius: 2px; }

  /* section fade-in on scroll */
  .fade-section {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* reusable */
  .section-label {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--green3);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .section-title {
    font-family: var(--font-body);
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    color: var(--green);
    letter-spacing: 0.02em;
  }
  .divider {
    width: 60px;
    height: 2px;
    background: var(--green3);
    margin: 16px auto 40px;
    position: relative;
  }
  .divider::after {
    content: '';
    position: absolute;
    left: 60px;
    top: 0;
    width: 20px;
    height: 2px;
    background: var(--green-dim);
  }

  /* glow text */
  .glow {
    text-shadow: 0 0 20px rgba(0,255,65,0.5), 0 0 60px rgba(0,255,65,0.2);
  }
`;

function StyleInjector() {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.innerHTML = GLOBAL_CSS;
    document.head.appendChild(tag);
    return () => {
      document.head.removeChild(tag);
    };
  }, []);
  return null;
}

function useFadeIn(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}

const boot = [
  "Initializing secure shell...",
  "Loading kernel modules...",
  "Detecting hardware...",
  "Mounting file systems...",
  "Starting services...",
  "Welcome to ANDIKA_CAHYA_RAHMAN.SYS",
];

function LoadingScreen({ fadeout }: { fadeout: boolean }) {
  const [dots, setDots] = useState<string>("");
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < boot.length) setLines((p) => [...p, boot[i++]]);
      else clearInterval(id);
    }, 800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setDots((d) => (d.length >= 3 ? "" : d + ".")), 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030b03",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 32,
        transition: "opacity 1s ease",
        opacity: fadeout ? 0 : 1,
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >
      {/* ASCII border */}
      <div style={{ color: "#00cc33", fontSize: 13, lineHeight: 1.3, userSelect: "none" }}>
        {`╔════════════════════════════════╗`}<br/>
        {`║   ANDIKA_CAHYA_RAHMAN.SYS v2.0    ║`}<br/>
        {`╚════════════════════════════════╝`}
      </div>

      <div style={{ width: 340 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ color: i === lines.length - 1 ? "#00ff41" : "#4d8a4d", fontSize: 13, marginBottom: 6 }}>
            <span style={{ color: "#00cc33" }}>{">"} </span>{l}
          </div>
        ))}
        {lines.length < boot.length && (
          <div style={{ color: "#00cc33", fontSize: 13 }}>{">"} {dots}</div>
        )}
      </div>

      <div style={{ width: 340, height: 4, background: "#0a1a0a", borderRadius: 2, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #003d10, #00ff41)",
            width: `${(lines.length / boot.length) * 100}%`,
            transition: "width 0.4s ease",
            boxShadow: "0 0 8px #00ff41",
          }}
        />
      </div>
    </div>
  );
}

const NAV_LINKS = ["Home", "About", "Certificate", "Skills", "Project", "Contact"];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: 12,
    color: "var(--text2)",
    textDecoration: "none",
    letterSpacing: "0.08em",
    padding: "6px 12px",
    border: "1px solid transparent",
    borderRadius: 2,
    transition: "all 0.2s",
  };

  return (
    <Disclosure
      as="nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(3,11,3,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", fontSize: 13 }}>{"["}</span>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--green)", fontSize: 15, letterSpacing: "0.05em" }}>
              ANDIKA_CAHYA_RAHMAN
            </span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--green)", fontSize: 13 }}>{"]"}</span>
          </div>

<div
  className="hidden sm:flex"
  style={{ gap: 4 }}
>            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={linkStyle}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "var(--green)";
                  target.style.borderColor = "var(--green3)";
                  target.style.background = "rgba(0,255,65,0.05)";
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.color = "var(--text2)";
                  target.style.borderColor = "transparent";
                  target.style.background = "transparent";
                }}
              >
                ./{l}
              </a>
            ))}
          </div>

          <DisclosureButton
            className="sm:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--green)" }}
          >
            {({ open }) =>
              open
                ? <XMarkIcon style={{ width: 22, height: 22 }} />
                : <Bars3Icon style={{ width: 22, height: 22 }} />
            }
          </DisclosureButton>
        </div>
      </div>

      <DisclosurePanel>
        <div style={{ borderTop: "1px solid var(--border)", padding: "12px 24px", background: "rgba(3,11,3,0.98)" }}>
          {NAV_LINKS.map((l) => (
            <DisclosureButton key={l} as="a" href={`#${l.toLowerCase()}`}
              style={{ display: "block", padding: "10px 0", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--green2)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}
            >
              <span style={{ color: "var(--green3)" }}> </span>./{l}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

function Typewriter({ text, speed = 80 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("");
  const [idx, setIdx] = useState(0);
  const [mode, setMode] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    let t: number | undefined;

    const jitter = Math.floor(Math.random() * 35);
    const base = Math.max(10, speed + jitter);
    const extraPause = text[idx] === " " ? 60 : 0;

    if (mode === "typing") {
      if (idx >= text.length) {
        setMode("pausing");
        return;
      }

      t = window.setTimeout(() => {
        setOut((p) => p + text[idx]);
        setIdx((i) => i + 1);
      }, base + extraPause);
    }

    if (mode === "pausing") {
      t = window.setTimeout(() => {
        setMode("deleting");
      }, 900);
    }

    if (mode === "deleting") {
      if (idx <= 0) {
        setMode("typing");
        setOut("");
        setIdx(0);
        return;
      }

      t = window.setTimeout(() => {
        setOut((p) => p.slice(0, -1));
        setIdx((i) => i - 1);
      }, Math.max(15, base * 0.55));
    }

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [idx, text, speed, mode]);

  const caretKeyframes = `
    @keyframes caretBlink {
      0%, 45% { opacity: 1; }
      50% { opacity: 0; }
      55%, 100% { opacity: 1; }
    }
    @keyframes caretNudge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(0.5px); }
    }
  `;

  return (
    <span>
      {out}
      <span
        aria-hidden
        style={{
          display: "inline-block",
          width: 2,
          height: "1em",
          background: "var(--green)",
          marginLeft: 3,
          verticalAlign: "baseline",
          animation: "caretBlink 0.9s step-start infinite, caretNudge 0.45s ease-in-out infinite",
          boxShadow: "0 0 12px rgba(0,255,65,0.25)",
        }}
      />
      <style>{caretKeyframes}</style>
    </span>
  );
}

function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 300); }, []);

  return (
   <section
  id="home"
  className="flex flex-col md:flex-row items-center justify-center gap-10"
  style={{
    minHeight: "92vh",
    padding: "60px 24px",
    maxWidth: 1200,
    margin: "0 auto",
    position: "relative",
  }}
>
      <div style={{
       position: "relative", maxWidth: 680, flex: 1, inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: 680 }}>
        <div className="section-label" style={{ marginBottom: 16, animationDelay: "0.2s" }}>
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--green)",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 16,
            opacity: show ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
          className="glow"
        >
          {show && <Typewriter text="Hi, I'm Andika" speed={70} />}
        </div>

        <div style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(18px, 2.5vw, 24px)",
          color: "var(--green2)",
          fontWeight: 600,
          letterSpacing: "0.08em",
          marginBottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          Software Engineering Student
        </div>

        <p style={{ color: "var(--text)", lineHeight: 1.8, fontSize: 16, maxWidth: 560, marginBottom: 36 }}>
          A vocational school student passionate about web development, application engineering,
          and information security. Always hunting for the next challenge.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a
            href={cv}
            download
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--green)",
              border: "1px solid var(--green3)",
              padding: "10px 24px",
              textDecoration: "none",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s",
              background: "rgba(0,255,65,0.05)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,255,65,0.12)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,65,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,255,65,0.05)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <span>↓</span> ./download_cv
          </a>
          <a
            href="#aboutme"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--text2)",
              border: "1px solid var(--border2)",
              padding: "10px 24px",
              textDecoration: "none",
              borderRadius: 2,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--green)"; e.currentTarget.style.borderColor = "var(--green3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.borderColor = "var(--border2)"; }}
          >
            ./about_me
          </a>
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 48 }}>
          {[
            { href: "https://www.linkedin.com/in/andika-cahya-rahman-a6704b2a2/", icon: "fab fa-linkedin" },
            { href: "https://www.instagram.com/kuroshii274._", icon: "fab fa-instagram" },
            { href: "https://github.com/kuroshii251", icon: "fab fa-github" },
          ].map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--text2)", fontSize: 20, transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--green)"; e.currentTarget.style.textShadow = "0 0 12px rgba(0,255,65,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text2)"; e.currentTarget.style.textShadow = "none"; }}
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>

     <div className="flex">
  <img
    src={profile}
    alt="Profile"
    className="w-150 md:w-200"
  />
</div>

      <div style={{ position: "absolute", top: 40, right: 40, fontFamily: "var(--font-mono)", color: "var(--green-dim)", fontSize: 11, lineHeight: 1.5, userSelect: "none", display: "none" }} className="sm:block">
        {`> STATUS: ONLINE`}<br/>
        {`> LOCATION: ID / JKT`}<br/>
        {`> MODE: OPEN_TO_WORK`}
      </div>
    </section>
  );
}

function Section({ id, label, title, children, style = {} }: { id: string; label: string; title: string; children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef<HTMLElement>(null);
  useFadeIn(ref);

  return (
    <section
      id={id}
      ref={ref}
      className="fade-section"
      style={{
        padding: "100px 24px",
        maxWidth: 1200,
        margin: "0 auto",
        ...style,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="section-label">{label}</div>
        <h2 className="section-title glow">{title}</h2>
        <div className="divider" />
      </div>
      {children}
    </section>
  );
}

function AboutMe() {
  return (
    <Section id="aboutme" label="" title="About Me">
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        padding: "36px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* top bar */}
        <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
          {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
            <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c, opacity: 0.7 }} />
          ))}
        </div>

        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 2 }}>
          <div><span style={{ color: "var(--green3)" }}>$ cat</span> <span style={{ color: "var(--text2)" }}>profile.txt</span></div>
          <br/>
          <div style={{ color: "var(--text)", fontSize: 16, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            My name is <span style={{ color: "var(--green)", fontWeight: 600 }}>Andika Cahya Rahman</span>. I have a strong
            interest in programming and computers. I enjoy learning new things — academic and
            non-academic alike — especially areas I haven't yet mastered.
          </div>
          <br/>
          <div style={{ color: "var(--text)", fontSize: 16, fontFamily: "var(--font-body)", lineHeight: 1.8 }}>
            I'm passionate about solving problems effectively in every assignment or project I take on,
            and I continuously seek to sharpen my skills in both development and security.
          </div>
          <br/>
          <div><span style={{ color: "var(--green3)" }}>$ _</span></div>
        </div>

        {/* decorative corner */}
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 80, height: 80,
          borderTop: "1px solid var(--border2)",
          borderLeft: "1px solid var(--border2)",
          pointerEvents: "none",
        }} />
      </div>
    </Section>
  );
}

function Certificate() {
  const certs = [
    { src: cisco,            label: "Cisco" },
    { src: linkedinmicrosoft, label: "LinkedIn × Microsoft" },
    { src: pelatihan,        label: "Pelatihan" },
  ];

  return (
    <Section id="certificate" label="" title="Certificates">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {certs.map((c) => (
          <div key={c.label}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 4,
              overflow: "hidden",
              transition: "all 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--green3)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,65,0.1)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "none";
            }}
          >
            <img src={c.src} alt={c.label} style={{ width: "100%", display: "block" }} />
            <div style={{
              padding: "12px 16px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--green3)",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
           {c.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ src, label }: { src: string; label: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        transition: "all 0.25s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--green3)";
        e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,65,0.12), inset 0 0 20px rgba(0,255,65,0.03)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <img src={src} alt={label} style={{ width: 44, height: 44, objectFit: "contain", filter: "brightness(0.9)" }} />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text2)", letterSpacing: "0.05em" }}>
        {label}
      </span>
    </div>
  );
}

function SkillGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 24,
      }}>
        <div style={{ width: 6, height: 6, background: "var(--green)", borderRadius: "50%" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--green2)", letterSpacing: "0.1em" }}>
          {title.toUpperCase()}
        </span>
        <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 12 }}>
        {children}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" label="" title="Skills">
      <SkillGroup title="Software Development">
        <SkillCard src={html}      label="HTML" />
        <SkillCard src={css}       label="CSS" />
        <SkillCard src={bootstrap} label="Bootstrap" />
        <SkillCard src={tailwind}  label="Tailwind" />
        <SkillCard src={js}        label="JavaScript" />
        <SkillCard src={react}     label="React JS" />
        <SkillCard src={ts}        label="TypeScript" />
        <SkillCard src={php}       label="PHP" />
        <SkillCard src={laravel}   label="Laravel" />
        <SkillCard src={mysql}     label="MySQL" />
        <SkillCard src={python}    label="Python" />
        <SkillCard src={git}       label="Git" />
        <SkillCard src={github}    label="GitHub" />
      </SkillGroup>

      <SkillGroup title="Cyber Security">
        <SkillCard src={linux}     label="Linux" />
        <SkillCard src={ctf}       label="CTF" />
      </SkillGroup>

      <SkillGroup title="Game Development">
        <SkillCard src={unity}       label="Unity" />
        <SkillCard src={robloxstudio} label="Roblox Studio" />
      </SkillGroup>

      <SkillGroup title="Design & Edit">
        <SkillCard src={figma}      label="Figma" />
        <SkillCard src={canva}      label="Canva" />
        <SkillCard src={photoshop}  label="Photoshop" />
        <SkillCard src={lightroom}  label="Lightroom" />
      </SkillGroup>
    </Section>
  );
}

function ProjectCard({ src, title, desc, href }: { src: string; title: string; desc: string; href?: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        overflow: "hidden",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--green3)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,255,65,0.08)";
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
        <img src={src} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "scale(1.06)"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "scale(1)"; }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(3,11,3,0.8))",
        }} />
      </div>

      <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        <h3 style={{
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          fontSize: 18,
          color: "var(--green)",
          letterSpacing: "0.03em",
        }}>
          {title}
        </h3>
        <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.7, flex: 1 }}>{desc}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--green3)",
              textDecoration: "none",
              border: "1px solid var(--border2)",
              padding: "6px 14px",
              borderRadius: 2,
              alignSelf: "flex-start",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--green)"; e.currentTarget.style.borderColor = "var(--green3)"; e.currentTarget.style.background = "rgba(0,255,65,0.06)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--green3)"; e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.background = "transparent"; }}
          >
            ./view_project ↗
          </a>
        )}
      </div>
    </div>
  );
}

function Project() {
  const projects = [
    {
      src: displaygambar,
      title: "Gym Rex",
      desc: "A complete gym movement guide app with step-by-step instructions and tips. Built as my vocational final project.",
      href: "https://drive.google.com/file/d/1Ebw4BBCaJQ_F_15VdZ5YrdOJtqHUJjLB/view",
    },
    {
      src: flappymonkey,
      title: "Flappy Monkey",
      desc: "Inspired by Flappy Bird — players score by navigating through pipe obstacles. Vocational final project in Unity.",
      href: "https://drive.google.com/file/d/1OD4UT5H0jQQZN6uLEM0KvRud4Me_35RB/view",
    },
    {
      src: sakusiswa,
      title: "Saku Siswa",
      desc: "A student financial management system to help students track and monitor their daily expenses.",
      href: "https://drive.google.com/file/d/1OD4UT5H0jQQZN6uLEM0KvRud4Me_35RB/view",
    },
    {
      src: perpus,
      title: "E-Library",
      desc: "An online library platform allowing users to read and borrow books digitally without visiting physically.",
    },
    {
      src: portfolio5,
      title: "Chat.in",
      desc: "A web app where users can chat directly with their favorite idol or character powered by AI.",
      href: "https://chat-in-8l9g.vercel.app/",

    },
  ];

  return (
    <Section id="project" label="" title="Projects">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  );
}

function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/myzpqran", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 2,
    padding: "10px 14px",
    color: "var(--text)",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    outline: "none",
    transition: "border-color 0.2s",
  };


  return (
    <Section id="contact" label="" title="Contact">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, maxWidth: 900, margin: "0 auto" }}>
        {/* Form */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 4, padding: 32 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
            {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.6 }} />
            ))}
          </div>

          {status === "sent" ? (
            <div style={{ fontFamily: "var(--font-mono)", color: "var(--green)", lineHeight: 2, fontSize: 13 }}>
              <div>{">"} Message received. ✓</div>
              <div>{">"} I'll get back to you soon.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="andika@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "var(--green3)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--green3)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  background: "transparent",
                  border: "1px solid var(--green3)",
                  color: "var(--green)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  padding: "10px 24px",
                  cursor: "pointer",
                  borderRadius: 2,
                  transition: "all 0.2s",
                  letterSpacing: "0.1em",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,255,65,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
              >
                {status === "sending" ? "SENDING..." : "[ SEND_MESSAGE ]"}
              </button>
              {status === "error" && (
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#ff4444" }}>
                  Error: failed to send. Try again.
                </span>
              )}
            </form>
          )}
        </div>

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
          {[
            { icon: "fab fa-whatsapp", label: "WHATSAPP", value: "+62 887-1729-638" },
            { icon: "fas fa-envelope",  label: "EMAIL",    value: "andikacrwork@gmail.com" },
            { icon: "fas fa-map-marker-alt", label: "LOCATION", value: "East Jakarta, Indonesia" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <div style={{
                width: 40, height: 40, border: "1px solid var(--border2)",
                borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--green3)", fontSize: 16, flexShrink: 0,
                background: "rgba(0,255,65,0.03)",
              }}>
                <i className={item.icon} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--green3)", letterSpacing: "0.15em", marginBottom: 4 }}>
                   {item.label}
                </div>
                <div style={{ color: "var(--text)", fontFamily: "var(--font-body)", fontSize: 15 }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "48px 24px",
      textAlign: "center",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        color: "var(--green)",
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: "0.1em",
        marginBottom: 24,
      }} className="glow">
        ANDIKA_CAHYA_RAHMAN
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 24, flexWrap: "wrap" }}>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text2)", textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--green)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--text2)"; }}
          >
            ./{l.toLowerCase()}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 32 }}>
        {[
          { href: "https://www.linkedin.com/in/andika-cahya-rahman-a6704b2a2/", icon: "fab fa-linkedin" },
          { href: "https://www.instagram.com/kuroshii274._", icon: "fab fa-instagram" },
          { href: "https://github.com/kuroshii251", icon: "fab fa-github" },
        ].map((s) => (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--text2)", fontSize: 18, transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--green)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text2)"; }}
          >
            <i className={s.icon} />
          </a>
        ))}
      </div>

      <div style={{ height: 1, background: "var(--border)", maxWidth: 200, margin: "0 auto 20px" }} />

      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--green-dim)", letterSpacing: "0.1em" }}>
        © {year} ANDIKA_CAHYA_RAHMAN — ALL RIGHTS RESERVED
      </p>
    </footer>
  );
}

function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Certificate />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

function SystemLoading() {
  const [loading, setLoading] = useState(true);
  const [fadeout, setFadeout] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setFadeout(true);
      setTimeout(() => setLoading(false), 1000);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <StyleInjector />
      {loading ? <LoadingScreen fadeout={fadeout} /> : <Main />}
    </>
  );
}

export default SystemLoading;