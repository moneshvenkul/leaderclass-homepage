import React from 'react';

import classes from './NavigationLink.module.scss';

const navigationLink = (props) => {

	const { title, href } = props;

	return(
		<li className={classes.nav_item}>
		

			<a style={{color:'black'}} href={href}>{title}</a>
			
		</li>
	);
};

export default navigationLink;
