import {
  ArrowDownRight,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

function openOrNotify(url, label) {
  if (!url) {
    alert(`${label} link is not added yet. Update it in src/data/portfolio.js.`);
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Hero({ portfolio, totalSkills }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[78vh] items-center px-4 pb-10 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white/82 backdrop-blur-xl">
            <Sparkles size={15} className="text-pinkGlow" />
            {portfolio.role}
          </div>

          <h1 className="max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Hi, I'm{' '}
            <span className="gradient-text">{portfolio.shortName}</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
            {portfolio.headline}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pinkGlow to-violetGlow px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1"
            >
              View Projects
              <ArrowDownRight size={17} />
            </a>

            <a
              href={portfolio.resumeFile}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
            >
              <Download size={17} />
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => openOrNotify(portfolio.links.github, 'GitHub')}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/15 hover:text-white"
            >
              <Github size={16} className="mr-2 inline" />
              GitHub
            </button>

            <button
              onClick={() => openOrNotify(portfolio.links.linkedin, 'LinkedIn')}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/15 hover:text-white"
            >
              <Linkedin size={16} className="mr-2 inline" />
              LinkedIn
            </button>

            <button
              onClick={() => openOrNotify(portfolio.links.leetcode, 'LeetCode')}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/15 hover:text-white"
            >
              <Code2 size={16} className="mr-2 inline" />
              LeetCode
            </button>

            <a
              href={`mailto:${portfolio.email}`}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition hover:bg-white/15 hover:text-white"
            >
              <Mail size={16} className="mr-2 inline" />
              Email
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {portfolio.stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-3">
                <p className="text-lg font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto flex h-[18rem] w-full max-w-[22rem] items-center justify-center sm:h-[23rem]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pinkGlow/25 via-violetGlow/15 to-blueGlow/25 blur-3xl" />

          <div className="absolute h-[16rem] w-[16rem] rounded-full border border-pinkGlow/25 sm:h-[20rem] sm:w-[20rem]" />

          <div className="absolute h-[12rem] w-[12rem] rounded-full border border-blueGlow/20 sm:h-[16rem] sm:w-[16rem]" />

          <div className="neon-border relative grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-white/14 via-pinkGlow/14 to-blueGlow/14 shadow-glow backdrop-blur-2xl sm:h-56 sm:w-56">
            <div className="text-center">
              <p className="text-4xl font-extrabold tracking-[-0.06em] text-white">
                {portfolio.initials}
              </p>

              <p className="mt-2 text-sm font-semibold text-white/55">
                Portfolio
              </p>

              <p className="mt-5 rounded-full border border-white/12 bg-black/20 px-4 py-2 text-xs font-semibold text-white/58">
                {totalSkills} Skills • {portfolio.projects.length} Projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}