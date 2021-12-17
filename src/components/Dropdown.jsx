import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const DropDown = ({ label, name, defaultValue = '', required, options }) => {
	const [selectedValue, setSelectedValue] = useState(defaultValue);
	const optionsSelect = [
		['', 'Seleccione una opción', true],
		...Object.entries(options),
	];
	useEffect(() => {
		setSelectedValue(defaultValue);
	}, [defaultValue]);
	return (
		<label htmlFor={name} className='flex flex-col my-3'>
			<span>{label}</span>
			<select
				required={required}
				name={name}
				className='input p-2 mt-2 text-gray-900 border-2 border-t-4 border-gray-300 rounded-md shadow-inner'
				value={selectedValue}
				onChange={(e) => setSelectedValue(e.target.value)}
			>
				{optionsSelect.map((o) => (
					<option key={nanoid()} value={o[0]} disabled={o[2] ?? false}>
						{o[1]}
					</option>
				))}
			</select>
		</label>
	);
};

export default DropDown;
