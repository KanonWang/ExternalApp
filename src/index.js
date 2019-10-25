import './index.less';
import React from "react";
import ReactDOM from "react-dom";
import { getConnections } from './services/NetworkService';

const App = () => {
    return (
        <div data-ts="App">
            <div data-ts="Main">
                <div data-ts="Content">
                    <div data-ts="Panel">
                        <button onClick={getConnections}>getConnections</button>
                    </div>
                </div>
            </div>
        </div>);
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
