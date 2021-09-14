import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import button from './button.module.scss';

const Button = (props) => {
    const onClick = () =>{
        props.onClick();
    }

    return (
        <button className={applyClasses(props)} onClick={() => onClick()}>{props.children}</button>
    )
};

const applyClasses = (props) => {
    return classNames(
        {[button.primary]: props.primary},
    )
};

Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool
};

Button.defaultProps = {
    children: undefined,
    primary: true
};

export default Button;
