
import React from 'react'; 
import RollDice from './components/RollDice'; 
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
library.add(fas); 
import "./App.css"

function App() { 
    const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
    return ( 
        <>
        <div className='Dice'>
            <RollDice  sides={sides}/> 
        </div>


        </>
    );
}

export default App;
