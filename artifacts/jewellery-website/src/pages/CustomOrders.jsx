import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FormField from "../components/FormField";
import Button from "../components/Button";
import styles from "./CustomOrders.module.css";

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

const initial = {
  name: "",
  email: "",
  phone: "",
  jewelleryType: "",
  material: "",
  budget: "",
  deadline: "",
  message: "",
};

export default function CustomOrders() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email";
    if (!form.jewelleryType) e.jewelleryType = "Please select a type";
    if (!form.message.trim()) e.message = "Tell us a little about your idea";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus(null);
      return;
    }
    // Simulate success (Formspree would go here)
    setStatus("success");
    setForm(initial);
    setErrors({});
  };

  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Custom"
          title="A piece made only for you"
          subtitle="From engagement rings to quiet everyday companions, every custom commission begins with a conversation."
        />

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Start your enquiry</h2>
          <p className={styles.formSub}>
            Share as much or as little as you like. I typically reply within two
            working days.
          </p>

          {status === "success" && (
            <div className={styles.success} role="status">
              Thank you. Your enquiry has been received. I will be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.row}>
              <FormField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="Your full name"
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder="you@example.com"
              />
            </div>

            <div className={styles.row}>
              <FormField
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 …"
              />
              <FormField
                label="Jewellery type"
                name="jewelleryType"
                as="select"
                value={form.jewelleryType}
                onChange={handleChange}
                error={errors.jewelleryType}
                required
                options={["Ring", "Earrings", "Necklace", "Bracelet", "Bridal set", "Other"]}
              />
            </div>

            <div className={styles.row}>
              <FormField
                label="Preferred material"
                name="material"
                as="select"
                value={form.material}
                onChange={handleChange}
                options={[
                  "Sterling silver",
                  "Gold vermeil",
                  "Solid gold",
                  "Mixed metals",
                  "Open to suggestion",
                ]}
              />
              <FormField
                label="Budget range (INR)"
                name="budget"
                as="select"
                value={form.budget}
                onChange={handleChange}
                options={[
                  "Under 5,000",
                  "5,000 – 15,000",
                  "15,000 – 40,000",
                  "40,000+",
                  "Still deciding",
                ]}
              />
            </div>

            <FormField
              label="Ideal timeline"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              placeholder="e.g. in time for a December wedding"
            />

            <FormField
              label="Your message"
              name="message"
              as="textarea"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              required
              placeholder="Tell me about the piece you imagine, any stones or styles you love, or the occasion it is for…"
              rows={5}
            />

            <Button type="submit" variant="primary" size="lg">
              Send enquiry
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
