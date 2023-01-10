import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from "./components/navbar";
import home from './pages/home';
import projects from './pages/projects';
import contact from './pages/contact';
import skills from './pages/skills';
function App() {
  return (
    <div>
      <Navbar />
    <div className="container">
      
      <BrowserRouter>
      <Route path= '/' component={home}  exact/>
      <Route path= '/projects' component={projects} />
      <Route path= '/contact' component={contact} />
      <Route path= '/skills' component={skills} />
      </BrowserRouter>
      </div>
 </div>
  );
}

export default App;
