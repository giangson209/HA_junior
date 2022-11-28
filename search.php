<?php include 'header.php';?>
<main>
	<section class="box-schedule">
		<div class="container">
			<div class="result-search">
				<h1>Kết quả tìm kiếm cho <span>“File PDF Sách”</span></h1>
				<div class="numb-result"><span>120</span> kết quả được tìm thấy</div>
			</div>
			<div class="list-secret">
				<div class="row">
					<?php
                    for ($x = 1; $x <= 12; $x++) { ?>
                        <div class="col-lg-4 col-md-6 col-sm-6">
							<div class="item-book">
								<div class="avarta"><a href="detail.php" tabindex="0"><img src="images/bq-1.png" class="img-fluid w-100" alt=""></a></div>
								<div class="info">
									<h3><a href="detail.php" tabindex="0">Tưng bừng Khai trương Cơ sở mới tại Từ Sơn - Bắc Ninh</a></h3>
									<div class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id enim, a, risus molestie arcu dignissim aenean. Morbi sollicitudin at eleifend quis a enim scelerisque. Arcu amet nisi et consequat commodo nulla. Sem fames blandit suspendisse at orci dolor nam.</div>
									<p><span>Tin tức</span><label>3 giờ trước</label></p>
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





