import React, { useEffect } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@material-ui/core";
import { Home, Search, Feedback, PostAdd, Person } from "@material-ui/icons";

const CusBottomNav = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      style={{
        bottom: 0,
        left: 0,
        position: "fixed",
        width: "100%",
        paddingBottom: 2
      }}
      elevation={8}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={<Home fontSize="large" />}
          style={{ minWidth: 0 }}
        />
        <BottomNavigationAction
          icon={<Search fontSize="large" />}
          style={{ minWidth: 0 }}
        />
        <BottomNavigationAction
          icon={<PostAdd fontSize="large" />}
          style={{ minWidth: 0 }}
        />
        <BottomNavigationAction
          icon={<Feedback fontSize="large" />}
          style={{ minWidth: 0 }}
        />
        <BottomNavigationAction
          icon={<Person fontSize="large" />}
          style={{ minWidth: 0 }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default CusBottomNav;
