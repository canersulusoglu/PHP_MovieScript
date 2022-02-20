var base_url = window.location.protocol + "//" + window.location.hostname.split(3) + "/";

/* PreLoader */
$(window).on('load', function() { // makes sure the whole site is loaded 
	var status = $('#status');
	var preloader = $('#preloader');
	status.delay(1000).fadeOut(); // will first fade out the loading animation 
	preloader.delay(1000).fadeOut(); // will fade out the white DIV that covers the website. 
});

/* Sayfalama İşlemleri */
$("div#movie_paging").paging({
	number_of_items: 20,
	pagination_type: "full_numbers",
	number_of_page_buttons: 10,
	stealth_mode: false,
	theme: "light_connected", //default light_connected | takes: light_connected | light | blue | ""
	animate: true, //default true | takes: true | false
	onBeforeInit: function(instance, $el) {},
	onAfterInit: function(instance, $el) {},
	onBeforeEveryDraw: function(instance, $pager) {},
	onAfterEveryDraw: function(instance, $pager) {},
	onFirstPage: function(instance, $pager) {},
	onLastPage: function(instance, $pager) {}
});

$("div#favourite_movie_paging").paging({
	number_of_items: 6,
	pagination_type: "full_numbers",
	number_of_page_buttons: 3,
	stealth_mode: false,
	theme: "light_connected", //default light_connected | takes: light_connected | light | blue | ""
	animate: true, //default true | takes: true | false
	onBeforeInit: function(instance, $el) {},
	onAfterInit: function(instance, $el) {},
	onBeforeEveryDraw: function(instance, $pager) {},
	onAfterEveryDraw: function(instance, $pager) {},
	onFirstPage: function(instance, $pager) {},
	onLastPage: function(instance, $pager) {}
});

$("div#comment_paging").paging({
	number_of_items: 5,
	pagination_type: "full_numbers",
	number_of_page_buttons: 3,
	stealth_mode: false,
	theme: "light_connected", //default light_connected | takes: light_connected | light | blue | ""
	animate: true, //default true | takes: true | false
	onBeforeInit: function(instance, $el) {},
	onAfterInit: function(instance, $el) {},
	onBeforeEveryDraw: function(instance, $pager) {},
	onAfterEveryDraw: function(instance, $pager) {},
	onFirstPage: function(instance, $pager) {},
	onLastPage: function(instance, $pager) {}
});

/* Film ve Dizi Hover edilince ayrıntılar */
function movie_detail(movie_id){
	$.ajax({
		type:"POST",
		url: ''+base_url+'/Frontend_Operations/post/dizi',
		data: {movie_id:movie_id},
		success: function(data){
			Swal.fire({
			  showCloseButton: true,
			  showCancelButton: false,
			  buttonsStyling: false,
			  showConfirmButton: false,
			  background: '#1c1c1c',
			  width: '1000px',
			  html:
				''+data+'',
			});
		}
	});
}

function episode_detail(dizi_id, episode_id){
	$.ajax({
		type:"POST",
		url: ''+base_url+'/Frontend_Operations/post/episode',
		data: {dizi_id:dizi_id, episode_id:episode_id},
		success: function(data){
			Swal.fire({
			  showCloseButton: true,
			  showCancelButton: false,
			  buttonsStyling: false,
			  showConfirmButton: false,
			  background: '#1c1c1c',
			  width: '800px',
			  html:
				''+data+'',
			});
		}
	});
}

function film_detail(movie_id){
	$.ajax({
		type:"POST",
		url: ''+base_url+'/Frontend_Operations/post/film',
		data: {movie_id:movie_id},
		success: function(data){
			Swal.fire({
			  showCloseButton: true,
			  showCancelButton: false,
			  buttonsStyling: false,
			  showConfirmButton: false,
			  background: '#1c1c1c',
			  width: '1000px',
			  html:
				''+data+'',
			});
		}
	});
}


