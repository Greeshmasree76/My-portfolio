import { Award, Briefcase, ExternalLink, Heart, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

function openCertificate(link) {
  if (!link) {
    alert('Certificate link is not added yet. Add it in src/data/portfolio.js.');
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
          title="Experience, certifications, and strengths"
          description="A focused view of internships, soft skills, certifications, and professional interests."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-pinkGlow">
                <Briefcase size={21} />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-pinkGlow/75">
                  Experience / Internship
                </p>
                <h3 className="text-xl font-extrabold text-white">
                  Practical Training
                </h3>
              </div>
            </div>

            <div className="grid gap-4">
              {portfolio.experience?.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-base font-extrabold text-white">
                        {item.role}
                      </h4>

                      <p className="text-sm font-semibold text-white/55">
                        {item.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold text-white/55">
                      {item.duration}
                    </span>
                  </div>

                  <ul className="mt-4 grid gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-6 text-white/66"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blueGlow" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-blueGlow">
                  <Users size={20} />
                </div>

                <h3 className="text-lg font-extrabold text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {portfolio.softSkills?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/74"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-pinkGlow">
                  <Award size={20} />
                </div>

                <h3 className="text-lg font-extrabold text-white">
                  Certifications
                </h3>
              </div>

              <div className="grid gap-3">
                {portfolio.certifications?.map((certificate) => (
                  <div
                    key={`${certificate.title}-${certificate.issuer}`}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-extrabold text-white">
                          {certificate.title}
                        </h4>

                        <p className="mt-1 text-xs font-semibold text-white/50">
                          {certificate.issuer} | {certificate.year}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => openCertificate(certificate.link)}
                        className="rounded-full border border-white/10 bg-white/10 p-2 text-white/65 transition hover:bg-white/15 hover:text-white"
                        title="View Certificate"
                      >
                        <ExternalLink size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-violet-300">
                  <Heart size={20} />
                </div>

                <h3 className="text-lg font-extrabold text-white">
                  Interests
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {portfolio.interests?.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/74"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}