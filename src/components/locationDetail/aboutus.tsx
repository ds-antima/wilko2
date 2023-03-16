// import * as React from "react";
// export default function About1(props: any) {
//   //console.log(props._site, "_sfcsgsf");
//   return(
//     <>
    
//     {props?.about?.map((res:any)=>{
//       console.log(res,"jxjsjssnknsxjskck");
//         return(
//             <>
            
//   <img src={res?.photo?.url} width="250px"/>
  
//     {/* <h5>{res?.title}</h5>
//     <p >{res?.description}</p> */}
//     {/* <a href="#" ></a> */}
//   </div>
// {/* </div> */}
// {/* </div></div> */}
            
//             {/* <div className="">
//             <img style={{width:"200px"}} src={res?.photo?.url}/>
//             <div>{res?.title}</div>
//             <div>{res?.description}</div>
//            <div><a href={res.shopNow.link}>{res.shopNow.label}</a></div>
//            </div>
//             {console.log(res.description,"zshvzhvzhvzxknkxn")} */}
          
//             </>
//         )
//     }
//     )}
    
//     </>
//   )
// }
import * as React from "react"
export default function About1(props: any) {
    //console.log(props.service,"c_servicesdata")
    return (
        <>
            <div className="flex w-full" style={{ backgroundColor: "white" }}>
                {/* {/ <div className="flex w-full"> /} */}
                <div className="flex w-full">
                {props?.about?.map((res:any) => {
                        return (
                            <>
                                <div className="container" style={{paddingLeft:"0px" , paddingRight:"0p"}}>
                                    <div className="nearby-sec-inner">
                                        <div className="nearby-card" style={{height: "447px",width: "26rem",borderStyle:"none"}}>
                                            {/* {s.label ? (<a href="#"><h2>{s.label}</h2></a>) : ("")} */}
                                            {/* <br /> */}
                                            {res?.photo?.url? (<img src={res?.photo?.url} style={{ width: "80%", height: "60%" }} />) : ("")}
                                            <br />
                                            {res?.title ? (<a href="#"><h2 style={{color:"#a31c1c" , fontWeight:"900"}}>{res?.title}</h2></a>) : ("")}
                                            <br />
                                            {res?.description ? (<p style={{width:"100%"}}>{res?.description}</p>) : ("")}
                                            <br />
                                            {res?.shopNow?.link ? (<a href={res.shopNow.link}><h2 style={{backgroundColor:"#27ae60" , color:"white" ,textAlign:"center",width:"300px"}}>{res?.shopNow?.label}</h2></a>) : ("")}
                                           


                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>

            </div>
        </>
    )
}