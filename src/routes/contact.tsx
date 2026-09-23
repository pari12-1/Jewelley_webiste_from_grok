import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [{ title: "Contact | Nira Atelier" }],
  }),
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Valid email required";
    if (!form.message.trim()) next.message = "Please write a message";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setErrors({});
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Whether you have a question about a piece, a custom idea, or simply want to say hello — I would love to hear from you."
      />
      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <Info icon={<Mail size={18} strokeWidth={1.5} />} title="Email">
            <a href="mailto:hello@niraatelier.com" className="hover:text-gold">
              hello@niraatelier.com
            </a>
          </Info>
          <Info icon={<MapPin size={18} strokeWidth={1.5} />} title="Studio">
            Jaipur, Rajasthan, India
          </Info>
          <Info icon={<Clock size={18} strokeWidth={1.5} />} title="Response time">
            Usually within 2 working days
          </Info>
          <Info icon={<Instagram size={18} strokeWidth={1.5} />} title="Social">
            @niraatelier
          </Info>
        </div>
        <div className="border border-border bg-paper p-6 md:p-8">
          {success && (
            <p className="mb-5 bg-ok/15 px-4 py-3 text-center text-sm text-ok" role="status">
              Message sent. Thank you — I will reply soon.
            </p>
          )}
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-medium tracking-wider text-ink uppercase">
                Name *
              </span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full rounded-sm border px-3 py-3 outline-none focus:border-gold ${errors.name ? "border-danger" : "border-charcoal/15"}`}
              />
              {errors.name && <span className="text-sm text-danger">{errors.name}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-medium tracking-wider text-ink uppercase">
                Email *
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full rounded-sm border px-3 py-3 outline-none focus:border-gold ${errors.email ? "border-danger" : "border-charcoal/15"}`}
              />
              {errors.email && <span className="text-sm text-danger">{errors.email}</span>}
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-medium tracking-wider text-ink uppercase">
                Subject
              </span>
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-sm border border-charcoal/15 px-3 py-3 outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-medium tracking-wider text-ink uppercase">
                Message *
              </span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full rounded-sm border px-3 py-3 outline-none focus:border-gold ${errors.message ? "border-danger" : "border-charcoal/15"}`}
              />
              {errors.message && <span className="text-sm text-danger">{errors.message}</span>}
            </label>
            <Button type="submit" size="lg">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}

function Info({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 text-gold">{icon}</span>
      <div>
        <h4 className="font-sans text-[0.7rem] font-medium tracking-[0.1em] text-ink uppercase">
          {title}
        </h4>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
