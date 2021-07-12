import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CustomersTable} from "./Components/Pages/customers.component";
import {AddressesTable} from "./Components/Pages/addresses.component";
import {NotesTable} from "./Components/Pages/notes.component";
import {CustomerDetails} from "./Components/Pages/customer.component";
import {AddressDetails} from "./Components/Pages/address.component";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router>

          <Switch>
            <Route path={"/customers"} exact={true} component={CustomersTable}/>
            <Route path={"/customers/:id"} component={CustomerDetails}/>
            <Route path={"/addresses"} exact={true} component={AddressesTable}/>
            <Route path={"/addresses/:id"} component={AddressDetails}/>
            <Route path={"/notes"} component={NotesTable}/>
          </Switch>

        </Router>
    )
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
