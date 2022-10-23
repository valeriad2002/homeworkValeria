import React, { useState } from 'react';
import QuoteBox from '../QuoteBox.json'




function Phrases({index}) {
    
   
    
    return (
        <div>
            
            <h2>
                {QuoteBox[index].quote}
                </h2>
            
        </div>
    );
}

export default Phrases;