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
    icon: <FolderOpenIcon fontSize="small" className="text-myPurple" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create ',
        url: '/create-project',
        icon: <AddIcon fontSize="small" className="text-myPurple" />,
      },
      {
        id: randomInt(),
        name: 'View Projects ',
        url: '/projects',
        icon: <ListIcon fontSize="small" className="text-myPurple" />,
      },
    ],
  },
  {
    id: randomInt(),
    name: 'People',
    icon: <PermIdentityIcon fontSize="small" className="text-myPurple" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create User ',
        url: '/create-user',
        icon: <AddIcon fontSize="small" className="text-myPurple" />,
      },
      {
        id: randomInt(),
        name: 'View Users ',
        url: '/view-users',
        icon: <ListIcon fontSize="small" className="text-myPurple" />,
      },
    ],
  },
  {
    id: randomInt(),
    name: 'Messages',
    icon: <MailOutlineIcon fontSize="small" className="text-myPurple" />,
    subMenu: [
      {
        id: randomInt(),
        name: 'Create ',
        url: '/create-message',
        icon: <AddIcon fontSize="small" className="text-myPurple" />,
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
    icon: <FolderOpenIcon fontSize="small" />,
  },
  {
    id: randomInt(),
    name: 'Messages',
    icon: <MailOutlineIcon fontSize="small" />,
  },
];

export { manager, client };