function success_message(message){
	Swal.fire({
	  showCloseButton: true,
	  showCancelButton: false,
	  showLoaderOnConfirm: false,
	  buttonsStyling: false,
	  showConfirmButton: false,
	  background: '#1c1c1c',
	  width: '400px',
	  title: '<div id="logo"><i style="color:#42e3d0;" class="fa fa-check-circle fa-5x"></a></div>',
	  html:
		'<p style="color:white;font-size:20px;">'+message+'</p>',
	});
};

function unsuccess_message(message){
	Swal.fire({
	  showCloseButton: true,
	  showCancelButton: false,
	  showLoaderOnConfirm: false,
	  buttonsStyling: false,
	  showConfirmButton: false,
	  background: '#1c1c1c',
	  width: '400px',
	  title: '<div id="logo"><i style="color:red;" class="fa fa-times-circle fa-5x"></a></div>',
	  html:
		'<p style="color:white;font-size:20px;">'+message+'</p>',
	});
};

/*
_______________________________________________________________________________________________________
_______________________________________ Form AJAX FONKSİYONLARI _______________________________________
_______________________________________________________________________________________________________
 */

/* Login Register Ajax */

var loginBtn = $(".loginbtn");
var registerBtn = $(".registerbtn");

loginBtn.on('click', function(e){
	LoginModal();
});

registerBtn.on('click', function(e){
	RegisterModal();
});

function LoginModal(){
	Swal.fire({
	  showCloseButton: true,
	  showCancelButton: false,
	  showLoaderOnConfirm: true,
	  buttonsStyling: false,
	  showConfirmButton: true,
	  confirmButtonClass: 'login-submit-button',
	  confirmButtonText: 'Giriş Yap',
	  focusConfirm: false,
	  background: '#1c1c1c',
	  width: '450px',
	  title: '<div id="logo"><a></a></div>',
	  html:
		'<div class="login-content">' +
		'<a type="button" href="'+base_url+'Facebook" class="facebook-button"><i class="ion-social-facebook"></i>Facebook ile Giriş Yap</a>' +
		'<p>VEYA</p>' +

		'<div class="row">' +
			'<input id="login-email" type="email" placeholder="E-Mail" required>' +
		'</div>' +
		'<div class="row">' +
			'<input id="login-password" type="password" placeholder="Şifre" required>' +
		'</div>' +
		'<p><a onclick="ForgotPasswordModal()">Şifremi Unuttum!</a></p>' +

		'<p>Hesabınız yok mu ? <a onclick="RegisterModal()">Hemen Kayıt Olun!</a></p>'+
		'</div>' ,
		preConfirm:t=>
		{
			return $.ajax({
				type:"POST",
				url: ''+base_url+'/Member_Operations/login',
				data: {email: $("#login-email").val(), password: $("#login-password").val()},
				success:function(t){
					if(t != true){
						var errors = t.split('<p>');
						if(errors.length >= 3){
							Swal.showValidationMessage('Alanlar boş bırakılamaz.');
						}else{
							Swal.showValidationMessage(t);
						}
					}
				}
			})

		},
		allowOutsideClick: true
		}).then(function(data) {
			if (data.value) {
				$.ajax({
					type: "POST",
					url: ''+base_url+'/Member_Operations/login',
					data: {email: $("#login-email").val(), password: $("#login-password").val()},
					success: function(loginpostdata){
						if(loginpostdata == true){
							window.location.reload(true);
						}else{
							alert('Hata!!! Giriş Başarısız!');
						}
					}
				});
			}
		});
	$('#login-email, #login-password').on("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".swal2-confirm").click();
	  }
	});
};

