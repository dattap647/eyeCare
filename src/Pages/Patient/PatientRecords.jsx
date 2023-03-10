import { Paper } from "@mui/material";
import React from "react";
import user from "../../assets/user_icon.png";

function PatientRcords() {
  return (
    <Paper elevation={5} sx={{ padding: "10px", margin: "0 auto" }}>
      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date </th>
                  <th>Description</th>
                  <th>Attachment</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button>#MR-0010</button>
                  </td>
                  <td>14 Nov 2022</td>
                  <td>Dental Filling</td>
                  <td>
                    <button>dental-test.pdf</button>
                  </td>
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
                      <a href="doctor-profile.html">Dr. Ruby Perrin</a>
                    </h2>
                  </td>
                  <td className="text-right">
                    <div className="table-action">
                      <button class="btn btn-sm bg-primary-light mx-2">
                        <i class="fas fa-print"></i> Print
                      </button>
                      <button class="btn btn-sm bg-info-light mx-2">
                        <i class="far fa-eye"></i> View
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default PatientRcords;
