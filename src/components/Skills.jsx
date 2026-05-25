import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

export default function Skills({ portfolio }) {
  const groups = Object.entries(portfolio.skills);

  return (
    <section id="skills" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="Core Skills"
          description="Focused skills only. No unnecessary technologies added just for decoration."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(([group, skills], index) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass rounded-3xl p-5"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-lg font-extrabold tracking-tight text-white">
                  {group}
                </h3>

                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-white/55">
                  {skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/74 transition hover:-translate-y-1 hover:border-pinkGlow/40 hover:bg-pinkGlow/10 hover:text-white"
                  >
                    <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-pinkGlow to-blueGlow" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}