import  { useEffect, useState } from "react"



export const useDimension = () => {

  const[dimension, setDimension] =  useState({ width:0, height:0  })

    useEffect(() => {
  
        window.addEventListener("resize", setDimensionFun );
        return () => window.removeEventListener("resize", setDimensionFun );
    }, [])


    let setDimensionFun = () => {
        setDimension({ width:window.innerWidth, height: window.innerHeight  })
    }


  return  { width: dimension.width, height: dimension.height }

}
