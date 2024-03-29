				<footer>
					<div class="row">
						<div class="flex-parent-ft">
							<div class="flex-child-ft item1">
								 <div id="logo"><a href="index.php"></a></div>
								 <p>5th Avenue st, manhattan<br>
								New York, NY 10001</p>
								<p>Call us: <a href="#">(+01) 202 342 6789</a></p>
							</div>
							<div class="flex-child-ft item2">
								<h4>Resources</h4>
								<ul>
									<li><a href="#">About</a></li> 
									<li><a href="#">Blockbuster</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Forums</a></li>
									<li><a href="#">Blog</a></li>
									<li><a href="#">Help Center</a></li>
								</ul>
							</div>
							<div class="flex-child-ft item3">
								<h4>Legal</h4>
								<ul>
									<li><a href="#">Terms of Use</a></li> 
									<li><a href="#">Privacy Policy</a></li>	
									<li><a href="#">Security</a></li>
								</ul>
							</div>
							<div class="flex-child-ft item4">
								<h4>Account</h4>
								<ul>
									<li><a href="#">My Account</a></li> 
									<li><a href="#">Watchlist</a></li>	
									<li><a href="#">Collections</a></li>
									<li><a href="#">User Guide</a></li>
								</ul>
							</div>
							<div class="flex-child-ft item5">
								<h4>Newsletter</h4>
								<p>Subscribe to our newsletter system now <br> to get latest news from us.</p>
								<form action="#">
									<input type="text" placeholder="Enter your email">
								</form>
								<a href="#" class="btn">Subscribe now <i class="ion-ios-arrow-forward"></i></a>
							</div>
						</div>
						<div class="ft-copyright">
							<div class="ft-left">
								<p>© 2017 Blockbuster. All Rights Reserved. Designed by leehari.</p>
							</div>
							<div class="backtotop">
								<p><a href="#" id="back-to-top">Back to top  <i class="fa fa-arrow-up"></i></a></p>
							</div>
						</div>
					</div>
				</footer>

			</div>
		</div>
    </div>

    <script src="<?php echo base_url('assets/frontend/js/jquery-3.2.1.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/bootstrap.bundle.min.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/jquery.mCustomScrollbar.min.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/plugins.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/jquery.rateyo.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/sweetalert2.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/grit/jquery.gritter.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/jw_player.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/paging.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/bootstrap-slider.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/emojione.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/emojionearea.js') ?>"></script>
	<script src="<?php echo base_url('assets/frontend/js/main.js') ?>"></script>
	<?php echo $this->session->flashdata('grit'); ?>	
</body>

</html>