function RegisterModal(){
	Swal.fire({
	  showCloseButton: true,
	  showCancelButton: false,
	  showLoaderOnConfirm: true,
	  buttonsStyling: false,
	  showConfirmButton: true,
	  confirmButtonClass: 'login-submit-button',
	  confirmButtonText: 'Kayıt Ol',
	  focusConfirm: false,
	  background: '#1c1c1c',
	  width: '550px',
	  title: '<div id="logo"><a></a></div>',
	  html:
		'<div class="login-content">' +
		'<label>Kayıt Ol</label>' +
		'<div class="row">' +
			'<input id="register-nickname" type="text" placeholder="Kullanıcı Adı" required>' +
		'</div>' +
		'<div class="row">' +
			'<input id="register-email" type="email" placeholder="E-Mail Adresi" required>' +
		'</div>' +
		'<div class="row">' +
			'<input id="register-password" type="password" placeholder="Şifre" required>' +
		'</div>' +
		'<div class="row">' +
			'<input id="register-re-password" type="password" placeholder="Şifre (Tekrar)" required>' +
		'</div>' +
		'<p>Hesabınız zaten var mı ? <a onclick="LoginModal()">Giriş Yapın!</a></p>' +
		'</div>' ,
		preConfirm:t=>
		{
			return $.ajax({
				type:"POST",
				url: ''+base_url+'/Member_Operations/register',
				data:
				{
					nickname: $("#register-nickname").val(),
					email: $("#register-email").val(),
					password: $("#register-password").val(),
					re_password: $("#register-re-password").val()
				},
				success:function(t){
					if(t != true){
						Swal.showValidationMessage(t);
					}
				}
			})

		},
		allowOutsideClick: true
		}).then(function(data) {
			if (data.value) {
				$.ajax({
					type: "POST",
					url: ''+base_url+'/Member_Operations/register',
					data:
					{
						nickname: $("#register-nickname").val(),
						email: $("#register-email").val(),
						password: $("#register-password").val(),
						re_password: $("#register-re-password").val()
					},
					success: function(e){
						if(e = true){
							Swal.fire({
							  showCloseButton: true,
							  showCancelButton: false,
							  showLoaderOnConfirm: false,
							  buttonsStyling: false,
							  showConfirmButton: false,
							  background: '#1c1c1c',
							  width: '450px',
							  title: '<div id="logo"><i style="color:#fff;" class="fa fa-check-circle fa-5x"></a></div>',
							  html:
								'<p style="color:white;font-size:20px;">Başarıyla Kayıt Oldunuz.</p>'+
								'<button class="login-submit-button" onclick="LoginModal()">Giriş Yapın!</button>',
							});
						}else{
							alert('Hata!!! Kayıt Başarısız!');
						}
					}
				});
			}
		});
	$('#register-nickname, #register-email, #register-password, #register-re-password').on("keyup", function(event) {
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		$(".swal2-confirm").click();
	  }
	});
};

function ForgotPasswordModal(){
	Swal.fire({
	  showCloseButton: true,
	  showCancelButton: false,
	  showConfirmButton: false,
	  background: '#1c1c1c',
	  width: '500px',
	  title: '<div id="logo"><a></a></div>',

	  html:
		'<div class="login-content">' +
		'<p>Şifrenizi mail adresinize yollayarak şifrenizi sıfırlayabilirsiniz.</p>' +
		'<form method="post" class="forgotpassword">' +
		'<div class="row">' +
			'<input type="email" name="email" placeholder="E-Mail Adresiniz" required>' +
		'</div>' +
		'<div class="row">' +
			'<button type="submit">Gönder</button' +
		'</div>' +
		'</form>' +
		'</div>' +
		'<p><a onclick="LoginModal()">Giriş Yapın!</a></p>',
	});
};

/*==============================
Profil Sayfası Ajax
==============================*/
$('form#profile-settings').on('submit',function (form)
{
	form.preventDefault();
	$.ajax({
		type: 'POST',
		url: ''+base_url+'Profile_Operations/profile_update1',
		data: $('form#profile-settings input').serialize(),
		success: function(e){
			if(e == true){
			  success_message('Başarıyla kişisel bilgilerinizi güncellediniz.');
			}else{
			  unsuccess_message(e);
			}
		}
	});
});

