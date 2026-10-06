import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | NOTORIOUS",
  description:
    "Questions about an order, a product, or a collaboration? Get in touch with NOTORIOUS.",
};

const collabTopics = [
  "Brand collaborations",
  "Influencer partnerships",
  "Creative collaborations",
  "Photography & modelling",
  "Wholesale enquiries",
  "Business partnerships",
];

export default function ContactPage() {
  return (
    <main className="relative grain overflow-hidden bg-paper">
      {/* INTRO */}
      <section className="wrap pt-28 pb-16 md:pt-36 md:pb-24">
        <p className="label-hero">Contact</p>

        <h1 className="display mt-6 text-[17vw] leading-[0.84] md:text-[11.5vw]">
          <span className="grunge block">Let&apos;s talk.</span>
        </h1>

        <div className="mt-12 max-w-[40ch] md:mt-16">
          <p className="text-xl leading-snug md:text-2xl">
            Have a question about an order, product, collaboration, or something
            else?
          </p>
          <p className="mt-4 text-xl leading-snug text-mute md:text-2xl">
            We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* SUPPORT + COLLABS */}
      <section className="wrap grid gap-16 pb-20 md:grid-cols-12 md:gap-8 md:pb-32">
        {/* Customer support */}
        <div className="md:col-span-5">
          <h2 className="display text-4xl md:text-5xl">Customer support</h2>

          <dl className="mt-8 border-t border-ink">
            <div className="border-b border-line py-4">
              <dt className="label-hero text-mute">Email</dt>
              <dd className="mt-2 text-lg md:text-xl">
                <a
                  href="mailto:hello@wearnotorious.com"
                  className="underline decoration-1 underline-offset-4 hover:text-mute"
                >
                  hello@wearnotorious.com
                </a>
              </dd>
            </div>
            <div className="border-b border-line py-4">
              <dt className="label-hero text-mute">Instagram</dt>
              <dd className="mt-2 text-lg md:text-xl">
                <a
                  href="https://instagram.com/wear.notorious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-1 underline-offset-4 hover:text-mute"
                >
                  @wear.notorious
                </a>
              </dd>
            </div>
          </dl>

          <p className="mt-6 max-w-[40ch] text-mute">
            For order-related enquiries, please include your order number so we
            can assist you faster.
          </p>
        </div>

        {/* Collaborations: black panel */}
        <div className="bg-ink p-8 text-paper md:col-span-6 md:col-start-7 md:p-12">
          <h2 className="display text-4xl md:text-5xl">Collaborations</h2>

          <p className="mt-6 text-xl leading-snug md:text-2xl">
            Interested in working with NOTORIOUS?
          </p>

          <p className="label-hero mt-8 text-paper/70">For</p>
          <ul className="mt-3 border-t border-paper/25">
            {collabTopics.map((t) => (
              <li key={t} className="border-b border-paper/25 py-3 text-lg">
                {t}
              </li>
            ))}
          </ul>

          <p className="label-hero mt-8 text-paper/70">Contact</p>
          <a
            href="mailto:collab@wearnotorious.com"
            className="mt-2 inline-block text-lg underline decoration-1 underline-offset-4 hover:text-paper/70 md:text-xl"
          >
            collab@wearnotorious.com
          </a>
        </div>
      </section>

      {/* FORM */}
      <section className="wrap pb-24 md:pb-36">
        <div className="grid gap-10 border-t border-ink pt-12 md:grid-cols-12 md:gap-8 md:pt-16">
          <h2 className="display text-5xl leading-[0.9] md:col-span-5 md:text-7xl">
            Contact form
          </h2>
          <div className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </div>
        </div>

        <p className="label-hero mt-24 text-center md:mt-32">
          Bold. Clean. Unapologetic.
        </p>
      </section>
    </main>
  );
}