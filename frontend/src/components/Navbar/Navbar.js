import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

function Navbar() {
  const rootUrl = 'http://localhost:8080';

  const handleSeedInventory = async () => {
    await fetch(`${rootUrl}/inventorySeed`)
      .then((response) => response.json())
  }

  const handleSeedSales = async () => {
    await fetch(`${rootUrl}/newItemSalesUSAData`)
      .then((response) => response.json())
  }

  const handleSeedListings = async () => {
    await fetch(`${rootUrl}/newItemListingsUSAData`)
      .then((response) => response.json())
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#2b2b2b', height: '50px'}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Button onClick={() => handleSeedInventory()}>
            Seed Inventory
          </Button>
          <Button onClick={() => handleSeedSales()}>
            Seed Sales
          </Button>
          <Button onClick={() => handleSeedListings()}>
            Seed Listings
          </Button>
          <Typography variant="h6" color="inherit" component="div">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
