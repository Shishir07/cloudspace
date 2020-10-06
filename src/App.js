import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import NavBar from "./components/navbar";
import NavBar2 from "./components/navbar2"
import Counters from "./components/counters";

function App( props) {
  const [state, changeState] = useState({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  });

  const handleIncrement = counter => {
    const counters = [state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    changeState({ counters });
  };

  const handleDecrement = counter => {
    const counters = [state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    changeState({ counters });
  };

  const handleReset = () => {
    const counters = state.counters.map(c => {
      c.value = 0;
      return c;
    });
    changeState({ counters });
  };

  const handleDelete = counterId => {
    const counters = state.counters.filter(c => c.id !== counterId);
    changeState({ counters });
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <NavBar
        totalCounters={state.counters.filter(c => c.value > 0).length}
      />
      <div className="ompanel">
        <NavBar2/>
        <div className="containerbody">
          {/*<Counters*/}
              {/*counters={state.counters}*/}
              {/*onReset={handleReset}*/}
              {/*onIncrement={handleIncrement}*/}
              {/*onDecrement={handleDecrement}*/}
              {/*onDelete={handleDelete}*/}
              {/*onRestart={handleRestart}*/}
          {/*/>*/}
        </div>
      </div>

    </div>
  );
}

export default App;
