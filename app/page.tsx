"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  Download,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Star,
} from "lucide-react";
import { useMemo, useState, type ComponentType } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const profile = {
  name: "BABA Oualid",
  title: "Eleve ingenieur en informatique",
  school: "ENSA Marrakech - 3e annee",
  location: "Maroc",
  phone: "+212 7 15 03 58 08",
  email: "oualidbaba2005@gmail.com",
  linkedin: "oualid-baba-2b29412a4",
  cv: "/files/CV_Oualid_BABA_Engineering_ENSA_Marrakech.pdf",
  intro:
    "Eleve ingenieur en informatique a l'ENSA Marrakech, passionne par la resolution de problemes complexes, le developpement de solutions innovantes et les projets techniques concrets.",
  about:
    "Interesse par le developpement logiciel, la cybersecurite et l'analyse de donnees, je m'investis activement dans des projets afin de renforcer mes competences. Je recherche un stage afin de mettre en pratique mes acquis et contribuer a des projets concrets.",
};

const navLinks = [
  ["Accueil", "#accueil"],
  ["A propos", "#apropos"],
  ["Competences", "#competences"],
  ["Projets", "#projets"],
  ["Formation", "#experiences"],
  ["Contact", "#contact"],
] as const;

const skillTabs = ["Langages", "Technologies", "Systemes", "Outils"] as const;
const projectTabs = ["Tous", "Stages", "Academiques", "Cybersecurite"] as const;

const skillsByTab = {
  Langages: [
    { name: "C", mark: "C", level: 78 },
    { name: "C++", mark: "C++", level: 76 },
    { name: "Python", mark: "PY", level: 80 },
    { name: "PHP", mark: "PHP", level: 74 },
    { name: "JavaScript", mark: "JS", level: 84 },
  ],
  Technologies: [
    { name: "Node.js", mark: "ND", level: 78 },
    { name: "React.js", mark: "RE", level: 80 },
    { name: "MySQL", mark: "SQL", level: 78 },
    { name: "SQL", mark: "DB", level: 78 },
    { name: "Web Apps", mark: "WEB", level: 82 },
  ],
  Systemes: [
    { name: "Linux", mark: "LX", level: 82 },
    { name: "Cybersecurite", mark: "CY", level: 82 },
    { name: "Capture The Flag", mark: "CTF", level: 81 },
    { name: "Analyse de vulnerabilites", mark: "SEC", level: 80 },
    { name: "Analyse de donnees", mark: "DATA", level: 76 },
  ],
  Outils: [
    { name: "Git", mark: "GIT", level: 88 },
    { name: "GitHub", mark: "GH", level: 88 },
    { name: "Photoshop", mark: "PS", level: 78 },
    { name: "Illustrator", mark: "AI", level: 74 },
    { name: "Algorithmique", mark: "ALG", level: 84 },
  ],
};

const projectList = [
  {
    title: "ORMVAO - Gestion des marches publics",
    type: "Stages",
    period: "Aout 2025",
    tags: ["Stage", "Application web", "Base de donnees"],
    description:
      "Conception et developpement d'une application web de gestion des marches publics: modelisation, base de donnees et implementation des fonctionnalites principales.",
  },
  {
    title: "Chatbot connecte a une base SQL",
    type: "Cybersecurite",
    period: "Janvier 2026",
    tags: ["SQL", "IA", "Cybersecurite"],
    description:
      "Projet Ateliers IA & cybersecurite: conception d'une base relationnelle, developpement du backend en PHP et integration du chatbot avec la base de donnees.",
  },
  {
    title: "MYBank - ENSA Marrakech",
    type: "Academiques",
    period: "Mai 2025",
    tags: ["PHP", "MySQL", "Securite"],
    description:
      "Application de gestion bancaire avec operations de depot, retrait, virement et authentification securisee.",
  },
  {
    title: "Capture The Flag",
    type: "Cybersecurite",
    period: "2024 - Present",
    tags: ["Linux", "CTF", "Vulnerabilites"],
    description:
      "Pratique de challenges CTF pour renforcer la logique systeme, l'analyse de vulnerabilites et les reflexes de securite.",
  },
  {
    title: "Git & GitHub Labs",
    type: "Academiques",
    period: "2025",
    tags: ["Git", "GitHub", "DataScience"],
    description:
      "Certification 365 DataScience et travaux pratiques autour du versioning, de la collaboration et des workflows Git.",
  },
  {
    title: "Portfolio Engineering",
    type: "Academiques",
    period: "2026",
    tags: ["Next.js", "React", "Tailwind"],
    description:
      "Portfolio personnel presentant le parcours ENSA, les projets techniques, les competences et les informations de contact.",
  },
];

