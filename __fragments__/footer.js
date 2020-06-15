Vue.component('hp-footer', {
	template: `
		<footer class="hp-footer">
			<div class="lo-container">
				<div class="content-container">
					<div>
						<h3 class="title">ศูนย์ช่วยเหลือ</h3>
						<ul class="menus">
							<li><a href="#">วิธีการช้อปออนไลน์</a></li>
							<li><a href="#">คำถามที่พบบ่อย</a></li>
							<li><a href="#">ติดตามสินค้า</a></li>
							<li><a href="#">ติดต่อเรา</a></li>
						</ul>
					</div>
					<div>
						<h3 class="title">ช้อปปิ้งกับเรา</h3>
						<ul class="menus">
							<li><a href="#">สมาชิก Home Card</a></li>
							<li><a href="#">สาขาโฮมโปร</a></li>
							<li><a href="#">ความรู้คู่บ้าน</a></li>
							<li><a href="#">งานบริการ</a></li>
						</ul>
					</div>
					<div>
						<h3 class="title">เกี่ยวกับเรา</h3>
						<ul class="menus">
							<li><a href="#">ประวัติโฮมโปร</a></li>
							<li><a href="#">นักลงทุนสัมพันธ์</a></li>
							<li><a href="#">ข่าวสารและกิจกรรม</a></li>
							<li><a href="#">ร่วมงานกับเรา</a></li>
							<li><a href="#">เสนอสินค้า</a></li>
						</ul>
					</div>
					<div>
						<h3 class="title">นโยบาย</h3>
						<ul class="menus">
							<li><a href="#">เงื่อนไขการใช้งาน</a></li>
							<li><a href="#">การคืนและยกเลิกคำสั่งซื้อ</a></li>
							<li><a href="#">ความเป็นส่วนตัว</a></li>
							<li><a href="#">การส่งสินค้า</a></li>
						</ul>
					</div>
					<div>
						<div class="email-subscribe">
							<label for="email_subscribe" class="title">รับโปรโมชั่นและดีลพิเศษก่อนใคร</label>
							<form>
								<div class="hp-field is-error">
									<div class="hp-input">
										<input id="email_subscribe" name="email_subscribe" placeholder="กรอกอีเมลของคุณ">
										<button class="hp-button">
											<i class="far fa fa-envelope"></i>
										</button>
									</div>
									<small>กรุณาระบุอีเมล</small>
								</div>
							</form>
						</div>

						<div class="social-channel">
							<h3 class="title">ติดตามเรา</h3>
							<ul class="socials">
								<li>
									<a href="#">
										<i class="fab fa-facebook-square fa-2x"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-instagram-square fa-2x"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-youtube-square fa-2x"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-twitter-square fa-2x"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="fab fa-line fa-2x"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="sub-footer">
				<div class="lo-container">
					<small>
						Copyright 2001-2020 Home Product Center Public Company Limited. All rights reserved.
					</small>
				</div>
			</div>
		</footer>
	`
})

