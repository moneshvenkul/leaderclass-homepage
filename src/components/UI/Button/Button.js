import React from 'react';
import classnames from 'classnames';


import classes from './Button.module.scss';

const button = (props) => {

	const { category, active, className, type, href} = props;

	

	const btnClasses = classnames(
		classes.button,
		classes[`button___${category}`],
		`${className}`,
		{
			[classes.isActive]: active
		}
	);

	return(
		
		<button
			onClick={()=>window.location.href=`${href}`}
			className={btnClasses}
			title={props.children}
			type={type}
			href={href} >{props.children}
			</button>
	)
}
;

export default button;