const timeline = [
  {
    title: "Formation",
    icon: GraduationCap,
    entries: [
      {
        year: "2023 - Present",
        heading: "Cycle preparatoire integre - Genie Informatique",
        text: "ENSA Marrakech. Parcours d'ingenierie informatique avec bases solides en algorithmique, programmation, systemes et bases de donnees.",
      },
      {
        year: "2022 - 2023",
        heading: "Baccalaureat Sciences Mathematiques A - Mention Tres Bien",
        text: "Lycee Sidi Daoud - Ouarzazate.",
      },
    ],
  },
  {
    title: "Projets & Experiences",
    icon: BriefcaseBusiness,
    entries: [
      {
        year: "Aout 2025",
        heading: "Stage - ORMVAO Ouarzazate",
        text: "Developpement d'une application de gestion des marches publics: conception, modelisation et implementation web.",
      },
      {
        year: "Janvier 2026",
        heading: "Chatbot SQL - Ateliers IA & cybersecurite",
        text: "Conception d'une base relationnelle, backend PHP et integration du chatbot avec la base de donnees.",
      },
      {
        year: "Mai 2025",
        heading: "Projet MYBank - ENSA Marrakech",
        text: "Application bancaire avec depot, retrait, virement et authentification securisee.",
      },
    ],
  },
];

const highlights = [
  {
    title: "Certificats",
    items: ["Git & GitHub - 365 DataScience", "ChatGPT for SQL - DataScience", "JavaScript Intermediate - HackerRank"],
  },
  {
    title: "Langues",
    items: ["Arabe: bilingue", "Francais: bilingue", "Anglais: courant professionnel"],
  },
  {
    title: "Competences personnelles",
    items: ["Esprit analytique", "Creativite", "Travail en equipe", "Gestion du temps", "Resilience"],
  },
];

const artworkImages = {
  dragon: "/solo/solo-1.jpg",
  blade: "/solo/solo-2.jpg",
  shadow: "/solo/solo-3.jpg",
  chains: "/solo/solo-4.jpg",
};

const fadeIn = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionTag({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="section-index">{index}</span>
      <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(150,101,255,0.8),rgba(150,101,255,0))]" />
      <span className="text-[0.65rem] uppercase tracking-[0.32em] text-violet-300/70">{title}</span>
    </div>
  );
}

