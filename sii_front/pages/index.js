import hm from '../styles/home.module.css'

export default function Home() {
	return (
		<>
			<section className={`${hm.module_cover} ${hm.parallax} ${hm.fullscreen} text-center`}>
				<div className={`${hm.container} container`}>
					<div className={`${hm.row} row`}>
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
				<div className={hm.overlay_bg}></div>
				<div id="parallax_container">
					<div></div>
				</div>
			</section>
			<section className={`${hm.module} ${hm.divider_bottom}`}>
				<div className={`${hm.container} container`}>
					<div className={`${hm.row} row`}>
						<div className="col-md-6 m-auto text-center">
							<h1>Your Challenge, Our Opportunity.</h1>
							<p className={hm.lead}>
								We build sucessful businesses that transform lives.
								Turning critical challenges into opportunities that yield high-returns at scale <br />
							</p>
						</div>
					</div>
					<div className={`${hm.row} row`}>
						<div className="col-md-12">
							<div className={hm.space_lg}></div>
						</div>
					</div>
					<div className={`${hm.row} row`}>
						<p>
							<img src='/images/farm_mod.jpg' />
						</p>
					</div>
					<div className={`${hm.row} row`}>
						<div className="col-md-12">
							<div className={hm.space_sm}></div>
						</div>
					</div>
					<div className={`${hm.row} row`}>
						<div className="col-lg-3 col-md-6">
							<div className={`${hm.icon_box} text-center`}>
								<div className={hm.icon_box_icon}>
									<span className=""></span>
								</div>
								<div className={hm.icon_box_title}>
									<h6>Food</h6>
								</div>
								<div className={hm.icon_box_content}>
									<p>
										Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
									</p>
								</div>
								<div className={hm.icon_box_link}>
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className={`${hm.icon_box} text-center`}>
								<div className={hm.icon_box_icon}>
									<span className=""></span>
								</div>
								<div className={hm.icon_box_title}>
									<h6>Water</h6>
								</div>
								<div className={hm.icon_box_content}>
									<p>
										Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
									</p>
								</div>
								<div className={hm.icon_box_link}>
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className={`${hm.icon_box} text-center`}>
								<div className={hm.icon_box_icon}>
									<span className=""></span>
								</div>
								<div className={hm.icon_box_title}>
									<h6>Healthcare</h6>
								</div>
								<div className={hm.icon_box_content}>
									<p>
									Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
									</p>
								</div>
								<div className={hm.icon_box_link}>
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className={`${hm.icon_box} text-center`}>
								<div className={hm.icon_box_icon}>
									<span className=""></span>
								</div>
								<div className={hm.icon_box_title}>
									<h6>Infrastructure</h6>
								</div>
								<div className={hm.icon_box_content}>
									<p>
									Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam lorem ipsum amet.
									</p>
								</div>
								<div className={hm.icon_box_link}>
									<a href="#">Read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section></section>
			<section className={hm.module}>
				<div className={`${hm.container} container`}>
					<div className={`${hm.row} row`}>
						<div className="col-md-6 m-auto text-center">
							<h1>Latest insights.</h1>
							<p className={hm.lead}>
								See recent insights as to the impact we are making, in growing businesses that not only solve challenges, but also yield high returns.
							</p>
						</div>
					</div>
					<div className={`${hm.row} row`}>
						<div className="col-md-12">
							<div className={hm.space_lg}></div>
						</div>
					</div>
					<div className={`row ${hm.row} ${hm.insights_masonry}`}>
						<div className={`col-md-4 ${hm.insight_item}`}>
							<article className={hm.insight}>
								<div className={hm.insight_preview}>
									<a href="#">
										<img src="images/1.jpg" />
									</a>
								</div>
								<div className={hm.insight_wrapper}>
									<div className={hm.insight_header}>
										<h2 className={hm.insight_title}>
											<a href="#">First Insight</a>
										</h2>
									</div>
									<div className={hm.insight_content}>
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
						<div className={`col-md-4 ${hm.insight}`}>
							<div className={hm.insight_preview}>
								<a href="#">
									<img src="images/3.jpg" />
								</a>
							</div>
							<div className={hm.insight_wrapper}>
								<div className={hm.insight_header}>
									<h2 className={hm.insight_title}>
										<a href="#">Second Insight</a>
									</h2>
								</div>
								<div className={hm.insight_content}>
									<p>
										See recent insights as to the impact we are making, in growing businesses that not only solve challenges, but also yield high returns.
									</p>
									<p>
										<a href="#">Read more</a>
									</p>
								</div>
							</div>
						</div>
						<div className={`col-md-4 ${hm.insight}`}>
							<div className={hm.insight_preview}>
								<a href="#">
									<img src="images/5.jpg" />
								</a>
							</div>
							<div className={hm.insight_wrapper}>
								<div className={hm.insight_header}>
									<h2 className={hm.insight_title}>
										<a href="#">Third Insight</a>
									</h2>
								</div>
								<div className={hm.insight_content}>
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
			<section className={`${hm.module} divider-top`}>
				<div className={`${hm.container} container`}>
					<div className={`${hm.row} row`}>
						<div className="col-lg-6 col-md-9 m-auto text-center">
							<h1>Get in touch.</h1>
							<p className={hm.lead}>
								Looking to partner with us, or learn more about what we do. Don't hesitate to reach out.
							</p>
						</div>
					</div>
					<div className={`${hm.row} row`}>
						<div className="col-md-12">
							<div className={hm.space_lg}></div>
						</div>
					</div>
					<div className={`${hm.row} row`}>
						<div className="col-md-8 m-auto">
							<form id="contact-form" method="post" novalidate>
								<div className={`${hm.row} row`}>
									<div className="col-md-6">
										<div className={hm.form_group}>
											<input className={`${hm.form_control} form-control`} type="text" name="name" placeholder="Name" required />
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-6">
										<div className={hm.form_group}>
											<input className={`${hm.form_control} form-control`} type="email" name="email" placeholder="E-mail" required />
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-12">
										<div className={hm.form_group}>
											<input className={`${hm.form_control} form-control`} type="text" name="subject" placeholder="Subject" required />
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-12">
										<div className={hm.form_group}>
											<textarea className={`${hm.form_control} form-control`} name="message" placeholder="Message" rows="12" required></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<p>
											<input className={`${hm.btn} ${hm.btn_block} ${hm.btn_brand} btn btn-block btn-brand`} type="submit" value="Send Message" />
										</p>
									</div>
								</div>
							</form>
							<div className={`${hm.ajax_response} text-center`} id="contact-res"></div>
						</div>
					</div>
				</div>
			</section>
			<section className={`${hm.module} bg-gray p-b-0`}>
				<div className={`${hm.container} container text-center`}>
					<div className={`${hm.row} row`}>
						<div className="col-md-3">
							<div className={hm.counter}>
								<div className={hm.counter_icon}></div>
								<div className={hm.counter_number}>$3M</div>
								<div className={hm.counter_title}>Total Revenue</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className={hm.counter}>
								<div className={hm.counter_icon}></div>
								<div className={hm.counter_number}>123</div>
								<div className={hm.counter_title}>Total Impacts</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className={hm.counter}>
								<div className={hm.counter_icon}></div>
								<div className={hm.counter_number}>1234</div>
								<div className={hm.counter_title}>Jobs Created</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className={hm.counter}>
								<div className={hm.counter_icon}></div>
								<div className={hm.counter_number}>234</div>
								<div className={hm.counter_title}>Total Partners</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={`${hm.module} ${hm.no_gutters} p-0`}>
				<div className={`${hm.container_fluid} container-fluid`}>
					<div className={`${hm.row} row`}>
						<div className="col-md-12">
							<img src="images/module-18.jpg" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
