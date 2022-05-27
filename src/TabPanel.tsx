import React, { FC } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classes.root}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;

const useStyles = makeStyles(() => ({
  root: {},
}));
