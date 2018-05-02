import React from 'react'

import Contact from '../components/Contact'
import './about.scss'

const IntroSection = () => (
	<section className="hero is-light">
		<div className="hero-body">
			<div className="columns is-vcentered">
				<div className="column is-one-third has-text-centered">
					<img className="avatar image-floating" src={require('./assets/about/samW.jpg')} alt="A picture of me!"/>
				</div>
				<div className="column">
					<p className="subtitle is-4">
						Hi, I'm Sam! I am a final year Software Engineering student at UNSW who loves solving complex problems and exploring the world around me.
					</p>
				</div>
			</div>
		</div>
	</section>
)

const GrowingUpSection = () => (
	<div className="hero">
		<div className="hero-body">
			<div className="columns is-vcentered section">
				<div className="column is-4 is-offset-1">
				<p className="subtitle lh-about">Growing up on a farm I've always been a bit more connected to the environment than most, which is why I dream to build software that can help tackle one of the biggest problems of our time - climate change.</p>
				</div>
				<div className="column is-5 is-offset-1">
					<img src={require('./assets/about/hill.jpg')} alt="" className="image-floating"/>
				</div>
			</div>

		</div>
	</div>
)

const DayToDaySection = () => (
	<div className="hero is-warning is-bold">
		<div className="hero-body has-text-centered">
			<div className="columns">
				<div className="column is-6 is-offset-3">
					<div className="section">
						<p className="subtitle is-4 lh-about">
							Day to day I like to hack away at side projects to pick up new skills, try out an idea, or even just have some fun...
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
)

const SpareTimeSection = () => (
	<div className="hero is-light">
		<div className="hero-body">
			<div className="columns is-vcentered section">
				<div className="column is-5 is-offset-1">
					<img src={require('./assets/about/redtarn-mtcook.jpg')} alt="" className="image-floating"/>
				</div>
				<div className="column is-4 is-offset-1">
					<p className="subtitle lh-about">In my spare time I like going on hikes in the mountains, play video games and do something other than uni work 😊. Other random things I enjoy include archery, snowboarding and gardening.</p>
				</div>
			</div>

		</div>
	</div>
)

const GetInTouchSection = () => (
	<div className="hero is-primary is-bold">
		<div className="hero-body has-text-centered">
			<div className="columns">
				<div className="column is-8 is-offset-2">
						<p className="subtitle is-4 lh-about">
							If you want to get in touch - just click on one of the links below. 👍
							<br/>Otherwise have a great day!
						</p>
				</div>
			</div>
		</div>
	</div>
)


const AboutPage = () => (
	<main>
		<div className="hero is-primary is-bold is-medium">
			<div className="hero-body has-text-centered">
				<h1 className="title is-2">About me</h1>
			</div>
		</div>
		<IntroSection />
		<GrowingUpSection />
		<DayToDaySection />
		<SpareTimeSection />
		<GetInTouchSection />
		<Contact />
	</main>
)

export default AboutPage
