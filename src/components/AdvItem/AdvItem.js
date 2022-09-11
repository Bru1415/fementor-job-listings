import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AdvItem.module.css";
import React, { useRef, useState, useCallback, useEffect } from "react";

const AdvItem = (props) => {
  const cssClasses = [];
  if (props.featured) {
    cssClasses.push("featured");
  }

  return (
    <Card className={cssClasses}>
      <div className={classes.company}>
        <img src={props.path}></img>
        <div className={classes.info}>
          <div className={classes.companyName}>
            <span>Photosnap</span>
            <Button cssLook={["featured", "pill"]}>Featured</Button>
            <Button cssLook={["new", "pill"]}>New!</Button>
          </div>
          <a href="">Senior Frontend Developer</a>
          <div className={classes.timeAndPlace}>
            <span>1d ago</span>
            <span>Full Time</span>
            <span>USA only</span>
          </div>
        </div>
      </div>
      <div className={classes.demands}>
        <Button cssLook={["profile"]}>Fullstack</Button>
        <Button cssLook={["profile"]}>Frontend</Button>
        <Button cssLook={["profile"]}>HTML</Button>
      </div>
    </Card>
  );
};

export default AdvItem;
