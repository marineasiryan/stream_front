import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const ExistingVideoCard = ({ title, link, id }) => {

  const thumbnail = link[1].slice(0, 11);
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    const { value, checked } = e.target;
    if (checked) {
      dispatch({
        type: "SET_VIDEO_ID",
        payload: value,
      });
    } else {
      dispatch({
        type: "DELETE_VIDEO_ID",
        payload: value,
      });
    }
  }, []);

  return (
    <>
      <div className="secondary-card ">
        <div className="secondary-card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="image"
          />
        </div>

        <div className="secondary-card-info">
          <p className="text-primary text-primary--white">{title}</p>
          <input
            type="checkbox"
            value={id || undefined}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
    </>
  );
};

export default ExistingVideoCard;

