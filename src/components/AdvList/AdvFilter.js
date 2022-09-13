import classes from "./AdvFilter.module.css";
import Card from "../UI/Card";

const AdvFilter = () => {
  return (
    <Card className={["filter"]}>
      <div className={classes.filter}>
        <div className={classes.demands}>
          <div>
            <label>Frontend</label>
            <button>
              <img src="/images/icon-remove.svg"></img>
            </button>
          </div>
          <div>
            <label htmlFor="1">Frontend</label>
            <button>
              <img  id='1' src="/images/icon-remove.svg"></img>
            </button>
          </div>
          <div>
            <label>Frontend</label>
            <button>
              <img src="/images/icon-remove.svg"></img>
            </button>
          </div>
        </div>
        <div>
          <button className={classes.clear}>Clear</button>
        </div>
      </div>
    </Card>
  );
};

export default AdvFilter;
