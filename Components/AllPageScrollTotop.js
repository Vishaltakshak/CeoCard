import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const AllPageScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [location]);

    return <>
        {props.children}
    </>
  };

export default AllPageScrollToTop;
