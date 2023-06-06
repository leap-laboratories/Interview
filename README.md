# Leap Technical Interview

We're going to write a search engine.

In `search-engine/src/data/people.json` there's an array of 1,000 random people.

In `search-engine/src/app/Search/Search.tsx`, I've setup a basic form. The `search` callback will be responsible for searching. It should return an array of people objects, ordered by most relevant -> least relevant.

`search` is defined in `src/lib/search.ts`. This is where most of the work will happen.

Here are a few challenges. There's way too much to do here in an hour, so just try to get through what you can. No need to rush to finish them all: we'd rather see an incomplete codebase than a buggy codebase.

1. Search by first name
2. Search by first name and last name
3. Search by name, then search by company name
4. Partial search (e.g. `ppl` should match `Apple` and `application`)
5. Filter by job title (& search within filters)
6. Highlight matching terms in output
7. Handle typos

We'll do this over Zoom, collaboratively, so we'll ask you to narrate what you're doing and explain your thoughts. You'll be able to ask questions and we'll be happy to pitch in with implementation ideas if you get a bit lost.

## Rubric

We're looking out for three key things:

1. **Speed**. You should be able to solve problems quickly and effectively. You should be able to pick up new tools and start using them without too much trouble.

2. **Long-termism**. You should be able to articulate the trade-offs you're making, and consider how the application might grow over time.

3. **Cleanliness of code**. You should write code that's easy to read, not necessarily code that's easy to write.

## Development process

- Simply write code, add files, etc and hit run
- It might take a while to build the first time; after the development server is running, the web pane should hot reload.
- If you like to work test-first, I've added jest and setup a test file that imports `search`. You can run `npm run test` from the shell.
