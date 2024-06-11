import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../features/reviews/reviewAction";
import { Form } from "react-bootstrap";
import { updateReviewAction } from "../../features/reviews/reviewAxios";

export const Reviews = () => {
  const Reviews = () => {
    const { allReviews } = useSelector((state) => state.reviewInfo);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getReviews(isPrivate));
    });

    const handleOnSwitchChange = (e) => {
      const { checked, value } = e.target;
      if (window.confirm("Are you sure you want to change the status")) {
        dispatch(
          updateReviewAction({
            status: checked ? "active" : "inactive",

            _id: value,
          })
        );
      }
    };
  };
  return (
    <UserLayout pageTitle="All reviews list">
      <div>
        <div className="d-flex justify-content-between mb-4">
          <div>30 Reviews found!</div>
        </div>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Thumbnail</th>
              <th>Student Name</th>
              <th>Review</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allReviews.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={item.status === "active"}
                    onChange={handleOnSwitchChange}
                  />
                </td>
                <td>{item.status}</td>
                <td>
                  <Link to={"/book/" + item._id} target="_blank" />
                </td>

                <td>
                  <img src={item.thumbnail} alt="" width={"70px"} />
                </td>
                <td>{item.userName}</td>
                <td>
                  <h2>{item.title}</h2>
                  <div>
                    <Stars stars={item.ratings}></Stars>
                  </div>
                  <div
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    Status: {item.status}
                  </div>
                </td>
                <td>
                  <Link to={"/admin/book/edit/" + item._id}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};
