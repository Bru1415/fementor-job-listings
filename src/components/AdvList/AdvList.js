import AdvItem from "../AdvItem/AdvItem";
import classes from "./AdvList.module.css";
import React, { useState, useCallback, useEffect } from "react";
import AdvFilter from "./AdvFilter";
import advData from "../../data";

const AdvList = (props) => {
  const [filters, setFilters] = useState([]);
  const [filteredState, setFilteredState] = useState([]);

  let advItemList = (
    <div className={classes.emptyContent}>no content yet ...</div>
  );

  const checkIfIncludesAll = (mustIncludeArr, checkArr) => {
    if (!Array.isArray(mustIncludeArr) || !Array.isArray(checkArr)) {
      console.log("no array");
      return false;
    }
    for (let element of checkArr) {
      if (!mustIncludeArr.includes(element)) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    const createAdvItemList = () => {
      const filteredData = advData.filter((item) => {
        if (filters.length > 0) {
          const relevantData = [
            item.role,
            item.level,
            ...item.languages,
            ...item.tools,
          ];
          return checkIfIncludesAll(relevantData, filters);
        } else if (filters.length === 0) {
          return true;
        } else {
          console.log("failure in filterData");
          return true;
        }
      });
      // console.log(filteredData);
      setFilteredState(filteredData);

      // console.log(filteredState);
    };
    createAdvItemList();
  }, [filters]);

  const setFilterHandler = (filterElement) => {
    setFilters((prevState) => {
      if (prevState.includes(filterElement)) {
        return prevState;
      }
      return [...prevState, filterElement];
    });
  };

  const deleteFilterHandler = (filterElement) => {
    const changedFilters = [...filters];
    const index = changedFilters.indexOf(filterElement);
    // console.log(index);

    changedFilters.splice(index,1);
    // console.log(changedFilters);

    setFilters(changedFilters);
  };

  const clearFiltersHandler = () => {
    setFilters([]);
  }

  advItemList = filteredState.map((item) => (
    <AdvItem
      key={item.id}
      advItemData={item}
      onSetFilters={setFilterHandler}
    ></AdvItem>
  ));

  return (
    <React.Fragment>
      {filters.length > 0 && (
        <AdvFilter
          onDeleteFilter={deleteFilterHandler}
          onClearFilters={clearFiltersHandler}
          filtersList={filters}
        ></AdvFilter>
      )}

      <div className={classes.adsList}>{advItemList}</div>
    </React.Fragment>
  );
};

export default AdvList;
