import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./header";

type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
  }: Props) => {
    console.log()
    return (
        <>
        
        
                {children}
      
        </>
    );
  };

export default PageLayout;
  