
# Random Quote Generator

A simple React-based web app that displays random quotes with the ability to share them on Twitter. This project leverages the `lucide-react` library for Twitter icon rendering and showcases essential React concepts such as state management, component lifecycle, and user interaction.

## Live Demo

You can check out the live demo of this app [here](https://codepen.io/Riki-A/pen/ZEgwZvP?editors=0110).

## Features

- Displays a random quote from an array of quotes.
- Provides a "New quote" button to fetch another random quote.
- Allows users to share quotes directly on Twitter using a share button.
- Responsively designed for mobile and desktop screens.


## Technologies Used

- **React**: The core JavaScript library for building the user interface.
- **Lucide React**: Provides scalable, customizable SVG icons (used for the Twitter icon).
- **CSS**: For styling and responsive design.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/random-quote-generator.git
   ```
2. Navigate into the project directory:
   ```bash
   cd random-quote-generator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The app will be running on [http://localhost:3000](http://localhost:3000).

## How to Use

1. Upon loading, a random quote will be displayed on the screen.
2. Click the **New quote** button to fetch a new random quote.
3. To share the quote on Twitter, click the **Twitter** icon, which will open a pre-filled tweet containing the quote text and author.

## Code Structure

- `src/index.js`: The entry point where the React app is rendered.
- `src/App.js`: The main parent component that contains the `QuoteBox` component.
- `src/QuoteBox.js`: Contains the logic for displaying the quote and handling the "New quote" button and tweet sharing.
- `src/index.css`: Contains styles for the app's layout, including responsive design for mobile devices.

## Contributions

Contributions are welcome! If you have any suggestions, bug reports, or pull requests, feel free to open an issue or a PR on GitHub.

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Key Sections of the README:

1. **Live Demo**: You can replace `#` with your actual live demo link.
2. **Features**: Highlights what the app does.
3. **Technologies Used**: Lists technologies such as React, Lucide React, and CSS.
4. **Installation**: Provides steps to run the app locally.
5. **How to Use**: A brief on how users can interact with the app.
6. **Code Structure**: Explains the main components and where key logic resides.
7. **Contributions**: Encourages others to contribute or report issues.
8. **License**: States that the project is open-source.

Let me know if you'd like me to adjust anything or add additional sections!