$('form#social-network').on('submit',function (form)
{
	form.preventDefault();
	$.ajax({
		type: 'POST',
		url: ''+base_url+'Profile_Operations/profile_update2',
		data: $('form#social-network input').serialize(),
		success: function(e){
			if(e == true){
			  success_message('Başarıyla sosyal medya bilgilerinizi güncellediniz.');
			}else{
			  unsuccess_message(e);
			}
		}
	});
});

$('form#change-password').on('submit',function (form)
{
	form.preventDefault();
	$.ajax({
		type: 'POST',
		url: ''+base_url+'Profile_Operations/profile_update3',
		data: $('form#change-password input').serialize(),
		success: function(e){
			if(e == true){
			  success_message('Başarıyla şifrenizi değiştirdiniz.');
			}else{
			  unsuccess_message(e);
			}
		}
	});
});

$("#change_avatar").on('change',function(e){
	$.ajax({
		 url:''+base_url+'Profile_Operations/change_avatar',
		 type:"post",
		 data: new FormData(this),
		 processData:false,
		 contentType:false,
		 cache:false,
		 async:false,
		  success: function(data){
			  if(data == true){
				success_message('Başarıyla profil resminizi değiştirdiniz.');
			  }else{
				unsuccess_message(data);
			  }
	   }
	});

});

/*==============================
Favorilere Ekleme Çıkarma Ajax
==============================*/
function add_favourite(uye_id, movie_id, favourite_type){
	$.ajax({
		type: "POST",
		url: ''+base_url+'Member_Operations/add_favourites',
		data: {uye_id: uye_id, movie_id: movie_id, favourite_type: favourite_type},
		success: function(e){
			if(e == true){
				success_message('Yapım favorilerinizi eklendi.');
				$('a#add_favourite').hide();
				$('a#remove_favourite').show();
			}else{
				unsuccess_message('Bir hata meydana geldi.Daha sonra tekrar deneyin.');
			}
		}
	});
};
function remove_favourite(uye_id, movie_id, favourite_type){
	$.ajax({
		type: "POST",
		url: ''+base_url+'Member_Operations/remove_favourites',
		data: {uye_id: uye_id, movie_id: movie_id, favourite_type: favourite_type},
		success: function(e){
		  if(e== true){
			success_message('Yapım favorilerinizden çıkartıldı.');
            $('a#add_favourite').show();
            $('a#remove_favourite').hide();
		  }else{
			unsuccess_message('Bir hata meydana geldi.Daha sonra tekrar deneyin.');
		  }
		}
	});
};

/*==============================
Yorum Yazma Ajax
==============================*/
$("#add_comment #comment").emojioneArea({
	saveEmojisAs: "shortname",
	searchPlaceholder: "Emoji Ara",
	buttonTitle: "Yorumunuza emoji ekleyin.",
	pickerPosition: "bottom",
	filtersPosition: "top",
	searchPosition: "bottom",	
});

$(".emoji_comment").each(function(index, element) {
  $(this).html(emojione.toImage($(this).text()));
});

$('form#add_comment').on('submit', function(form){
	form.preventDefault()
	$.ajax({
		type: "POST",
		url: ''+base_url+'Member_Operations/add_comment',
		data: $('form#add_comment input, textarea').serialize(),
		success: function(e){
		  if(e == true){
			success_message('Yorumunuz başarıyla yapıldı.Yetkililer tarafından onaylanınca sayfada gözükecektir.');
		  }else{
			unsuccess_message('Bir hata meydana geldi.Daha sonra tekrar deneyin.');
		  }
		}
	});
});


