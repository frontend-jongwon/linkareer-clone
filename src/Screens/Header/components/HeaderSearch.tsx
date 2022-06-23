import React, { FC } from "react";
import {
  Input,
  makeStyles,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import glass from "../../../../images/glass.png";
import Image from "next/image";

const HeaderSearch: FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Input
        className={classes.root}
        disableUnderline
        type="search"
        placeholder="대학인턴"
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="submit" aria-label="search form submit">
              <Image src={glass} width={22} height={22} />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default HeaderSearch;

const useStyles = makeStyles(() => ({
  root: {
    width: 460,
    height: 54,
    padding: "15px 16px 15px 15px",
    border: "2px solid #01a0ff",
    margin: "0 90px 0 40px",
  },
}));
