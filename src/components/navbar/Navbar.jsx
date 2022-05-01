import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." />
					<SearchIcon />
				</div>
				<div className="items">
					<div className="item">
						<DarkModeIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
