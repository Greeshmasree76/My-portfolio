export default function Footer({ portfolio }) {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-white/48">© {new Date().getFullYear()} {portfolio.name}. Built with React + Tailwind CSS.</p>
        <a href="#home" className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/15 hover:text-white">
          Back to top
        </a>
      </div>
    </footer>
  );
}
