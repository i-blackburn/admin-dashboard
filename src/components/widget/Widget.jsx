import './widget.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import GroupIcon from '@mui/icons-material/Group';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import BalanceIcon from '@mui/icons-material/Balance';

const Widget = ({ type }) => {
	let data;

	// Amounts
	const amount = 1000;
	const percent = 25;

	switch (type) {
		case 'user':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'See all users',
				icon: (
					<GroupIcon
						className="icon"
						style={{
							color: 'crimson',
							backgroundColor: 'rgba(255, 0, 0, 0.2)'
						}}
					/>
				)
			};
			break;
		case 'order':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all orders',
				icon: (
					<CreditCardIcon
						className="icon"
						style={{
							backgroundColor: 'rgba(218, 165, 32, 0.2)',
							color: 'goldenrod'
						}}
					/>
				)
			};
			break;
		case 'earnings':
			data = {
				title: 'EARNINGS',
				isMoney: true,
				link: 'View net earnings',
				icon: (
					<CurrencyPoundIcon
						className="icon"
						style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
					/>
				)
			};
			break;
		case 'balance':
			data = {
				title: 'BALANCE',
				isMoney: true,
				link: 'See details',
				icon: (
					<BalanceIcon
						className="icon"
						style={{
							backgroundColor: 'rgba(128, 0, 128, 0.2)',
							color: 'purple'
						}}
					/>
				)
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && '£'}
					{amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<ArrowDropUpIcon />
					{percent}%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
