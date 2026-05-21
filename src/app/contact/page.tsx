export const metadata = {
  title: "Contact",
  description: "Get in touch with Anupam Baral.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl mb-8">
        Contact
      </h1>
      
      <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:text-white dark:ring-neutral-700"
                placeholder="John Doe"
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
                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:text-white dark:ring-neutral-700"
                placeholder="john@example.com"
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
                className="block w-full rounded-md border-0 py-1.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-neutral-950 dark:text-white dark:ring-neutral-700"
                defaultValue={""}
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
