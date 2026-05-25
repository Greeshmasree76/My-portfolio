import { Code2, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

function openOrNotify(url, label) {
  if (!url) {
    alert(`${label} link is not added yet. Update it in src/data/portfolio.js.`);
    return;
  }

  window.open(url, '_blank', 'noopener,noreferrer');
}

export default function Contact({ portfolio }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;

    setStatus('Opening your email app.');
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setStatus(''), 3500);
  }

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s connect"
          description="For opportunities, project discussions, or professional networking."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-6"
          >
            <h3 className="text-xl font-extrabold text-white">
              Contact Details
            </h3>

            <div className="mt-5 grid gap-3">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-pinkGlow">
                  <Mail />
                </span>

                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    Email
                  </span>
                  <span className="text-sm font-semibold text-white/78">
                    {portfolio.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${portfolio.phone?.replace(/\s/g, '')}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-blueGlow">
                  <Phone />
                </span>

                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    Phone
                  </span>
                  <span className="text-sm font-semibold text-white/78">
                    {portfolio.phone}
                  </span>
                </span>
              </a>

              <button
                onClick={() => openOrNotify(portfolio.links.linkedin, 'LinkedIn')}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-left transition hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-blueGlow">
                  <Linkedin />
                </span>

                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    LinkedIn
                  </span>
                  <span className="text-sm font-semibold text-white/78">
                    View professional profile
                  </span>
                </span>
              </button>

              <button
                onClick={() => openOrNotify(portfolio.links.github, 'GitHub')}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-left transition hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                  <Github />
                </span>

                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    GitHub
                  </span>
                  <span className="text-sm font-semibold text-white/78">
                    View source code
                  </span>
                </span>
              </button>

              <button
                onClick={() => openOrNotify(portfolio.links.leetcode, 'LeetCode')}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-left transition hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-pinkGlow">
                  <Code2 />
                </span>

                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    LeetCode
                  </span>
                  <span className="text-sm font-semibold text-white/78">
                    View coding practice
                  </span>
                </span>
              </button>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-pinkGlow">
                  <MapPin />
                </span>

                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-white/38">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-white/78">
                    {portfolio.location}
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="glass rounded-3xl p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-white/72">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 focus:border-pinkGlow/60"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-white/72">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 focus:border-pinkGlow/60"
                  placeholder="your@email.com"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-semibold text-white/72">
              Message
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                className="resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/30 focus:border-pinkGlow/60"
                placeholder="Write your message..."
              />
            </label>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pinkGlow to-violetGlow px-6 py-3 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 sm:w-auto"
            >
              <Send size={17} />
              Send Message
            </button>

            {status && (
              <p className="mt-4 text-sm font-semibold text-blueGlow/90">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}