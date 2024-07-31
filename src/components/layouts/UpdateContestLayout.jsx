import Header from '../header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import '../../../public/css/MainLayout.css';
const UpdateContesLayout = () => {
  const list = [
    {title:"Update Problem",nav:"problem"},
    {title:"Update Contest",nav:"contest"}
  ]
  return (
      <div className="flex flex-col min-h-screen">
        <Header color={"black"} list={list} />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer color={"black"}/>
      </div>
  );
};

export default UpdateContesLayout;