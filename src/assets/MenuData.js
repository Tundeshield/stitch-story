import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';

const randomInt = () => {
  return Math.floor(Math.random() * 96843);
};

const manager = [
  {
    id: randomInt(),
    name: 'Projects',
    icon: <FolderOpenIcon className="text-white" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create ',
        url: '/create-project',
        icon: <AddIcon className="text-white" />,
      },
      {
        id: randomInt(),
        name: 'View Projects ',
        url: '/projects',
        icon: <ListIcon className="text-white" />,
      },
    ],
  },
  {
    id: randomInt(),
    name: 'People',
    icon: <PermIdentityIcon className="text-white" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create User ',
        url: '/create-user',
        icon: <AddIcon className="text-white" />,
      },
      {
        id: randomInt(),
        name: 'View Users ',
        url: '/view-users',
        icon: <ListIcon className="text-white" />,
      },
    ],
  },
  {
    id: randomInt(),
    name: 'Messages',
    icon: <MailOutlineIcon className="text-white" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create ',
        url: '/create-message',
        icon: <AddIcon className="text-white" />,
      },
    ],
  },
];

// const supervisor = [
//   {
//     id: randomInt(),
//     name: 'Tasks',
//     icon: <FormatListBulletedIcon fontSize="small" />,
//   },

//   {
//     id: randomInt(),
//     name: 'Messages',
//     icon: <MailOutlineIcon fontSize="small" />,
//   },
// ];

const client = [
  {
    id: randomInt(),
    name: 'My projects',
    icon: <FolderOpenIcon className="text-white" />,
  },
  {
    id: randomInt(),
    name: 'Messages',
    icon: <MailOutlineIcon className="text-white" />,
  },
];

export { manager, client };
