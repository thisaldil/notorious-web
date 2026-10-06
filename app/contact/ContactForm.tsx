"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 w-full border-0 border-b border-ink bg-transparent px-0 py-3 text-lg text-ink placeholder:text-mute/70 focus:border-b-2 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <div>
        <label htmlFor="name" className="label-hero">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="email" className="label-hero">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="subject" className="label-hero">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What can we help you with?"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="label-hero">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what's on your mind."
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot: real people never see or fill this */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group label-hero inline-flex items-center justify-between gap-10 bg-ink px-8 py-4 text-paper disabled:opacity-60 max-md:w-full"
        >
          {status === "sending" ? "Sending" : "Send message"}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1.5 md:h-5 md:w-5"
            aria-hidden
          />
        </button>

        <p role="status" aria-live="polite" className="min-h-6">
          {status === "sent" && "Message sent. We'll get back to you soon."}
          {status === "error" &&
            "Something went wrong. Please try again or email hello@wearnotorious.com."}
        </p>
      </div>
    </form>
  );
}