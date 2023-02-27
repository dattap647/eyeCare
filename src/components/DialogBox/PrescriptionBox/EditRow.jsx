import React from "react";
import { Cancel, Save } from "@mui/icons-material";
import { IconButton, TableCell, TableRow } from "@mui/material";
function EditRow({ editFormData, handleEditFormChanges, handleCancelClick }) {
  return (
    <TableRow>
      <TableCell>
        <input
          className="form-control"
          type="text"
          value={editFormData.medicineName}
          name="medicineName"
          required="required"
          onChange={handleEditFormChanges}
        />
      </TableCell>
      <TableCell>
        <input
          className="form-control"
          type="number"
          value={editFormData.quantity}
          name="quantity"
          required="required"
          onChange={handleEditFormChanges}
        />
      </TableCell>
      <TableCell>
        <input
          className="form-control"
          type="number"
          name="days"
          value={editFormData.days}
          required="required"
          onChange={handleEditFormChanges}
        />
      </TableCell>

      <TableCell>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="morning"
              checked={editFormData.morning}
              onChange={handleEditFormChanges}
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
              checked={editFormData.afternoon}
              onChange={handleEditFormChanges}
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
              checked={editFormData.evening}
              onChange={handleEditFormChanges}
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
              checked={editFormData.night}
              onChange={handleEditFormChanges}
            />
            Night
          </label>
        </div>
      </TableCell>
      <TableCell>
        <IconButton className="btn bg-success-light mx-1" type="submit">
          <Save />
        </IconButton>
        <IconButton className="btn bg-danger-light" onClick={handleCancelClick}>
          <Cancel />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default EditRow;
