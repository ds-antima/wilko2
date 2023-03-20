import * as React from "react";
export default function Services1(props: any) {
// console.log(props._site, "_sfcsgsf");
  return(
    <>
    <div
        className="box"
        style={{boxSizing:"border-box",fontFamily:"var(--font-family-victoria-main)",display:"flex",gap:"100px",margin:"20px"
          
        }}
      >
    {props?.service?.map((res:any)=>{
        return(
            <>
            <div>{res.label}</div>
            {/* {console.log(res,"dknckdkfd")} */}
            </>
            
        )
        
    }
    
    )}
    </div>
    </>
    
  )
}