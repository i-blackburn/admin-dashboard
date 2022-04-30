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

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Admin Dashboard</span>
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
					<li>
						<GroupIcon className="icon" />
						<span>Users</span>
					</li>
					<li>
						<InventoryIcon className="icon" />
						<span>Products</span>
					</li>
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
				<div className="colour-option"></div>
				<div className="colour-option"></div>
				<div className="colour-option"></div>
			</div>
		</div>
	);
};

export default Sidebar;
