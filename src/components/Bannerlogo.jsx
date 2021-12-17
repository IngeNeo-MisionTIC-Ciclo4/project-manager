import React from 'react';
import Imgbannerlogo from '../media/bannerlogo.png';

const Bannerlogo = () => {
	return (
		<div className='flex flex-col items-center w-full bg-white'>
			<img
				src={Imgbannerlogo}
				alt='Bannerlogo'
				className='m-2 w-100 h-48'
			></img>
		</div>
	);
};

export default Bannerlogo;
