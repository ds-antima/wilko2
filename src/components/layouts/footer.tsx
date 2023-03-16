// import * as React from "react";
// import "../../index.css";
// import logofooter from "../../images/logo-footer.svg";
// import facebook from "../../images/facebook.svg";
// import instagram from "../../images/instagram.svg";
// import twitter from "../../images/twitter.svg";
// import youtube from "../../images/youtube.svg";
// import printest from "../../images/printest.svg";
// import { cookieText, cookiesUrl } from "../../../sites-global/global"
// import CookieConsent from "react-cookie-consent";
// import { StaticData } from "../../../sites-global/staticData";
// import { useEffect, useState } from "react";
// import Link from "../commons/Link";

// const Footer = (props: any) => {

// 	// const [isNavVisible, setNavVisibility] =  useState(false);
// 	const [isSmallScreen, setIsSmallScreen] = useState(false);

// 	useEffect(() => {
// 		const mediaQuery = window.matchMedia("(max-width: 1024px)");
// 		mediaQuery.addListener(handleMediaQueryChange);
// 		handleMediaQueryChange(mediaQuery);

// 		return () => {
// 			mediaQuery.removeListener(handleMediaQueryChange);
// 		};
// 	}, []);

// 	const handleMediaQueryChange = mediaQuery => {
// 		if (mediaQuery.matches) {
// 			setIsSmallScreen(true);
// 		} else {
// 			setIsSmallScreen(false);
// 		}
// 	};
// 	// if (typeof window !== "undefined") {
// 	// 	mediaQuery = window?.innerWidth;
// 	// }

// 	return (
// 		<>

// 			<footer classNameName="site-footer">

// 				<div classNameName="container">

// 					<div classNameName="store-locator">
// 					<div classNameName="company-logo mr-4">
// 							{props._site.c_footer?.map((link:
// 								return(
// 									<>
// 									{link.map(res:any)=(

// 									)}
// 									</>

// 								)
// 								// <span style={{color:"white"}}>{link.footerHeading}</span>
// 							))}
// 							</div>
// 						{/* {footer.c_store_finder.map((storfinder: any) => {
// 							console.log(storfinder)
// 							return (
// 								<>
// 									<div classNameName="store-inner">
// 										<img src={storfinder.icon.url} alt="store-finder" />
// 										<Link props={storfinder.cTA}/>

// 									</div>
// 								</>
// 							)
// 						})} */}

// 						<div classNameName="store-inner flex flex-raw">
// 							<div>
// 							{/* <img src={footer.c_fAQs.icon.url} alt="faq-icon" />

// 							<Link props={footer.c_fAQs.cTA} /> */}
// 							</div>
// 							<div>

// 							{/* <img src={footer.c_getAQuate.icon.url} alt="faq-icon" />

// 							<Link props={footer.c_getAQuate.cTA} /> */}
// 							</div>
// 						</div>

// 					</div>

// 					<div classNameName="link-sec-footer ">
// 					{/* {footer.c_customer_services?
// 						<div classNameName="footer-block">
// 							<h4 classNameName="footer-block-title">{footer.c_customer_services.headerLinksHeading}</h4>
// 							<ul classNameName="list-none">
// 								{footer.c_customer_services.headerLinks.map((customerService: any) => {
// 									return (<li>
// 											<Link props={customerService}/>
// 										</li>)
// 								})}
// 							</ul>
// 						</div>:''} */}
// 						{/* {footer.c_about_matalan?
// 						<div classNameName="footer-block">
// 							<h4 classNameName="footer-block-title">{footer.c_about_matalan.headerLinksHeading}</h4>
// 							<ul classNameName="list-none"><li>{footer.c_about_matalan.headerLinksHeading}</li>
// 								{footer.c_about_matalan.headerLinks.map((aboutMatalan: any) => {
// 									return (<li>
// 										<Link props={aboutMatalan}/>
// 										</li>)
// 								})}
// 							</ul>
// 						</div>:''} */}
// 						{/* {footer.c_our_website?
// 						<div classNameName="footer-block">
// 							<h4 classNameName="footer-block-title">{footer.c_our_website.headerLinksHeading}</h4>
// 							<ul classNameName="list-none">
// 								{footer.c_our_website.headerLinks.map((ourWebsite: any) => {
// 									return (<li>
// 										<Link props={ourWebsite}/>
// 									</li>)
// 								})}
// 							</ul>
// 						</div>:''} */}
// 						<div classNameName="footer-block">
// 						<ul classNameName="social-media-bx">
// 							{/* {footer.c_socialIcons.map((icon: any) => {
// 								return (

