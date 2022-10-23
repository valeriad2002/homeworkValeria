import React from 'react';
import QuoteBox from '../QuoteBox.json'
function Author({index}) {
    return (
        <div className='author'>
            {QuoteBox[index].author}
        </div>
    );
}

export default Author;