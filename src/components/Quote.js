/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/quote.css';

const quotes = [
  'Your silence will not protect you.',
  "If I didn't define myself for myself, I would be crunched into other people's fantasies for me and eaten alive.",
  'When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
  'I am not free while any woman is unfree, even when her shackles are very different from my own.',
  'Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.',
  'I have come to believe over and over again that what is most important to me must be spoken, made verbal and shared, even at the risk of having it bruised or misunderstood.',
  'There is no thing as a single-issue struggle because we do not live single-issue lives.',
  'Revolution is not a one time event.',
  'Without community, there is no liberation.',
  'We have been raised to fear the yes within ourselves, our deepest cravings.',
  'I am my best work - a series of road maps, reports, recipes, doodles, and prayers from the front lines.',
  'The erotic is a measure between the beginnings of our sense of self and the chaos of our strongest feelings.',
  'Nothing I accept about myself can be used against me to diminish me.',
  'Poetry is the way we help give name to the nameless so it can be thought.',
  'Institutionalized rejection of difference is an absolute necessity in a profit economy which needs outsiders as surplus people.',
  'Because the machine will try to grind you into dust anyway, whether or not we speak.',
  '...oppression is as American as apple pie...',
];

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    let newIndex = Math.floor(Math.random() * quotes.length);
    while (newIndex === this.state.quoteIndex) {
      newIndex = Math.floor(Math.random() * quotes.length);
    }
    this.setState({
      quoteIndex: newIndex,
    });
  }

  render() {
    return (
      <div id="quote-box">
        <header id="author">
          <h1>Audre Lorde Quotes</h1>
        </header>
        <p id="text">{quotes[this.state.quoteIndex]}</p>
        <div id="buttons">
          <div>
            <a
              id="tweet-quote"
              rel="noopener noreferrer"
              target="_blank"
              href={`http://twitter.com/intent/tweet?text=${quotes[this.state.quoteIndex]
                }`}
            >
              Tweet This
            </a>
          </div>
          <button type="button" id="new-quote" onClick={this.newQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
export default Quote;
