import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Datatable = () => {
	const [data, setData] = useState(userRows);
	const handleDelete = (id) => {
		setData(data.filter((row) => row.id !== id));
	};
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cell-action">
						<Link to="/users/test" style={{ textDecoration: 'none' }}>
							<div className="view-button">View</div>
						</Link>
						<div
							className="delete-button"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			}
		}
	];

	return (
		<div className="datatable">
			<div className="datatable-title">
				Add New User
				<Link
					to="/users/new"
					style={{ textDecoration: 'none' }}
					className="link"
				>
					Add{' '}
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
