"use client";

import { FormEvent, useState } from "react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message?: string;
};

const initialStatus: FormStatus = { type: "idle" };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your request right now.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: result.message || "Your message has been sent.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-secondary)]">Name</span>
          <input className="field" type="text" name="name" placeholder="Your name" required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-secondary)]">Phone</span>
          <input className="field" type="tel" name="phone" placeholder="Your phone" required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-secondary)]">Email</span>
          <input className="field" type="email" name="email" placeholder="you@example.com" required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-[var(--color-secondary)]">Service Needed</span>
          <input
            className="field"
            type="text"
            name="service"
            placeholder="What do you need help with?"
            required
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-semibold text-[var(--color-secondary)]">Project Details</span>
        <textarea
          className="field min-h-36 resize-y"
          name="message"
          placeholder="Tell us about the job, timeline, or issue."
          required
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Request"}
      </button>

      {status.type !== "idle" ? (
        <p
          className={`text-sm ${
            status.type === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
