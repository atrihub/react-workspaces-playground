import React, {Component} from 'react';
import './DatePicker.css';

import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class DatePicker extends Component {
	renderMonthElement = ({month, onMonthSelect, onYearSelect}) => (
		<div className="d-flex flex-row justify-content-center">
			<div>
				<select
					value={month.month()}
					onChange={e => onMonthSelect(month, e.target.value)}
				>
					{moment.months().map((label, value) => (
						<option value={value} key={value}>
							{label}
						</option>
					))}
				</select>
			</div>
			<div>
				<select
					value={month.year()}
					onChange={e => onYearSelect(month, e.target.value)}
				>
					{this.returnYears()}
				</select>
			</div>
		</div>
	);
	returnYears = () => {
		let years = [];
		for (let i = this.state.minYear; i <= this.state.maxYear; i++) {
			years.push(
				<option value={i} key={i}>
					{i}
				</option>
			);
		}
		return years;
	};

	constructor(props) {
		super(props);
		this.state = {
			focused: false,
			minYear: moment().year() - 100,
			maxYear: moment().year()
		};
	}

	componentDidMount() {
		let {minYear, maxYear} = this.state;
		if (this.props.minYear) {
			minYear = parseInt(this.props.minYear, 10);
		}
		if (this.props.maxYear) {
			maxYear = parseInt(this.props.maxYear, 10);
		}
		this.setState({
			minYear: minYear,
			maxYear: maxYear
		});
	}

	render() {
		return (
			<SingleDatePicker
				date={this.props.date} // momentPropTypes.momentObj or null
				onDateChange={this.props.onDateChange} // PropTypes.func.isRequired
				focused={this.state.focused} // PropTypes.bool
				onFocusChange={({focused}) => this.setState({focused})} // PropTypes.func.isRequired
				id={this.props.id} // PropTypes.string.isRequired,
				renderMonthElement={this.renderMonthElement}
				small={true}
				block={true}
				showClearDate={true}
				numberOfMonths={1}
				isOutsideRange={() => false}
				displayFormat="YYYY-MM-DD"
				placeholder={this.props.placeholder}
				isDayHighlighted={day => day.isSame(moment(), 'd')}
			/>
		);
	}
}

export default DatePicker;
