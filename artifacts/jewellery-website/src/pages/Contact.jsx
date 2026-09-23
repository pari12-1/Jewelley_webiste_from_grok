import { useState } from "react";
import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FormField from "../components/FormField";
import Button from "../components/Button";
import styles from "./Contact.module.css";

const initial = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please write a message";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("success");
    setForm(initial);
  };

  return (
    <main className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          subtitle="Whether you have a question about a piece, a custom idea, or simply want to say hello — I would love to hear from you."
        />

        <div className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <Mail size={18} strokeWidth={1.5} />
              <div>
                <h4>Email</h4>
                <a href="mailto:hello@niraatelier.com">hello@niraatelier.com</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <MapPin size={18} strokeWidth={1.5} />
              <div>
                <h4>Studio</h4>
                <p>Jaipur, Rajasthan, India</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Clock size={18} strokeWidth={1.5} />
              <div>
                <h4>Response time</h4>
                <p>Usually within 2 working days</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Instagram size={18} strokeWidth={1.5} />
              <div>
                <h4>Social</h4>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @niraatelier
                </a>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            {status === "success" && (
              <div className={styles.success} role="status">
                Message sent. Thank you — I will reply soon.
              </div>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <FormField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              <FormField
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Optional"
              />
              <FormField
                label="Message"
                name="message"
                as="textarea"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
                required
                rows={5}
              />
              <Button type="submit" variant="primary" size="lg">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
