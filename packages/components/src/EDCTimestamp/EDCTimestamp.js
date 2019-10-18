import React, {Component} from 'react';
import moment from 'moment';
import './EDCTimestamp.css';

const DateFormats = ['fromNow', 'utc', 'gmt'];

const style = {cursor: 'pointer'};

class EDCTimestamp extends Component {
	toggleHover = event => {
		this.setState({
			hover: !this.state.hover
		});
	};

	changeTimestamp = event => {
		event.stopPropagation();
		let index;
		if (this.state.currentFormatIndex === DateFormats.length - 1) {
			index = 0;
		} else {
			index = this.state.currentFormatIndex;
			index += 1;
		}
		this.setState({
			currentFormatIndex: index
		});
	};

	constructor(props) {
		super(props);
		this.state = {
			className: '',
			hover: false,
			timestamps: [],
			currentFormatIndex: 0
		};
	}

	componentDidMount() {
		let timestamp = moment(this.props.timestamp);
		let fromNow = timestamp.fromNow();
		let utc = moment.utc(timestamp).format();
		let gmt = timestamp.toString();
		let timestamps = [fromNow, utc, gmt];

		let initialIndex = DateFormats.indexOf(this.props.format);

		let index = initialIndex === -1 ? 0 : initialIndex;

		this.setState({
			timestamps: timestamps,
			currentFormatIndex: index
		});

		this.changeTimestamp = this.changeTimestamp.bind(this);
	}

	render() {
		const {timestamps, currentFormatIndex, hover} = this.state;
		let className;
		if (hover) {
			className = 'text-secondary font-weight-bold';
		}
		return (
			<span
				className={className}
				style={style}
				onClick={this.changeTimestamp}
				onMouseOver={this.toggleHover}
				onMouseOut={this.toggleHover}
			>
				{timestamps[currentFormatIndex]}
			</span>
		);
	}
}

export default EDCTimestamp;