/*==============================
Arama Fonksiyonu Ajax
==============================*/
function moviesearch(){
	var harf = $("input#searching").val();
	var postdata =
	{
		'harf' : harf,
	};

	if($.trim(harf).length <= 1){
		$("div#searchresult").hide();
	}else{

		$.ajax({
			type: "POST",
			url: base_url + 'Frontend_Operations/header_search',
			data: postdata,
			success: function(data){
				if(data.length > 0){
					$("div#searchresult").show();
					$("div#searchresult").html(data);

				};
			}
		});

	}

};

/*
_______________________________________________________________________________________________________
_______________________________________________________________________________________________________
_______________________________________________________________________________________________________
 */

/*==============================
Sezon Bölümleri Slider
==============================*/
$('.accordion').mCustomScrollbar({
	axis: "y",
	scrollbarPosition: "outside",
	theme: "custom-bar2"
});
/*==============================
Film ve Dizi Site Puanı
==============================*/
$("#movie_rating").rateYo({
  readOnly: false,
  numStars: 10,
  starWidth: "25px",
  precision: 1,
  minValue: 0,
  maxValue: 10,
  spacing: "0px",
  multiColor: {
	"startColor": "#ff3838", //RED
	"endColor"  : "#fff200"  //GREEN
  },
  onChange: function (rating, rateYoInstance)
  {
	$(this).next().text(rating);
  },
  onSet: function (rating, rateYoInstance)
  {
	$(this).next().next().val(rating);
  }

});
$("#sitepuanı").rateYo({
  readOnly: true,
  numStars: 10,
  starWidth: "30px",
  precision: 1,
  minValue: 0,
  maxValue: 10,
  spacing: "0px",
  multiColor: {
	"startColor": "#ff3838", //RED
	"endColor"  : "#fff200"  //GREEN
  },
});
/*==============================
Range Slider
==============================*/
$("#years, #years2").slider({});
$("#years, #years2").on("slide", function(slideEvt) {
	$("#yearsSliderVal1, #years2SliderVal1").text(slideEvt.value[0]);
	$("#yearsSliderVal2, #years2SliderVal2").text(slideEvt.value[1]);
});
$("#imdb, #imdb2").slider({});
$("#imdb, #imdb2").on("slide", function(slideEvt) {
	$("#imdbSliderVal1, #imdb2SliderVal1").text(slideEvt.value[0]);
	$("#imdbSliderVal2, #imdb2SliderVal2").text(slideEvt.value[1]);
});


$('#movie_filter_film').hide();
$('#movie_filter_dizi').hide();

$('button#movie_type1, button#movie_type2').on('click', function(e){
	var filter_type = $(this).val();
	$(this).addClass('active');
	
	if(filter_type == "film"){
		$('button#movie_type2').removeClass('active');
		$('#movie_filter_film').show();
		$('#movie_filter_dizi').hide();
		
		$('#movie_filter_film input').on('change', function(e){
			e.preventDefault();			
			$.ajax({
				type:"POST",
				url: ''+base_url+'/Frontend_Operations/post/filter',
				data: $('#movie_filter_film').serialize(),
				success: function(data){
					$('div#filter-result').html(data);
				}
			});
		});
		
	}else if(filter_type == "dizi"){
		$('button#movie_type1').removeClass('active');
		$('#movie_filter_dizi').show();
		$('#movie_filter_film').hide();
		
		$('#movie_filter_dizi input').on('change', function(e){
			e.preventDefault();			
			$.ajax({
				type:"POST",
				url: ''+base_url+'/Frontend_Operations/post/filter',
				data: $('#movie_filter_dizi').serialize(),
				success: function(data){
					$('div#filter-result').html(data);
				}
			});
		});		
		
	}else{
		alert('Hata');
	}
});


