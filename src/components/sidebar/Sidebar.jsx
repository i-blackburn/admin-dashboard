import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<span className="logo">Admin Dashboard</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTS</p>
					<Link to="/users" style={{ textDecoration: 'none' }}>
						<li>
							<GroupIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/products" style={{ textDecoration: 'none' }}>
						<li>
							<InventoryIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>
					<li>
						<CreditCardIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL LINKS</p>
					<li>
						<QueryStatsIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<CircleNotificationsIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICES</p>
					<li>
						<LocalHospitalIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<SummarizeIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountBoxIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<LogoutIcon className="icon" />
						<span>Log Out</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="colour-option"
					onClick={() => dispatch({ type: 'LIGHT' })}
				></div>
				<div
					className="colour-option"
					onClick={() => dispatch({ type: 'DARK' })}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
