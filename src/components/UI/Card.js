import classes from './Card.module.css';


const Card = props => {
    const customCssClasses = props.className ? props.className.map(item => classes[item]) : '';
    const cssClasses = `${classes.card} ${customCssClasses.join(' ')}`
    return <div className={cssClasses}>{props.children}</div>
}

export default Card;