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
import EditRow from "./EditRow";
import ReadOnlyRow from "./ReadOnlyRow";

function PrescriptionDialog(props) {
  const date = dayjs();
  const formattedDate = date.format("DD MMM YYYY");
  const { open, setopen } = props;
  const [editMedicineId, setEditMedicineId] = useState(null);
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
  const [editFormData, setEditFormData] = useState({
    medicineName: "",
    quantity: "",
    days: "",
    morning: "",
    afternoon: "",
    evening: "",
    night: "",
  });

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

  const handleEditFormChanges = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  const handleEditClick = (e, data) => {
    e.preventDefault();
    setEditMedicineId(data.id);
    const formValues = {
      medicineName: data.medicineName,
      quantity: data.quantity,
      days: data.days,
      morning: data.morning,
      afternoon: data.afternoon,
      evening: data.evening,
      night: data.night,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditMedicineId(null);
  };
  const handleDeleteClick = (medicineId) => {
    const newPrescription = [...prescription];
    const index = prescription.findIndex(
      (prescription) => prescription.id === medicineId
    );
    newPrescription.splice(index, 1);
    setPrescription(newPrescription);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editMedicineId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };
    const newPrescription = [...prescription];
    //to find the id of medicine to save edit data
    const index = prescription.findIndex(
      (prescription) => prescription.id === editMedicineId
    );

    newPrescription[index] = editedContact;

    setPrescription(newPrescription);
    setEditMedicineId(null);
  };

  const handleAddPrescriptionForm = (e) => {
    e.preventDefault();
    const newPrescription = {
      id: nanoid(3),
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

  const Cell = styled(TableCell)(({ theme }) => ({
    fontSize: "medium",
    fontWeight: "600",
  }));

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
            <span className="d-block text-sm-muted"> {`#ID${nanoid(3)}`}</span>
          </div>
        </Box>

        <Box>
          {Object(prescription).length > 0 ? (
            <Box border="1px solid black">
              <form onSubmit={handleEditFormSubmit}>
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
                  {prescription.map((data) => (
                    <TableBody>
                      {editMedicineId === data.id ? (
                        <EditRow
                          editFormData={editFormData}
                          handleEditFormChanges={handleEditFormChanges}
                          handleCancelClick={handleCancelClick}
                        />
                      ) : (
                        <ReadOnlyRow
                          data={data}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </TableBody>
                  ))}
                </Table>
              </form>
            </Box>
          ) : null}
          <Typography> Add Medicines</Typography>
          <form onSubmit={handleAddPrescriptionForm}>
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
