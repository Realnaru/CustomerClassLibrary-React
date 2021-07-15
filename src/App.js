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
import {CustomerEditForm} from "./Components/Pages/customer.edit";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>

        <Router>
            <Link to={'/customers'}>Customers list</Link>
          <Switch>
            <Route path={"/customers"} exact={true} component={CustomersTable}/>
            <Route path={"/customers/:id" } exact={true} component={CustomerDetails}/>
            <Route path={"/customers/:id/edit"} component={CustomerEditForm}/>
            <Route path={"/addresses"} exact={true} component={AddressesTable}/>
            <Route path={"/addresses/:id"} component={AddressDetails}/>
            <Route path={"/notes"} component={NotesTable}/>
          </Switch>

        </Router>
        </>
    )
  }
}

export default App;
