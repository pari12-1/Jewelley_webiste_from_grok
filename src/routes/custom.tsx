import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/custom")({
  component: CustomOrders,
  head: () => ({
    meta: [{ title: "Custom Orders | Nira Atelier" }],
  }),
});

const steps = [
  {
    title: "Consultation",
    text: "We begin with a conversation — by email or video — about your ideas, preferred materials, budget, and timeline.",
  },
  {
    title: "Design",
    text: "I prepare sketches and material options. Once you approve the direction, we finalise details and a deposit is taken.",
  },
  {
    title: "Making",
    text: "The piece is crafted by hand in the studio. You receive progress notes and photographs along the way.",
  },
  {
    title: "Delivery",
    text: "The finished jewellery is carefully packaged and shipped. Care instructions and a handwritten note are included.",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  jewelleryType: string;
  material: string;
  budget: string;
  deadline: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  jewelleryType: "",
  material: "",
  budget: "",
  deadline: "",
  message: "",
};

function CustomOrders() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [success, setSuccess] = useState(false);

  function setField(name: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email";
    if (!form.jewelleryType) next.jewelleryType = "Please select a type";
    if (!form.message.trim()) next.message = "Tell us a little about your idea";
    if (Object.keys(next).length) {
      setErrors(next);
      setSuccess(false);
      return;
    }
    setSuccess(true);
    setForm(empty);
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Custom"
        title="A piece made only for you"
        subtitle="From engagement rings to quiet everyday companions, every custom commission begins with a conversation."
      />
      <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="border border-border bg-paper p-6">
            <span className="font-serif text-3xl text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-serif text-lg">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl border border-border bg-paper p-6 md:p-10">
        <h2 className="text-center font-serif text-2xl">Start your enquiry</h2>
        <p className="mt-2 mb-8 text-center text-sm text-ink">
          Share as much or as little as you like. I typically reply within two working days.
        </p>
        {success && (
          <p className="mb-6 bg-ok/15 px-4 py-3 text-center text-sm text-ok" role="status">
            Thank you. Your enquiry has been received. I will be in touch soon.
          </p>
        )}
        <form onSubmit={onSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" required error={errors.name}>
              <input
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                className={inputClass(errors.name)}
              />
            </Field>
            <Field label="Email" required error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
                className={inputClass(errors.email)}
              />
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone (optional)">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className={inputClass()}
              />
            </Field>
            <Field label="Jewellery type" required error={errors.jewelleryType}>
              <select
                value={form.jewelleryType}
                onChange={(e) => setField("jewelleryType", e.target.value)}
                className={inputClass(errors.jewelleryType)}
              >
                <option value="">Select…</option>
                {["Ring", "Earrings", "Necklace", "Bracelet", "Bridal set", "Other"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Preferred material">
              <select
                value={form.material}
                onChange={(e) => setField("material", e.target.value)}
                className={inputClass()}
              >
                <option value="">Select…</option>
                {["Sterling silver", "Gold vermeil", "Solid gold", "Mixed metals", "Open to suggestion"].map(
                  (o) => (
                    <option key={o}>{o}</option>
                  ),
                )}
              </select>
            </Field>
            <Field label="Budget range (INR)">
              <select
                value={form.budget}
                onChange={(e) => setField("budget", e.target.value)}
                className={inputClass()}
              >
                <option value="">Select…</option>
                {["Under 5,000", "5,000 – 15,000", "15,000 – 40,000", "40,000+", "Still deciding"].map(
                  (o) => (
                    <option key={o}>{o}</option>
                  ),
                )}
              </select>
            </Field>
          </div>
          <Field label="Ideal timeline">
            <input
              value={form.deadline}
              onChange={(e) => setField("deadline", e.target.value)}
              placeholder="e.g. in time for a December wedding"
              className={inputClass()}
            />
          </Field>
          <Field label="Your message" required error={errors.message}>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setField("message", e.target.value)}
              className={inputClass(errors.message)}
            />
          </Field>
          <Button type="submit" size="lg">
            Send enquiry
          </Button>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium tracking-wider text-ink uppercase">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-sm text-danger" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-sm border bg-paper px-3 py-3 text-charcoal outline-none focus:border-gold ${
    error ? "border-danger" : "border-charcoal/15"
  }`;
}
