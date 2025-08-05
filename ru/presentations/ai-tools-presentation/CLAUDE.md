# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Reveal.js HTML presentation titled "AI Development Landscape 2024-2025: Technologies & Tools for Voice Agent Development". The presentation covers current AI trends, voice technologies, development tools, and implementation strategies.

## Architecture

**Single-Page Application Structure:**
- `index.html` - Main presentation file with embedded slides, styles, and JavaScript
- Self-contained design using CDN resources for Reveal.js framework
- Embedded CSS styling for consistent visual theme
- Company logos in `images/logos/` directory (SVG format)

**Content Organization:**
- Horizontal navigation between main sections (1-10)
- Vertical navigation within sections for detailed topics
- Black theme with professional styling optimized for technical presentations

**Key Sections:**
1. Introduction & Technical Overview
2. LLM Evolution & Reasoning Models (DeepSeek R1, OpenAI o3/o4)
3. Voice Technologies (STT, TTS, Voice-to-Voice)
4. AI Development Tools (Cursor, GitHub Copilot, etc.)
5. Q&A and Discussion

## Development Patterns

**Presentation Structure:**
- Uses nested `<section>` elements for slide organization
- Horizontal slides = main topics, vertical slides = deep dives
- CSS classes: `.tech-grid`, `.tech-card`, `.comparison-table`, `.feature-list`
- Logo styling with `.company-logo`, `.logo-small`, `.logo-large` classes

**Visual Design System:**
- Black background theme with white text
- Accent colors: `#00ff88` (green), `#4ecdc4` (teal), `#ff6b6b` (red)
- Responsive grid layouts for content cards
- SVG logos with CSS filters for consistent appearance

## Key Files

- `index.html` - Complete presentation (1155 lines)
- `presentation_structure.md` - Detailed slide organization and navigation structure
- `slide_content.md` - Content specifications and copy for each slide
- `ai_2024-2025_trends_report.md` - Comprehensive research report (source material)
- `images/logos/` - 200+ company/technology logos in SVG format
- `revealjs_docs/` - Reveal.js framework documentation

## Usage Notes

**Viewing the Presentation:**
- Open `index.html` in a web browser (optimized for Chrome on macOS)
- Use arrow keys or space bar for navigation
- ESC key for slide overview mode
- Speaker notes available (press 'S')

**Making Content Changes:**
- Slide content is embedded directly in `index.html`
- Reference `slide_content.md` for copy specifications
- Logo assets are in `images/logos/` - use CSS classes for consistent sizing
- Custom styles are embedded in `<style>` section of `index.html`

**Technical Requirements:**
- No build process required - static HTML file
- CDN dependencies for Reveal.js framework
- Responsive design for presentation displays
- Performance optimized for smooth transitions

## Logo Management

The presentation includes 200+ technology company logos stored as SVG files in `images/logos/`. These are styled with CSS filters for consistent appearance on the black background theme. When adding new logos, ensure they are in SVG format and follow the naming convention (lowercase, no spaces).

**Logo Sources Reference:**
See `logo_sources.md` for attribution and usage rights information.