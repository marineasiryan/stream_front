import React from "react";
import { v4 } from "uuid";
import Description from "../components/description/Description";
import PathsSection from "../layouts/pathsSection/PathsSection";
const Paths = () => {
  return (
    <div className="paths">
      <Description />
      {[...Array(3)].map((i) => {
        return <PathsSection key={v4()} />;
      })}
    </div>
  );
};

export default Paths;
