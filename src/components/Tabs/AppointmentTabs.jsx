import { CalendarToday, Upcoming } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";

import React, { useState } from "react";
import TodayAppointmentTable from "../Tables/TodaysAppointment/TodayAppointmentTable";
import UpcomingAppointmentTable from "../Tables/UpcomingAppointment/UpcomingAppointmentTable";

function AppointmentTabs() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab
          iconPosition="start"
          icon={<CalendarToday />}
          value="1"
          label="Today's Appointments"
          visibleScrollbar={true}
        >
          <TodayAppointmentTable />
        </Tab>
        <Tab
          iconPosition="start"
          icon={<Upcoming />}
          value="2"
          label="Upcoming Appointments"
        >
          <UpcomingAppointmentTable />
        </Tab>
      </Tabs>
      {value === "1" ? <TodayAppointmentTable /> : <UpcomingAppointmentTable />}
    </>
  );
}

export default AppointmentTabs;
