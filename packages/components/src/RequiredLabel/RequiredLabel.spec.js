import React from 'react';
import ReactDOM from 'react-dom';
import RequiredLabel from '.';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<RequiredLabel />, div);
	ReactDOM.unmountComponentAtNode(div);
});
