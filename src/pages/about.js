import React from 'react'
// import Link from 'gatsby-link'

const Hobbies = () => (
	<section className="hero is-light is-medium">
		<HeroHeadTitle title="Hobbies"/>
		<div className="hero-body">
			<div className="container">
				<div className="tile is-ancestor">
					<div className="tile is-vertical">
						<div className="tile">
							<div className="tile is-parent">
								<article className="tile is-child notification box">
									<img className="hobby-icon" src={require('../../assets/images/icons/game.svg')}/>
									<p className="title quantico">Gaming</p>
									<p className="subtitle">I enjoy unwinding by playing quality games such as The Legend of Zelda and Last of Us (slowly becoming a naughty dog fan...).</p>
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child notification box">
									<img className="hobby-icon" src={require('../../assets/images/icons/mountainBike.svg')}/>
									<p className="title quantico">Adventuring</p>
									<p className="subtitle">Whether it be mountain bike riding, bushwalking or simply camping I love the outdoors and exploring what's over the next hill.</p>
								</article>
							</div>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification box">
								<div className="columns">
									<div className="column is-4-tablet is-3-desktop">
										<img className="hobby-icon" src={require('../../assets/images/icons/bow.svg')}/>
									</div>
									<div className="column is-8-tablet is-9-desktop">
										<p className="title quantico">Archery</p>
										<p className="subtitle">Wanting to be Legolas as a kid, I picked up a bow and haven't put it down since. Whenever I go home I like to get outdoors and have a shot.</p>
									</div>
								</div>
							</article>
						</div>
					</div>
					<div className="tile is-parent is-vertical">
						<article className="tile is-child notification box">
							<img className="hobby-icon" src={require('../../assets/images/icons/plant.svg')}/>
							<p className="title quantico">Gardening</p>
							<p className="subtitle">Does this make me sound old..? I grew up surrounded by Mum's garden, and have developed a bit of a green thumb for gardening since moving to Sydney.</p>
						</article>
						<article className="tile is-child notification box">
							<img className="hobby-icon" src={require('../../assets/images/icons/snowboard.svg')}/>
							<p className="title quantico">Snowboarding</p>
							<p className="subtitle">Expensive, but loads of fun. I try to make at least one trip to the snow per season to do my annual faceplant while attempting tricks and jumps.</p>
						</article>
					</div>
				</div>
			</div>
		</div>
	</section>
);


const AboutPage = () => (
	<main>
		<div className="hero is-primary">
			<div className="hero-body">
				<h1 className="title">About</h1>
			</div>
		</div>
		<div>
			<p>Hi, I'm Sam! I am a final year Software Engineering student at UNSW who loves solving complex problems and exploring the world around me.</p>

			<p>Growing up on a farm I've always been a bit more connected to the environment than most, which is why I hope to build software that can help tackle one of the biggest problem of our time - climate change.</p>

			<p>Day to day I like to hack away at side projects to pick up new skills, sharpen old ones, or maybe just for a little bit of fun...</p>

			<p>In my spare time I like going on hikes in the mountains, play video games and doing something other than uni work :D. Other random things I do include archery, snowboarding and gardening.</p>

			<p>If you want to get in touch - just click on one of the links below. Otherwise have a great day!</p>
		</div>
	</main>
)

export default AboutPage
