import React from 'react';
import ReactDOM from 'react-dom';
import ColorSoundMapper from './components/ColorSoundMapper';
// import Mood from './components/Mood';
// import GitUser from './components/GitUser';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import StarRating from './components/StarRating';
// import Celebrate from './components/Celebrate';
// import Counter from './components/Counter';


function App() {
  // return <StarRating totalStars={10} />
  // return <Celebrate />
  //return <GitUser/>
  //return <Counter/>
  //return <Mood />

  return (
    <>
    <h1>Hello world!</h1>
    <ColorSoundMapper />
    </>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
