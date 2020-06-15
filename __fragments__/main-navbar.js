Vue.component('hp-main-navbar', {
	props: ['scrollSticky'],

	data () {
		return {
			categories: categories,
			openedNavMenu: null,
			isNavbarSticky: false
		}
	},

	mounted () {
		if (!this.scrollSticky) {
			return
		}

		const $navbar = this.$refs.navBar
		const pos = $navbar && $navbar.offsetTop
		const offsetTop = 800

		document.addEventListener('scroll', () => {
			if (!this.isNavbarSticky && window.pageYOffset >= pos + offsetTop) {
				this.isNavbarSticky = true
				this.isShowCategory = false
			} else if (this.isNavbarSticky && !(window.pageYOffset >= pos + offsetTop)) {
				this.isNavbarSticky = false
				this.isShowCategory = true
			}
		})
	},

	methods: {
		openNavMenuPanel(menu) {
			this.openedNavMenu = menu
		},
	},

	template: `
		<header>
			<!-- ===========================================
				Top bar
			================================================ -->
			<nav class="hp-top-bar lo-container">
				<div>
					<ul>
						<li class="menu">
							<span class="u-flag-th"></span>&nbsp;&nbsp;TH
						</li>
						<li>|</li>
						<li class="menu">
							<span class="u-flag-en"></span>&nbsp;&nbsp;EN
						</li>
						<li class="menu"><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;1284</li>
						<li class="menu"><a href="#">ค้นหาสาขา</a></li>
						<li class="menu"><a href="#">ติดต่อเรา</a></li>
						<li class="menu"><a href="#">ติดตามคำสั่งซื้อ</a></li>
						<li class="menu"><a href="#">บัญชีของฉัน</a></li>
					</ul>
				</div>
			</nav>

			<!-- ===========================================
				Nav bar
			================================================ -->
			<nav ref="navBar" :class="{ 'is-sticky': isNavbarSticky }" class="hp-nav-bar lo-container">
				<div>
					<img src="assets/homepro-logo.svg" alt="Hopmepro" height="55" width="120">

					<div class="nav-bar-search">
						<form>
							<div class="hp-input">
								<input type="text" placeholder="ค้นหาสินค้าในโฮมโปร">
								<button class="hp-button">
									<i class="far fa-search"></i>
								</button>
							</div>
						</form>
						<ul class="popular-keywords">
							<li><a href="#">ทีวี</a></li>
							<li><a href="#">LG</a></li>
							<li><a href="#">เตารีด</a></li>
							<li><a href="#">Philips</a></li>
							<li><a href="#">นาฬิกา</a></li>
							<li><a href="#">Garmin</a></li>
							<li><a href="#">สุขภัณฑ์</a></li>
							<li><a href="#">Moya</a></li>
						</ul>
					</div>

					<div class="nav-bar-top-menus">
						<div
							@mouseover="$refs.cartPopup.classList.add('-active')"
							@mouseleave="$refs.cartPopup.classList.remove('-active')"
							class="menu"
						>
							<span class="hp-badge">12</span>
							<i class="fas fa-shopping-cart"></i>

							<div ref="cartPopup" class="hp-popup cart-popup">
								<div class="hp-panel u-raised-2">
									<div class="header">รายการสินค้า (12)</div>
									<div class="items">
										<div v-for="p in 10" class="hp-card-product-list-cart">
											<div class="photo">
												<img src="https://static.homepro.co.th/product/200000/160x160/22122019_221847$Imagex1.jpg" />
											</div>
											<div class="info">
												<div class="title">WALL AIR CONDITIONER MITSUBISHI MS-GK36VA 34120BTU</div>
												<div class="amount">จำนวน: 4</div>
											</div>
											<div class="price">120,000 บาท</div>
										</div>
									</div>
									<div class="actions">
										<button class="hp-button -small">
											ชำระเงิน
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="menu">
							<i class="fas fa-heart"></i>
						</div>
					</div>

					<div class="nav-banner">
						<a href="#">
							<img src="assets/nav-banner.jpg" alt="Promotion">
						</a>
					</div>
				</div>

				<ul class="nav-bar-menu">
					<!-- ===========================================
						Categories
					================================================ -->
					<li @mouseover="openNavMenuPanel('CATEGORY')" @mouseleave="openNavMenuPanel(null)" class="menu">
						<span>เลือกหมวดหมู่สินค้า <i class="far fa-chevron-down"></i></span>

						<ul :class="{ '-active': openedNavMenu === 'CATEGORY'}" class="hp-category-panel hp-popup">
							<li v-for="category in categories">
								<a href="#">
									<div>{{ category.title }}</div>
								</a>
								<div v-if="category.groups" class="inner1-panel">
									<ul class="category-inner1-panel u-scrollbar">
										<li v-for="group in category.groups">
											<div><a href="#">{{ group.title }}</a></div>
											<ul>
												<li v-for="subcategory in group.subcategories">
													<a href="#">{{ subcategory }}</a>
												</li>
											</ul>
										</li>
									</ul>
									<div class="category-promotion">
										<img src="assets/cat-promo1.jpg" alt="Promo" width="100%">
									</div>
									<div class="brand-list">
										<template v-for="b in 4">
											<a href="#">
												<img src="assets/brand1.png" alt="brand">
											</a>
											<a href="#">
												<img src="assets/brand2.png" alt="brand">
											</a>
										</template>
									</div>
								</div>
							</li>
						</ul>
					</li>

					<!-- ===========================================
						Brands
					================================================ -->
					<li class="menu" @mouseover="openNavMenuPanel('BRAND')" @mouseleave="openNavMenuPanel(null)">
						<span>ช้อปตามแบรนด์ <i class="far fa-chevron-down"></i></span>

						<ul class="hp-brand-panel hp-popup" :class="{ '-active': openedNavMenu === 'BRAND'}">
							<li v-for="b in 24">
								<a href="#"><img src="assets/brand1.png" alt="brand"></a>
							</li>
						</ul>
					</li>

					<!-- ===========================================
						Articles
					================================================ -->
					<li class="menu" @mouseover="openNavMenuPanel('ARTICLE')" @mouseleave="openNavMenuPanel(null)">
						<span>ความรู้คู่บ้าน <i class="far fa-chevron-down"></i></span>

						<div class="hp-article-panel hp-popup" :class="{ '-active': openedNavMenu === 'ARTICLE'}">
							<div class="header">
								<div>
									<h2 class="title">บทความเรื่องบ้าน</h2>
									<div class="description">ค้นหาไอเดียเกี่ยวกับการแต่งบ้าน</div>
								</div>
								<div class="hp-fancy-link">
									<a href="#">
										ดูไอเดียทั้งหมด <i class="far fa-chevron-circle-right"></i>
									</a>
								</div>
							</div>

							<div class="article-container">
								<div v-for="a in 4" class="hp-card-article">
									<a href="#">
										<div class="image">
											<img src="assets/article1.jpg" alt="article">
										</div>

										<div class="info">
											<div class="tag">
												TIPS
											</div>
											<p class="title">
												จัดมุมในบ้านไม่ให้น่าเบื่อ ไว้เซลฟี่ช่วง Work from Homeด้วยไอเท็มเด็ดที่ต้องโดน!
											</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</li>

					<li class="menu">
						<a href="#">บริการโฮมเซอร์วิส</a>
					</li>

					<li class="menu">
						<a href="#">โฮมการ์ด</a>
					</li>

					<li class="menu">
						<a href="#">โปรโมชั่น</a>
					</li>
				</ul>
			</nav>
		</header>
	`
})

