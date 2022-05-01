import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVertIcon fontSize="small" />
			</div>
			<div className="bottom">
				<div className="featured-chart">
					<CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
				</div>
				<p className="title">Total sales made today</p>
				<p className="amount">£420</p>
				<p className="desc">
					Previous transactions processing. Last payments may not be included.
				</p>
				<div className="summary">
					<div className="item">
						<div className="item-title">Target</div>
						<div className="item-result negative">
							<ArrowDropDownIcon fontSize="small" />
							<div className="result-amount">£12.4k</div>
						</div>
					</div>
					<div className="item">
						<div className="item-title">Last Week</div>
						<div className="item-result positive">
							<ArrowDropUpIcon fontSize="small" />
							<div className="result-amount">£20k</div>
						</div>
					</div>
					<div className="item">
						<div className="item-title">Last Month</div>
						<div className="item-result positive">
							<ArrowDropUpIcon fontSize="small" />
							<div className="result-amount">£34.75k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
