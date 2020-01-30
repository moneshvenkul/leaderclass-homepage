import React from 'react';

import CardIcon from './Icon/Icon';
import CardTitle from './Title/Title';
import CardDescr from './Descr/Descr';

import classes from './Card.module.scss';

const card = (props) => {

	const {title, descr, url} = props;

	return(

		<div className={classes.card}>
		<a href={url}>

			<CardIcon>{props.children}</CardIcon>

			<CardTitle>{title}</CardTitle>

			<CardDescr>
				{descr}
			</CardDescr>
			</a>

			

		</div>

	);
};

export default card;
