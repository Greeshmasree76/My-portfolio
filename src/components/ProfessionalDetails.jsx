import { Award, Briefcase, ExternalLink, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

function openCertificate(link) {
  if (!link) {
    alert('Certificate file is not added yet.');
    return;
  }

  window.open(link, '_blank', 'noopener,noreferrer');
}

export default function ProfessionalDetails({ portfolio }) {
  return (
    <section id="professional" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Professional Details"
          title="Experience and certifications"
          description="Internships, soft skills, certifications, and professional interests."
        />

        <div className="grid items-start gap-5 xl:grid-cols-[0.95fr_0.85fr]">
          {/* Left Side */}
          <div className="grid gap-5">
            {/* Practical Training */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="glass self-start rounded-3xl p-5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-pinkGlow">
                  <Briefcase size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-pinkGlow/75">
                    Experience / Internship
                  </p>
                  <h3 className="text-lg font-extrabold text-white">
                    Practical Training
                  </h3>
                </div>
              </div>

              <div className="grid gap-3">
                {portfolio.experience?.map((item) => (
                  <div
                    key={`${item.role}-${item.company}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-3.5 transition hover:border-pinkGlow/25 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h4 className="text-sm font-extrabold leading-5 text-white">
                          {item.role}
                        </h4>

                        <p className="mt-1 text-xs font-semibold text-white/48">
                          {item.company}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[10px] font-bold text-white/48">
                        {item.duration}
                      </span>
                    </div>

                    <ul className="mt-3 grid gap-1.5">
                      {item.points.slice(0, 3).map((point) => (
                        <li
                          key={point}
                          className="flex gap-2 text-xs leading-5 text-white/60"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blueGlow" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests moved under Practical Training */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="glass rounded-3xl p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-violet-300">
                  <Heart size={17} />
                </div>

                <h3 className="text-base font-extrabold text-white">
                  Interests
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {portfolio.interests?.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/72"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="grid gap-5">
            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="glass rounded-3xl p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-blueGlow">
                  <Users size={17} />
                </div>

                <h3 className="text-base font-extrabold text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {portfolio.softSkills?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/72"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass rounded-3xl p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-pinkGlow">
                  <Award size={17} />
                </div>

                <h3 className="text-base font-extrabold text-white">
                  Certifications
                </h3>
              </div>

              <div className="grid gap-2.5">
                {portfolio.certifications?.map((certificate) => (
                  <button
                    key={`${certificate.title}-${certificate.certificateId}`}
                    type="button"
                    onClick={() => openCertificate(certificate.link)}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3.5 py-3 text-left transition hover:-translate-y-0.5 hover:border-pinkGlow/35 hover:bg-pinkGlow/10"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white/10 text-pinkGlow">
                        <Award size={14} />
                      </div>

                      <h4 className="truncate text-xs font-extrabold text-white/85">
                        {certificate.title}
                      </h4>
                    </div>

                    <ExternalLink
                      size={15}
                      className="shrink-0 text-white/42 transition group-hover:text-white"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}