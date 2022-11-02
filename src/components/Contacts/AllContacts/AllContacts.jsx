import { useDispatch, useSelector } from 'react-redux';
// import { Loader } from 'components/Loader/Loader';
// import { deleteContact } from 'redux/contacts/operations';
// import { ContactListItem, ContactDeleteButton } from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useGridApiRef, DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from 'redux/contacts/operations';
import { CustomColumnMenuComponent } from './CustomColumnMenuComponent';
import LinearProgress from '@mui/material/LinearProgress';

export default function AllContacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  const apiRef = useGridApiRef();

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ height: 500, mt: 5 }}>
        <DataGrid
          apiRef={apiRef}
          columns={[
            { field: 'name', width: 350, headerAlign: 'center' },
            { field: 'number', width: 350, headerAlign: 'center' },
            {
              field: 'actions',
              width: 150,
              type: 'actions',
              getActions: params => [
                <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  color="primary"
                  onClick={() => dispatch(deleteContact(params.id))}
                />,
              ],
            },
          ]}
          rows={contacts}
          components={{
            ColumnMenu: CustomColumnMenuComponent,
            LoadingOverlay: LinearProgress,
          }}
          componentsProps={{
            columnMenu: { color: 'primary' },
          }}
          loading={isLoading}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'secondary.main',
            },
          }}
        />
      </Box>
    </Box>
  );
}

//  <>
//       {isLoading && <Loader />}
//       {error && <div>Something went wrong...</div>}
//       {!isLoading && !error && (
//         <ul>
//           {contacts.map(({ id, name, number }) => (
//             <ContactListItem key={id}>
//               <p>{`${name}: ${number}`}</p>
//               <ContactDeleteButton
//                 type="button"
//                 onClick={() => dispatch(deleteContact(id))}
//               >
//                 Delete
//               </ContactDeleteButton>
//             </ContactListItem>
//           ))}
//         </ul>
//       )}
//     </>
