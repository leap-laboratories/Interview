import Search from "./Search/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <h1 className="relative z-10 text-6xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400">
          People Search
        </h1>
      </div>

      <Search />
    </main>
  );
}