// 									<>
// 										<li classNameName=""> <a href={icon.cTA.link} target="_blank"><img src={icon.icon.url} height="20" alt="social" width="21" classNameName="inline-block w-5 h-auto" /> </a> </li>
// 									</>
// 								)
// 							})} */}
// 						</ul>
// 						</div>

// 					</div>
// 					<div classNameName="copyright-bx">
// 						<span classNameName="text-xs flex-wrap" data-copyright="">
// 							{/* {footer.c_footerDescription} */}
// 							</span>

// 					</div>

// 				</div>

// 			</footer>

// 			<CookieConsent
// 				buttonText={"Accept"}
// 				buttonStyle={{
// 					marginLeft: "100px",
// 				}}
// 			>
// 				<p>
// 					{cookieText}
// 					<a classNameName="text-cookies-link" href={cookiesUrl}>
// 						{StaticData.cookie}
// 					</a>
// 					.
// 				</p>
// 			</CookieConsent>
// 		</>
// 	);
// };

// export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }
import * as React from "react";
export default function Footer(props: any) {
  return (
    // <>
    // {props?._site?.c_footer1?.subpart?.map((res:any)=>{
    // 	return(
    // 		<>
    // 		<div className="flex" >

    // 		<div className="d-flex flex-row mb-3"><h2 className="text-uppercase">{res?.footerHeading}</h2></div>

    // 			{/* <h2>{res?.footerHeading}</h2> */}

    // 		{res?.footerSubpart?.map((img:any)=>{
    // 			return(
    // 				<>
    // 				<div className="d-flex flex-column mb-3">{img.label}</div>

    // 				</>
    // 			)
    // 		})}
    // 		</div>
    // 		</>
    // 	)
    // })}
    // </>
    <>
      <div className="Footer-wrapper" style={{ display: "inline-flex" ,width:"100%"}}>
        <div className="" style={{ width: "45%", flexBasis: "20%" }}>
          {props?._site?.c_footer1?.title}

          <div className="footer-subpart" style={{ marginTop: "16px" }}>
            {props?._site?.c_footer1?.subpart?.map((res: any) => {
              return (
                <>
                  <div className="footer1" style={{ padding: "2px" }}>
                    <ul><a href={res.link}>{res.label}</a></ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="" style={{ width: "45%", flexBasis: "20%" }}>
          {props?._site?.c_footer2?.title}

          <div className="footer-subpart" style={{ marginTop: "16px" }}>
            {props?._site?.c_footer2?.subpart?.map((res: any) => {
              return (
                <>
                  <div className="footer1" style={{ padding: "2px" }}>
                    <ul>{res.label}</ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="" style={{ width: "45%", flexBasis: "20%" }}>
          {props?._site?.c_footer3?.title}

          <div className="footer-subpart" style={{ marginTop: "16px" }}>
            {props?._site?.c_footer3?.subpart?.map((res: any) => {
              return (
                <>
                  <div className="footer1" style={{ padding: "2px" }}>
                    <ul><a href={res.link}>{res.label}</a></ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="" style={{ width: "45%", flexBasis: "20%" }}>
          {props?._site?.c_footer4?.title}

          <div className="footer-subpart" style={{ marginTop: "16px" }}>
            {props?._site?.c_footer4?.subpart?.map((res: any) => {
              return (
                <>
                  <div className="footer1" style={{ padding: "2px" }}>
                    <ul><a href={res.link}>{res.label}</a></ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div>
          {" "}
          Social
          <div style={{ display: "flex" }}>
            {props?._site?.c_social?.map((res1: any) => {
              return (
                <>
                  <div>
                   <a href="#"> <img src={res1.url} /></a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
