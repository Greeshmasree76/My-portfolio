import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

export default function Education({ portfolio }) {
  return (
    <section id="education" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Education"
          title="Academic Details"
          description="Keep education simple. Projects and skills should carry most of the portfolio weight."
        />

        <div className="grid gap-6">
          {portfolio.education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass flex flex-col gap-5 rounded-[2rem] p-7 sm:flex-row sm:items-start"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pinkGlow/35 to-blueGlow/25 text-white shadow-glow">
                <GraduationCap size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">{item.degree}</h3>
                <p className="mt-2 text-base font-semibold text-white/76">{item.college}</p>
                <p className="mt-2 text-sm font-bold text-pinkGlow/80">{item.duration}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
