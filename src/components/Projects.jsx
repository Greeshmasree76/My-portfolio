import {
  Activity,
  ArrowUpRight,
  CalendarClock,
  Github,
  Layers3
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

const icons = {
  Activity,
  CalendarClock
};

function openLink(url, label) {
  if (!url) {
    alert(`${label} link is not added yet.`);
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Projects({ portfolio }) {
  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Projects"
          description="Selected full-stack projects focused on real-world problem solving and practical implementation."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {portfolio.projects.map((project, index) => {
            const Icon = icons[project.icon] || Layers3;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass group relative overflow-hidden rounded-3xl p-5"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-pinkGlow/10 blur-3xl transition group-hover:bg-pinkGlow/20" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-pinkGlow/75">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-xl font-extrabold tracking-tight text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pinkGlow/35 to-blueGlow/25 text-white shadow-glow">
                      <Icon size={23} />
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-white/68">
                    {project.description}
                  </p>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/18 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
                      Problem Solved
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/66">
                      {project.problem}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white/65"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blueGlow" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-bold text-white/65"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={() =>
                        openLink(project.live, `${project.title} live demo`)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-night transition hover:-translate-y-1 hover:bg-white/90"
                    >
                      <ArrowUpRight size={17} />
                      Live Demo
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        openLink(project.github, `${project.title} GitHub`)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
                    >
                      <Github size={17} />
                      GitHub
                    </button>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
                      Resume Bullet
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/64">
                      {project.resumeBullet}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}