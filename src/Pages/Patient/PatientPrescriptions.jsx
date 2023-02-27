import { Paper } from "@mui/material";

import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import user from "../../assets/user_icon.png";

function PatientPrescriptions() {
  return (
    <Paper elevation={5} sx={{ padding: "10px", margin: "0 auto" }}>
      <CustomButton />
      <div class="card card-table mb-0">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Date </th>
                  <th>Name</th>
                  <th>Created by </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>13 Nov 2022</td>
                  <td>Prescription 2</td>
                  <td>
                    <h2 class="table-avatar">
                      <a
                        href="doctor-profile.html"
                        class="avatar avatar-sm mr-2"
                      >
                        <img
                          class="avatar-img rounded-circle"
                          src={user}
                          alt="UserImage"
                        />
                      </a>
                      <a href="doctor-profile.html">Dr. Darren Elder</a>
                    </h2>
                  </td>
                  <td class="text-right ">
                    <div class="table-action">
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
    </Paper>
  );
}

export default PatientPrescriptions;
