Vue.component('hp-home-product-carousel', {
	props: [
		'products',
		'title'
	],

	components: {
		carousel: VueAgile,
	},

	methods: {
		checkSlide({ currentSlide }, ref) {
			if (currentSlide === 0) {
				this.$refs[ref].$refs.prevButton.classList.add('disabled')
			} else {
				this.$refs[ref].$refs.prevButton.classList.remove('disabled')
			}

			if (currentSlide === 6) {
				this.$refs[ref].$refs.nextButton.classList.add('disabled')
			} else {
				this.$refs[ref].$refs.nextButton.classList.remove('disabled')
			}
		}
	},

	template: `
		<section class="lo-container">
			<div class="hp-panel layout-product">
				<h2 class="section-title">{{ title }}</h2>

				<div class="layout-product-carousel">
					<carousel ref="popular2" :slides-to-show="6" :infinite="false" :dots="false" @after-change="(payload) => checkSlide(payload, 'popular2')">
						<div v-for="(product, i) in products" :key="i">
							<div class="hp-card-product">
								<div class="image">
									<img :src="product.photo">
								</div>
								<div class="info">
									<div v-if="product.discount" class="discount">{{ product.discount }}</div>
									<div class="brand">{{ product.brand }}</div>
									<div class="title">{{ product.title }}</div>
									<div class="price">{{ product.price }} บาท</div>
									<div v-if="product.originalPrice" class="original-price">{{ product.originalPrice }} บาท</div>
								</div>
								<div v-if="product.promotion" class="promotion">
									{{ product.promotion }}
								</div>
							</div>
						</div>
						<template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
						<template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
					</carousel>
				</div>
			</div>
		</section>
	`
})

