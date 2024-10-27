import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from 'react'

const ScrollToTop = () => {
    const {Pathname}= useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [Pathname])

  return (
    null
  )
}

export default ScrollToTop