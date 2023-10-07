import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Font from './Font/Font';

function App() {

  let [valueEntered, setValue] = useState('');
  let [fontValue, setFontValue] = useState('');

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const fontHandler = (event) => {
    setFontValue(event.target.value);
  };

  return (
    <Fragment>
      <div id="name">
        <p style={{ fontFamily: fontValue }} placeholder='Enter a Text Here'>{valueEntered}</p>
      </div>
      <div id="value-input">
        <input type="text" value={valueEntered} onChange={valueChangeHandler} placeholder='Enter a Text Here' />
        <select name="font" value={fontValue} onChange={fontHandler}>
          {
            Font.map(font => <option value={font}>{font}</option>)
          }
        </select>
      </div>
    </Fragment>
  );
}

export default App;
