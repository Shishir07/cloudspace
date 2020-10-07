import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link} from 'react-router-dom';
import NavBar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login"
import {StateProvider, store} from "./store"

function App( props) {

  const {dispatch} = useContext(store);

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
      <StateProvider>
        <Router>
          <Switch>
            <Route exact
                   path="/"
                   render={(props) => <Home {...props} />}
            />
            <Route exact
                   path="/login"
                   render={(props) => <Login {...props} />}
            />
          </Switch>

        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
