import { useState } from "react";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col gap-10">
          <SectionHeader
            eyebrow="06 — Contact"
            title="Let&rsquo;s talk about working together."
            description="Whether you&rsquo;re a buyer, a supplier, or an investor — we&rsquo;d be glad to hear from you."
          />
          <div className="flex flex-col gap-5">
            <ContactRow
              icon={Phone}
              label="Phone / WhatsApp"
              value="+62 821-1166-3883"
              href="https://wa.me/6282111663883"
            />
            <ContactRow
              icon={Mail}
              label="Email"
              value="hello@tirtatani.id"
              href="mailto:hello@tirtatani.id"
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value="Jl. Haji Onar, Desa Ciketing Udik, Kec. Ciketing, Kab. Bekasi, Jawa Barat"
              href="https://maps.app.goo.gl/wVu6vyvVxdZMkeQy5"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-7 rounded-xl border border-border bg-card p-7 md:p-10 flex flex-col gap-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email or phone" name="contact" placeholder="How we reach you" />
          </div>
          <Field label="Subject" name="subject" placeholder="Partnership, purchase, etc." />
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us a bit about what you&rsquo;re looking for…"
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <div className="flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              We typically reply within 1–2 business days.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-leaf transition-colors"
            >
              {sent ? "Sent — thank you" : "Send message"}
              <Send className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-water-deep/40 transition-colors">
      <span className="grid place-items-center size-10 rounded-md bg-water text-water-deep shrink-0">
        <Icon className="size-4" />
      </span>
      <div className="flex flex-col">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="text-base font-medium">{value}</span>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}