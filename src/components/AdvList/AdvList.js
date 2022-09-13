import AdvItem from "../AdvItem/AdvItem";
import classes from "./AdvList.module.css";
import React, { useState, useCallback, useEffect } from "react";
import AdvFilter from "./AdvFilter";
import data from '../../data.json';

const AdvList = (props) => {

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchJsonData = async () => {
const response = await fetch('./data.json');
    };
  })
console.log(`data: ${data[1].company}`);
  const FEATURED = true;
  const NEW = true;
  const logoPath = "./images/insure.svg".slice(1);
  return (
    <React.Fragment>
              <AdvFilter></AdvFilter>

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