/*==============================
Spoiler Gösterme Butonu
==============================*/
function show_spoiler(yorum_id){
	$("#spomesaj"+ yorum_id +"").hide();
	$("#yorum"+ yorum_id +"").removeClass("spoiler");
};
function show_spoiler2(yorum_id){
	$("#sonspomesaj"+ yorum_id +"").hide();
	$("#sonyorum"+ yorum_id +"").removeClass("spoiler");
};
/*==============================
Video Player
==============================*/
function initializePlayer(kaynak_info) {
	var kaynak_info1 = JSON.stringify(kaynak_info);
	var kaynak_info2 = kaynak_info1.substring(1, kaynak_info1.length - 1).substring(0, kaynak_info1.length - 2);
	var kaynak_info3 = kaynak_info2.split(',');
	
	var movie_type = kaynak_info3[0];
	var movie_id = kaynak_info3[1];
	var source_type = kaynak_info3[2];
	var source_name = kaynak_info3[3];	
	$.ajax({
		type:"POST",
		url: ''+base_url+'Frontend_Operations/post/kaynak',
		data: {movie_type:movie_type, movie_id:movie_id, source_type:source_type, source_name:source_name},
		datatype: "json",
		success: function(data){			
			var object = JSON.parse(data);
			if(object.length == 1){
				jwplayer("player").setup({			
					sources: [			
						{
						  file: object[0]['kaynak_url'],
						  label: object[0]['kaynak_kalite']+'p',
						},									
					],
					"image": movie_kapak_image,
					"description": movie_describe,
					"title": movie_name,
				});			
			}else if(object.length == 2){
				jwplayer("player").setup({			
					sources: [
						{
						  file: object[0]['kaynak_url'],
						  label: object[0]['kaynak_kalite']+'p',
						},
						{
						  file: object[1]['kaynak_url'],
						  label: object[1]['kaynak_kalite']+'p',
						},					
					],
					"image": movie_kapak_image,
					"description": movie_describe,
					"title": movie_name,
				});			
				
			}else if(object.length == 3){
				jwplayer("player").setup({			
					sources: [			
						{
						  file: object[0]['kaynak_url'],
						  label: object[0]['kaynak_kalite']+'p',
						},
						{
						  file: object[1]['kaynak_url'],
						  label: object[1]['kaynak_kalite']+'p',
						},	
						{
						  file: object[2]['kaynak_url'],
						  label: object[2]['kaynak_kalite']+'p',
						},									
					],
					"image": movie_kapak_image,
					"description": movie_describe,
					"title": movie_name,
				});			
				
			}else if(object.length == 4){
				jwplayer("player").setup({			
					sources: [			

						{
						  file: object[0]['kaynak_url'],
						  label: object[0]['kaynak_kalite']+'p',
						},
						{
						  file: object[1]['kaynak_url'],
						  label: object[1]['kaynak_kalite']+'p',
						},	
						{
						  file: object[2]['kaynak_url'],
						  label: object[2]['kaynak_kalite']+'p',
						},
						{
						  file: object[3]['kaynak_url'],
						  label: object[3]['kaynak_kalite']+'p',
						},					
						
					],
					"image": movie_kapak_image,
					"description": movie_describe,
					"title": movie_name,
				});			
			}else{
				alert('Video Player Hatası!');
			}
			
		}
	});
	
};		

$('ul#sources').hide();
var SourcetabsClick = $('.source_tabs .source_tabs_links a');

SourcetabsClick.on('click', function(e)  {
	$("ul#sources").show();
	var SourcecurrentAttrValue = $(this).attr('href');
	var SourcetabsCurrent = $('.source_tabs ' + SourcecurrentAttrValue);
	// Show/Hide Tabs
	SourcetabsCurrent.show().siblings().hide();
	// Change/remove current tab to active
	$(this).parent('li').addClass('active').siblings().removeClass('active');
	e.preventDefault();
});

$("ul#sources li").click(function(e){
	var index = $(this).index();
	$("ul#sources li").removeClass("active");
	$(this).addClass("active");
	return false;
});


