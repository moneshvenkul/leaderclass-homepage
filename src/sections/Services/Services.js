import React from 'react';
import Section from 'components/Section/Section';
import Card from 'components/Card/Card';

import { ReactComponent as AnalisysIcon } from 'assets/img/icons/market-analysis.svg';
import { ReactComponent as PromotionIcon } from 'assets/img/icons/app-promotion.svg';
import { ReactComponent as LandingIcon } from 'assets/img/icons/landing-analysis.svg';

const servicesSection = (props) => {
	return(

		<Section badge="High Impact offline events"
				 descr="Members are also invited to Specialized, High Impact, One-Day, Career Advancement & Strategic Transformation (CAST) Workshops held Offline at select Cities & Countries, for an Immersive Learning & Networking experience enabling them :-
                a)  Broaden & Deepen their Leadership Foundations while learning first hand with us.
                b) Efficiently Network & Build Relationships with their finest peers.

These High Impact, One Day, Offline CAST events are aligned to the Strategic Career Management & Leadership Development needs at Four stages of our Members' Life :-"
				 id="services"
				 title="Services that we provide">

			<Card descr="Ambitious Students ( Born between 1st Jan 1999 to 1st Jan 2004 )aspiring to progress to Director / GM / VP /  Higher level roles within 10-12 years of completing their education."
				  title="BUDDING LEADERS FOUNDATION PROGRAM"
				  url="https://www.leaderclasses.com/budding-leaders-contest-foundation-program"
				  >
				<AnalisysIcon title="Market analysis"/>
			</Card>

			<Card descr="‍Ambitious Working Professionals ( Born between 1st Jan 1985 to 31st Dec 1998 ) ( Annual Gross Compensation Upto INR 50 Lakhs per annum if  based in India & Upto USD 200K p.a if  based outside India ). keen on accelerating their success to transition into our Future Leaders category within the next 6-8 years."
				  title="BUDDING LEADERS PROGRAM"
				  url="https://www.leaderclasses.com/leadership-and-career-development-programs">
				<PromotionIcon title="App Promotion"/>
			</Card>

			<Card descr="Ambitious Director / General Manager / Vice President level Professionals (Annual Gross Compensation exceeding INR 50 Lakhs per annum if  based in India & Over USD 200K p.a if  based outside India.) keen on accelerating their success to transition into a high performing C-Level Leader within the next 6-8 years."
				  title="‍FUTURE LEADERS - PROGRAM"
				  url="https://www.leaderclasses.com/future-leaders-form">
				<LandingIcon title="Landing Analysis"/>
			</Card>

			<Section descr="Ambitious Country / Multi-Country / Global Business Heads / Function Heads / Country Heads / Country Managers / C-Level Professionals / Partners / Senior Partners / Managing Directors / Presidents ,  Entrepreneurs, Family Business Leaders,  Founders / Co-Founders / Founding Team Members of Growth & Expansion Stage Ventures ( Annual Compensation > INR 1 Crore p.a in India & Over US $ 500K if based outside India ) keen on evolving within the next decade to Global / Group C-Level / Board Level roles typically offering an Annual Compensation > US $ 1 Million in India & Over US $ 5 Million if based outside India."
				  title="‍Category VII - Emerging Leaders">
				
			</Section>
			

		</Section>
		

	);
};

export default servicesSection;
