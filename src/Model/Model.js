import React, { useState } from "react";
import style from "./Model.module.css";
import Dialog from "@mui/material/Dialog";
import { Grid } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Model = ({ setShowModal }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setShowModal(false);
  };

  const hanldleSkipBtn = () => {
    console.log("Skip Unclosed Periods");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={style.model}
      id="Model"
    >
      <Grid xs={12} item className={style.container}>
        <span className={style.closeButton} onClick={handleClose}>
          <CloseOutlinedIcon />
        </span>
        <Grid xs={2} item className={style.grid1}>
          <div className={style.featuredDiv}>
            <ErrorOutlineIcon className={style.featureIcon} />
          </div>
        </Grid>

        <Grid xs={10} item className={style.grid2}>
          <div className={style.title}>
            <p>Unclosed Overdue Pay Runs</p>
          </div>
          <p className={style.text}>
            Would you like to skip unclosed periods and start with this pay run{" "}
            <b>(January 2023)?</b>
          </p>
          <div className={style.buttonDiv}>
            <button className={style.backBtn} onClick={handleClose}>
              Back
            </button>
            <button className={style.skipBtn} onClick={hanldleSkipBtn}>
              Skip Unclosed Periods
            </button>
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Model;
