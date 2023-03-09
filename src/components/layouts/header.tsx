import * as React from "react";
import Cta from "../commons/cta";

  type Link = {
    label: string;
    url: string;
  };

  
  const Header = (props:any) => {
    const linkDoms =  props?.site?.c_headerSection?.map((link:any) => (
      <div>
        <a>
         
         <img className="h-12 ml-2" src={link.photo.url}/> 
         <span style={{color:"white"}}>{link.cTA.label}</span>
        </a>
      </div>
    ));
    console.log(linkDoms,"dznbc")

  return (
    <>
    <div className="w-full" style={{backgroundColor:"#9d2235"}}>
      <div className="centered-container" style={{}}>
        <nav className="py-3 flex items-center justify-between">
          <div style={{}}>
          <img className="h-12"
              src={props?.site?.c_headerLogo?.url}/>
              </div>
            <div className="flex gap-x-10 text-lg font-semibold " style={{paddingLeft:"600px"}}>{linkDoms}</div>
          <div className="hidden space-x-5 sm:block">
            
          </div>
        </nav>
      </div>
      </div>
    </>
  );
};

export default Header;
