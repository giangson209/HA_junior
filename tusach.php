<?php include 'header.php';?>
<main>
	<section class="box-breadcrumbs">
		<div class="container">
			<div class="cap-bread text-center">
				<h2>Tủ sách cho trẻ</h2>
				<ul>
					<li><a href="">Trang chủ</a></li>
					<li><a href="">Tủ sách cho trẻ</a></li>
				</ul> 
			</div>
		</div>
	</section>
	<section class="box-schedule">
		<div class="container">
			<div class="shedule-hot">
				<div class="row align-items-center">
					<div class="col-md-7">
						<div class="avarta"><a href="tusach-detail.php"><img src="images/biquyet-big.png" class="img-fluid" alt=""></a></div>
					</div>
					<div class="col-md-5">
						<div class="info">
							<div class="time">Cập nhật 3 giờ trước</div>
							<h2><a href="tusach-detail.php">File PDF Sách “Học nhanh Ngữ pháp tiếng Anh từ A-Z”</a></h2>
							<div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id enim, a, risus molestie arcu dignissim aenean. Morbi sollicitudin at eleifend quis a enim scelerisque.</div>
							<div class="view-detail-big"><a href="tusach-detail.php">Chi tiết<img src="images/arrow-right-dark.svg" class="img-fluid" alt=""></a></div>
						</div>
					</div>
				</div>
			</div>
			<div class="list-secret">
				<div class="row">
					<?php
                    for ($x = 1; $x <= 12; $x++) { ?>
                        <div class="col-md-4">
							<div class="item-book">
								<div class="avarta"><a href="tusach-detail.php" tabindex="0"><img src="images/bq-1.png" class="img-fluid w-100" alt=""></a></div>
								<div class="info">
									<h3><a href="tusach-detail.php" tabindex="0">File PDF Sách “Học nhanh Ngữ pháp tiếng Anh từ A-Z”</a></h3>
									<p><span>Tủ sách cho trẻ</span><label>3 giờ trước</label></p>
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





