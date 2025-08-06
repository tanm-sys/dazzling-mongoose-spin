# The Mathematics of Trust

This project is an interactive website for exploring the mathematical concepts behind cryptography, such as prime numbers, modular arithmetic, and the algorithms that secure our digital world. The application is built with React, Vite, and TypeScript, and it features immersive visuals to bring these concepts to life.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/your_project.git
    ```
2.  Install NPM packages
    ```sh
    pnpm install
    ```

## Scripts

In the project directory, you can run the following commands:

### `pnpm dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `pnpm build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `pnpm lint`

Lints the code to find and fix problems in your JavaScript code.

### `pnpm preview`

Serves the production build locally to preview it before deploying.

## Tech Stack

*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [Vite](https://vitejs.dev/) - A fast build tool that provides a quicker and leaner development experience for modern web projects.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable components built using Radix UI and Tailwind CSS.

## Project Structure

The project structure is organized as follows:

```
.
├── public/
│   └── # Static assets
├── src/
│   ├── components/
│   │   ├── sections/ # Page sections
│   │   ├── ui/ # UI components from shadcn/ui
│   │   └── visuals/ # Visual components like animations
│   ├── hooks/ # Custom React hooks
│   ├── lib/ # Utility functions
│   ├── pages/ # Page components
│   └── # Other source files
├── .gitignore
├── index.html
├── package.json
├── README.md
└── # Other configuration files
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
