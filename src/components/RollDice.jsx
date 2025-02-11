
import React, { useState } from 'react'; 

import Die from './Die'; 

const RollDice = ({ sides }) => {
    const [die1, setDie1] = useState('one'); 
    const [die2, setDie2] = useState('two'); 
    const [rolling, setRolling] = useState(false); 
    const[score, setScore] = useState(0);

    const roll = () => { 
        setTimeout(() => { 
            const newDie1 = sides[Math.floor(Math.random() * sides.length)]; 
            const newDie2 = sides[Math.floor(Math.random() * sides.length)]; 

            setDie1(newDie1);
            setDie2(newDie2);
            setRolling(true);
            if(newDie1 === newDie2){
                setScore(prevScore => prevScore+1);
            }
            setTimeout(() => { 
                setRolling(false); 
            }, 2000); 
        }, 2000);
    };

    return ( 
        <div className='RollDice'> 
            <div className='RollDice-container'>
                <Die face={die1} rolling={rolling} /> 
                <Die face={die2} rolling={rolling} /> 
            </div>
            <button className={rolling ? 'RollDice-rolling' : ''}
                    disabled={rolling} 
                    onClick={roll}> 
                {rolling ? 'Rolling' : 'Roll Dice!'} 
            </button>
            <h3 style={{color:"red"}}>Final  Score is : {score}</h3>
        </div>
    );
};

export default RollDice;
