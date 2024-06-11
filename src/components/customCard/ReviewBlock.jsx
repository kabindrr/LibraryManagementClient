import React from "react";
import { Stars } from "../stars/Stars";

export const ReviewBlock = () => {
  return (
    <div>
      {pubReviews.map(
        ({ _id, userName, ratings, title, message, createdAt }) => (
          <div>
            <div className="d-flex gap-2 align-items-baseline mb-2">
              <div
                className="bg-primary rounded-pill d-flex justify-content-center align-items-center   fw-bolder text-white "
                style={{ width: "40px", height: "40px" }}
              >
                {userName[0]}
              </div>
              <h4 className="">Prem Acharya</h4>
            </div>
            <div className="d-flex gap-2">
              <Stars stars={ratings} />
              <h4>{title}</h4>
            </div>
            <small> Data : {createdAt?.slice(0, 10)}</small>
            <div className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              reprehenderit itaque consequuntur laboriosam velit eligendi!
            </div>
          </div>
        )
      )}
    </div>
  );
};
