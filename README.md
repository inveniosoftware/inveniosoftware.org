# Inveniosoftware.org website

This is the official website for [InvenioSoftware.org](https://inveniosoftware.org) - the home of the Invenio digital library framework, InvenioRDM research data management platform and InvenioILS integrated library system.

## About

This website is built with [11ty (Eleventy)](https://www.11ty.dev/), a static site generator that transforms templates into HTML. The site serves as the main hub for:

- **Invenio Framework**: A flexible digital library framework for building complex digital libraries and institutional repositories
- **InvenioRDM**: A turn-key research data management platform built on Invenio
- **InvenioILS**: An integrated library system for modern libraries
- **Community**: Resources, documentation, events, and support for the Invenio ecosystem

## Content Management

### Adding Blog Posts

1. Create a new markdown file in `src/blog-posts/`
1. Use the naming convention: `YYYY-MM-DD-post-title.md`
1. Make sure your authors are included (with name and optional ORCID) in _data/post_authors.json
1. Add tags as needed (e.g. InvenioRDM, InvenioILS, Invenio Framework, Showcase, Open Repositories, etc.)
1. Generate a random DOI string with prefix 10.63517 and an Invenio recid, e.g. https://doi.org/10.63517/21bf8-cds33
1. Add:
^
```yaml
---
title: "Your Blog Post Title"
authors: 
  - author-username
  - another-author-username
date: YYYY-MM-DD
doi: https://doi.org/10.63517/xxxxx
image: /assets/images/blog-posts/your-image-filename.jpg
tags:
  - InvenioRDM
  - AnotherTag
permalink: "/blog/YYYY-MM-DD-post-title/"
---

Your blog content here...
```

### Adding Images

Place images in `src/assets/images/blog-posts/` and reference them in markdown:

```markdown
![Alt text](/assets/images/blog-posts/image-filename.png)
```

### Update Roadmap

The Roadmap is automatically updated at every deployment, and it is a screenshot of the
[GitHub Board](https://github.com/orgs/inveniosoftware/projects/80).

Tu update it, trigger a new deployment in GitHub:

1. Go to the [GitHub repository](https://github.com/inveniosoftware/inveniosoftware.org).
2. Click on [Actions](https://github.com/inveniosoftware/inveniosoftware.org/actions).
3. On the left menu, click on [Deploy to GitHub Pages](https://github.com/inveniosoftware/inveniosoftware.org/actions/workflows/deploy.yml).
4. Click on the right button `Run workflow`.

### Site Configuration

Main configuration is in `eleventy.config.js`:

- **Input**: `src/` directory
- **Output**: `_site/` directory
- **Template formats**: Markdown, Nunjucks, HTML, Liquid, JS
- **Asset copying**: Images are copied to build output

## Develop

### Requirements

- **Node.js** (v18 or higher)
- **npm**

### 1. Clone the Repository

```bash
git clone <repository-url>
cd inveniosoftware.org
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

Start the development server with live reloading:

```bash
npm start
```

The site will be available at `http://localhost:8080` and will automatically reload when you make changes.

### 4. Build for Production

Generate the static site for production:

```bash
npm run build
```

The built site will be in the `_site/` directory.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with live reload |
| `npm run build` | Build site for production (includes screenshot generation) |
| `npm run debug` | Start server with detailed Eleventy debug information |

## Deployment

### GitHub Pages (Automatic)

The site is automatically deployed to GitHub Pages using GitHub Actions:

- **Trigger**: Pushes to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Build**: Runs `npm run build` and deploys `_site/` directory
- **URL**: Available at `https://[username].github.io/[repository-name]`

To enable GitHub Pages:
1. Go to repository Settings → Pages
2. Select "GitHub Actions" as the source
3. The workflow will automatically deploy on the next push to `main`

### Manual Deployment

The site generates static HTML files that can be deployed to any web server or static hosting service:

- **Build**: `npm run build`
- **Output**: `_site/` directory contains all static files
- **Assets**: Images and CSS are processed and copied to the output

Popular deployment targets:
- GitHub Pages
- Netlify
- Vercel
- AWS S3/CloudFront
- Any static web server

## Migration Notes

This site was migrated from a Lektor-based system to 11ty, preserving:
- ✅ All 50 blog posts with complete content
- ✅ Original URL structure (`/blog/post-name/`)
- ✅ All blog images and assets
- ✅ Metadata (authors, dates, teams)
- ✅ Site navigation and structure

## Contributing

1. Make your changes in the `src/` directory
2. Test locally with `npm start`
3. Build and verify with `npm run build`
4. Submit your changes via pull request
