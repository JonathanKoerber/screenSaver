# IS310 Web Programming

This repository contains practice projects for learning modern web development with HTML, CSS, and JavaScript. The focus is on understanding semantic markup, styling systems, layout techniques, and simple browser-based interactivity.

## Learning Focus

In this module, you practice:

- Building page structure with semantic HTML elements
- Styling interfaces with CSS selectors, variables, and layout tools
- Using the box model, positioning, float, grid, and responsive breakpoints
- Adding interactivity with JavaScript and the DOM
- Organizing small front-end projects into clean folder structures

## Project Structure

The repository is organized into three learning exercises:

```text
screenSaver/
├── HTML/
│   ├── index.html
│   └── style.css
├── ScreenSaver/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── syntaxsExample/
│   ├── index.html
│   ├── scritp.js
│   └── style.css
└── README.md
```

## Folder Breakdown

### 1) `HTML/` - Semantic HTML + Layout Demo

This exercise demonstrates semantic structure and visual layout with:

- `header`, `main`, `article`, `section`, `aside`, and `footer`
- Example snippets shown directly on the page with `<pre><code>` blocks
- CSS styling to highlight the box model and element boundaries
- A float-based card section to compare older layout approaches

Use this folder to review how content should be grouped semantically before styling.

### 2) `ScreenSaver/` - Canvas Animation Project

This folder contains a JavaScript-powered screensaver effect:

- Full-screen `<canvas>` setup
- A bouncing logo rectangle that changes direction on collision
- Color changes when the logo hits a wall
- Responsive canvas resizing on browser window resize

Core concepts in this project:

- Canvas rendering context (`getContext("2d")`)
- Game/animation loop with `requestAnimationFrame`
- Position and velocity updates using object state
- Collision detection against viewport boundaries

### 3) `syntaxsExample/` - HTML/CSS Syntax Cheat Sheet

This project is a reference-style page with:

- Tabbed interface for switching between HTML and CSS examples
- JavaScript-generated flip cards for section summaries and code samples
- Organized examples of common syntax patterns
- Responsive styling for desktop and mobile devices

This is useful as a quick lookup while building other assignments.

## How to Run

Because these are static front-end projects, you can run them in several ways:

1. Open any `index.html` file directly in your browser.
2. Or use VS Code Live Server for auto-refresh while editing.

Suggested order:

1. Start with `HTML/index.html` to review semantic structure.
2. Open `syntaxsExample/index.html` as a syntax reference.
3. Explore `ScreenSaver/index.html` to study animation logic.

## Recommended Workflow

When practicing:

1. Edit HTML structure first.
2. Add CSS layout and visual styling second.
3. Add JavaScript behavior last.
4. Test in multiple screen sizes using browser dev tools.

## Notes

- This repository is education-focused and designed for experimentation.
- Some file names are intentionally kept as originally created for class continuity.
- You can extend each folder with your own variants (extra animation effects, layout alternatives, or additional syntax cards).

## Next Improvements (Optional)

- Add screenshot previews for each mini-project
- Add a root `index.html` page that links to all exercises
- Add short assignment prompts and reflection questions
- Standardize naming (for example, `scritp.js` -> `script.js`) if class constraints allow it