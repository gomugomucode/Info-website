"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    router.push(`/blog?${createQueryString("q", value)}`);
  };

  return (
    <div className="relative w-full max-w-sm mb-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-4 w-4 text-neutral-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:text-white dark:ring-neutral-700 dark:focus:ring-primary-500 transition-shadow"
        placeholder="Search articles..."
      />
    </div>
  );
}
