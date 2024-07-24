import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import '../../../public/css/MainLayout.css';
import GarageHeader from '../header/GarageHeader';
import GarageFooter from '../footer/GarageFooter';

const Layout = () => {

  return (
      <div className="flex flex-col min-h-screen">
        <GarageHeader />
        <div className="flex-grow">
          <Outlet />
        </div>
        <GarageFooter />
      </div>
  );
};

export default Layout;