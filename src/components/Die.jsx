
import React from 'react'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Die = ({ face, rolling }) => { 
    return ( 
        <div className='die'>
            <FontAwesomeIcon style={{height:"80px"}} icon={['fas', `fa-dice-${face}`]} 
                             className={`Die ${rolling && 'Die-shaking'}`} /> 
        </div>
    );
};

export default Die; 
