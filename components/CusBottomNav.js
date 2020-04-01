import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@material-ui/core";
import { Home, Search, Feedback, PostAdd, Person } from "@material-ui/icons";

const CusBottomNav = () => {
  const stylesIcon = { minWidth: 0, paddingBottom: 0, paddingTop: 0 };
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      style={{
        bottom: 0,
        left: 0,
        position: "fixed",
        width: "100%"
      }}
      elevation={8}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          height: 40
        }}
      >
        <BottomNavigationAction
          icon={<Home style={{ fontSize: 30 }} />}
          style={stylesIcon}
        />
        <BottomNavigationAction
          icon={<Search style={{ fontSize: 30 }} />}
          style={stylesIcon}
        />
        <BottomNavigationAction
          icon={<PostAdd style={{ fontSize: 30 }} />}
          style={stylesIcon}
        />
        <BottomNavigationAction
          icon={<Feedback style={{ fontSize: 30 }} />}
          style={stylesIcon}
        />
        <BottomNavigationAction
          icon={<Person style={{ fontSize: 30 }} />}
          style={stylesIcon}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default CusBottomNav;
