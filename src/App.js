import React,{useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Components/Form'
// import Main from './Components/Main'
// import IssueList from './Components/IssueList'


function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Form} exact />
              {/* <Route path="/issues" component={IssueList} /> */}
              {/* <Route path="/shop" component={Shop} />
              <Route component={Error} /> */}
          </Switch>
      </main>
  )
}

export default App;
