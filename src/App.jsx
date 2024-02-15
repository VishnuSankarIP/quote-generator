import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <>
      <h1 className='text-center mt-5'>Quote Generator App</h1>
      <div className="card-div container ms-5 me-5">
        <Card className='text-center d-flex' style={{width:'100%'}}>
          <Card.Body>
            <Card.Text>
              {quote}
            </Card.Text>
            <Card.Text>
              {author}
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>Get quote</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
