import React from 'react';
import Banner from "../../media/banner-musuarios.png";

const Musuarios = () => {
	return (
		<div className="flex flex-col items-center min-h-screen py-2 bg-white">
						<div>
				<img src={Banner} alt="Musuarios" className='w-full mb-10 h-30'></img>
			</div>
		</div>
	);
};

export default Musuarios;