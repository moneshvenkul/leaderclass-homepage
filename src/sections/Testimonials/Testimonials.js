import React from 'react';

import Section from 'components/Section/Section';
import TestimonialCard from 'components/TestimonialCard/TestimonialCard';

import TestImg1 from 'assets/img/photos/test1.jpg';
import TestImg2 from 'assets/img/photos/test2.jpg';
import TestImg3 from 'assets/img/photos/test3.jpg';
import TestImg4 from 'assets/img/photos/test4.jpg';

import classes from './Testimonials.module.scss';

const testimonialsSection = (props) => {
	return(
		<Section badge="CEO Testimonials"
				 className={classes.testimonials}
				 id="testimonials"
				 paddingLarge={true}
				 title="We don't hide our clients' opinion">

			<div className={classes.testimonials_inner}>

				<TestimonialCard descr="An MBA from the University of Chicago & a CFA charter holder, Ram brings over 26+ of experience gained at Citibank, Standard Chartered & Barclays across various geographies & divisions to his current responsibility of designing & executing country strategy for Barclays in India , with accountability for financial performance & market position for the Bank.
Additionally, Ram is also a member of the European Business Group Banking Finance Committee representing the firms interests."
								 name="Ram Gopal, Chief Executive Officer, Barclays India"
								 src={TestImg1}
								 title="Best Experience!"/>

				<TestimonialCard descr="An Alumnus of IIT-BHU & IIMA, Gunjan brings over 28+ years at work at Gillette, Philips,Sennheiser & Bosch Siemens in Strategy, Consumer Marketing & Market Development across Europe & Asia to his current role as Chairman of the Region Asia Pacific Board of Bosch Siemens Home Appliances Asia Pacific Business."
								 name="Gunjan Srivastava,
 Chairman - Region Asia Pacific Board. Bosch Siemens, Home Appliances."
								 src={TestImg2}
								 title="Nice work"/>

				<TestimonialCard descr="An ISB Alumnus, Achint is an Industry Fast Tracker from the TMT sector, bringing his experience at Microsoft, McKinsey & Viacom across Product Development, Strategy, Corporate Development, Innovation & Market Development to his current role of building Myntra leveraging his Digital Strategy & Execution expertise."
								 name=" Achint Setia,
Vice President, Marketing at Myntrar"
								 src={TestImg3}
								 title="I say just WOW!"/>

				<TestimonialCard descr="An IIFT Alumnus, Nitin is an Industry Fast Tracker from the E-Commerce & FMCG sectors, bringing his experience in Corporate Finance, Marketing, Category Management & Market Development at Flipkart, Shopclues & Rivigo to his current role of  heading the Consumer IoT
business of Hero Electronix planned for a 2019 launch."
								 name=" Nitin Kochhar
          COO @ Hero Electronixs"
								 src={TestImg4}
								 title="Amazing result"/>

			</div>

		</Section>
	);
};

export default testimonialsSection;
