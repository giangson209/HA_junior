<?php include 'header.php';?>
<main>
	<section class="box-breadcrumbs">
		<div class="container">
			<div class="cap-bread text-center">
				<h2>Sự kiện</h2>
				<ul>
					<li><a href="">Trang chủ</a></li>
					<li><a href="">Sự kiện</a></li>
				</ul> 
			</div>
		</div>
	</section>
	<section class="box-schedule">
		<div class="container">
			<div class="shedule-hot">
				<div class="row align-items-center">
					<div class="col-md-7">
						<div class="avarta"><a href="event-detail.php"><img src="images/biquyet-big.png" class="img-fluid" alt=""></a></div>
					</div>
					<div class="col-md-5">
						<div class="info">
							<div class="time">Cập nhật 3 giờ trước</div>
							<h2><a href="event-detail.php">Tưng bừng Khai trương Cơ sở mới tại Từ Sơn - Bắc Ninh</a></h2>
							<div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id enim, a, risus molestie arcu dignissim aenean. Morbi sollicitudin at eleifend quis a enim scelerisque.</div>
							<div class="view-detail-big"><a href="event-detail.php">Chi tiết<img src="images/arrow-right-dark.svg" class="img-fluid" alt=""></a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="list-secret">
				<div class="row">
					<?php
                    for ($x = 1; $x <= 12; $x++) { ?>
                        <div class="col-lg-4 col-md-6 col-sm-6">
							<div class="item-book">
								<div class="avarta"><a href="event-detail.php" tabindex="0"><img src="images/bq-2.png" class="img-fluid w-100" alt=""></a></div>
								<div class="info">
									<h3><a href="event-detail.php" tabindex="0">Tưng bừng Khai trương Cơ sở mới tại Từ Sơn - Bắc Ninh</a></h3>
									<div class="desc">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id enim, a, risus molestie arcu dignissim aenean. Morbi sollicitudin at eleifend quis a enim scelerisque. Arcu amet nisi et consequat commodo nulla. Sem fames blandit suspendisse at orci dolor nam.
									</div>
									<p><span>Sự kiện</span><label>3 giờ trước</label></p>
								</div>
							</div>
						</div>
                    <?php }
                    ?> 
				</div>
			</div>

			<div class="pagination"> 
				<ul>
					<li><a href="" class="active">1</a></li>
					<li><a href="">2</a></li>
					<li><a href="">3</a></li>
					<li><a href="">4</a></li>
					<li><a href="">5</a></li>
				</ul>
			</div> 
		</div>
	</section>
</main>
<?php include 'footer.php';?>





