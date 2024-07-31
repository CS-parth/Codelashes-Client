import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import '../../../public/css/MainLayout.css';

const Layout = () => {
  const list = [
    {title:"Problem",nav:"/problems"},
    {title:"Contests",nav:"/contests"},
    {title:"Blogs",nav:"/blogs"},
    {title:"Sessions",nav:"/sessions"},
    {title:"Garage",nav:"/garage"}
  ];
  return (
      <div className="flex flex-col min-h-screen">
        <Header color={"bar_base"} list={list}/>
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer color={"bar_base"}/>
      </div>
  );
};

export default Layout;