Vue.component('hp-home-hero-banner', {
	components: {
		carousel: VueAgile,
	},

	template: `
		<section v-cloak class="layout-hero-banner">
			<carousel autoplay class="hero-banner-carousel">
				<div class="slide">
					<a href="#"><img src="assets/banner-long1.jpg" width="100%" alt="Banner 1"></a>
				</div>
				<div class="slide">
					<a href="#"><img src="assets/banner-long2.jpg" width="100%" alt="Banner 2"></a>
				</div>
				<div class="slide">
					<a href="#"><img src="assets/banner-long3.jpg" width="100%" alt="Banner 3"></a>
				</div>
				<template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
				<template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
			</carousel>
		</section>
	`
})

