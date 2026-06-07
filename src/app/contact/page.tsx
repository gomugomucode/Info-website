import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch about cybersecurity reference content, corrections, or authorized security research collaboration.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl mb-8">
        Contact
      </h1>

      <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
        Questions about a guide, spotted an error, or want to discuss authorized
        security research? Reach out via the channels below.
      </p>

      <ul className="mb-12 space-y-3 text-neutral-600 dark:text-neutral-400">
        <li>
          <strong className="text-neutral-900 dark:text-neutral-100">GitHub:</strong>{" "}
          <a
            href="https://github.com/gomugomucode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline dark:text-cyan-400"
          >
            github.com/gomugomucode
          </a>
        </li>
        <li>
          <strong className="text-neutral-900 dark:text-neutral-100">Reference library:</strong>{" "}
          <Link href="/notes" className="text-cyan-600 hover:underline dark:text-cyan-400">
            Browse all notes
          </Link>
        </li>
      </ul>

      <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Direct messaging form coming soon. For now, open an issue on GitHub or
          use the portfolio site for professional inquiries.
        </p>
        <form className="space-y-6 opacity-60 pointer-events-none" aria-hidden="true">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:text-white dark:ring-neutral-700"
                placeholder="Your name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:text-white dark:ring-neutral-700"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                disabled
                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:text-white dark:ring-neutral-700"
              />
            </div>
          </div>
        </form>
        <a
          href="https://anupambaral.com.np"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full justify-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors"
        >
          Professional inquiries → Portfolio
        </a>
      </div>
    </div>
  );
}
