import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewPage } from "../Layout";
import { privateRoutings, routingItems } from "../Content/content";
import PrivateRoute from "./PrivateRoute";

const CutomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewPage />}>
          {routingItems.map((nav) => (
            <Route
              key={nav.title}
              path={nav.to}
              exact={nav.exact}
              element={nav.component}
            />
          ))}
        </Route>
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <ViewPage />
            </PrivateRoute>
          }
        >
          {privateRoutings.map((nav) => (
            <Route
              key={nav.title}
              path={nav.to}
              exact={nav.exact}
              element={nav.component}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CutomRouter;
