import { HashRouter, Route, Routes } from 'react-router-dom';
import mainRoutes from './config/routes.ts';
import Navbar from './components/Navbar.tsx';
import { useLocation } from 'react-router-dom';
import Bubble from './pages/BubbleBackground.tsx';

function App() {

  return (
    <HashRouter>
      <Navbar/>
       <Routes>
          { mainRoutes.map((route: any, index: any) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
              />
          )) }
        </Routes>
        <BubbleHandler/>
    </HashRouter>
  )
}

export default App


export function BubbleHandler() {
  const location = useLocation(); // Get current location
  return location.pathname === '/newsfeed' ? <Bubble className="absolute top-0 left-0 w-full h-full z-0" /> : null;
}




