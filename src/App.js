import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Errors } from "./Components/Common/services/errors.component";
import { CustomersTable } from "./Components/Pages/customers.component";
import { AddressesTable } from "./Components/Pages/addresses.component";
import { NotesTable } from "./Components/Pages/notes.component";
import { CustomerDetails } from "./Components/Pages/customer.component";
import { AddressDetails } from "./Components/Pages/address.component";
import { CustomerEditForm } from "./Components/Pages/customer.edit.component";
import { CustomerAddForm } from "./Components/Pages/customer.add.component";
import { AddressEditForm } from "./Components/Pages/address.edit.component";
import { NoteEditForm } from "./Components/Pages/note.edit.component";
import { NoteAddForm } from "./Components/Pages/note.add.component";
import { AddressAddForm } from "./Components/Pages/address.add.component";
import { CustomerDelete } from "./Components/Pages/customer.delete.component";
import { AddressDelete } from "./Components/Pages/address.delete.component";
import { NoteDelete } from "./Components/Pages/note.delete.component";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Errors />
        <Router>
          <Link to={"/customers"}>Customers list</Link>
          <Switch>
            <Route
              path={"/customers"}
              exact={true}
              component={CustomersTable}
            />
            <Route
              path={"/customers/:id/details"}
              exact={true}
              component={CustomerDetails}
            />
            <Route
              path="/customers/:id/edit"
              render={(props) => <CustomerEditForm {...props} />}
            />
            <Route
              path="/customers/add"
              exact={true}
              render={(props) => <CustomerAddForm {...props} />}
            />
            <Route
              path="/customers/:id/delete"
              exact={true}
              render={(props) => <CustomerDelete {...props} />}
            />
            <Route
              path={"/addresses/"}
              exact={true}
              component={AddressesTable}
            />
            <Route
              path={"/addresses/:id/add"}
              exact={true}
              render={(props) => <AddressAddForm {...props} />}
            />
            <Route
              path="/addresses/:id/edit"
              render={(props) => <AddressEditForm {...props} />}
            />
            <Route
              path="/addresses/:id/delete"
              render={(props) => <AddressDelete {...props} />}
            />
            <Route path={"/addresses/:id"} component={AddressDetails} />
            <Route
              path={"/notes/:id/edit"}
              render={(props) => <NoteEditForm {...props} />}
            />
            <Route
              path={"/notes/:id/add"}
              render={(props) => <NoteAddForm {...props} />}
            />
            <Route
              path="/notes/:id/delete"
              render={(props) => <NoteDelete {...props} />}
            />
            <Route path={"/notes"} component={NotesTable} />
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
