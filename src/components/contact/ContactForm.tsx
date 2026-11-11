"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/config/services";
import { budgetOptions, contactSchema, type ContactFieldErrors } from "@/lib/contact-schema";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ type = "contact", defaultService = "" }: { type?: "contact" | "quote"; defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      type,
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      service: String(fd.get("service") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
    };

    // Client-side validation (server validates again)
    const check = contactSchema.safeParse(payload);
    if (!check.success) {
      const errs: ContactFieldErrors = {};
      for (const issue of check.error.issues) {
        const k = issue.path[0] as keyof ContactFieldErrors;
        if (k && !errs[k]) errs[k] = issue.message;
      }
      setFieldErrors(errs);
      setStatus("error");
      setError("Please correct the highlighted fields.");
      const first = Object.keys(errs)[0];
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    setError("");
    setFieldErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fieldErrors?: ContactFieldErrors };
      if (!res.ok || !data.ok) {
        setFieldErrors(data.fieldErrors ?? {});
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        className="flex flex-col items-center rounded-3xl border border-emerald-100 bg-emerald-50/60 p-10 text-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500 text-white">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thank you — message received!</h3>
        <p className="mt-3 max-w-md">
          Our team will review your {type === "quote" ? "project requirements" : "message"} and get back to you within one business day.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-busy={submitting}>
      {/* Honeypot (hidden from users and screen readers) */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={fieldErrors.name}>
          <input id="name" name="name" autoComplete="name" className={inputCls(fieldErrors.name)} placeholder="John Smith" aria-invalid={!!fieldErrors.name} aria-describedby={fieldErrors.name ? "name-error" : undefined} />
        </Field>
        <Field label="Work email" name="email" required error={fieldErrors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={inputCls(fieldErrors.email)} placeholder="you@company.com" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "email-error" : undefined} />
        </Field>
        <Field label="Phone number" name="phone" error={fieldErrors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls(fieldErrors.phone)} placeholder="+1 000 000 0000" aria-invalid={!!fieldErrors.phone} />
        </Field>
        <Field label="Company" name="company" error={fieldErrors.company}>
          <input id="company" name="company" autoComplete="organization" className={inputCls(fieldErrors.company)} placeholder="Company name" />
        </Field>
        <Field label="Service of interest" name="service" error={fieldErrors.service}>
          <select id="service" name="service" defaultValue={defaultService} className={inputCls(fieldErrors.service)}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Estimated budget" name="budget" error={fieldErrors.budget}>
          <select id="budget" name="budget" defaultValue="" className={inputCls(fieldErrors.budget)}>
            <option value="">Select a range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label={type === "quote" ? "Project details" : "Your message"} name="message" required error={fieldErrors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(inputCls(fieldErrors.message), "resize-y")}
          placeholder={type === "quote" ? "Describe your project, goals, timeline and any requirements…" : "How can we help you?"}
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-brand-500" aria-invalid={!!fieldErrors.consent} />
          <span>I agree that my information will be used to respond to my enquiry in line with the privacy policy.</span>
        </label>
        {fieldErrors.consent && <p className="mt-1.5 text-sm text-red-600">{fieldErrors.consent}</p>}
      </div>

      <AnimatePresence>
        {status === "error" && error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="alert"
            className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {error}
          </motion.p>
        )}
      </AnimatePresence>

      <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            {type === "quote" ? "Request a Quote" : "Send Message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}

function inputCls(error?: string) {
  return cn("input", error && "border-red-300 focus:border-red-400 focus:ring-red-500/10");
}

function Field({ label, name, required, error, children }: { label: string; name: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-navy-900">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
