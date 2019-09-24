import React from 'react';
import { read } from 'fs';

const Context = React.createContext('english'); //creates context object

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return(
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;