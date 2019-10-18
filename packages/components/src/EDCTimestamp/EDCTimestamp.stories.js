import React from 'react';
import {addParameters, configure, storiesOf} from '@storybook/react';
import EDCTimestamp from './EDCTimestamp';
import moment from 'moment/moment';

storiesOf('EDCTimestamp', module).add('Default', () => (
	<EDCTimestamp
		timestamp={moment()
			.subtract(3, 'years')
			.utc()}
	/>
));
