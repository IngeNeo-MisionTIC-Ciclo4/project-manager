import React from 'react'
import Imgbannerlogo from "../media/Logo-uni.png";

const Bannerlogo = ({children}) => {
    return (
        <div className="flex flex-col items-center w-full bg-white">
            <img src={Imgbannerlogo} alt="Bannerlogo" className='m-4 w-44 h-44'></img>
        </div>
    );
}

export default Bannerlogo