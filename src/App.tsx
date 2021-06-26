import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { config } from "./config";

import Home from './containers/home/Home';
import NoMatch from './containers/no-match/NoMatch';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <FirebaseAuthProvider firebase={firebase} {...config}>
                <div>
                  <button
                    onClick={() => {
                      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                      firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                  >
                    Sign In with Google
                  </button>
                  <button
                    onClick={() => {
                      firebase.auth().signOut();
                    }}
                  >
                    Sign Out
                  </button>
                  <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
                      return (
                        <pre style={{ height: 300, overflow: "auto" }}>
                          {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                        </pre>
                      );
                    }}
                  </FirebaseAuthConsumer>

                  <div>
                    <IfFirebaseAuthed>
                      {() => {
                        return (
                          <FirebaseDatabaseProvider firebase={firebase} {...config}>
                            <Home />
                          </FirebaseDatabaseProvider>
                        );
                      }}
                    </IfFirebaseAuthed>
                  </div>

                </div>
              </FirebaseAuthProvider>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
