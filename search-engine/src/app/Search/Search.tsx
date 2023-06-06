"use client";

import search from "@/lib/search";
import { useMemo, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => search(query), [query]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl p-4 mx-auto space-y-4">
      <div className="my-8 w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 text-lg text-gray-900 bg-gray-100 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full space-y-4">
        {results.map((result) => (
          <div
            className="flex flex-col items-center justify-center w-full p-4 space-y-4 bg-white rounded-xl shadow-md dark:bg
                dark:bg-gray-800"
            key={result.id}
          >
            <div className="flex flex-col items-start justify-center w-full space-y-2">
              <h2 className="text-xl font-bold">
                {result.first_name} {result.last_name}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {result.job_title} @ {result.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
