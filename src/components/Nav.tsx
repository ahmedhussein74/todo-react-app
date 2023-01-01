import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Nav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <FormatListBulletedIcon />
        </IconButton>
        <Typography variant='h6' component='header'>
          To Do App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
