Vue.component('hp-home-popular-subcategories', {
	template: `
		<section class="lo-container">
			<div class="hp-panel layout-categories">
				<div class="section-header">
					<h2 class="section-title">กลุ่มสินค้ายอดนิยม</h2>
					<a href="#" class="hp-fancy-link">
						ดูเพิ่มเติม  <i class="far fa-chevron-circle-right"></i>
					</a>
				</div>

				<div class="category-container">
					<div v-for="it in 14" class="hp-card-category">
						<div class="image">
							<img src="assets/c1.png">
						</div>
						<div class="title">สว่านและดอกสว่าน</div>
					</div>
				</div>
			</div>
		</section>
	`
})

