import React from 'react';

import Container from 'components/Miscellaneous/Container/Container';
import Logo from 'components/Logo/Logo';
import SocialIcons from 'components/SocialIcons/SocialIcons';
import FooterCol from './FooterCol/FooterCol';

import { productsLinks, aboutLinks, learnLinks } from './constants';

import classes from './Footer.module.scss';

const footer = (props) => {

	return(

		<footer className={classes.footer}>
			<Container>
				<div className={classes.footer_inner}>

					<FooterCol>

						<Logo/>

						<div className={classes.footer_socials}>
							<SocialIcons/>
						</div>

					</FooterCol>

					<FooterCol title="Temp1"
					           linksList={productsLinks}/>

					<FooterCol title="Temp2"
							   linksList={aboutLinks}/>

					<FooterCol title="Links"
							   linksList={learnLinks}/>
							   

				</div>
				<p style={{textAlign:"center",color:'black'}}>© 2019 LeaderClasses ( Awesome Firms ) & its owners. All rights reserved.
All trademarks, logos & intellectual property featured belong to their respective owners. They do not endorse us in any way.</p>
			</Container>
		</footer>
		

	);
};

export default footer;
