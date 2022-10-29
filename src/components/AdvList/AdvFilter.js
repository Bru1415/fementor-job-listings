import classes from "./AdvFilter.module.css";
import Card from "../UI/Card";

const AdvFilter = (props) => {
  let content = <div>no filters set</div>;

  const removeFilterHandler = (filterItem) => {
    props.onDeleteFilter(filterItem);
  };

  content = props.filtersList.map((filterItem) => (
    <div key={filterItem + Math.random().toFixed(3)}>
      <label>{filterItem}</label>
      <button onClick={removeFilterHandler.bind(null, filterItem)}>
        <img src="./images/icon-remove.svg"></img>
      </button>
    </div>
  ));

  return (
    <Card className={["filter"]}>
      <div className={classes.filter}>
        <div className={classes.demands}>
          {props.filtersList.length > 0 && content}
        </div>
        <div>
          <button
            onClick={props.onClearFilters}
            className={classes.clear}
          >
            Clear
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AdvFilter;
