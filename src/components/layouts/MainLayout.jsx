import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
import '../../../public/css/MainLayout.css';
import { useAuthQuery } from '../../hooks/useAuthQuery';
const Layout = () => {
  const {data:isUser,isLoading,error} = useAuthQuery({refetchOnWindowFocus:false});
  const list = [
    {title:"Problem",nav:"/problems"},
    {title:"Contests",nav:"/contests"},
    {title:"Blogs",nav:"/blogs"},
    {title:"Sessions",nav:"/sessions"},
    isUser?.authorized && {title:"Garage",nav:"/garage"}
  ];
  if(isLoading) return <h1>Loading ...</h1>
  if(error) return <h1>Request Failed</h1>
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