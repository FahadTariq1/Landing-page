import React from 'react';
const Main=()=>
{
    return(<div className='main'>
        <div className='col col1'>
            <h2>
                Your Movies
            </h2>
            <p>Please Select the Movie you want to see.<br/> You can select any movie you want to watch by clicking the button</p>
            <button type='button'>More</button>
        </div>      
        <div className='col'>
            <div className='card card1'></div>
            <div className='card card2'></div>
            <div className='card card3'></div>
            <div className='card card4'></div>
        </div>
    </div>);
}
export default Main;