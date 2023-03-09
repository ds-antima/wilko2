import * as React from "react";
export default function Header1(props: any) {
  console.log(props._site, "_sfcsgsf");
  return(
    <>
    <div
        className="flex flex-row"
        style={{
          width: "1506px",
          backgroundColor: "#2F4F4F",
          color: "white",
          padding: "30px",
        }}
      ></div>
    {props?._site?.c_headerSection?.map((res:any)=>{
        return(
            <>
           <div>{res?.cTA?.label}</div>

            </>
        )
    }
    )}
    </>
  )
}