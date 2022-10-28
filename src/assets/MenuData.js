import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import * as ROUTE from './constants/routes';

const randomInt = () => {
  return Math.floor(Math.random() * 96843);
};

const admin = [
  {
    id: 1909008,
    name: 'Projects',
    icon: <FolderOpenIcon className="text-white" />,
    subMenu: [
      {
        id: 9405848,
        name: 'Create ',
        url: '/projects/create',
        icon: <AddIcon className="text-white" />,
      },
      {
        id: 357654,
        name: 'View Projects ',
        url: ROUTE.PROJECTS,
        icon: <ListIcon className="text-white" />,
      },
    ],
  },
  {
    id: 463633536,
    name: 'Customers',
    icon: <PermIdentityIcon className="text-white" />,
    subMenu: [
      {
        id: 45246543732,
        name: 'Add Customer ',
        url: ROUTE.CREATEUSER,
        icon: <AddIcon className="text-white" />,
      },
      {
        id: 76574675436262,
        name: 'View Customers ',
        url: ROUTE.USERS,
        icon: <ListIcon className="text-white" />,
      },
    ],
  },
  {
    id: 463668947536,
    name: 'Chats',
    icon: <QuestionAnswerIcon className="text-white" />,
    url: '/admin-chats',
  },
];

const client = [
  {
    id: 426253735,
    name: 'My projects',
    icon: <FolderOpenIcon className="text-white" />,
    url: '/orders',
  },
];
const supervisor = [
  {
    id: 95384983434,
    name: 'My Tasks',
    icon: <FolderOpenIcon className="text-white" />,
    url: '/staff/staff-tasks',
  },
];

export { admin, client, supervisor };
