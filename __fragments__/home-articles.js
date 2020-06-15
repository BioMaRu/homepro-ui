Vue.component('hp-home-articles', {
	template: `
		<div class="layout-article">
			<div class="lo-container">
				<div class="article-container">
					<div v-for="a in 4" class="hp-card-article">
						<a href="#">
							<div class="image">
								<img src="assets/article1.jpg" alt="article">
							</div>

							<div class="info">
								<div class="tag">
									HOME IDEA
								</div>
								<p class="title">
									จัดมุมในบ้านไม่ให้น่าเบื่อ ไว้เซลฟี่ช่วง Work from Homeด้วยไอเท็มเด็ดที่ต้องโดน!
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	`
})

