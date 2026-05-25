import { Menu, PenLine, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ portfolio, onEdit }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 shadow-soft backdrop-blur-2xl md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-lg font-black tracking-tight text-white shadow-glow">
            {portfolio.initials}
          </div>
          <span className="hidden text-sm font-semibold text-white/80 sm:block">Portfolio</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="link-underline text-sm font-medium text-white/72 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pinkGlow to-violetGlow px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_0_70px_rgba(255,97,216,0.42)]"
          >
            <PenLine size={16} />
            Edit Portfolio
          </button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/10 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-night/95 p-4 shadow-soft backdrop-blur-2xl md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onEdit();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pinkGlow to-violetGlow px-4 py-3 text-sm font-semibold text-white"
            >
              <PenLine size={16} />
              Edit Portfolio
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
