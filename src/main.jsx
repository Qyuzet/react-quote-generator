import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Twitter } from "lucide-react";

//React Components----------------------------------------------------
const quotes = [
  {
    text: "Teach thy tongue to say, 'I do not know,' and thou shalt progress.",
    author: "Maimonides",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "Life is what happens while you're busy making other plans.",
    author: "John Lennon",
  },
];

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0],
    };
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({ quote: quotes[randomIndex] });
  };

  getTweetUrl = () => {
    const { text, author } = this.state.quote;
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${text}" - ${author}`
    )}`;
  };

  render() {
    const { text, author } = this.state.quote;

    return (
      <div className="quotes-container">
        <div id="quote-box" className="quote-box">
          <div className="quote-content">
            <p id="text" className="quote-text">
              "{text}"
            </p>
            <p id="author" className="quote-author">
              - {author}
            </p>
            <div className="button-container">
              <div className="social-buttons">
                <a
                  id="tweet-quote"
                  href={this.getTweetUrl()}
                  target="_blank"
                  className="social-button"
                >
                  <Twitter size={24} />
                </a>
                <button className="social-button">t</button>
              </div>
              <button
                id="new-quote"
                onClick={this.getRandomQuote}
                className="new-quote-button"
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//React Parent Component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="main-container">
          <QuoteBox />
        </div>
      </>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
