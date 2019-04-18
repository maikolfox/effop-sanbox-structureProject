import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function test() {
  const routes = [
    {
      path: "/bubblegum",
      sidebar: () => <div>bubblegum!</div>,
      main: () => (
        <h2>
          <Link to="/shoelaces">Bubblegum</Link>
        </h2>
      )
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ];

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/test">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>
          {routes.map(routes => (
            <Route
              key={routes.path}
              path={routes.path}
              exact={routes.exact}
              component={routes.sidebar}
            />
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default test;
