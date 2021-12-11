import React from 'react'
import Imgbannerlogo from "../media/Logo-uni.png";

const Bannerlogo = ({children}) => {
		return (
				<div className="flex flex-col items-center w-full bg-white">
						<img src={Imgbannerlogo} alt="Bannerlogo" className='w-20 h-20'></img>
				</div>
		);
}

export default Bannerlogo