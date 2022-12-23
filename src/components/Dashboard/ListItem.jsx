import { Info } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";

import React from "react";

export const secondaryListItems = (
  <div>
    <Tooltip title="Info">
      <ListItem button className="flex-end">
        <ListItemIcon>
          <Info />
        </ListItemIcon>
        <ListItemText primary="Info" />
      </ListItem>
    </Tooltip>
  </div>
);
