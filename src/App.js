import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css'

import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFound'
import JobsRoute from './components/JobsRoute'

/* These are the lists used in the application. You can move them to any component needed. */

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <ProtectedRoute exact path="/" component={HomeRoute} />
      <ProtectedRoute exact path="/jobs" component={JobsRoute} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </BrowserRouter>
)

export default App
