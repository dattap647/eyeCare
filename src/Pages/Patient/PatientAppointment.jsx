import { Box, Link, Paper } from "@mui/material";

import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

import user from "../../assets/user_icon.png";

function PatientAppointment() {
  return (
    <>
      <Paper elevation={5} sx={{ padding: "10px", margin: "0 auto" }}>
        <div id="pat_appointments" className="tab-pane fade show active">
          <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
            <Link href="/patient/booking" underline="none">
              <CustomButton
                color="white"
                backgroundColor="#5c6"
                buttonText="Book Appointment"
              />
            </Link>
          </Box>

          <div className="card card-table mb-0">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor</th>
                      <th>Appt Date</th>
                      <th>Booking Date</th>

                      <th>Follow Up</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a
                            href="doctor-profile.html"
                            className="avatar avatar-sm mr-2"
                          >
                            <img
                              className="avatar-img rounded-circle"
                              src={user}
                              alt="UserImage"
                            />
                          </a>
                          <a href="doctor-profile">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>
                        14 Nov 2022
                        <span className="d-block text-info">10.00 AM</span>
                      </td>
                      <td>12 Nov 2022</td>

                      <td>16 Nov 2022</td>
                      <td>
                        <span className="badge badge-pill bg-success-light">
                          Confirm
                        </span>
                      </td>
                      <td className="text-right">
                        <div className="table-action">
                          <a href="j" class="btn btn-sm bg-primary-light mx-2">
                            <i class="fas fa-print"></i> Print
                          </a>
                          <a href="jav" class="btn btn-sm bg-info-light mx-2">
                            <i class="far fa-eye"></i> View
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
}

export default PatientAppointment;
