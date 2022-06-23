import React, { FC } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";

interface TabPanelProps {
  children: React.ReactNode;
  value: string | number;
  index: string | number;
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
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;

const useStyles = makeStyles(() => ({
  root: {},
}));
