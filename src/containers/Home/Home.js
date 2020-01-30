import React, { Component, Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ServicesSection from 'sections/Services/Services';
import TestimonialsSection from 'sections/Testimonials/Testimonials';
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.jpg";
import image5 from "./5.jfif";
import image6 from "./6.jfif";
import image7 from "./7.jfif";
import image8 from "./8.jfif";
import image9 from "./9.jfif";
import image10 from "./10.png";
import image11 from "./11.png";




class Home extends Component{

	state = {
		faqActive: null,
		galleryItems1: [{id:1,title:'100+ ​FULLTIME/ EXECUTIVE DEVELOPMENT PROGRAMS AT PRE-EMINENT UNIVERSITIES',img:image1},
		{id:2,title:'Economy and Globalization Enablers',img:image2},
		{id:3,title:'50+ renowned High Potential (Hi-Po) & Executive Leadership Development programs of Top Tier Organisations',img:image3}].map((i) => <h1 style={{textAlign:"center"}} key={i.id}>{i.title} <img src={i.img} alt='Loading'></img></h1>),
		galleryItems2: [{id:1,title:'World Leaders',img:image5},
		{id:2,title:'',img:image6},
		{id:3,title:'',img:image7},
		{id:4,title:'',img:image8},
		{id:5,title:'',img:image9},].map((i) => <h1 style={{textAlign:"center"}} key={i.id}>{i.title} <img src={i.img} alt='loading'></img></h1>)
	};




	faqHandler = (index) => {

		const oldTab = this.state.faqActive;
		let newTab = index;

		if(oldTab === newTab) {
			newTab = null;
		}

		this.setState({
			faqActive: newTab
		});

	};

	render() {

		return(

			<Fragment>
			<h1 style={{textAlign:"center", color:'red'}}><b>To Facilitate this Leader Class</b> </h1>
			<h1 style={{textAlign:"center", color:'green'}}><b>Relentlessly tracks and learns from</b> </h1>
			<AliceCarousel
			items={this.state.galleryItems1}
			responsive={this.responsive}
			autoPlayInterval={1500}
			autoPlayDirection="rtl"
			autoPlay={true}
			fadeOutAnimation={true}
			mouseTrackingEnabled={true}
			playButtonEnabled={true}
			disableAutoPlayOnAction={true}
			onSlideChange={this.onSlideChange}
			onSlideChanged={this.onSlideChanged}
     		/>


			<h1 style={{textAlign:"center", color:'red'}}><b>THOUGHTS, ACTIONS, ADVICE, LIFE & INSPIRATION OF</b>
			<img src={image4} alt='loading' style={{paddingLeft:200,paddingRight:200 }}></img>

			 </h1>
			
			<h1 style={{textAlign:"center", color:'green'}}><b>OF THE FOREMOST</b> </h1>

			<AliceCarousel
			items={this.state.galleryItems2}
			responsive={this.responsive}
			autoPlayInterval={1500}
			autoPlayDirection="rtl"
			autoPlay={true}
			fadeOutAnimation={true}
			mouseTrackingEnabled={true}
			playButtonEnabled={true}
			disableAutoPlayOnAction={true}
			onSlideChange={this.onSlideChange}
			onSlideChanged={this.onSlideChanged}
/>
<h1 style={{textAlign:"center", color:'red'}}>& Other Leaders par excellence. Ingesting an extra-ordinary amount of this exceptionally valuable content
			on
			100+ Topics of Strategic Importance
			from
			
			<img src={image10} alt='loading' style={{paddingLeft:200,paddingRight:200 }}></img>
			<img src={image11} alt='loading' style={{paddingLeft:200,paddingRight:200 }}></img>
			
			
			
			</h1>
			<h1  style={{textAlign:"center", color:'black'}}>Delivered via an Online Portal,
‍
‍accessible to our Members through an extremely affordable, Annual Subscription - Know more about our <a style={{color:'red'}} href='https://www.leaderclasses.com/leadership-and-career-development-programs'>"Leadership Development and Career Acceleration Programs".</a> 
</h1>

				<ServicesSection/>

				<h1 style={{textAlign:'center',paddingBottom:100, color:'red',}}><a href='https://www.leaderclasses.com/emerging-leaders-express-interest'>ExpressInterest</a> </h1>


				<p style={{padding:20}}>To know more about & to join our exclusive, exceptional network of ambitious minds, we invite you to review our <a style={{color:'red'}} href='https://www.leaderclasses.com/leadership-and-career-development-programs'>"Leadership Development and Career Acceleration Programs"</a> page. We look forward to hearing from & having you in our exceptional network, soon.
‍</p>
				<h1 style={{textAlign:'center', color:'red',}}>Not Yet Sure Of  Joining ?</h1>
				<p style={{textAlign:"center"}}>Hear what Top Tier CEOs & Emerging CEO are saying about LeaderClasses Via their Video Testimonials below :-
</p>

				<TestimonialsSection/>

				<h2 style={{color:"black",textAlign:"center"}}>Know more & Apply for Our<a style={{color:"red"}} href="https://www.leaderclasses.com/leadership-and-career-development-programs">"Leadership Development and Career Acceleration Programs"</a> .
</h2>
			<h3 style={{textAlign:"center"}}>REPRESENTING AN  INSTITUTION  ?
‍
LeaderClasses is at a very interesting phase of its growth & is actively looking to expand our Campus Partnerships Pan-India.
‍
If you are an Institutional Representative of a University / College interested in building a relationship with us , we invite you to review our <a style={{color:'red'}} href="https://www.leaderclasses.com/campus-partners">"Campus Partners"</a> page & submit your details via our Campus Partners form.

We look forward to hearing from you soon & will advise interest/next steps within 5 Business Days of receipt of your <a style={{color:'red'}} href="https://www.leaderclasses.com/campus-partners-form">“Campus Partners Form”</a>.

<p>Thanks for your Time & Attention !</p>
‍
Team - LeaderClasses.</h3>


			<h1 style={{textAlign:"center", color:'red'}}><a href="https://www.leaderclasses.com/leaderclasses-contact-form">Contact Us</a></h1>

			</Fragment>

		);
	}

};

export default Home;
