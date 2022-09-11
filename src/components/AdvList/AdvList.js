import AdvItem from "../AdvItem/AdvItem";
import classes from "./AdvList.module.css";
import React, { useRef, useState, useCallback, useEffect } from "react";


const AdvList = (props) => {
  const FEATURED = true;
  const NEW = true;
  const logoPath = "./images/insure.svg".slice(1);
  return (
    <React.Fragment>
      <div className={classes.adsList}>
        <AdvItem
          path="/images/manage.svg"
          featured={FEATURED}
          new={NEW}
        ></AdvItem>
        <AdvItem path={logoPath}></AdvItem>
        <AdvItem path="/images/loop-studios.svg"></AdvItem>
      </div>
    </React.Fragment>
  );
};

export default AdvList;
