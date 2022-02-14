import './App.css';

import React, {useContext} from 'react';
// import ColorSoundMapper from './components/ColorSoundMapper';
// import Mood from './components/Mood';
// import GitUser from './components/GitUser';
// import StarRating from './components/StarRating';
// import Celebrate from './components/Celebrate';
// import Counter from './components/Counter';

import {TreesContext} from "./"

function App() {

  const {trees} = useContext(TreesContext);

  return (
        // return <StarRating totalStars={10} />
        // return <Celebrate />
        //return <GitUser/>
        //return <Counter/>
        //return <Mood />
        //return <ColorSoundMapper />
        <div>
        <h1>Trees I've heard of</h1>
        <ul>
          {trees.map((tree)=> (
            <li key={tree.id}>{tree.type}</li>
          ))}
        </ul>
        </div>
    )
}

export default App;
