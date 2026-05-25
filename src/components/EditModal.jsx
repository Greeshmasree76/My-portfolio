import { RotateCcw, Save, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EditModal({ open, portfolio, onClose, onSave, onReset }) {
  const [draft, setDraft] = useState(portfolio);

  useEffect(() => {
    setDraft(portfolio);
  }, [portfolio, open]);

  if (!open) return null;

  function updateField(field, value) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  function updateLink(field, value) {
    setDraft((current) => ({ ...current, links: { ...current.links, [field]: value } }));
  }

  function handleSave(event) {
    event.preventDefault();
    onSave(draft);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-sm">
      <form onSubmit={handleSave} className="glass max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-6 shadow-glow sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-pinkGlow/80">Quick Editor</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Edit Portfolio</h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              This edits your portfolio in browser local storage. For permanent content, update src/data/portfolio.js.
            </p>
          </div>
          <button type="button" onClick={onClose} className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-white hover:bg-white/15">
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Initials" value={draft.initials} onChange={(value) => updateField('initials', value)} />
          <Field label="Short Name" value={draft.shortName} onChange={(value) => updateField('shortName', value)} />
          <Field label="Full Name" value={draft.name} onChange={(value) => updateField('name', value)} />
          <Field label="Role" value={draft.role} onChange={(value) => updateField('role', value)} />
          <Field label="Email" type="email" value={draft.email} onChange={(value) => updateField('email', value)} />
          <Field label="Phone" value={draft.phone} onChange={(value) => updateField('phone', value)} />
          <Field label="Location" value={draft.location} onChange={(value) => updateField('location', value)} />
          <Field label="GitHub URL" value={draft.links.github} onChange={(value) => updateLink('github', value)} />
          <Field label="LinkedIn URL" value={draft.links.linkedin} onChange={(value) => updateLink('linkedin', value)} />
          <Field label="LeetCode URL" value={draft.links.leetcode} onChange={(value) => updateLink('leetcode', value)} />
        </div>

        <label className="mt-4 grid gap-2 text-sm font-bold text-white/72">
          Headline
          <textarea
            rows="3"
            value={draft.headline}
            onChange={(event) => updateField('headline', event.target.value)}
            className="resize-none rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white placeholder:text-white/30 focus:border-pinkGlow/60"
          />
        </label>

        <label className="mt-4 grid gap-2 text-sm font-bold text-white/72">
          About
          <textarea
            rows="5"
            value={draft.about}
            onChange={(event) => updateField('about', event.target.value)}
            className="resize-none rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white placeholder:text-white/30 focus:border-pinkGlow/60"
          />
        </label>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => {
              onReset();
              onClose();
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-black text-white/74 hover:bg-white/15"
          >
            <RotateCcw size={17} />
            Reset
          </button>
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pinkGlow to-violetGlow px-5 py-3 text-sm font-black text-white shadow-glow">
            <Save size={17} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-white/72">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-white placeholder:text-white/30 focus:border-pinkGlow/60"
      />
    </label>
  );
}
