import React, { useState, useEffect } from "react";
import { Search } from "@material-ui/icons";
import { AppBar, Toolbar, InputBase, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

const ExploreTop = ({ setData }) => {
  const [search, setSearch] = useState("");
  const instance = useSelector((s) => s.instance);
  useEffect(() => {
    (async () => await getAllPosts())();
  }, []);
  const getAllPosts = async () => {
    const { data } = await instance.post("/post/explore", { search });
    setData(data);
  };
  const _onClick = async () => {
    await getAllPosts();
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "rgb(15, 76, 129)",
          }}
          variant="dense"
        >
          <InputBase
            className="placeholder-style"
            placeholder="검색"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: 5,
              paddingLeft: 10,
              width: "90%",
            }}
            color="primary"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <IconButton
            style={{ position: "absolute", right: 0 }}
            onClick={_onClick}
          >
            <Search style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 60 }}></div>
    </>
  );
};

export default ExploreTop;
