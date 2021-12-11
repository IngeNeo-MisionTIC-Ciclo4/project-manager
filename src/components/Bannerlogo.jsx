import React from 'react'
import Imgbannerlogo from "../../media/Logo-uni.png";

const Bannerlogo = ({children}) => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white">
            <img src={Imgbannerlogo} alt="Bannerlogo" className='w-full h-30'></img>
        </div>
    );
}

export default Bannerlogo