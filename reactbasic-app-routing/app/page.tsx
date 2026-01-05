import ThinBar from "@/components/thin-bar/ThinBar";
import UserCard from "@/components/user-card/UserCard";
import { Contact, Ellipsis, Images, MenuIcon, MessageCircleCode, PhoneCall, Settings, User, Users, Users2Icon } from "lucide-react";
import React from "react";


const LayoutPage = () => {
  return (

    < div className=" flex h-screen">
      <div className="bg-black-100  rouned-200 w-[5%]">
        <div className="flex flex-col items-center mt-4 space-y-6">
          <div>
            <a href="message">
              <MessageCircleCode />
            </a>
          </div>
          <div><a href="people"><Contact/></a></div>
          <div><a href="phone"><PhoneCall/></a></div>
      <div className=""><a href="image"><Images/></a></div>

          <div className="m-70">
            <a className="m-5"  href="setting">
              <Settings />
            </a>
      
         <a className="m-5"  href="profile"><Users2Icon/></a>
      
      </div>
      </div>
      </div>
      
      <div className="bg-gray-500 w-[31%]">
        <p className="text-green-400 text-2xl font-semibold tracking-wide">
    WhatsApp
  </p>
          <a  className="flix-item-end  item-center bg-white-400  w-100 flex items-end justify-end " href="menu"><MenuIcon/></a>

         <div><div className="px-3 py-2 bg-[#d8eeee]">
  <div className="flex items-center bg-black rounded-full px-4 py-2">
    <span className="text-white400 mr-3">search</span>
    <input
      type="search"
      placeholder="Search or start new chat"
      className="w-full outline-none text-sm"
    />
  </div>
</div>

          <a className="rounded-xl  w-300 h-200 bg-gray-500 m-3 p-1" href="all">All</a>
          <a className="rounded-xl w-300 h-20 bg-gray-500  m-3 p-1"  href="unread">Unread</a>
          <a  className="rounded-xl w-300 h-20 bg-gray-500  m-3 p-1"  href="favourites">Favourites</a>
          <a className="rounded-xl w-300 h-20 bg-gray-500  m-3 p-1"  href="groups">Groups</a>
        </div>
      <div>

     <div><UserCard/></div>
      <div><UserCard/></div>
      <div><UserCard/></div>
      <div><UserCard/></div>
      <div><UserCard/></div>
      <div><UserCard/></div>
    
      </div>
      </div>
      <div className="bg-green-200 w-[60%]"></div>
    </div>
  );
};


export default LayoutPage;
