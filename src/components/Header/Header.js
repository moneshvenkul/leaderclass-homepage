import React from 'react';

import Container from 'components/Miscellaneous/Container/Container';
import CallToAction from "components/CallToAction/CallToAction";

import { btns } from './constants';

import classes from './Header.module.scss';

const header = (props) => {

	return (
		<header className={classes.header} id="top">
			<Container>
				<div className={classes.header_inner}>

					<CallToAction title="LeaderClasses"
								  titleLvl="1"
								  description="Leader Classes harnesses the world's best Career Advancement Leadership Development resources,helping you gain Expert Knowledge,Practical Guidance Actionable Insights from Extraordinary Leaders World Class Institutions through Specialized, Affordable, Online Offline Programs custom crafted to Accelerate your Career Business Success while transforming you into a better more effective Leader."
									btns= {btns} >
					</CallToAction>

				</div>
			</Container>
		</header>
	)

};

export default header;
