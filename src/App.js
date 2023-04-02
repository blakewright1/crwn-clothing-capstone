import { Routes, Route, Outlet } from 'react-router-dom';

import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am Navigation</h1>
      </div>
      <Outlet />
    </div>
  );
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >

      </Route>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
