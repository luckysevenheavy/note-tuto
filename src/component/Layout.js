import React from 'react'
import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';


const drawerWidth = 240;

const style = {
  active: {
    backgroundColor: '#f4f4f4'
  }
}

const meunItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color='secondary' />,
    path: "/"
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color='secondary' />,
    path: "/create"
  }
]

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar
         elevation={0}
         sx={{ width: `calc(100% - ${drawerWidth}px)`,  ml: `${drawerWidth}px`}}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1, fontSize: 19 }}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography sx={{ mr: 1 }}>
            Mario
          </Typography>
          <Avatar src='/mario.jpg'/>
        </Toolbar>
      </AppBar>
      <Drawer
           sx={{
              width: drawerWidth,
             '& .MuiDrawer-paper': {
              width: drawerWidth,
              },
            }}
              variant="permanent"
              anchor="left"
      >
        <Box sx={{ mt: 1, ml: 2.5 }}>
          <Typography>
            My Note
          </Typography>
        </Box>
        <List>
          {meunItems.map(item => (
            <ListItem 
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={ location.pathname === item.path ? style.active: null }
            >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}></ListItemText>
            </ListItem>
            ))}
        </List>
      </Drawer>
      <Box sx={{ backgroundColor: '#f9f9f9', width: '100%' }}>
          <Box sx={{ mt: 10 }}></Box>
             {children}
      </Box>
    </Box>
  )
}

export default Layout
