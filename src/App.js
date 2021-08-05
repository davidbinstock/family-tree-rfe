import React from 'react';
import data from './data/data.json';
import './App.css';
import { ReactFlowContainer } from './components/ReactFlowContainer';


function App() {

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Family Tree
      </header>
      <section className="Main">
          <ReactFlowContainer/>
      </section>
    </div>
  );
}

export default App;
