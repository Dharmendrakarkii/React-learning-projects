import { Contact2, Home, ImagesIcon, MessageCircleCode, PhoneCall, SettingsIcon, Users2Icon } from "lucide-react";
import React, { Children } from "react";

const layout = ({ Children }) => {
  return (
    <>
    <p className="bg-gray-900 flex item-center">this is page of layout</p>
      <div className="  bg-gray-500 h-screen w-15">
        <div className="flex flex-col items-center mt-4 space-y-6">
        <div className="p-5">
          <a href="message">
          <MessageCircleCode/>
          </a>
        </div>
        <div className="p-5"><a href="people"><Contact2/></a></div>
        <div className="p-5">
          <a href="phone">
            <PhoneCall />
          </a>
        </div>
        <div className="p-5"><a href="image"><ImagesIcon/></a></div>
              <div className="m-70">
          <a className="m-5" 
             href="settings"><SettingsIcon/></a>
             <a className="m-5"
             href="profile"><Users2Icon/></a>.     
      </div>
      
             </div>
            </div>
          
                  
        {Children}
    </>
  );
};

export default layout;

