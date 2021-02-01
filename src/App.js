import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LeftBar from './Navbar/LeftBar';

function App() {
 
  return (
      <Router>
          <LeftBar/>
          <Switch>
            <Route />
          </Switch>
      </Router>
  );
}
export default App;