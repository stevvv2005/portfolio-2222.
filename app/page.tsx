"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const cvPath = "/files/CV_Oualid_BABA_Engineering_ENSA_Marrakech.pdf";

const navLinks = [
  ["projects", "#projects"],
  ["skills", "#skills"],
  ["about", "#about"],
  ["contact", "#contact"],
] as const;

const projects = [
  {
    index: "01",
    name: "e-car remote",
    tags: ["react", "vite", "tailwind css", "framer motion"],
    description: "realtime dashboard for a miniature electric car with telemetry, sensors, alerts and manual control",
    year: "2026",
    image: "/project-previews/e-car-remote.png",
  },
  {
    index: "02",
    name: "smartfit ai",
    tags: ["html", "css", "javascript", "localstorage"],
    description: "hackathon app for personalized fitness and nutrition based on profile, budget and health constraints",
    year: "2026",
    image: "/project-previews/smartfit-ai.png",
  },
  {
    index: "03",
    name: "ormvao markets",
    tags: ["web app", "database modeling", "public procurement"],
    description: "internship project for public procurement management with database modeling and core business features",
    year: "2025",
    image: "/project-previews/ormvao-markets.png",
  },
  {
    index: "04",
    name: "infochat sql agent",
    tags: ["html", "php", "mysql", "select-only"],
    description: "web chat interface connected to a php backend that validates sql and allows safe select queries",
    year: "2026",
    image: "/project-previews/sql-chatbot.png",
  },
  {
    index: "05",
    name: "mybank",
    tags: ["php", "mysql", "secure auth"],
    description: "banking management application with deposit, withdrawal, transfer and secure authentication flows",
    year: "2025",
    image: "/project-previews/mybank.png",
  },
] as const;

const skills = [
  ["javascript", "84%", "//advanced"],
  ["react.js", "82%", "//proficient"],
  ["node.js", "78%", "//proficient"],
  ["python", "80%", "//proficient"],
  ["php", "76%", "//proficient"],
  ["sql/mysql", "78%", "//proficient"],
  ["linux/cybersecurity", "82%", "//proficient"],
  ["algorithmic problem solving", "84%", "//advanced"],
] as const;

const tools = [
  ["linux", "system"],
  ["git & github", "versioning"],
  ["tailwind css", "frontend"],
  ["framer motion", "animation"],
  ["vite", "build"],
  ["mysql", "database"],
  ["capture the flag", "security"],
  ["photoshop", "design"],
  ["illustrator", "design"],
  ["php backend", "backend"],
  ["database modeling", "analysis"],
] as const;

const values = [
  {
    title: "cybersecurity mindset",
    body: "i treat vulnerabilities, authentication and data flow as core parts of the product",
    icon: "shield",
  },
  {
    title: "problem solving",
    body: "i break complex requirements into clear steps, models and working features",
    icon: "code",
  },
  {
    title: "resilience",
    body: "i keep learning through projects, ctf practice, teamwork and iteration",
    icon: "infinity",
  },
] as const;

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: Readonly<{ children: ReactNode; className?: string; delay?: number }>) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[800ms] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}

