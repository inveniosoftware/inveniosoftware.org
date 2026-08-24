/*
 * SPDX-FileCopyrightText: 2026 Frontmatter.
 * SPDX-License-Identifier: MIT
 */
import { encodeDoi } from "commonmeta-ts";
import fs from "fs";
import path from "path";

const DOI_PREFIX = "10.63517";
const POSTS_DIR = "src/blog-posts";

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const args = process.argv.slice(2);
let author = "your-username";
const titleParts = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--author") {
    author = args[++i];
  } else {
    titleParts.push(args[i]);
  }
}
const title = titleParts.join(" ").trim();
if (!title) {
  console.error(
    'Usage: npm run new-post -- "Your Blog Post Title" [--author username]',
  );
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const slug = slugify(title);
const filename = `${date}-${slug}.md`;
const filePath = path.join(POSTS_DIR, filename);

if (fs.existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const doi = encodeDoi(DOI_PREFIX);

const frontmatter = `---
title: "${title}"
authors:
  - ${author}
date: ${date}
doi: ${doi}
tags:
  - InvenioRDM
permalink: "/blog/${date}-${slug}/"
---

Your blog content here...
`;

fs.mkdirSync(POSTS_DIR, { recursive: true });
fs.writeFileSync(filePath, frontmatter);

console.log(`Created ${filePath}`);
