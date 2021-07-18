
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
import {CustomerEditForm} from "./Components/Pages/customer.edit.component";
import {CustomerAddForm} from "./Components/Pages/customer.add.component";
import {AddressEditForm} from "./Components/Pages/address.edit.component";
import {NoteEditForm} from "./Components/Pages/note.edit.component";
import {NoteAddForm} from "./Components/Pages/note.add.component";
import {AddressAddForm} from "./Components/Pages/address.add.component";

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
            <Route path={"/customers/:id/details" } exact={true} component={CustomerDetails}/>
            <Route path={"/customers/:id/edit"} component={CustomerEditForm}/>
            <Route path={"/customers/add"} exact={true} component={CustomerAddForm}/>
            <Route path={"/addresses/"} exact={true} component={AddressesTable}/>
            <Route path={"/addresses/:id/add"} exact={true} component={AddressAddForm}/>
            <Route path={"/addresses/:id/edit"} exact={true} component={AddressEditForm}/>
            <Route path={"/addresses/:id"} component={AddressDetails}/>
            <Route path={"/notes/:id/edit"} component={NoteEditForm}/>
            <Route path={"/notes/:id/add"} component={NoteAddForm}/>
            <Route path={"/notes"} component={NotesTable}/>
          </Switch>

        </Router>
        </>
    )
  }
}
export default App;