function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400&family=Readex+Pro:wght@300;400;500;600;700&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; cursor: none; }

      ::selection { background: #fff; color: #000; }

      html {
        scroll-behavior: smooth;
        background: #000;
      }

      body {
        background: #000 !important;
        color: #fff;
        font-family: 'Readex Pro', system-ui, -apple-system, sans-serif !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .portfolio-shell {
        background: #000;
        min-height: 100vh;
        overflow-x: hidden;
      }

      .noise-overlay {
        position: fixed;
        inset: 0;
        z-index: 999;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
        opacity: 0.4;
      }

      .section-label {
        color: rgba(255,91,18,0.72);
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        letter-spacing: 0.18em;
      }

      .hero-title {
        letter-spacing: -0.04em;
        line-height: 0.92;
      }

      .magnetic {
        transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(28px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes blink {
        0%, 46% { opacity: 1; }
        47%, 100% { opacity: 0; }
      }

      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .anim-word-1 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
      .anim-word-2 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
      .anim-word-3 { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
      .anim-nav { animation: fadeIn 0.7s ease 0.05s both; }
      .anim-desc { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
      .anim-stat-1 { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
      .anim-stat-2 { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both; }
      .anim-stat-3 { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both; }

      .top-nav a {
        color: rgba(255,255,255,0.65);
        text-decoration: none;
        transition: color 0.2s ease;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.01em;
      }

      .top-nav a:hover { color: #ff6b1a; }

      .cv-btn {
        background: #ff5b12;
        border: none;
        border-radius: 9999px;
        color: #fff;
        cursor: none;
        display: inline-flex;
        font-family: 'Readex Pro', system-ui, sans-serif;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.01em;
        padding: 12px 24px;
        text-decoration: none;
        transition: background 0.2s ease;
        white-space: nowrap;
      }

      .cv-btn:hover { background: #ff7f32; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };

      const target = event.target as HTMLElement | null;
      const magnetic = target?.closest(".magnetic") as HTMLElement | null;
      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        magnetic.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const onMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      hovering.current = Boolean(target?.closest("a, button, .magnetic, [data-cursor='hover']"));
    };

    const onMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const magnetic = target?.closest(".magnetic") as HTMLElement | null;
      if (magnetic) magnetic.style.transform = "";
    };

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.18;
      current.current.y += (mouse.current.y - current.current.y) * 0.18;
      if (cursorRef.current) {
        const isHovering = hovering.current;
        cursorRef.current.style.transform = `translate3d(${current.current.x - (isHovering ? 20 : 4)}px, ${
          current.current.y - (isHovering ? 20 : 4)
        }px, 0) scale(1)`;
        cursorRef.current.style.width = isHovering ? "40px" : "8px";
        cursorRef.current.style.height = isHovering ? "40px" : "8px";
        cursorRef.current.style.mixBlendMode = isHovering ? "difference" : "normal";
      }
      frame = requestAnimationFrame(animate);
    };

    let frame = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white transition-[width,height] duration-300"
    />
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="fixed left-0 top-0 z-[100] h-px bg-[#ff5b12]" style={{ width: `${progress}%` }} />;
}

function Icon({ name }: Readonly<{ name: "github" | "linkedin" | "mail" | "external" | "shield" | "code" | "infinity" }>) {
  if (name === "github") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }
  if (name === "external") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (name === "code") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z" />
      <path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#030607]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-95"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ filter: "contrast(1.12) saturate(1.08) brightness(1.04)" }}
        src="/videos/firefly-futuristic-ar-hero.mp4"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,121,36,0.16),transparent_28%),linear-gradient(90deg,rgba(3,6,7,0.84)_0%,rgba(3,6,7,0.46)_42%,rgba(3,6,7,0.68)_100%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-b from-transparent to-[#030607]" />

      <nav className="top-nav anim-nav absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 px-6 pt-6 md:px-10">
        <a
          href="#home"
          className="magnetic flex shrink-0 items-center rounded-full px-6 py-3"
          style={{
            background: "rgba(8,14,16,0.78)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 500, letterSpacing: "0.01em" }}>
            oualid.baba
          </span>
        </a>

        <div
          className="hidden md:flex"
          style={{
            background: "rgba(8,14,16,0.78)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 9999,
            gap: 32,
            padding: "12px 28px",
          }}
        >
          {navLinks.map(([label, href]) => (
            <a className="magnetic" key={label} href={href}>
              {label}
            </a>
          ))}
        </div>

        <a className="cv-btn magnetic shrink-0" href={cvPath} target="_blank" rel="noreferrer">
          download cv
        </a>
      </nav>

      <span
        className="hero-title anim-word-1 absolute font-medium text-white"
        style={{ fontSize: "clamp(64px, 13vw, 13vw)", left: "clamp(16px, 2.5vw, 40px)", top: "18%" }}
      >
        student
      </span>

      <span
        className="hero-title anim-word-2 absolute font-medium text-white"
        style={{ fontSize: "clamp(64px, 12vw, 12vw)", right: "clamp(16px, 2.5vw, 40px)", top: "38%" }}
      >
        <span className="text-[#ff5b12]">software</span>
      </span>

      <span
        className="hero-title anim-word-3 absolute font-medium text-white"
        style={{ fontSize: "clamp(64px, 12vw, 12vw)", left: "clamp(10%, 22%, 22%)", top: "58%" }}
      >
        engineer
      </span>

      <p
        className="anim-desc absolute"
        style={{
          color: "rgba(255,255,255,0.9)",
          fontSize: 15,
          fontWeight: 300,
          left: "clamp(24px, 2.5vw, 40px)",
          lineHeight: 1.45,
          maxWidth: 300,
          top: "46%",
        }}
      >
        i build clean, secure and practical web applications with modern technologies.
      </p>

      <div className="anim-stat-1 absolute" style={{ right: "clamp(24px, 6vw, 96px)", textAlign: "right", top: "14%" }}>
        <div style={{ color: "#ff5b12", fontSize: "clamp(36px, 4.5vw, 52px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
          5+
        </div>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(11px, 1.1vw, 14px)", fontWeight: 300, marginTop: 4 }}>
          cv projects
        </div>
        <div
          className="hidden md:block"
          style={{
            background: "rgba(255,255,255,0.4)",
            height: 1,
            marginLeft: "auto",
            marginTop: 16,
            transform: "rotate(20deg)",
            transformOrigin: "right center",
            width: 96,
          }}
        />
      </div>

      <div className="anim-stat-2 absolute" style={{ bottom: "clamp(80px, 6vw, 96px)", left: "clamp(24px, 5vw, 80px)" }}>
        <div style={{ color: "#ff5b12", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
          10+
        </div>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(11px, 1.1vw, 14px)", fontWeight: 300, marginTop: 4 }}>
          technical skills
        </div>
      </div>

      <div className="anim-stat-3 absolute" style={{ bottom: "clamp(64px, 5vw, 80px)", right: "clamp(24px, 5vw, 80px)", textAlign: "right" }}>
        <div style={{ color: "#ff5b12", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
          3e
        </div>
        <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "clamp(11px, 1.1vw, 14px)", fontWeight: 300, marginTop: 4 }}>
          ensa marrakech
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [preview, setPreview] = useState({ x: 0, y: 0 });

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    setPreview({ x: event.clientX - bounds.left + 24, y: event.clientY - bounds.top - 80 });
  };

  return (
    <section id="projects" ref={sectionRef} onMouseMove={onMove} className="relative min-h-screen bg-black px-6 py-32 md:px-16">
      <Reveal>
        <div className="flex items-center justify-between gap-8">
          <span className="section-label">// 01 - selected work</span>
          <span className="font-mono text-xs text-white/30">5 projects</span>
        </div>
        <h2 className="hero-title mb-20 mt-10 text-[7vw] font-medium text-white">projects.</h2>
      </Reveal>

      <div className="border-b border-t border-white/[0.08]">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <article
              className="group magnetic flex items-start justify-between gap-6 border-t border-white/[0.08] py-8 transition-colors duration-500 first:border-t-0 hover:bg-white/[0.02] md:items-center md:py-10"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              data-cursor="hover"
            >
              <div className="w-16 shrink-0 font-mono text-xs text-white/25">{project.index}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium tracking-tight text-white md:text-4xl">{project.name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#ff5b12]/20 px-3 py-1 text-[11px] text-white/45">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="hidden w-48 text-sm font-light leading-relaxed text-white/50 md:block">{project.description}</p>
              <div className="w-20 shrink-0 text-right md:w-32">
                <div className="font-mono text-xs text-white/30">{project.year}</div>
                <div className="mt-3 text-white/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ff5b12]">
                  <Icon name="external" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div
        className="pointer-events-none absolute hidden h-[160px] w-[240px] overflow-hidden rounded-lg border border-white/10 bg-[#0a0a0a] transition-opacity duration-300 md:block"
        style={{
          left: `${preview.x}px`,
          top: `${preview.y}px`,
          opacity: active === null ? 0 : 1,
        }}
      >
        {active !== null ? <img src={projects[active].image} alt="" className="h-full w-full object-cover opacity-80" /> : null}
      </div>
    </section>
  );
}

function SkillBar({ name, width, level, index }: Readonly<{ name: string; width: string; level: string; index: number }>) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="flex items-center py-5">
      <span className="w-28 text-sm font-medium text-white md:w-36">{name}</span>
      <div className="mx-6 h-px flex-1 bg-white/[0.08]">
        <span
          className="block h-px bg-white transition-all duration-1000"
          style={{
            background: "#ff5b12",
            width: visible ? width : "0%",
            transitionDelay: `${index * 80}ms`,
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
      <span className="font-mono text-[10px] text-white/30">{level}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-[#050505] px-6 py-32 md:px-16">
      <Reveal>
        <div className="flex items-center justify-between gap-8">
          <span className="section-label">// 02 - expertise</span>
          <span className="font-mono text-xs text-white/30">stack and workflow</span>
        </div>
        <h2 className="hero-title mt-10 text-[7vw] font-medium text-white">skills.</h2>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-[1fr_1px_1fr] md:gap-16">
        <Reveal delay={80}>
          <div>
            <span className="section-label">// languages & frameworks</span>
            <div className="mt-6">
              {skills.map(([name, width, level], index) => (
                <SkillBar key={name} name={name} width={width} level={level} index={index} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="hidden bg-white/[0.08] md:block" />

        <Reveal delay={160}>
          <div>
            <span className="section-label">// tools & environment</span>
            <div className="mt-6 rounded-xl border border-white/[0.08] bg-black p-6 font-mono text-sm">
              <div className="mb-4 text-xs text-white/25">~/oualid/toolchain $ ls -la</div>
              {tools.map(([tool, category], index) => (
                <div key={tool} className="flex gap-4 py-1 text-white/60 transition-colors hover:text-white">
                  <span className="w-6 text-white/20">{index + 1}</span>
                  <span className="w-24 text-white/30">drwxr-xr-x</span>
                  <span>{tool}</span>
                  <span className="ml-auto text-xs text-white/20">{category}</span>
                </div>
              ))}
              <div className="mt-4 text-white/60">
                <span style={{ animation: "blink 1s steps(1) infinite" }}>_</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const marquee =
    "engineering student * open to internship * based in morocco * ensa marrakech * cybersecurity-focused * data analysis * ";

  return (
    <section id="about" className="bg-black px-6 py-32 md:px-16">
      <div className="mb-24 overflow-hidden border-y border-white/[0.08] py-5">
        <div className="flex w-max whitespace-nowrap font-mono text-sm text-white/30" style={{ animation: "marquee 20s linear infinite" }}>
          <span>{marquee}</span>
          <span>{marquee}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
        <Reveal>
          <span className="section-label">// 03 - about</span>
          <h2 className="hero-title mt-10 text-[12vw] font-medium text-white md:text-[6vw]">who i am.</h2>
          <p className="mt-8 text-base font-light leading-[1.75] text-white/65 md:text-lg">
            i&apos;m a computer engineering student at ensa marrakech, based in morocco and focused on software development,
            cybersecurity and data analysis. i build practical web applications, dashboards and database-driven tools from
            concrete requirements. currently seeking an internship where i can apply my skills to real technical projects.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div>
            {[
              ["3e", "ensa year"],
              ["5+", "cv projects"],
              ["2026", "latest work"],
              ["morocco", "based in"],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-white/[0.08] pb-6 pt-6">
                <div className="font-mono text-[12vw] font-light leading-none text-white md:text-[3.5vw]">{value}</div>
                <div className="section-label mt-1">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="bg-black p-6 transition-colors hover:bg-white/[0.03]">
              <div className="text-white/40">
                <Icon name={value.icon} />
              </div>
              <h3 className="mt-4 text-sm font-medium text-white">{value.title}</h3>
              <p className="mt-1 text-xs font-light leading-relaxed text-white/45">{value.body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function ContactLink({ href, label }: Readonly<{ href: string; label: string }>) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group magnetic flex items-center gap-3 font-mono text-sm text-white/50 transition-colors duration-300 hover:text-white"
    >
      <span className="h-px w-8 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
      {label}
      <span className="opacity-0 transition-opacity group-hover:opacity-100">
        <Icon name="external" />
      </span>
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-40 text-center md:px-16">
      <Reveal>
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-[#ff5b12]/25 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#ff5b12]" />
          <span className="font-mono text-xs text-white/50">available for internship - 2026</span>
        </div>

        <h2 className="hero-title text-[10vw] font-medium text-white md:text-[7vw]">
          {["let's", "build", "something."].map((word) => (
            <span key={word} className="inline-block transition-transform duration-300 hover:skew-x-[-3deg]">
              {word}&nbsp;
            </span>
          ))}
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-white/45 md:text-base">
          open to internships, technical projects and meaningful collaborations.
        </p>

        <div className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row">
          <ContactLink href="mailto:oualidbaba2005@gmail.com" label="oualidbaba2005@gmail.com" />
          <ContactLink href={cvPath} label="download cv" />
          <ContactLink href="https://www.linkedin.com/in/oualid-baba-2b29412a4" label="linkedin" />
          <ContactLink href="tel:+212715033808" label="+212 7 15 03 38 08" />
        </div>
      </Reveal>

      <div className="select-none py-16 text-center font-mono text-[10px] leading-tight text-white/[0.05]">
        <div>-------------------------------------------------------------</div>
        <div>oualid baba * engineering student * ensa marrakech</div>
        <div>-------------------------------------------------------------</div>
      </div>

      <footer className="mt-0 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pb-12 pt-8 md:flex-row">
        <span className="font-mono text-xs text-white/20">(c) 2026 oualid baba</span>
        <div className="flex items-center gap-5 text-white/30">
          <a className="transition-colors hover:text-white" href={cvPath} target="_blank" rel="noreferrer" aria-label="cv">
            <Icon name="external" />
          </a>
          <a
            className="transition-colors hover:text-white"
            href="https://www.linkedin.com/in/oualid-baba-2b29412a4"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <Icon name="linkedin" />
          </a>
          <a className="transition-colors hover:text-white" href="mailto:oualidbaba2005@gmail.com" aria-label="mail">
            <Icon name="mail" />
          </a>
          <a className="transition-colors hover:text-white" href="tel:+212715033808" aria-label="phone">
            <Icon name="external" />
          </a>
        </div>
        <span className="font-mono text-xs text-white/20">crafted with precision</span>
      </footer>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <GlobalStyles />
      <main className="portfolio-shell">
        <div className="noise-overlay" />
        <ScrollProgress />
        <CustomCursor />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