function Panel({
  className,
  image,
  imageAlt = "",
  children,
}: Readonly<{
  className?: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
}>) {
  return (
    <section className={cn("panel-base", className)}>
      {image ? <img src={image} alt={imageAlt} className="panel-bg-image" /> : null}
      {image ? <div className="panel-bg-overlay" /> : null}
      <div className="panel-content">{children}</div>
    </section>
  );
}

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState<(typeof skillTabs)[number]>("Langages");
  const [activeProjectTab, setActiveProjectTab] = useState<(typeof projectTabs)[number]>("Tous");
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutItems: Array<{ label: string; value: string; icon: ComponentType<{ className?: string }> }> = [
    { label: "Nom", value: profile.name, icon: Sparkles },
    { label: "Niveau", value: "3e annee", icon: Rocket },
    { label: "Email", value: profile.email, icon: Mail },
    { label: "Localisation", value: profile.location, icon: MapPin },
  ];

  const contactItems: Array<{ label: string; value: string; icon: ComponentType<{ className?: string }> }> = [
    { label: "Email", value: profile.email, icon: Mail },
    { label: "Telephone", value: profile.phone, icon: Phone },
    { label: "Localisation", value: profile.location, icon: MapPin },
    { label: "LinkedIn", value: profile.linkedin, icon: BriefcaseBusiness },
  ];

  const filteredProjects = useMemo(() => {
    if (activeProjectTab === "Tous") {
      return projectList.slice(0, 3);
    }
    return projectList.filter((project) => project.type === activeProjectTab).slice(0, 3);
  }, [activeProjectTab]);

  return (
    <main className="portfolio-root">
      <div className="page-orb page-orb-a" />
      <div className="page-orb page-orb-b" />
      <div className="page-noise" />

      <div className="mx-auto max-w-[1680px] px-3 py-3 sm:px-4">
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="sticky top-3 z-50 mb-3"
        >
          <div className="nav-shell">
            <a href="#accueil" className="flex items-center gap-3">
              <div className="logo-mark">
                <span>OB</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">BABA Oualid</p>
                <p className="text-xs text-slate-400">Engineering Portfolio</p>
              </div>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} className="nav-link">
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button asChild className="hero-button hidden sm:inline-flex">
                <a href={profile.cv} download>
                  Telecharger CV
                  <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/10 bg-white/5 text-white lg:hidden"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mt-2 rounded-[22px] border border-white/10 bg-[#090815]/95 p-3 backdrop-blur-xl lg:hidden">
              <div className="flex flex-col gap-1">
                {navLinks.map(([label, href]) => (
                  <a key={href} href={href} className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </motion.header>

        <div className="grid gap-3">
          <motion.div {...fadeIn} id="accueil">
            <Panel className="panel-hero" image={artworkImages.dragon} imageAlt="Solo Leveling purple artwork">
              <SectionTag index="01" title="Eleve ingenieur" />
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="mb-4 text-xl font-light text-slate-100 sm:text-3xl">Bonjour, je suis</p>
                    <h1 className="text-5xl font-black leading-none text-violet-400 sm:text-7xl">{profile.name}</h1>
                    <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200">
                      {profile.title} | {profile.school}
                    </p>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{profile.intro}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button className="hero-button" asChild>
                      <a href="#projets">
                        Voir mes projets
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" className="hero-outline" asChild>
                      <a href="#contact">Me contacter</a>
                    </Button>
                  </div>

                  <div className="mt-8 flex items-center gap-5 text-slate-400">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                      <GitBranch className="h-5 w-5" />
                    </a>
                    <a href={`https://www.linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>

                  <p className="mt-7 text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80">
                    Informatique + web + cybersecurite
                  </p>
                </div>

                <div className="hidden lg:block" />
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} id="apropos">
            <Panel className="panel-about" image={artworkImages.shadow} imageAlt="Solo Leveling shadow artwork">
              <SectionTag index="02" title="A propos" />
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl font-bold text-white sm:text-5xl">
                      A propos de <span className="text-violet-400">moi</span>
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-200">{profile.about}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      Objectif actuel: obtenir un stage pour appliquer mes acquis, progresser en environnement professionnel et contribuer a des solutions utiles.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {aboutItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="info-card">
                          <Icon className="h-4 w-4 text-violet-400" />
                          <div>
                            <p className="text-xs text-slate-400">{item.label}</p>
                            <p className="text-sm text-slate-100">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Button asChild className="hero-button mt-6 w-fit">
                    <a href={profile.cv} download>
                      Telecharger mon CV
                      <Download className="h-4 w-4" />
                    </a>
                  </Button>

                  <p className="mt-6 text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80">
                    ENSA Marrakech - Genie Informatique
                  </p>
                </div>

                <div className="hidden lg:block" />
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} id="competences">
            <Panel image={artworkImages.chains} imageAlt="Solo Leveling purple eyes artwork">
              <SectionTag index="03" title="Competences" />
              <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-4xl font-bold text-white">
                    Mes <span className="text-violet-400">competences</span>
                  </h2>
                  <p className="hidden text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80 md:block">
                    Langages, technologies, systemes et outils
                  </p>
                </div>

                <div className="tab-row">
                  {skillTabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveSkillTab(tab)}
                      className={cn("tab-button", activeSkillTab === tab && "tab-button-active")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {skillsByTab[activeSkillTab].map((skill, index) => (
                    <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 120}ms` }}>
                      <div className="skill-badge">{skill.mark}</div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{skill.name}</h3>
                      <p className="mt-3 text-sm text-violet-300">{skill.level}%</p>
                      <div className="skill-meter">
                        <span style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    ["Methodes", "Algorithmique, resolution de problemes et analyse de vulnerabilites."],
                    ["Cybersecurite", "Linux, CTF, logique systeme et securisation des applications."],
                    ["Developpement", "Applications web avec React.js, Node.js, PHP, SQL et MySQL."],
                    ["Design", "Creation visuelle avec Photoshop et Illustrator."],
                  ].map(([title, text]) => (
                    <div key={title} className="feature-card">
                      <MonitorSmartphone className="h-5 w-5 text-violet-400" />
                      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }} id="projets">
            <Panel image={artworkImages.dragon} imageAlt="Solo Leveling energy artwork">
              <SectionTag index="04" title="Projets" />
              <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-4xl font-bold text-white">
                    Mes <span className="text-violet-400">projets</span>
                  </h2>
                  <p className="hidden text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80 md:block">
                    Stages, projets academiques et cybersecurite
                  </p>
                </div>

                <div className="tab-row">
                  {projectTabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveProjectTab(tab)}
                      className={cn("tab-button", activeProjectTab === tab && "tab-button-active")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="grid gap-4 xl:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                    <article key={project.title} className="project-card" style={{ animationDelay: `${index * 90}ms` }}>
                      <div
                        className="project-visual"
                        style={{ backgroundImage: `url(${[artworkImages.blade, artworkImages.dragon, artworkImages.shadow][index % 3]})` }}
                      >
                        <div className="project-portal" />
                      </div>
                      <div className="p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">{project.period}</p>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="project-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-400">{project.description}</p>
                        <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-400">
                          Me contacter
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>

                <Button className="hero-button mx-auto mt-2 w-fit px-8" asChild>
                  <a href={profile.cv} download>
                    Voir le CV complet
                    <Send className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} id="experiences">
            <Panel image={artworkImages.blade} imageAlt="Solo Leveling blade artwork">
              <SectionTag index="05" title="Formation & experience" />
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    Formation & <span className="text-violet-400">experiences</span>
                  </h2>
                  <div className="mt-8 space-y-7">
                    {timeline.map((group) => {
                      const Icon = group.icon;
                      return (
                        <div key={group.title} className="timeline-group">
                          <div className="timeline-icon">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="timeline-content">
                            <h3 className="text-lg font-semibold text-violet-300">{group.title}</h3>
                            <div className="mt-4 space-y-5">
                              {group.entries.map((entry) => (
                                <div key={`${group.title}-${entry.heading}`}>
                                  <p className="text-sm font-semibold text-violet-400">{entry.year}</p>
                                  <h4 className="mt-1 text-base font-semibold text-white">{entry.heading}</h4>
                                  <p className="mt-1 text-sm leading-6 text-slate-400">{entry.text}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5">
                  <div className="hidden lg:block" />
                  <p className="text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80">
                    ENSA Marrakech - Ouarzazate
                  </p>
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }}>
            <Panel image={artworkImages.chains} imageAlt="Solo Leveling purple shadow artwork">
              <SectionTag index="06" title="Certificats & langues" />
              <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between gap-4">
                  <h2 className="text-4xl font-bold text-white">
                    Points <span className="text-violet-400">forts</span>
                  </h2>
                  <p className="hidden text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80 md:block">
                    Certificats, langues et competences personnelles
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  {highlights.map((item, index) => (
                    <article key={item.title} className={cn("testimonial-card", activeHighlight === index ? "testimonial-card-active" : "")}>
                      <div className="flex items-center gap-4">
                        <div className="avatar-ring">
                          <Star className="h-5 w-5 fill-current text-violet-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{item.title}</h3>
                          <p className="text-sm text-slate-400">{index === 0 ? "Apprentissage continu" : index === 1 ? "Communication" : "Savoir-etre"}</p>
                        </div>
                      </div>
                      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                        {item.items.map((line) => (
                          <li key={line} className="flex gap-2">
                            <span className="text-violet-400">-</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="slider-arrow"
                      onClick={() => setActiveHighlight((value) => (value === 0 ? highlights.length - 1 : value - 1))}
                    >
                      {"<"}
                    </button>
                    <button
                      type="button"
                      className="slider-arrow"
                      onClick={() => setActiveHighlight((value) => (value === highlights.length - 1 ? 0 : value + 1))}
                    >
                      {">"}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {highlights.map((item, index) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveHighlight(index)}
                        className={cn("slider-dot", activeHighlight === index && "slider-dot-active")}
                        aria-label={`Afficher ${item.title}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} id="contact">
            <Panel image={artworkImages.shadow} imageAlt="Solo Leveling aura artwork">
              <SectionTag index="07" title="Contact" />
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <h2 className="text-4xl font-bold text-white">
                    Contactez-<span className="text-violet-400">moi</span>
                  </h2>
                  <div className="mt-8 space-y-4">
                    {contactItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="contact-item">
                          <div className="contact-icon">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-violet-300">{item.label}</p>
                            <p className="text-sm text-slate-400">{item.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="mb-6 text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-400/80">
                    Disponible pour stage et opportunites techniques
                  </p>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <input className="contact-input" type="text" placeholder="Nom" />
                      <input className="contact-input" type="email" placeholder="Email" />
                    </div>
                    <input className="contact-input" type="text" placeholder="Sujet" />
                    <textarea className="contact-input min-h-[150px] resize-none" placeholder="Message" />
                    <Button asChild className="hero-button w-full md:w-fit">
                      <a href={`mailto:${profile.email}`}>
                        Envoyer le message
                        <Send className="h-4 w-4" />
                      </a>
                    </Button>
                  </form>
                </div>
              </div>
            </Panel>
          </motion.div>

          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.08 }}>
            <Panel className="overflow-hidden" image={artworkImages.dragon} imageAlt="Solo Leveling thank you artwork">
              <SectionTag index="08" title="Merci" />
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="flex flex-col justify-center">
                  <h2 className="text-5xl font-black text-white sm:text-7xl">Merci !</h2>
                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                    Merci d'avoir visite mon portfolio. Je suis ouvert aux stages, projets techniques et opportunites en developpement logiciel, web et cybersecurite.
                  </p>
                  <Button className="hero-button mt-8 w-fit" asChild>
                    <a href="#accueil">
                      Retour en haut
                      <ArrowUp className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                <div className="hidden lg:block" />
              </div>
            </Panel>
          </motion.div>
        </div>

        <footer className="footer-shell">
          <div>
            <p className="text-2xl font-semibold text-white">BABA</p>
            <p className="-mt-1 text-2xl font-light text-violet-300">Oualid</p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <GitBranch className="h-5 w-5" />
            </a>
            <a href={`https://www.linkedin.com/in/${profile.linkedin}`} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <BriefcaseBusiness className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <p className="text-center text-sm text-slate-500">© 2026 {profile.name}. Tous droits reserves.</p>

          <div className="hidden gap-5 text-sm text-slate-400 md:flex">
            {navLinks.slice(0, 4).map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-violet-300">
                {label}
              </a>
            ))}
          </div>

          <a href="#accueil" className="back-top">
            <ArrowUp className="h-4 w-4" />
          </a>
        </footer>
      </div>
    </main>
  );
}
