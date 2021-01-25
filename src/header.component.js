import React, { useState, useEffect } from 'react';
import './header.styles.css';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { SearchBox } from '../searchBox/searchBox.component';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, MenuItem } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Header_Data from './headerData.js';
const headersData = Header_Data;

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "orange",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
    fontSize: "28px"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    padding: "0px 8px",
    color: "#FFFEFE",
    '&:hover': {
      backgroundColor: "white",
      height: "50px"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Header = ({ hidden }) => {
  const { header, logo, menuButton, toolbar, menuBlock } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
  const { mobileView, drawerOpen} = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

      const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link>
              <MenuItem 
                {...{
                  component: RouterLink,
                key: label,
                to: href,
                style: { fontSize: "18px",
                           fontWeight: "500",
                         }
                 }}>
                    {label}
              </MenuItem>
            </Link>
          );
        });
      };

    return (
      <div>
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "black",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick : handleDrawerOpen,
          }}
        >
          <MenuIcon {...{
              style: { fontSize: "2.0rem"
          }}}/>
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
<div>{storeLogo}</div>
<CartIcon />
</Toolbar>
<SearchBox />
                </div>
    );
  };

  const displayDesktop = () => {
    return (
      <div>
        <Toolbar className={toolbar}>
          {storeLogo}
          <SearchBox />
          <div className={menuBlock}>
          {getMenuButtons()}
          <CartIcon />
          </div>
          

         
        </Toolbar>
      </div>)
  };

  const storeLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <Link to="/">Jojo Store </Link>
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "white",
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (<div>
    <AppBar className={header}>
      {mobileView ? displayMobile() : displayDesktop()}
      {hidden?null:<CartDropDown/>}
    </AppBar>
  </div>)




}


const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
})
export default connect(mapStateToProps, null)(Header);