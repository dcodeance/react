// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';



function getButtonText() {
    return 'Click on me!';
}
// Creat a react component
const App =  () => {
    //const buttonText = ['Click Me!', 2];
    const buttonText = {text: 'Click Me!'};
    const style = {backgroundColor: 'blue', color: 'white'};
    return (
        <div>
            <label htmlFor='name' className='label'>Enter name:</label>
            <input id='name' type='text'/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);