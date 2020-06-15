Vue.component('hp-home-product-grid', {
	props: [
		'products',
		'title'
	],

	template: `
		<section class="lo-container">
			<div class="hp-panel layout-product">
				<h2 class="section-title">{{ title }}</h2>

				<div class="product-list">
					<div v-for="(product, i) in products" class="hp-card-product">
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
			</div>
		</section>
	`
})
