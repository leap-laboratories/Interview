import { describe, it, expect } from "@jest/globals";
import search from "./search";

describe("search", () => {
  it("does something", () => {
    expect(search("foo")).toBeInstanceOf(Array);
  });
});
