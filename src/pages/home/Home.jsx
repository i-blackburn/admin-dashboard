import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="home-container">
				<Navbar />
				Home Container
			</div>
		</div>
	);
};

export default Home;
