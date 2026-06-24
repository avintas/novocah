"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { feedbackRelationships, feedbackServices } from "@/lib/feedback";

type Status = "idle" | "submitting" | "success" | "error";

const emptyValues = {
  name: "",
  email: "",
  phone: "",
  relationship: "",
  service: "",
  message: "",
  company: "",
};

const fieldClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

type FeedbackFormProps = {
  onSuccess?: () => void;
};

export function FeedbackForm({ onSuccess }: FeedbackFormProps) {
  const [values, setValues] = useState(emptyValues);
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function update<K extends keyof typeof emptyValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("success");
        setValues(emptyValues);
        onSuccess?.();
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
      <div className="flex flex-col items-center px-6 py-10 text-center">
        <span className="bg-accent/10 text-accent flex h-14 w-14 items-center justify-center rounded-full">
          <Icon icon={CheckCircle2} size={30} />
        </span>
        <h3 className="text-foreground mt-4 text-xl font-semibold">
          Thank you for your note
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          We&apos;ve received your message. Our team will read it and may
          publish selected stories on this page after review.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="px-6 py-6">
      <p className="text-muted-foreground text-sm leading-6">
        Share your experience with us. Please avoid including medical details or
        private health information.
      </p>

      {formError ? (
        <p
          role="alert"
          className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {formError}
        </p>
      ) : null}

      <div className="mt-5 space-y-4">
        <div>
          <label
            htmlFor="feedback-name"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="feedback-name"
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
              htmlFor="feedback-email"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="feedback-email"
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
              htmlFor="feedback-phone"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Phone
            </label>
            <input
              id="feedback-phone"
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

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="feedback-relationship"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Your relationship
            </label>
            <select
              id="feedback-relationship"
              name="relationship"
              value={values.relationship}
              onChange={(e) => update("relationship", e.target.value)}
              className={fieldClasses}
            >
              <option value="">Select one (optional)</option>
              {feedbackRelationships.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="feedback-service"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Service received
            </label>
            <select
              id="feedback-service"
              name="service"
              value={values.service}
              onChange={(e) => update("service", e.target.value)}
              className={fieldClasses}
            >
              <option value="">Select one (optional)</option>
              {feedbackServices.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="feedback-message"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Your experience <span className="text-red-600">*</span>
          </label>
          <textarea
            id="feedback-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(
              fieldClasses,
              "resize-y",
              fieldErrors.message && "border-red-400",
            )}
            placeholder="Tell us about your experience with our team…"
          />
          {fieldErrors.message ? (
            <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>
          ) : null}
        </div>

        <div aria-hidden className="hidden">
          <label htmlFor="feedback-company">Company</label>
          <input
            id="feedback-company"
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
            Send Note
          </>
        )}
      </button>
    </form>
  );
}

type FeedbackDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function FeedbackDialog({ open, onClose }: FeedbackDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="bg-foreground/50 absolute inset-0"
        aria-label="Close feedback form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-dialog-title"
        className="border-border bg-surface relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border"
      >
        <div className="border-border flex items-start justify-between gap-4 border-b px-6 py-5">
          <div>
            <h2
              id="feedback-dialog-title"
              className="text-foreground text-xl font-semibold"
            >
              Drop Us a Note
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              We read every message. Selected stories may appear on this page
              after review.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:bg-surface-muted hover:text-foreground focus-visible:ring-brand flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none"
            aria-label="Close"
          >
            <Icon icon={X} size={20} />
          </button>
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
}
