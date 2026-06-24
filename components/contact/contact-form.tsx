"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

type Status = "idle" | "submitting" | "success" | "error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  company: "", // honeypot
};

const fieldClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function update<K extends keyof typeof initialValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("success");
        setValues(initialValues);
        return;
      }

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
        fields?: Record<string, string>;
      };
      setFieldErrors(payload.fields ?? {});
      setFormError(payload.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setFormError(
        "We couldn't reach the server. Please try again, or call us directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border-border bg-surface flex h-full flex-col items-center justify-center rounded-2xl border p-8 text-center">
        <span className="bg-accent/10 text-accent flex h-14 w-14 items-center justify-center rounded-full">
          <Icon icon={CheckCircle2} size={30} />
        </span>
        <h3 className="text-foreground mt-4 text-xl font-semibold">
          Thank you — your message is on its way
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">
          A member of our care team will get back to you shortly. For urgent
          needs, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-brand hover:text-brand-hover mt-6 text-sm font-semibold"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border-border bg-surface rounded-2xl border p-6 sm:p-8"
    >
      <h2 className="text-foreground text-xl font-semibold">
        Send Us a Message
      </h2>
      <p className="text-muted-foreground mt-1 text-sm">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      {formError ? (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {formError}
        </p>
      ) : null}

      <div className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={cn(fieldClasses, fieldErrors.name && "border-red-400")}
            placeholder="Your full name"
          />
          {fieldErrors.name ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
          ) : null}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={cn(
                fieldClasses,
                fieldErrors.email && "border-red-400",
              )}
              placeholder="you@example.com"
            />
            {fieldErrors.email ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={fieldClasses}
              placeholder="(818) 000-0000"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(
              fieldClasses,
              "resize-y",
              fieldErrors.message && "border-red-400",
            )}
            placeholder="How can we help you or your loved one?"
          />
          {fieldErrors.message ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
          ) : null}
        </div>

        {/* Honeypot — hidden from real users */}
        <div aria-hidden className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-brand text-brand-foreground hover:bg-brand-hover focus-visible:ring-brand mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Icon icon={Loader2} size={18} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Icon icon={Send} size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
