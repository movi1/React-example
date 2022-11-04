import { Outlet } from "react-router-dom";
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <header className="App-header">
        
          
        
      </header> */}
      <div className="page-container">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;
