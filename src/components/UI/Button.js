import classes from './Button.module.css';
const Button = props => {

    const customCssClasses = props.cssLook.map((item) => classes[item]);
    const classNames = `${classes.button} ${props.cssLook ? customCssClasses.join(' ') : ''}`;

    // const addFilter = () => {
    //     // event.preventDefault();
    //     props.onAddFilter(props.children);
    // } 

    return <button className={classNames} onClick={props.onAddFilter} type={props.type}>{props.children}</button>
}

export default Button;