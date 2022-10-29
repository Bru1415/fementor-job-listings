import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AdvItem.module.css";
import React, { useRef, useState, useCallback, useEffect } from "react";

const AdvItem = (props) => {
  const cssClasses = ["advItem"];
  
  if (props.advItemData.featured) {
    cssClasses.push("featured");
  }

  const addFilterHandler = (filter) => {
    props.onSetFilters(filter);
  };

  const arr = [];
  arr.push(props.advItemData.role);
  arr.push(props.advItemData.level);
  const arr1 = [...props.advItemData.languages];
  const arr2 = [...props.advItemData.tools];
  const demands = [...arr, ...arr1, ...arr2];

  return (
    <Card className={cssClasses}>
      <div className={classes.company}>
        {/* <img src={props.advItemData.logo.slice(1)}></img> */}
        <img src={props.advItemData.logo}></img>
        <div className={classes.info}>
          <div className={classes.companyName}>
            <span>{props.advItemData.company}</span>
            {props.advItemData.featured && (
              <Button cssLook={["featured", "pill"]}>Featured</Button>
            )}
            {props.advItemData.new && (
              <Button cssLook={["new", "pill"]}>New!</Button>
            )}
          </div>
          <a className={classes.companyPosition}>{props.advItemData.position}</a>
          <div className={classes.timeAndPlace}>
            <span>{props.advItemData.postedAt}</span>
            <span>{"\u00B7"}</span>
            <span>{props.advItemData.contract}</span>
            <span>{"\u00B7"}</span>
            <span>{props.advItemData.location}</span>
          </div>
        </div>
      </div>
      <div className={classes.demands}>
        {demands.map((item) => (
          <Button
            key={item}
            onAddFilter={addFilterHandler.bind(null,item)}
            cssLook={["profile"]}
          >
            {item}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default AdvItem;