//js for tabs
	var tabsClick = $('.tabs .tab-links a, .tab-links-2 a, .tab-links-3 a');
	var Movie_Slider = $('.slick-multiItem2');
	var Episode_Slider = $('ul#episode_slider');
	tabsClick.on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');
		var tabsCurrent = $('.tabs ' + currentAttrValue);
		// Show/Hide Tabs
		tabsCurrent.show().siblings().hide();
		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
		//reset position for tabs
		Movie_Slider.slick('setPosition');
		Episode_Slider.slick('setPosition');
	});

/* Left-Menu Toggle */
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});

	$(function(){
		// this will get the full URL at the address bar
		var url = window.location.href;

		// passes on every "a" tag
		$(".sidebar-nav li a").each(function() {
				// checks if its the same on the address bar
			if(url == (this.href)) {
				$(this).closest("li").addClass("active");
			}
		});
	});

/* Movie Sliders */
	Movie_Slider.slick({
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		centerMode: false,
		responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	      }
	    },
	    {
	      breakpoint: 1100,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	Episode_Slider.slick({
	  centerMode: false,
	  slidesToShow: 4,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  dots: true,
	  infinite: false,
	  responsive: [
		{
		  breakpoint: 1300,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 1100,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 920,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ]
	});

	var Top_10 = $("ul#top_10");
	Top_10.slick({
		centerMode: false,
		slidesToShow: 4,
		autoplay: true,
		dots: true,
		infinite: true,
		responsive: [
		  {
			breakpoint: 1300,
			settings: {
			  slidesToShow: 4,
			}
		  },
		  {
			breakpoint: 1100,
			settings: {
			  slidesToShow: 3,
			}
		  },
		  {
			breakpoint: 920,
			settings: {
			  slidesToShow: 2,
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			}
		  }
		]
	  });

	//== js for video lightbox
	var fancyboxmedia = $('.fancybox-media');
	fancyboxmedia.fancybox({
		openEffect  : 'float',
		closeEffect : 'none',
		helpers : {
			media : {},
			overlay: {
		        locked: false
		    }
		}
	});
	//==js for show prev/next button in video lightbox
	fancyboxmedia
	    .attr('rel', 'playlist')
	    .fancybox({
	    openEffect: 'none',
	    closeEffect: 'none',
	    prevEffect: 'none',
	    nextEffect: 'none',
	    helpers: {
	        media: {}
	    },
	    youtube: {
	        autoplay: 1,
	        hd: 1,
	        wmode: 'opaque', // shows X to close
	        vq: 'hd720' // default 720p hd quality
	    }
	});
	//== js for image lightbox
	var imglightbox = $(".img-lightbox");
	imglightbox.fancybox({
		helpers: {
			title : {
				type : 'float'
			},
			overlay: {
				locked: false
			}
		}
	});
	//== js for visibile next/prev fancybox
	imglightbox.fancybox({
        // loop: false, // gallery may not be cyclic
        afterShow: function () {
            // initialize some variables
            var gallerySize = this.group.length,
                next, prev;
            if (this.index == gallerySize - 1) {
                // this is the last element of the gallery so next is the first
                next = imglightbox.eq(0).attr("title"),
                prev = imglightbox.eq(this.index - 1).attr("title");
            } else if (this.index == 0) {
                // this is the first image of the gallery so prev is the last
                next = imglightbox.eq(this.index + 1).attr("title"),
                prev = imglightbox.eq(gallerySize - 1).attr("title");
            } else {
                // otherwise just add or substract to index
                next = imglightbox.eq(this.index + 1).attr("title"),
                prev = imglightbox.eq(this.index - 1).attr("title");
            }
            // set title attributes to img-lightbox next/prev selectors
            var lightboxnext = $(".img-lightbox-next");
            var lightboxprev = $(".img-lightbox-prev");
            lightboxnext.attr("title", next);
            lightboxprev.attr("title", prev);
        }
    });
