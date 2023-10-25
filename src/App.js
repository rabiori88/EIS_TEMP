

import {  Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';
import Contact from './page/Contact';
import BBS010 from './page/BBS/BBS010';
import {
  QueryClient,
  QueryClientProvider  
} from '@tanstack/react-query'

import { ServerApiProvider } from './context/ServerConnectContext';
const queryClient = new QueryClient()

function App() {
  const loggedInUser = localStorage.getItem("authenticated");

  if(!loggedInUser)
  {
    return <Navigate replace to="/login" />;
  }

  return (
    <main className="App">
      {/* <ServerApiProvider>
        <QueryClientProvider client={queryClient}>          
            <Outlet />            
        </QueryClientProvider>
      </ServerApiProvider>     */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BBS010" element={<BBS010 />} />
        
      </Routes>    
      
    </main>
  );
}

export default App;
