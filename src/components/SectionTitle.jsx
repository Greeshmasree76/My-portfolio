import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
      className="mb-7"
    >
      <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-pinkGlow/80">
        {eyebrow}
      </p>

      <h2 className="max-w-3xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
          {description}
        </p>
      )}
    </motion.div>
  );
}