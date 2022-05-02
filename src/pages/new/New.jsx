import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useState } from 'react';

const New = ({ inputs, title }) => {
	const [file, setFile] = useState('');
	return (
		<div className="new">
			<Sidebar />
			<div className="new-container">
				<Navbar />
				<div className="top">
					<h1 className="title">{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							src={
								file
									? URL.createObjectURL(file)
									: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
							}
							alt=""
						/>
					</div>
					<div className="right">
						<form>
							<div className="form-input">
								<label htmlFor="file">
									Image: <FileUploadIcon className="icon" />
								</label>
								<input
									type="file"
									id="file"
									onChange={(e) => setFile(e.target.files[0])}
									style={{ display: 'none' }}
								/>
							</div>
							{inputs?.map((input) => (
								<div className="form-input" key={input.id}>
									<label>{input.label}</label>
									<input type={input.type} placeholder={input.placeholder} />
								</div>
							))}
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default New;
