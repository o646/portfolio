import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import home from './pages/home';
import projects from './pages/projects';
import contact from './pages/contact';
import skills from './pages/skills';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
    <div className="container">
      <Route path= '/' component={home}  exact/>
      <Route path= '/projects' component={projects} />
      <Route path= '/contact' component={contact} />
      <Route path= '/skills' component={skills} />
      </div>
      </BrowserRouter>
 </div>
  );
}

export default App;
