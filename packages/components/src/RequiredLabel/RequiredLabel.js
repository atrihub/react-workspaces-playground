import React from 'react';
import './RequiredLabel.css';

const RequiredLabel = WrappedComponent => ({children}) => {
	return (
		<WrappedComponent>
			{children}
			<sup className="text-danger">*</sup>
		</WrappedComponent>
	);
};

export default RequiredLabel;
