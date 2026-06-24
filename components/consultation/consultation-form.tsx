"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, X } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const emptyValues = {
  name: "",
  email: "",
  phone: "",
  preferredAvailability: "",
  message: "",
  company: "",
};

const fieldClasses =
  "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";

type ConsultationFormProps = {
  onSuccess?: () => void;
};

export function ConsultationForm({ onSuccess }: ConsultationFormProps) {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          intent: "consultation",
        }),
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
          Request received
        </h3>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          A care coordinator will contact you soon to schedule your free in-home
          assessment. For urgent needs, please call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="px-6 py-6">
      <p className="text-muted-foreground text-sm leading-6">
        Request a free consultation and in-home assessment. We&apos;ll reach out
        to confirm a time that works for you — no scheduling system required on
        your end.
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
            htmlFor="consultation-name"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="consultation-name"
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
              htmlFor="consultation-email"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="consultation-email"
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
              htmlFor="consultation-phone"
              className="text-foreground mb-1.5 block text-sm font-medium"
            >
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              id="consultation-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={cn(
                fieldClasses,
                fieldErrors.phone && "border-red-400",
              )}
              placeholder="(818) 000-0000"
            />
            {fieldErrors.phone ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="consultation-availability"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Best times to reach you
          </label>
          <input
            id="consultation-availability"
            name="preferredAvailability"
            type="text"
            value={values.preferredAvailability}
            onChange={(e) => update("preferredAvailability", e.target.value)}
            className={fieldClasses}
            placeholder="e.g. Weekday mornings, after 5pm"
          />
        </div>

        <div>
          <label
            htmlFor="consultation-message"
            className="text-foreground mb-1.5 block text-sm font-medium"
          >
            Care needs or questions
          </label>
          <textarea
            id="consultation-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(fieldClasses, "resize-y")}
            placeholder="Briefly describe who needs care and what support you're looking for"
          />
        </div>

        <div aria-hidden className="hidden">
          <label htmlFor="consultation-company">Company</label>
          <input
            id="consultation-company"
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
            Request Consultation
          </>
        )}
      </button>
    </form>
  );
}

type ConsultationDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function ConsultationDialog({ open, onClose }: ConsultationDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="bg-foreground/50 absolute inset-0"
        aria-label="Close consultation form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-dialog-title"
        className="border-border bg-surface relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border"
      >
        <div className="border-border flex items-start justify-between gap-4 border-b px-6 py-5">
          <div>
            <h2
              id="consultation-dialog-title"
              className="text-foreground text-xl font-semibold"
            >
              Schedule Consultation
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Free in-home assessment — we&apos;ll call you to confirm a time.
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
        <ConsultationForm />
      </div>
    </div>
  );
}
