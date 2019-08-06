import React from 'react';
import Child from './Child.jsx';

let counter = 0;

export default class App extends React.Component {
    state = {
        text: 'Наш первый React-компонент',
        counter: 0,
    };

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    handleClick = () => {
        counter += 1;
        console.log(counter);
    };

    render() {
        console.log('render');
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Child counter={ counter } />
                <button onClick={ this.handleClick }>+1</button>
            </div>
        )
    }
}
