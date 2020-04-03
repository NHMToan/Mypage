import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import MyPage from "../screens/MyPage";
function Router(props) {
  return (
    <div>
      <Switch>
        <Route strict path="/">
          <MyPage />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(Router);
