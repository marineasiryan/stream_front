import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import CardPath from "../CardPath";

import CreatePathModal from "../CreatePathModal";
import useVideos from "../useVideos";

const AddPath = () => {
  const { getPath, deletePathHandler } = useVideos();
  const path = useSelector((state) => state.path);

  useEffect(() => {
    getPath();
  }, []);

    return (
    <div className="admin_path container">
      <CreatePathModal />
      <div className="admin_path_cards ">

      {path && path.length ? (
          path?.map((item) => {
            return (
              <CardPath
                key={v4()}
                id={item._id}
                image={item.image}
                title={item.title}
                deletePathHandler={deletePathHandler}
                editHandler={null}
              />
            );
          })
        ) : (
          <div>No</div>
        )}
      
      </div>
    </div>
  );;
};

export default AddPath;
