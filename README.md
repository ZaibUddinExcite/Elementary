# Elementary: The Complete Edition

[![Elementary Screenshot](https://storage.googleapis.com/genai-assets/elementary-screenshot.png)](https://storage.googleapis.com/genai-assets/elementary-screenshot.png)

An interactive chemistry game where you discover over 300 compounds by combining elements. This project was built to be a fun, educational tool for learning basic chemistry concepts through experimentation. It features a comprehensive discovery guide, a hint system, and an interactive tutorial to help you find them all.

**Created by Zaib Uddin, enhanced and prepared for sharing.**

## ✨ Features

-   **Interactive Workspace:** Drag and drop elements to combine them.
-   **300+ Compounds:** Discover a vast library of chemical compounds, from simple water to complex organic molecules.
-   **Discovery Guide:** Track your progress and see what you've found.
-   **Hint System:** Get a "flash of inspiration" when you're stuck.
-   **Interactive Tutorial:** A step-by-step guide to get you started.
-   **Dynamic UI:** A responsive and resizable element library with helpful tooltips.
-   **Audio Feedback:** Sound effects for actions and background music (can be muted).
-   **Persistent State:** Your discoveries are saved in your browser's local storage.

## 🛠️ Tech Stack

-   **Frontend:** [React](https://react.dev/) (with Hooks) & [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (via CDN)
-   **Audio:** [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
-   **Module Loading:** [Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) for a build-less development experience in the browser.
-   **Build Process:** [TypeScript Compiler (`tsc`)](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for transpilation.

## 🚀 How to Run Locally

This project requires [Node.js](https://nodejs.org/) and `npm` to be installed.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/[YOUR_USERNAME]/elementary-complete-edition.git
    cd elementary-complete-edition
    ```
    *(Replace `[YOUR_USERNAME]` with your GitHub username)*

2.  **Install Dependencies & Build**
    This command will install the necessary development tools and automatically run the TypeScript compiler to build the JavaScript files.
    ```bash
    npm install
    ```

3.  **Start the Local Server**
    This command starts a simple web server to host the application.
    ```bash
    npm start
    ```
    The server will typically run on `http://localhost:8080`. Your terminal will show the exact address.

4.  **Open in Browser**
    Open your web browser and navigate to the address provided by the server. Enjoy the game!

### For Development

If you are actively developing, you can run the TypeScript compiler in "watch" mode in a separate terminal. This will automatically recompile files whenever you save a change.

```bash
# In one terminal, start the watcher:
npm run dev

# In a second terminal, start the server:
npm start
```
You will need to manually refresh the browser to see the updated changes.

## 📂 Project Structure

```
/
├── components/         # React components for UI elements
├── hooks/              # Custom React hooks (e.g., useAudio)
├── services/           # Services for external APIs (e.g., Gemini)
├── constants.ts        # Core game data (elements, compounds)
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── index.html          # Entry point HTML file
├── index.tsx           # React root renderer
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript compiler configuration
```

## ⚖️ License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
