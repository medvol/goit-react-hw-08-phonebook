import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
// import { Loader } from 'components/Loader/Loader';
// import { deleteContact } from 'redux/contacts/operations';
// import { ContactListItem, ContactDeleteButton } from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { useGridApiRef, DataGrid } from '@mui/x-data-grid';
import { Box, Button, Fade } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { CustomColumnMenuComponent } from './CustomColumnMenuComponent';
import LinearProgress from '@mui/material/LinearProgress';
import { Filter } from 'components/Filter/Filter';
import ActionsButtonDelete from './ActionsButtonDelete';
import ActionsButtonEdit from './ActionsButtonEdit';

export default function AllContacts() {

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  const apiRef = useGridApiRef();

  return (
    <Box>
      <Fade in timeout={1000} easing="cubic-bezier(0.37, 0, 0.63, 1)">
        <Box>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/"
            color="secondary"
            size="small"
            sx={{
              width: 110,
              display: 'flex',
              alignItems: 'center',
              mt: 2,
              px: 1,
              textTransform: 'none',
              boxShadow: 3,
              fontWeight: 500,
              color: 'secondary',
            }}
          >
            <HomeIcon sx={{ mr: 1 }} />
            Go Home
          </Button>

          <Filter />
        </Box>
      </Fade>

      {error && <div>Something went wrong...</div>}
      {!isLoading && !error && (
        <Fade in timeout={1000} easing="cubic-bezier(0.37, 0, 0.63, 1)">
          <Box sx={{ width: '100%', height: 500, mt: 5 }}>
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
                    <ActionsButtonDelete id={params.id} />,
                    <ActionsButtonEdit id={params.id} />,
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
        </Fade>
      )}
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
