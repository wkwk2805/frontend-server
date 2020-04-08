import React, { useState, useEffect } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import { Home, Search, Feedback, PostAdd, Person } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { showLoading } from "../../modules/loading";

const CusBottomNav = ({ changeView }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    var filter = "win16|win32|win64|mac|macintel";
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) > -1) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
  }, []);
  const dispatch = useDispatch();
  const stylesIcon = { minWidth: 0, paddingBottom: 0, paddingTop: 0 };
  const [value, setValue] = React.useState(0);
  const selectView = (branch) => {
    dispatch(showLoading());
    changeView(branch);
  };
  return (
    <>
      <div style={{ marginBottom: 45 }}></div>
      <Paper
        style={{
          bottom: 0,
          left: 0,
          position: "fixed",
          width: "100%",
        }}
        elevation={8}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            newValue === 2 && (newValue = 0);
            setValue(newValue);
          }}
          style={{
            height: 40,
          }}
        >
          <BottomNavigationAction
            icon={<Home style={{ fontSize: 30 }} />}
            style={stylesIcon}
            onClick={() => selectView("Home")}
          />
          <BottomNavigationAction
            icon={<Search style={{ fontSize: 30 }} />}
            style={stylesIcon}
            onClick={() => selectView("Search")}
          />
          {isMobile && (
            <BottomNavigationAction
              icon={<PostAdd style={{ fontSize: 30 }} />}
              style={stylesIcon}
              onClick={() => selectView("Add")}
            />
          )}
          <BottomNavigationAction
            icon={<Feedback style={{ fontSize: 30 }} />}
            style={stylesIcon}
            onClick={() => selectView("Notice")}
          />
          <BottomNavigationAction
            icon={<Person style={{ fontSize: 30 }} />}
            style={stylesIcon}
            onClick={() => selectView("Profile")}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default CusBottomNav;
