import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { Settings } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Dropdown>
      <p className={css.username}>Welcome, {user.name}&nbsp;<MenuButton><Settings /></MenuButton></p>
      <Menu>
        <MenuItem type="button" onClick={() => dispatch(logOut())}>
          Logout
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
