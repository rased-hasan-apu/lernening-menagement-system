import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ReviewsIcon from '@mui/icons-material/Reviews';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import MyCourses from './MyCourses/MyCourses';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import AddACourse from './AddACourse/AddACourse';
import Home from '../Home/Home';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import ManageProduct from '../ManageProduct/ManageProduct';

const drawerWidth = 240;
const Dashboard = (props) => {
    const { admin,user,logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
<div>

      <Toolbar />
      <NavLink style={{ display: "flex", textDecoration: "none", color: "#333" }} to="/home">
            <ListItem button>
              <ListItemIcon>
              <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
      <Divider />
      <List>
        {!admin ? 
        <Box>
        <Divider />
        <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/myorder`}>
          <ListItem button>
            <ListItemIcon>
              <LocalConvenienceStoreIcon />
            </ListItemIcon>
            <ListItemText primary="My couses" />
          </ListItem>
        </Link>

        
      </Box>:
      <Box>
      <Divider />
      <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/`}>
            <ListItem button>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItem>
          </Link>
      
      <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/addACourse`}>
        <ListItem button>
          <ListItemIcon>
            <AddShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Add A Course" />
        </ListItem>
      </Link>


      <Link style={{ display: "flex", textDecoration: "none", color: "#333" }} to={`${url}/MakeAdmin`}>
        <ListItem button>
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Admin" />
        </ListItem>
      </Link>
    </Box>
        }
        

        {/* Dashboard logout */}

        <Link onClick={logout} style={{ display: "flex", textDecoration: "none", color: "#333" }} to='/'>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </Link>

      </List>
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       <Switch>
           <Route  path={`${path}/myorder`}>
              <MyCourses></MyCourses> 
           </Route>
           <Route exact path={`${path}/myCourses`}>
              <MyCourses></MyCourses> 
           </Route>
           <AdminRoute exact path={`${path}/manageAllOrders`}>
              <ManageAllOrder></ManageAllOrder>
           </AdminRoute>
           <AdminRoute exact path={`${path}/addACourse`}>
              <AddACourse></AddACourse>
           </AdminRoute>
           <AdminRoute exact path={`${path}/`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
           <AdminRoute exact path={`${path}/MakeAdmin`}>
              <MakeAdmin></MakeAdmin>
           </AdminRoute>
       </Switch>
      </Box>
    </Box>
    );
};

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Dashboard;