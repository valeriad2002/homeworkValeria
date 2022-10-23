import { useState } from 'react';

import './App.css';
import Author from './components/Author';
import Phrases from './components/Phrases';

import QuanteBox from './QuoteBox.json';

function App() {
  const [index, setIndex] = useState(0)
  const change = () => {
    setIndex(Math.floor(Math.random() * QuanteBox.length))
  }
  const color = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']
  const ranColor = Math.floor(Math.random() * color.length);
  document.body.style = `background: ${color[ranColor]}`;
  console.log(QuanteBox);
  return (
    <div className="App">
      <div className='card' style={{ color: color[ranColor] }}>
        <div className='quotation'>
          <i className="fa-solid fa-quote-left  fa-2xl"></i>
        </div>

        <Phrases className="phrase" index={index} />
        <Author index={index} />
        <br />
        <button onClick={change}
          style=
          {{ background: color[ranColor] }}
        ><i className="fa-sharp fa-solid fa-arrow-right"></i>

        </button>
      </div>

    </div>
  )
}

export default App
