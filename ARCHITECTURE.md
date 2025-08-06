# Application Architecture

This document provides a high-level overview of the architecture of "The Mathematics of Trust" application.

## Overview

The application is a single-page application (SPA) built with React and Vite. It is designed to be a modular and scalable platform for showcasing interactive visualizations of mathematical and cryptographic concepts.

## Core Technologies

-   **React**: The core of the application is built with React, a JavaScript library for building user interfaces. We use functional components and hooks to manage component state and lifecycle.
-   **Vite**: The application is built and served using Vite, a modern and fast build tool that provides a great development experience with features like Hot Module Replacement (HMR).
-   **TypeScript**: We use TypeScript to write type-safe code, which helps in catching errors early and improving the developer experience.
-   **React Router**: Although it's a single-page application, React Router is used for client-side routing, making it easy to navigate between different sections of the application if needed in the future.
-   **Tailwind CSS**: The application is styled using Tailwind CSS, a utility-first CSS framework that allows for rapid UI development.
-   **shadcn/ui**: We use shadcn/ui for our UI components. It provides a set of accessible and customizable components that are built on top of Radix UI and Tailwind CSS.

## Project Structure

The project is structured in a modular way to keep the codebase organized and maintainable.

-   `src/components`: This directory contains all the React components.
    -   `src/components/ui`: Contains the UI components from shadcn/ui. These are low-level components like buttons, cards, and dialogs.
    -   `src/components/sections`: Contains the high-level components that represent different sections of the main page, such as the hero section, the overview, and the playgrounds.
    -   `src/components/visuals`: Contains components that are used for visual effects, such as animated backgrounds and parallax scrolling.
-   `src/pages`: This directory contains the main page components. Currently, there is only one page, `Index.tsx`, which assembles all the sections.
-   `src/lib`: This directory contains utility functions that are used across the application.
-   `src/hooks`: This directory contains custom React hooks.
-   `public`: This directory contains static assets like images and fonts.

## Data Flow

The application's data flow is relatively simple. Most of the content is static and is hardcoded in the components. For the interactive playgrounds, the state is managed locally within the respective components using React's `useState` and `useReducer` hooks.

There is no central state management library like Redux or Zustand, as the application's state is simple enough to be managed with local state.

## Component Architecture

The application follows a component-based architecture. The main page is composed of several high-level "section" components, which are in turn composed of smaller, reusable UI components.

-   **`Index.tsx`**: The main page component that renders all the sections of the application in order.
-   **Section Components**: Components like `Hero.tsx`, `Overview.tsx`, and `RSAPlayground.tsx` are responsible for rendering a specific section of the page. They are self-contained and manage their own state.
-   **UI Components**: These are the reusable components from `shadcn/ui` that are used to build the section components.
-   **Visual Components**: These are components that provide visual flair to the application, such as `AnimatedBackground.tsx` and `Starfield.tsx`.

## Future Considerations

As the application grows, we might consider the following:

-   **State Management**: If the application's state becomes more complex, we might need to introduce a central state management library like Zustand or Redux.
-   **i18n**: If we want to support multiple languages, we will need to add an internationalization library.
-   **API Integration**: If we want to fetch data from an API, we will need to add a data-fetching library like React Query or SWR.
