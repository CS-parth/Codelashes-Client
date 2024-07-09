import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import { SessionContextProvider } from '../../context/SessionContext';

const Layout = () => {

  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
};

export default Layout;