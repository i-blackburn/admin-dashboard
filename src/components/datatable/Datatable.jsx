import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

const Datatable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: () => {
				return (
					<div className="cell-action">
						<div className="view-button">View</div>
						<div className="delete-button">Delete</div>
					</div>
				);
			}
		}
	];

	return (
		<div className="datatable">
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
