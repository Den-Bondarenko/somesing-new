import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
    <div>
      <HookSwicher />
    </div>
  );
};

const HookSwicher = () => {

  const value = useContext(MyContext);
  return <p>{value}</p>
};
 

ReactDOM.render(<App />, document.getElementById('root'));

