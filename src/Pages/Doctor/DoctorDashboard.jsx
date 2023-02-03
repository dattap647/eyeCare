import React from "react";
import useStyle from "./style";
import doctor from "../../assets/doctor2.jpg";
import icon1 from "../../assets/icon-01.png";
import icon2 from "../../assets/icon-02.png";
import icon3 from "../../assets/icon-03.png";
import {
  Avatar,
  Box,
  Button,
  Typography,
  styled,
  TableContainer,
  Paper,
  Grid,
  ListItem,
  ListItemIcon,
  List,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  ListItemText,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import {
  CalendarToday,
  Dashboard,
  HourglassEmpty,
  Logout,
  People,
  PersonPin,
  Receipt,
  Subtitles,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { borderRadius } from "@mui/system";

function DoctorDashboard() {
  const date = dayjs();
  const formattedDate = date.format("DD MMM YYYY");

  const ProfileSideBar = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      flexDirection: "row",
    },
  }));
  const ProfileInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    py: 1,
    alignItems: "center",
  }));

  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
    textAlign: "center",
  }));

  return (
    <Box>
      <Grid container columnSpacing={2} rowSpacing={2}>
        <Grid item lg={3} md={6} sm={12}>
          <Paper elevation={3}>
            <ProfileSideBar>
              <ProfileInfo>
                <Avatar
                  src={doctor}
                  alt="doctorprofile"
                  sx={{ width: 120, height: 120, my: 1 }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 3,
                  }}
                >
                  <Typography variant="h6">Dr. Darren Elder</Typography>
                  <Typography variant="subtitle1">
                    BDS, MDS - Oral & Maxillofacial Surgery
                  </Typography>
                </Box>
              </ProfileInfo>
              <Box>
                <List>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor"
                  >
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor/appointments"
                  >
                    <ListItemIcon>
                      <CalendarToday />
                    </ListItemIcon>
                    <ListItemText primary="Appointments" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor/my-patients"
                  >
                    <ListItemIcon>
                      <People />
                    </ListItemIcon>
                    <ListItemText primary="My Patients" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor/timing"
                  >
                    <ListItemIcon>
                      <HourglassEmpty />
                    </ListItemIcon>
                    <ListItemText primary="Schedule Timings" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor/invoice"
                  >
                    <ListItemIcon>
                      <Receipt />
                    </ListItemIcon>
                    <ListItemText primary="Invoice" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor/profile"
                  >
                    <ListItemIcon>
                      <PersonPin />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    sx={{ color: "#5c6" }}
                    to="/doctor/profile"
                  >
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                  </ListItem>
                </List>
              </Box>
            </ProfileSideBar>
          </Paper>
        </Grid>
        <Grid item lg={9}>
          <Paper
            elevation={1}
            sx={{
              backgroundColor: "#E0FFE0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              py: 1,
              marginBottom: 2,
            }}
          >
            <Box>
              <img src={icon1} alt="icon1" />

              <CardContent>
                <Typography variant="h5"> Total Patients</Typography>
                <Typography variant="h6">1200</Typography>
                <Typography variant="body2">Till Today</Typography>
              </CardContent>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "black", my: 2 }}
            />
            <Box>
              <img src={icon2} alt="icon1" />
              <CardContent>
                <Typography variant="h5"> Today Patient</Typography>
                <Typography variant="h6">20</Typography>
                <Typography variant="body2">{formattedDate}</Typography>
              </CardContent>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "black", my: 2 }}
            />
            <Box>
              <img src={icon3} alt="icon1" />
              <CardContent>
                <Typography variant="h5"> Appointment</Typography>
                <Typography variant="h6">45</Typography>
                <Typography variant="body2">{formattedDate}</Typography>
              </CardContent>
            </Box>
          </Paper>
          <Grid item lg={12}>
            <Box>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <Cell>Patient Name</Cell>
                      <Cell>Appt Date</Cell>
                      <Cell>Purpose</Cell>
                      <Cell>Type</Cell>
                      <Cell> Actions </Cell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Avatar src="assets/img/patients/patient.jpg" />
                        <Typography variant="subtitle1">
                          Richard Wilson <span>#PT0016</span>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        11 Nov 2019{" "}
                        <Typography variant="subtitle2">10.00 AM</Typography>
                      </TableCell>
                      <TableCell>General</TableCell>
                      <TableCell>New Patient</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ m: 1 }}
                        >
                          View
                        </Button>
                        <Button
                          variant="outlined"
                          color="success"
                          sx={{ m: 1 }}
                        >
                          Accept
                        </Button>
                        <Button variant="outlined" color="error" sx={{ m: 1 }}>
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Avatar src="assets/img/patients/patient.jpg" />
                        <Typography variant="subtitle1">
                          Richard Wilson <span>#PT0016</span>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        11 Nov 2019{" "}
                        <Typography variant="subtitle2">10.00 AM</Typography>
                      </TableCell>
                      <TableCell>General</TableCell>
                      <TableCell>New Patient</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ m: 1 }}
                        >
                          View
                        </Button>
                        <Button
                          variant="outlined"
                          color="success"
                          sx={{ m: 1 }}
                        >
                          Accept
                        </Button>
                        <Button variant="outlined" color="error" sx={{ m: 1 }}>
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                        <Avatar src="assets/img/patients/patient.jpg" />
                        <Typography variant="subtitle1">
                          Richard Wilson <span>#PT0016</span>
                        </Typography>
                      </TableCell>
                      <TableCell>
                        11 Nov 2019{" "}
                        <Typography variant="subtitle2">10.00 AM</Typography>
                      </TableCell>
                      <TableCell>General</TableCell>
                      <TableCell>New Patient</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ m: 1 }}
                        >
                          View
                        </Button>
                        <Button
                          variant="outlined"
                          color="success"
                          sx={{ m: 1 }}
                        >
                          Accept
                        </Button>
                        <Button variant="outlined" color="error" sx={{ m: 1 }}>
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>

    // <React.Fragment>
    //   <div className="content">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
    //           {/* <!-- Profile Sidebar --> */}
    //           <div className="profile-sidebar">
    //             <div className="widget-profile pro-widget-content">
    //               <div className="profile-info-widget">
    //                 <a href="#" className="booking-doc-img">
    //                   <img src="" alt="DoctorImage" />
    //                 </a>
    //                 <div className="profile-det-info">
    //                   <h3>Dr. Darren Elder</h3>

    //                   <div className="patient-details">
    //                     <h5 className="mb-0">
    //                       BDS, MDS - Oral & Maxillofacial Surgery
    //                     </h5>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="dashboard-widget">
    //               <nav className="dashboard-menu">
    //                 <ul>
    //                   <li className="active">
    //                     <a href="doctor-dashboard.html">
    //                       <i className="fas fa-columns"></i>
    //                       <span>Dashboard</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="appointments.html">
    //                       <i className="fas fa-calendar-check"></i>
    //                       <span>Appointments</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="my-patients.html">
    //                       <i className="fas fa-user-injured"></i>
    //                       <span>My Patients</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="schedule-timings.html">
    //                       <i className="fas fa-hourglass-start"></i>
    //                       <span>Schedule Timings</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="invoices.html">
    //                       <i className="fas fa-file-invoice"></i>
    //                       <span>Invoices</span>
    //                     </a>
    //                   </li>

    //                   <li>
    //                     <a href="doctor-profile-settings.html">
    //                       <i className="fas fa-user-cog"></i>
    //                       <span>Profile Settings</span>
    //                     </a>
    //                   </li>

    //                   <li>
    //                     <a href="/for">
    //                       <i className="fas fa-lock"></i>
    //                       <span>Change Password</span>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href="index-2.html">
    //                       <i className="fas fa-sign-out-alt"></i>
    //                       <span>Logout</span>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </nav>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-7 col-lg-8 col-xl-9">
    //           <div className="row">
    //             <div className="col-md-12">
    //               <div className="card dash-card">
    //                 <div className="card-body">
    //                   <div className="row">
    //                     <div className="col-md-12 col-lg-4">
    //                       <div className="dash-widget dct-border-rht">
    //                         <div className="circle-bar circle-bar1">
    //                           <div className="circle-graph1" data-percent="75">
    //                             <img
    //                               src={icon1}
    //                               className="img-fluid"
    //                               alt="patient"
    //                             />
    //                           </div>
    //                         </div>
    //                         <div className="dash-widget-info">
    //                           <h6>Total Patient</h6>
    //                           <h3>1500</h3>
    //                           <p className="text-muted">Till Today</p>
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="col-md-12 col-lg-4">
    //                       <div className="dash-widget dct-border-rht">
    //                         <div className="circle-bar circle-bar2">
    //                           <div className="circle-graph2" data-percent="65">
    //                             <img
    //                               src={icon2}
    //                               className="img-fluid"
    //                               alt="Patient"
    //                             />
    //                           </div>
    //                         </div>
    //                         <div className="dash-widget-info">
    //                           <h6>Today Patient</h6>
    //                           <h3>160</h3>
    //                           <p className="text-muted">06, Nov 2022</p>
    //                         </div>
    //                       </div>
    //                     </div>

    //                     <div className="col-md-12 col-lg-4">
    //                       <div className="dash-widget">
    //                         <div className="circle-bar circle-bar3">
    //                           <div className="circle-graph3" data-percent="50">
    //                             <img
    //                               src={icon3}
    //                               className="img-fluid"
    //                               alt="Patient"
    //                             />
    //                           </div>
    //                         </div>
    //                         <div className="dash-widget-info">
    //                           <h6>Appoinments</h6>
    //                           <h3>85</h3>
    //                           <p className="text-muted">06, Apr 2022</p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="row">
    //             <div className="col-md-12">
    //               <h4 className="mb-4">Patient Appoinment</h4>
    //               <div className="appointment-tab">
    //                 {/* <!-- Appointment Tab --> */}
    //                 <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
    //                   <li className="nav-item">
    //                     <a
    //                       className="nav-link active"
    //                       href="#upcoming-appointments"
    //                       data-toggle="tab"
    //                     >
    //                       Upcoming
    //                     </a>
    //                   </li>
    //                   <li className="nav-item">
    //                     <a
    //                       className="nav-link"
    //                       href="#today-appointments"
    //                       data-toggle="tab"
    //                     >
    //                       Today
    //                     </a>
    //                   </li>
    //                 </ul>
    //                 {/* <!-- /Appointment Tab --> */}

    //                 <div className="tab-content">
    //                   {/* <!-- Upcoming Appointment Tab --> */}
    //                   <div
    //                     className="tab-pane show active"
    //                     id="upcoming-appointments"
    //                   >
    //                     <div className="card card-table mb-0">
    //                       <div className="card-body">
    //                         <div className="table-responsive">
    //                           <table className="table table-hover table-center mb-0">
    //                             <thead>
    //                               <tr>
    //                                 <th>Patient Name</th>
    //                                 <th>Appt Date</th>
    //                                 <th>Purpose</th>
    //                                 <th>Type</th>
    //                                 <th className="text-center">Paid Amount</th>
    //                                 <th></th>
    //                               </tr>
    //                             </thead>
    //                             <tbody>
    //                               <tr>
    //                                 <td>
    //                                   <h2 className="table-avatar">
    //                                     <a
    //                                       href="patient-profile.html"
    //                                       className="avatar avatar-sm mr-2"
    //                                     >
    //                                       <img
    //                                         className="avatar-img rounded-circle"
    //                                         src="assets/img/patients/patient.jpg"
    //                                         alt="UserImage"
    //                                       />
    //                                     </a>
    //                                     <a href="patient-profile.html">
    //                                       Richard Wilson <span>#PT0016</span>
    //                                     </a>
    //                                   </h2>
    //                                 </td>
    //                                 <td>
    //                                   11 Nov 2019{" "}
    //                                   <span className="d-block text-info">
    //                                     10.00 AM
    //                                   </span>
    //                                 </td>
    //                                 <td>General</td>
    //                                 <td>New Patient</td>

    //                                 <td className="text-right">
    //                                   <div className="table-action">
    //                                     <a
    //                                       href="j"
    //                                       className="btn btn-sm bg-info-light"
    //                                     >
    //                                       <i className="far fa-eye"></i> View
    //                                     </a>

    //                                     <a
    //                                       href="j"
    //                                       className="btn btn-sm bg-success-light"
    //                                     >
    //                                       <i className="fas fa-check"></i>{" "}
    //                                       Accept
    //                                     </a>
    //                                     <a
    //                                       href="j"
    //                                       className="btn btn-sm bg-danger-light"
    //                                     >
    //                                       <i className="fas fa-times"></i>{" "}
    //                                       Cancel
    //                                     </a>
    //                                   </div>
    //                                 </td>
    //                               </tr>
    //                             </tbody>
    //                           </table>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                   {/* <!-- /Upcoming Appointment Tab --> */}

    //                   {/* <!-- Today Appointment Tab --> */}
    //                   <div className="tab-pane" id="today-appointments">
    //                     <div className="card card-table mb-0">
    //                       <div className="card-body">
    //                         <div className="table-responsive">
    //                           <table className="table table-hover table-center mb-0">
    //                             <thead>
    //                               <tr>
    //                                 <th>Patient Name</th>
    //                                 <th>Appt Date</th>
    //                                 <th>Purpose</th>
    //                                 <th></th>
    //                               </tr>
    //                             </thead>
    //                             <tbody>
    //                               <tr>
    //                                 <td>
    //                                   <h2 className="table-avatar">
    //                                     <a
    //                                       href="j"
    //                                       className="avatar avatar-sm mr-2"
    //                                     >
    //                                       <img
    //                                         className="avatar-img rounded-circle"
    //                                         src="assets/img/patients/patient6.jpg"
    //                                         alt="UserImage"
    //                                       />
    //                                     </a>
    //                                     <a href="patient-profile.html">
    //                                       Elsie Gilley <span>#PT0006</span>
    //                                     </a>
    //                                   </h2>
    //                                 </td>
    //                                 <td>
    //                                   14 Nov 2019{" "}
    //                                   <span className="d-block text-info">
    //                                     6.00 PM
    //                                   </span>
    //                                 </td>
    //                                 <td>Fever</td>
    //                                 <td>Old Patient</td>
    //                                 <td className="text-center">$300</td>
    //                                 <td className="text-right">
    //                                   <div className="table-action">
    //                                     <a
    //                                       href="j"
    //                                       className="btn btn-sm bg-info-light"
    //                                     >
    //                                       <i className="far fa-eye"></i> View
    //                                     </a>

    //                                     <a
    //                                       href="j"
    //                                       className="btn btn-sm bg-success-light"
    //                                     >
    //                                       <i className="fas fa-check"></i>{" "}
    //                                       Accept
    //                                     </a>
    //                                     <a
    //                                       href="j"
    //                                       className="btn btn-sm bg-danger-light"
    //                                     >
    //                                       <i className="fas fa-times"></i>{" "}
    //                                       Cancel
    //                                     </a>
    //                                   </div>
    //                                 </td>
    //                               </tr>
    //                             </tbody>
    //                           </table>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </React.Fragment>
  );
}

export default DoctorDashboard;
