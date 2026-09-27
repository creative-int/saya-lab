import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slugify.js";

test("joins words with single hyphens", () => {
  assert.equal(slugify("Retro Notes"), "retro-notes");
});

// Fails on purpose: slugify leaves a trailing hyphen. This is the bug saya fixes
// in the live proof ("@saya in saya-lab fix the failing test and open a draft PR").
test("never ends with a hyphen", () => {
  assert.equal(slugify("Ship it!"), "ship-it");
});
