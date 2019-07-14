import React from 'react';
import ReactDOM from 'react-dom';

const content = 'Кажется, мы подключили React';

const element = (content) => <h1 className="element">{content}</h1>;

ReactDOM.render(
    element(content),
    document.getElementById('root'),
);
