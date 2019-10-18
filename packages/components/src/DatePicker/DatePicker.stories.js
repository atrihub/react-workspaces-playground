import React from 'react';
import {storiesOf} from '@storybook/react';
import moment from 'moment/moment';
import DatePicker from './DatePicker';

storiesOf('DatePicker', module).add('Default', () => (
	<DatePicker
		date={moment()
			.subtract(3, 'years')
			.utc()}
		placeholder="Start Date"
		onDateChange={date => alert('Date Changed')}
		name="testDate"
		id="testDate"
	/>
));
