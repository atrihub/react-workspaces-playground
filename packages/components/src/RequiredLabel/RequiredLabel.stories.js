import React from 'react';
import {addParameters, configure, storiesOf} from '@storybook/react';
import RequiredLabel from './RequiredLabel';

const DivWithRequiredLabel = RequiredLabel(({children}) => (
	<div>{children}</div>
));

storiesOf('RequiredLabel', module)
	.addParameters({options: {panelPosition: 'bottom'}})
	.add('Default', () => (
		<DivWithRequiredLabel>Form Label</DivWithRequiredLabel>
	));
