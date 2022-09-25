import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState("Hello");
  const [author, setAuthor] = useState("World");

  return (
    <div className="App">
      <div className="quote">
          <h2>{quote}</h2>
          <small>-{author}-</small>
      </div><br />
      <button className='btn'>Generate New Quote</button>
    </div>
    
  );
}

export default App;
