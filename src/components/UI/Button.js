import classes from './Button.module.css';
const Button = props => {

    const customCssClasses = props.cssLook.map((item) => classes[item]);
    const classNames = `${classes.button} ${props.cssLook ? customCssClasses.join(' ') : ''}`;

    return <button className={classNames} type={props.type}>{props.children}</button>
}

export default Button;