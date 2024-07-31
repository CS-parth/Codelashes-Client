import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import '../../../public/css/MainLayout.css';
import Footer from './footer/Footer';

const Layout = () => {
  const list = [
    {title:"Create Contest",nav:"contest/create"},
    {title:"Manage Contest",nav:"contest/manage"},
    {title:"Create Blog",nav:"blog/create"},
    {title:"Manage Blog",nav:"blog/manage"},
  ]
  return (
      <div className="flex flex-col min-h-screen">
        <Header color={"black"} list={list}/>
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer color={"black"}/>
      </div>
  );
};

export default Layout;