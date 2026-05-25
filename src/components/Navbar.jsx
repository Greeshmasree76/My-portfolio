import { Menu, Pencil, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Professional', href: '#professional' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar({ portfolio, onEdit }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-night/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-pinkGlow to-blueGlow text-sm font-black text-white shadow-glow">
            {portfolio.initials}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-extrabold leading-tight text-white">
              {portfolio.shortName}
            </p>
            <p className="text-xs font-semibold text-white/45">
              {portfolio.role}
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/64 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-bold text-white/78 transition hover:bg-white/15 hover:text-white"
          >
            <Pencil size={15} />
            Edit Portfolio
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-night/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                closeMenu();
                onEdit();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/10 px-4 py-3 text-sm font-bold text-white/80"
            >
              <Pencil size={15} />
              Edit Portfolio
            </button>
          </div>
        </div>
      )}
    </header>
  );
}