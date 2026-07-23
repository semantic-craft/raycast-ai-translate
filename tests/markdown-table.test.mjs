import assert from "node:assert/strict";
import test from "node:test";

import { escapeMarkdownTableCell } from "../scripts/markdown-table.mjs";

test("escapes Markdown table delimiters without backslash bypasses", () => {
  assert.equal(escapeMarkdownTableCell("a\\|b\r\nc"), "a\\\\\\|b<br>c");
});
