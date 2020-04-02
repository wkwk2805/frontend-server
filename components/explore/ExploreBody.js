import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { GridListTileBar } from "@material-ui/core";
import { VideocamOutlined, CropOriginal } from "@material-ui/icons";

const ExploreBody = ({ tileData, cellHeight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space",
        overflow: "hidden"
      }}
    >
      <GridList cellHeight={cellHeight} cols={3}>
        {tileData.map((tile, index) => (
          <GridListTile
            key={index}
            cols={tile.cols || 1}
            style={{ padding: 0.5 }}
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              titlePosition="top"
              actionIcon={
                tile.type === "video" ? (
                  <VideocamOutlined style={{ color: "white", padding: 3 }} />
                ) : (
                  <CropOriginal style={{ color: "white", padding: 3 }} />
                )
              }
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, " +
                  "rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)",
                height: 30
              }}
              actionPosition="right"
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ExploreBody;
