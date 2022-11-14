import React from "react";
import { Route, Switch } from "react-router-dom";
import UsersListPage from "../pages/UsersListPage";

const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <>
        <Switch>
          <Route
            path="/users/listpage/:userId?/:edit?"
            component={UsersListPage}
          />
        </Switch>
      </>
    </>
  );
};

export default Users;
