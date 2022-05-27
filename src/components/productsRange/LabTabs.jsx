import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductBlock from "../productBlock/ProductBlock";
import { panels, batteries, inverters, PVBox } from "../../data";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <Tab label="SOLAR PANELS" {...a11yProps(0)} />
          <Tab label="INVERTERS" {...a11yProps(1)} />
          <Tab label="BATTERIES" {...a11yProps(2)} />
          <Tab label="pv combiner box" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="prod-container">
          {panels.map((el) => (
            <ProductBlock key={el.id} element={el} />
          ))}
        </div>
        <p className="text-base">
          Buy your solar panels at the best price in our online store. Our
          photovoltaic solar panels yield real energy savings. You can
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="prod-container">
          {inverters.map((el) => (
            <ProductBlock key={el.id} element={el} />
          ))}
        </div>
        <p className="text-base">
          WE offers a complete range of photovoltaic inverters for your solar
          panels at the best prices. You want to buy your inverter, benefit from
          the best prices, the best warranty and flexible delivery? Then chose
          the No1 of photovoltaic products. These solar inverters
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="prod-container">
          {batteries.map((el) => (
            <ProductBlock key={el.id} element={el} />
          ))}
        </div>
        <p className="text-base">
          <span style={{ fontWeight: "900", fontSize: "22px" }}>
            {" "}
            Thager alrafedain{" "}
          </span>
          , the No1 online reseller of solar panels has selected the best solar
          batteries for you. You will find a wide range of solar batteries
          compatible with your photovoltaic panels. You can choose your solar
          battery according to battery type: We offer AGM, GEL,Tubler, lithium,
          OPzS and OPzV solar batteries. You can
        </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="prod-container">
          {PVBox.map((el) => (
            <ProductBlock key={el.id} element={el} />
          ))}
        </div>
        <div className="text-wrap">
          <p className="text-base">top-notch Pv combiner box</p>
        </div>
      </TabPanel>
    </Box>
  );
}
