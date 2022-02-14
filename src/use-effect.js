import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if(visible){
        return (
            <div>
                <button onClick={() => setValue(v => v + 2)}>
                    +
                </button>
                <button onClick={() => setVisible(false)}>
                    visible
                </button>
                <div>
                    <HookCounter value={value} />
                </div>
            </div>
        );
    } else {
        return (
            <button onClick={() => setVisible(true)}>
                    visible
            </button>
        );
    }
};

const HookCounter = ({ value }) => {

    

    return <p>{value}</p>
}

ReactDOM.render(<App />, document.getElementById('root'));