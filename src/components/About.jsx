import { MapPin, Mail, Phone, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

export default function About({ portfolio }) {
  const info = [
    { icon: MapPin, label: 'Location', value: portfolio.location },
    { icon: Mail, label: 'Email', value: portfolio.email },
    { icon: Phone, label: 'Phone', value: portfolio.phone }
  ];

  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="About Me" title="Who I am" />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-pinkGlow/30 to-blueGlow/20 text-white shadow-glow">
              <Target />
            </div>

            <h3 className="text-xl font-extrabold tracking-tight text-white">
              Full-stack mindset with clean execution.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/68">
              {portfolio.about}
            </p>

            <div className="mt-6 grid gap-3">
              {info.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-pinkGlow">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/38">
                        {item.label}
                      </p>

                      <p className="text-sm font-semibold text-white/82">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blueGlow/80">
                Strength 01
              </p>

              <h4 className="mt-4 text-lg font-extrabold text-white">
                Professional Strengths
              </h4>

              <p className="mt-3 text-sm leading-7 text-white/62">
                Problem-solving skills, good communication, and team building.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-pinkGlow/80">
                Strength 02
              </p>

              <h4 className="mt-4 text-lg font-extrabold text-white">
                Clean Execution
              </h4>

              <p className="mt-3 text-sm leading-7 text-white/62">
                Builds structured pages, readable code, working buttons, and clean project flow.
              </p>
            </div>

            <div className="glass rounded-3xl p-6 sm:col-span-2">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-300/80">
                Career Focus
              </p>

              <h4 className="mt-4 text-lg font-extrabold text-white">
                Java Full Stack Developer
              </h4>

              <p className="mt-3 text-sm leading-7 text-white/62">
                Focused on Java programming, DSA, backend development, GitHub projects, and building applications that solve practical problems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}