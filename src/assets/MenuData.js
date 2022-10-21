import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import * as ROUTE from './constants/routes';

const randomInt = () => {
  return Math.floor(Math.random() * 96843);
};

const admin = [
  {
    id: randomInt(),
    name: 'Projects',
    icon: <FolderOpenIcon className="text-white" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create ',
        url: ROUTE.CREATEPROJECT,
        icon: <AddIcon className="text-white" />,
      },
      {
        id: randomInt(),
        name: 'View Projects ',
        url: ROUTE.PROJECTS,
        icon: <ListIcon className="text-white" />,
      },
    ],
  },
  {
    id: randomInt(),
    name: 'Customers',
    icon: <PermIdentityIcon className="text-white" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Add Customer ',
        url: ROUTE.CREATEUSER,
        icon: <AddIcon className="text-white" />,
      },
      {
        id: randomInt(),
        name: 'View Customers ',
        url: ROUTE.USERS,
        icon: <ListIcon className="text-white" />,
      },
    ],
  },
];

const client = [
  {
    id: randomInt(),
    name: 'My projects',
    icon: <FolderOpenIcon className="text-white" />,
    url: ROUTE.CLIENTS,
  },
];

export { admin, client };
