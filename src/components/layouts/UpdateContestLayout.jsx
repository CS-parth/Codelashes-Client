import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import '../../../public/css/MainLayout.css';
import UpdateContestHeader from '../header/UpdateContestHeader';
const UpdateContesLayout = () => {

  return (
      <div className="flex flex-col min-h-screen">
        <UpdateContestHeader />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
};

export default UpdateContesLayout;