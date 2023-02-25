import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import dayjs from "dayjs";
import { nanoid } from "nanoid";

import React, { useState } from "react";

function PrescriptionDialog(props) {
  const date = dayjs();
  const formattedDate = date.format("DD MMM YYYY");
  const { open, setopen } = props;
  const [prescription, setPrescription] = useState([]);
  const [addFormData, setAddFormData] = useState({
    medicineName: "",
    quantity: "",
    days: "",
    morning: "",
    afternoon: "",
    evening: "",
    night: "",
  });

  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
  }));

  const handlereset = () => {
    setAddFormData({
      medicineName: "",
      quantity: "",
      days: "",
      morning: "",
      afternoon: "",
      evening: "",
      night: "",
    });
  };

  const handleAddFormChanges = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddPrescription = (e) => {
    e.preventDefault();
    const newPrescription = {
      id: nanoid(),
      medicineName: addFormData.medicineName,
      quantity: addFormData.quantity,
      days: addFormData.days,
      morning: Boolean(addFormData.morning),
      afternoon: Boolean(addFormData.afternoon),
      evening: Boolean(addFormData.evening),
      night: Boolean(addFormData.night),
    };
    const newPrescriptions = [...prescription, newPrescription];
    setPrescription(newPrescriptions);
    handlereset();
    console.log(JSON.stringify(prescription));
  };
  const handleClose = () => {
    setopen({
      ...open,
      isOpen: false,
    });
    setPrescription([]);
  };

  return (
    <Dialog
      open={open.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xl"
    >
      <DialogTitle id="alert-dialog-title">Add Prescriptions</DialogTitle>
      <DialogContent divider>
        <Box display={"flex"} justifyContent={"space-between"}>
          <>
            <div className="biller-info">
              <h4 className="d-block">Dr. Elder </h4>
              <span className="d-block text-sm-muted"> Eye Sepcialist</span>
              <span className="d-block text-sm-muted"> Pune Maharashtra</span>
            </div>
          </>
          <div className="biller-info">
            <h4 className="d-block">{formattedDate}</h4>
            <span className="d-block text-sm-muted"> #ID216</span>
          </div>
        </Box>

        <Box>
          {Object(prescription).length > 0 ? (
            <Box border="1px solid black">
              <Table>
                <TableHead>
                  <TableRow>
                    <Cell width="200px">Name</Cell>
                    <Cell width="100px">Quantity</Cell>
                    <Cell width="100px">Days</Cell>
                    <Cell width="100px">Time</Cell>
                    <Cell width="100px"></Cell>
                  </TableRow>
                </TableHead>
                {prescription.map((d) => (
                  <TableBody>
                    <TableRow>
                      <TableCell>{d.medicineName}</TableCell>
                      <TableCell>{d.quantity}</TableCell>
                      <TableCell>{d.days}</TableCell>
                      <TableCell align="left">
                        <Box
                          display="flex"
                          justifyContent="start"
                          alignItems="start
                      "
                        >
                          {d.morning ? (
                            <Typography marginRight={1}>Morning</Typography>
                          ) : null}
                          {d.afternoon ? (
                            <Typography marginRight={1}>Afternoon</Typography>
                          ) : null}
                          {d.evening ? (
                            <Typography marginRight={1}>Evening</Typography>
                          ) : null}
                          {d.night ? (
                            <Typography marginRight={1}>Night</Typography>
                          ) : null}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <IconButton color="success">
                          <Edit />
                        </IconButton>
                        <IconButton color="error">
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </Box>
          ) : null}
          <Typography> Add Medicines</Typography>
          <form onSubmit={handleAddPrescription}>
            <Table>
              <TableHead>
                <TableRow>
                  <Cell width="200px">Name</Cell>
                  <Cell width="100px">Quantity</Cell>
                  <Cell width="100px">Days</Cell>
                  <Cell width="100px"> </Cell>
                  <Cell width="100px">Time</Cell>
                </TableRow>
              </TableHead>
              <TableRow>
                <TableCell>
                  <input
                    className="form-control"
                    type="text"
                    value={addFormData.medicineName}
                    name="medicineName"
                    required="required"
                    onChange={handleAddFormChanges}
                  />
                </TableCell>
                <TableCell>
                  <input
                    className="form-control"
                    type="number"
                    value={addFormData.quantity}
                    name="quantity"
                    required="required"
                    onChange={handleAddFormChanges}
                  />
                </TableCell>
                <TableCell>
                  <input
                    className="form-control"
                    type="number"
                    name="days"
                    value={addFormData.days}
                    required="required"
                    onChange={handleAddFormChanges}
                  />
                </TableCell>

                <TableCell>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="morning"
                        checked={addFormData.morning}
                        onChange={handleAddFormChanges}
                      />
                      morning
                    </label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="afternoon"
                        checked={addFormData.afternoon}
                        onChange={handleAddFormChanges}
                      />
                      Afternoon
                    </label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="evening"
                        checked={addFormData.evening}
                        onChange={handleAddFormChanges}
                      />
                      Evening
                    </label>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="night"
                        checked={addFormData.night}
                        onChange={handleAddFormChanges}
                      />
                      Night
                    </label>
                  </div>
                </TableCell>
                <TableCell>
                  <Button
                    size="small"
                    type="submit"
                    startIcon={<Add />}
                    className="btn bg-success-light"
                  >
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </Table>
          </form>
          <></>
        </Box>
      </DialogContent>
      <DialogActions>
        <button className="btn btn-outline-success" onClick={handleClose}>
          Submit
        </button>
        <button className="btn btn-outline-danger" onClick={handleClose}>
          Cancel
        </button>
      </DialogActions>
    </Dialog>
  );
}

export default PrescriptionDialog;
