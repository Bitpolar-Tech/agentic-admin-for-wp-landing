# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Agentic Admin for WP Landing — a single-page landing page promoting the WordPress Agentic Admin plugin.

### What the Plugin Does

WordPress Agentic Admin is an AI tool for the wp-admin panel. It uses a local LLM and abilities to interact with the WordPress installation (read/write operations). It gives WordPress administrators an intelligent assistant that can manage their site directly from the admin dashboard.

## Tech Stack

- **Node:** v20.16.0
- **Framework:** Astro (static site)
- **Output:** One-page static landing page
- **Images:** All images must be generated using the `nano-banana-images` skill
- **Design:** Always use the `frontend-design` skill (impeccable:frontend-design) when building or modifying the webpage
- **Styling:** Script and style tags work in Astro components — use them freely

## Skills & Workflow Rules

- **Images:** Always invoke the `nano-banana-images` skill to generate any images needed for the site. Do not use placeholder images or stock photos.
- **Frontend design:** Always invoke the `impeccable:frontend-design` skill when creating or modifying any UI component, section, or page layout. This ensures high design quality and avoids generic AI aesthetics.
- **Astro patterns:** Use the `astro-patterns` skill for Astro-specific implementation patterns.

## Status

New project. Static Astro site to be set up and built out as a single-page landing page.
