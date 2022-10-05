import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const manager = [
  {
    id: 1,
    name: 'Projects',
    icon: <FolderOpenIcon fontSize="small" />,
  },
  {
    id: 2,
    name: 'People',
    icon: <PermIdentityIcon fontSize="small" />,
  },
  {
    id: 3,
    name: 'Messages',
    icon: <MailOutlineIcon fontSize="small" />,
  },
];

const supervisor = [
  {
    id: 1,
    name: 'Tasks',
    icon: <FormatListBulletedIcon fontSize="small" />,
  },

  {
    id: 2,
    name: 'Messages',
    icon: <MailOutlineIcon fontSize="small" />,
  },
];

const client = [
  {
    id: 1,
    name: 'My projects',
    icon: <FolderOpenIcon fontSize="small" />,
  },
  {
    id: 2,
    name: 'Messages',
    icon: <MailOutlineIcon fontSize="small" />,
  },
];

export { manager, supervisor, client };
