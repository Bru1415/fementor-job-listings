import AdsItem from "./AdsItem";
import classes from './Ads.module.css';

const Ads = props => {
    return (
        <div className={classes.adsList}>
            <AdsItem></AdsItem>
            <AdsItem></AdsItem>
            <AdsItem></AdsItem>
        </div>
    )
}

export default Ads;
