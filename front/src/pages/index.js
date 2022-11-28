import Head from 'next/head'
import Image from 'next/image'
import { images } from '../constants/index'
// import hm from './home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Home · Social Impact Investment</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<section className="module-cover parallax fullscreen text-center">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20">
								<strong>
									Welcome to <br />
									Social Impact Investments
								</strong>
							</h1>
							<p className="m-b-40">
								We believe in the opportunity to achieve more. <br />
								We are a high-performing investor in growth markets <br /> with unique operational expertise to identify overlooked opportunities. <br />
							</p>
							<p></p>
						</div>
					</div>
				</div>
				<div className="overlay-bg"></div>
				<div id="parallax-container">
					<div></div>
				</div>
			</section>
			<section className="module divider-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-6 m-auto text-center">
							<h1>Your Challenge, Our Opportunity.</h1>
							<p className="lead">
								We build sucessful businesses that transform lives.
								Turning critical challenges into opportunities that yield high-returns at scale <br />
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="space-lg"></div>
						</div>
					</div>
					<div className="row">
						<p>
							<Image src={images.farm} alt />
						</p>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="space-sm"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="icon-box text-center">
								<div className="icon-box-icon">
									<span className="bi-egg"></span>
								</div>
								<div className="icon-box-title">
									<h6>Food</h6>
								</div>
								<div className="icon-box-content">
									<p>
									Increased availability and affordability of basic nutrition and 
									increased income of farmers leads to improved health and financial resilience.
									</p>
								</div>
								<div className="icon-box-link">
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="icon-box text-center">
								<div className="icon-box-icon">
									<span className="bi-water"></span>
								</div>
								<div className="icon-box-title">
									<h6>Water</h6>
								</div>
								<div className="icon-box-content">
									<p>
										Increased access to clean water and building wastewater solutions improves 
										personal and social wellbeing and reduces environmental impact.
									</p>
								</div>
								<div className="icon-box-link">
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="icon-box text-center">
								<div className="icon-box-icon">
									<span className="bi-bandaid"></span>
								</div>
								<div className="icon-box-title">
									<h6>Healthcare</h6>
								</div>
								<div className="icon-box-content">
									<p>
										Making healthcare more accessible and affordable leads to improved health 
										for more people and save lives. Increased access to medical diagnostics.
									</p>
								</div>
								<div className="icon-box-link">
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="icon-box text-center">
								<div className="icon-box-icon">
									<span className="bi-briefcase"></span>
								</div>
								<div className="icon-box-title">
									<h6>Infrastructure</h6>
								</div>
								<div className="icon-box-content">
									<p>
									Sustainable businesses and infrastructure are fundamental for economic growth and societal stability.
									With the added benefit of providing low risk, high returns opportunities.
									</p>
								</div>
								<div className="icon-box-link">
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section></section>
			<section className="module">
				<div className="container">
					<div className="row">
						<div className="col-md-6 m-auto text-center">
							<h1>Latest insights.</h1>
							<p className="lead">
								See recent insights as to the impact we are making, in growing businesses that not only solve challenges, but also yield high returns.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="space-lg"></div>
						</div>
					</div>
					<div className="row insights-masonry">
						<div className="col-md-4 insight-item">
							<article className="insight">
								<div className="insight-preview">
									<a href="#">
										<Image src={images.one} alt />
									</a>
								</div>
								<div className="insight-wrapper">
									<div className="insight-header">
										<h2 className="insight-title">
											<a href="#">Partnership with Pearlz POS Hub</a>
										</h2>
									</div>
									<div className="insight-content">
										<p>
											See recent insights as to the impact we are making, in growing businesses that not only solve challenges, but also yield high returns.
										</p>
										<p>
											<a href="#">Read more</a>
										</p>
									</div>
								</div>
							</article>
						</div>
						<div className="col-md-4 insight">
							<div className="insight-preview">
								<a href="#">
									<Image src={images.three} alt />
								</a>
							</div>
							<div className="insight-wrapper">
								<div className="insight-header">
									<h2 className="insight-title">
										<a href="#">Partnership with Victor&apos;s Laundry House</a>
									</h2>
								</div>
								<div className="insight-content">
									<p>
										See recent insights as to the impact we are making, in growing businesses that not only solve challenges, but also yield high returns.
									</p>
									<p>
										<a href="#">Read more</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 insight">
							<div className="insight-preview">
								<a href="#">
									<Image src={images.five} alt />
								</a>
							</div>
							<div className="insight-wrapper">
								<div className="insight-header">
									<h2 className="insight-title">
										<a href="#">Third Insight</a>
									</h2>
								</div>
								<div className="insight-content">
									<p>
										See recent insights as to the impact we are making, in growing businesses that not only solve challenges, but also yield high returns.
									</p>
									<p>
										<a href="#">Read more</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="module divider-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-9 m-auto text-center">
							<h1>Get in touch.</h1>
							<p className="lead">
								Looking to partner with us, or learn more about what we do. Don&apos;t hesitate to reach out.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="space-lg"></div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 m-auto">
							<form id="contact-form" method="post" novalidate>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input className="form-control" type="text" name="name" placeholder="Name" required />
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input className="form-control" type="email" name="email" placeholder="E-mail" required />
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form_group">
											<input className="form_control} form-control" type="text" name="subject" placeholder="Subject" required />
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea className="form-control" name="message" placeholder="Message" rows="12" required></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<p>
											<input className="btn btn-block btn-brand" type="submit" value="Send Message" />
										</p>
									</div>
								</div>
							</form>
							<div className="ajax-response text-center" id="contact-res"></div>
						</div>
					</div>
				</div>
			</section>
			<section className="module bg-gray p-b-0">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-3">
							<div className="counter">
								<div className="counter-icon"></div>
								<div className="counter-number">$3M</div>
								<div className="counter-title">Total Revenue</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="counter">
								<div className="counter-icon"></div>
								<div className="counter-number">123</div>
								<div className="counter-title">Total Impacts</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="counter">
								<div className="counter-icon"></div>
								<div className="counter-number">1234</div>
								<div className="counter-title">Jobs Created</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="counter">
								<div className="counter-icon"></div>
								<div className="counter-number">234</div>
								<div className="counter-title">Total Partners</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="module no-gutters p-0">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<Image src={images.mod} alt />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
