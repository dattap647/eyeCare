import React from "react";

import user from "../../../assets/user_icon.png";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const handleSubmit = async (values, props) => {
  console.log("I'm submitted");

  setTimeout(() => {
    props.resetForm();
    props.setSubmitting(false);
  }, 2000);

  try {
    console.log(values);
    // axios.post("", values).then((res) => {
    //   console.log(res);
    // });

    // navigate("/signin");
  } catch (error) {}
};
function UpdateProfile() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className="col-md-7-ml-7 col-lg-8 col-xl-9">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row form-row">
                <div className="col-12 col-md-12">
                  <div className="form-group">
                    <div className="change-avatar">
                      <div className="profile-img">
                        <img
                          src={user}
                          alt="UserImage"
                          style={{ width: "80px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Richard"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Wilson"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Email ID</label>
                    <input
                      type="email"
                      className="form-control"
                      value="richard@example.com"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="text"
                      value="+1 202-555-0125"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      value="806 Twin Willow Lane"
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <Button
                  type="submit"
                  variant="contained"
                  // disabled={props.isSubmitting}
                  style={{ backgroundColor: "#5c6", margin: "8px 0" }}
                  color="primary"
                >
                  {/* {props.isSubmitting ? "Loading" : "Sign up"} */}
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default UpdateProfile;
