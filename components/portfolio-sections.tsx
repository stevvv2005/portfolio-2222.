"use client";

import {
  Award,
  BriefcaseBusiness,
  Code2,
  Cpu,
  ExternalLink,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Palette,
  PenLine,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ElementType } from "react";
import { useState } from "react";
import { awards, experience, overview, posts, profile, projects, skills, testimonials } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skillIcons = [Code2, Palette, Sparkles, Layers3, Cpu, Globe2, BriefcaseBusiness, Trophy];

const futureBlueprint = [
  {
    title: "Engineering Mindset",
    text: "Clean architecture, reusable components, typed data, and interfaces that can grow from portfolio to product.",
    icon: Workflow,
  },
  {
    title: "AI + Product Direction",
    text: "Building toward smart tools, dashboards, automations, and user experiences that feel fast, useful, and alive.",
    icon: Cpu,
  },
  {
    title: "Security Awareness",
    text: "Thinking about safe defaults, resilient systems, clear permissions, and trustworthy user flows from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Creative Execution",
    text: "Combining software craft with motion, sport design, brand energy, and bold visual storytelling.",
    icon: Rocket,
  },
];

const socialIcons: Record<string, ElementType> = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
  Instagram: Globe2,
  Behance: Palette,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <motion.div {...fadeUp} className="mb-6 flex flex-col gap-2">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-normal sm:text-3xl">{title}</h2>
      {text ? <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{text}</p> : null}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="section-shell pt-8">
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.45fr]">
        <motion.div {...fadeUp}>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="grid h-24 w-24 shrink-0 place-items-center rounded-lg border bg-gradient-to-br from-primary/80 to-accent/80 text-3xl font-black text-primary-foreground shadow-glow"
                >
                  A1
                </motion.div>
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Portfolio 2026</p>
                  <h1 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">{profile.name}</h1>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{profile.role}</p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-md border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {profile.location}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{profile.intro}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <Button key={social.label} asChild variant="outline" size="sm">
                      <a href={social.href} target="_blank" rel="noreferrer">
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
          <Card className="group relative min-h-full overflow-hidden ambient-panel">
            <div className="absolute -left-24 top-10 h-56 w-56 rounded-full bg-primary/25 blur-3xl transition duration-700 group-hover:scale-125" />
            <div className="absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-accent/20 blur-3xl transition duration-700 group-hover:scale-125" />
            <div className="absolute inset-0 soft-grid opacity-35" />
            <div className="absolute inset-0 hero-energy-lines" />
            <CardContent className="relative grid min-h-[420px] content-between p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-background/70">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Future engineer mode
                </Badge>
                {["Web Apps", "Sport Design", "Brand Systems"].map((item) => (
                  <Badge key={item} className="bg-background/60">{item}</Badge>
                ))}
              </div>
              <div>
                <p className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
                  Building sharp software, cinematic interfaces, and creative systems for the next era.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["TS", "Typed apps"],
                    ["AI", "Smart tools"],
                    ["60fps", "Motion UI"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-lg border bg-card/65 p-4 backdrop-blur">
                      <strong className="text-2xl">{value}</strong>
                      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export function DevelopmentLabSection() {
  return (
    <section id="lab" className="section-shell">
      <SectionTitle
        eyebrow="Development Lab"
        title="A living interface built with real code."
        text="Animated system cards, UI states, and engineering signals make the portfolio feel alive while staying lightweight and professional."
      />
      <motion.div {...fadeUp}>
        <Card className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[360px] overflow-hidden border-b bg-muted/40 p-5 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 dev-orbit" />
              <div className="relative grid h-full content-between gap-5">
                <div className="flex items-center justify-between rounded-lg border bg-card/70 p-3 backdrop-blur">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">System Status</p>
                    <h3 className="mt-1 font-bold">Portfolio engine online</h3>
                  </div>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Frontend", "Next.js, TypeScript, Tailwind"],
                    ["Motion", "Framer transitions and scroll reveals"],
                    ["Design", "Cards, glass, contrast, spacing"],
                    ["Product", "Fast, readable, responsive flows"],
                  ].map(([title, text], index) => (
                    <motion.div
                      key={title}
                      animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                      transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      className="rounded-lg border bg-card/75 p-4 shadow-soft backdrop-blur"
                    >
                      <p className="font-mono text-xs text-primary">0{index + 1}</p>
                      <h4 className="mt-2 font-bold">{title}</h4>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{text}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="rounded-lg border bg-background/70 p-4 font-mono text-xs text-muted-foreground backdrop-blur">
                  <p><span className="text-primary">deploy</span> portfolio --mode future-engineer</p>
                  <p className="mt-2"><span className="text-accent">status</span> animations: smooth | layout: responsive | ui: premium</p>
                </div>
              </div>
            </div>
            <div className="grid content-center gap-4 p-5">
              <Badge className="w-fit bg-primary/10 text-primary">Code-first animation</Badge>
              <h3 className="text-2xl font-bold">The animation is developed directly inside the website.</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                This section uses Framer Motion, CSS gradients, glass cards, and animated interface states to create movement without heavy media.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Fast", "No reel loading"],
                  ["Clean", "Readable UI"],
                  ["Modern", "2026 layout"],
                  ["Reusable", "Component based"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border bg-muted/40 p-3">
                    <strong>{value}</strong>
                    <p className="text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

export function OverviewSection() {
  return (
    <section id="overview" className="section-shell">
      <SectionTitle eyebrow="Overview" title="A compact picture of the work." />
      <div className="grid gap-3 md:grid-cols-2">
        {overview.map((item, index) => (
          <motion.div key={item} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
            <Card>
              <CardContent className="flex gap-3 p-4">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function FutureEngineerSection() {
  return (
    <section id="future" className="section-shell">
      <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div {...fadeUp}>
          <Card className="ambient-panel relative h-full overflow-hidden">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
            <CardContent className="relative grid h-full content-between gap-8 p-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Future Software Engineer</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                  Designing like an artist. Building like an engineer.
                </h2>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  This portfolio is shaped as a control room for future work: frontend systems, AI-assisted tools, polished dashboards,
                  creative websites, and visual products with strong motion direction.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["2026", "Portfolio"],
                  ["Full", "Stack path"],
                  ["Motion", "First UI"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-lg border bg-card/60 p-3 text-center backdrop-blur">
                    <strong className="text-xl">{value}</strong>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2">
          {futureBlueprint.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
                <Card className="group h-full overflow-hidden">
                  <CardContent className="relative p-5">
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition duration-500 group-hover:scale-x-100" />
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section id="stack" className="section-shell">
      <SectionTitle eyebrow="Tech Stack" title="Tools I use to design and ship." text="A balanced mix of frontend, backend, design, and motion tools." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => {
          const Icon = skillIcons[index % skillIcons.length];
          return (
            <motion.div key={skill} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.025 }}>
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold">{skill}</span>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <SectionTitle eyebrow="Projects" title="Selected builds and concepts." text="Dashboard cards with quick context, tech tags, and action buttons." />
        <Button variant="outline" onClick={() => setShowAll((value) => !value)} className="w-fit">
          {showAll ? "Show less" : "Show more"}
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.div key={project.title} layout {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
            <Card className="h-full overflow-hidden">
              <div className="project-image relative h-44 overflow-hidden">
                <div className="absolute inset-4 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm" />
                <div className="absolute bottom-4 left-4 rounded-md bg-background/80 px-3 py-2 text-sm font-bold backdrop-blur">{project.title}</div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => <Badge key={tag}>{tag}</Badge>)}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <a href={project.demo}><ExternalLink className="h-4 w-4" /> Live demo</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noreferrer"><Code2 className="h-4 w-4" /> GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionTitle eyebrow="Experience" title="Timeline of creative and frontend work." />
      <div className="grid gap-4">
        {experience.map((item, index) => (
          <motion.div key={item.role} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.06 }}>
            <Card>
              <CardContent className="grid gap-4 p-5 sm:grid-cols-[180px_1fr]">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{item.period}</div>
                <div>
                  <h3 className="font-bold">{item.role}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell">
      <SectionTitle eyebrow="Testimonials" title="What collaborators notice." />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div key={item.author} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
            <Card className="h-full">
              <CardContent className="p-5">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="mt-4 text-sm leading-7 text-muted-foreground">"{item.quote}"</p>
                <div className="mt-5">
                  <strong>{item.author}</strong>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function NotesAndAwardsSection() {
  return (
    <section className="section-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div id="notes">
        <SectionTitle eyebrow="Blog / Notes" title="Small notes from the studio." />
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <motion.div key={post.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
              <Card>
                <CardContent className="flex gap-4 p-5">
                  <PenLine className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
                    <h3 className="mt-1 font-bold">{post.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div id="awards">
        <SectionTitle eyebrow="Awards" title="Proof points." />
        <div className="grid gap-4">
          {awards.map((award, index) => (
            <motion.div key={award.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.05 }}>
              <Card>
                <CardContent className="flex gap-4 p-5">
                  <Award className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-bold">{award.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{award.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-20">
      <motion.div {...fadeUp}>
        <Card className="ambient-panel overflow-hidden">
          <CardContent className="grid gap-6 p-6 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">Contact</p>
              <h2 className="mt-2 text-3xl font-black sm:text-5xl">Let&apos;s build something sharp.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                For websites, dashboards, sport visuals, poster systems, or creative direction, send a message and we can shape the next move.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild>
                <a href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> Email me</a>
              </Button>
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <Button key={social.label} asChild variant="outline">
                    <a href={social.href} target="_blank" rel="noreferrer"><Icon className="h-4 w-4" /> {social.label}</a>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
