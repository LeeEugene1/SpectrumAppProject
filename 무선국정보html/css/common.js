$(document).ready(function() {
	
	$(".popcont, .pop_layout03 .content").attr("tabindex","0");//레이어팝업 초점이동
	
	$('#gnb > li > a').mouseover(function(e){
		$("#gnbmenu .submenu").hide();
		$(this).parent().find(".submenu").show();
		$("#gnbmenu .submenuBack").show();
	});
	$('#gnb > li > a').focus(function(e){
		$(this).parent().find(".submenu").show();
		$("#gnbmenu .submenuBack").show();
	});
	$('#gnbmenu .submenu').mouseover(function(e){
		$(this).parent().find(".submenu").show();
		$("#gnbmenu .submenuBack").show();
	});
	$('#gnb > li > a').mouseout(function(e){
		if (e.clientY <= 35 || (e.clientY < 112 && ($($(this).parent()[0]).is(".subt1,.subt6")))) {
			$("#gnbmenu .submenu").hide();
			$("#gnbmenu .submenuBack").hide();
		}
	});
	$('#gnbmenu .submenu').mouseout(function(e){
		$("#gnbmenu .submenu").hide();
		$("#gnbmenu .submenuBack").hide();
	});

	$('.map_search .mapsearch_close').click(function(e){
		$(".map_search").toggleClass('hide');
		$(".map_search .mapsearch_close").toggleClass('open');
		$("#side_dvstatus").removeClass('show');
		$("#side_dvstatus .dvstatus_close").removeClass('open');
		return false;
	});

	$('.map_search_r .mapsearch_close').click(function(e){
		$(".map_search_r").toggleClass('hide');
		$(".map_search_r .mapsearch_close").toggleClass('open');
		return false;
	});

	$('.map_search_bf .mapsearch_close').click(function(e){
		$(".map_search_bf").toggleClass('hide');
		$(".map_search_bf .mapsearch_close").toggleClass('open');
		return false;
	});

	$('.map_search_bf_r .mapsearch_close').click(function(e){
		$(".map_search_bf_r").toggleClass('hide');
		$(".map_search_bf_r .mapsearch_close").toggleClass('open');
		return false;
	});


	$('.side_dvstinfo .dvstatus_close').click(function(e){
		$(".side_dvstinfo").toggleClass('show');
		$(".side_dvstinfo .dvstatus_close").toggleClass('open');
		return false;
	});

	/* 2018-07-02 */
	$('.side_dvstinfo .flclose a').click(function(e){
		$(".side_dvstinfo").toggleClass('cshow');
		$(".side_dvstinfo .flclose a").toggleClass('open');
		return false;
	});

	$('header .hdsearch dt a').focus(function(e){
		$("#gnbmenu .submenu").hide();
		$("#gnbmenu .submenuBack").hide();
		return false;
	});

	$('header .hdsearch dt a').click(function(e){
		$("header .hdsearch dd").show();
		$("#gnbmenu").hide();
		return false;
	});

	$('header .hdsearch .srhclose').click(function(e){
		$("header .hdsearch dd").hide();
		$("#gnbmenu").show();
		return false;
	});

	$('.bottom_lay .bottom_close').click(function(e){
		$(".bottom_lay").toggleClass('show');
		$(".bottom_lay .bottom_close").toggleClass('open');
	});
/*
	$('#quick ul > li').mouseover(function(e){
		$(this).find("dd").show();
	});
	$('#quick ul > li').mouseout(function(e){
		$(this).find("dd").hide();
	});
*/
	$('#quick ul > li a').bind('mouseover focusin',function (){
		$(this).parents('li').find('dd').show();
	});
	$('#quick ul > li a').bind('mouseout focusout',function (){
		$(this).parents('li').find('dd').hide();
	});

	$('.familySite dt').click(function(e){
		$(this).toggleClass('on');
		$('.familySite dd').toggleClass('on');
		return false;
	});

	var chkmapSearch = 0;
	$('#side_dvstatus .dvstatus_close').click(function(e){
		$("#side_dvstatus").toggleClass('show');
		$("#side_dvstatus .dvstatus_close").toggleClass('open');
		if($("#side_dvstatus").hasClass("show")){
			$(".map_search").addClass('hide');
			$(".map_search .mapsearch_close").addClass('open');
		}else{
			$(".map_search").removeClass('hide');
			$(".map_search .mapsearch_close").removeClass('open');
		}
	});

	//리스트 헤더 정렬 기능 부여
	$.fn.extend({
		classArrowUpNm : 'arrow_up',
		classArrowDownNm : 'arrow_down',
		classActive : 'on',
		colKey : 'colname',
		enableHeaderSort : function(callback){

			var _self = this;
			var spanArrowUp = $('<span class="' + this.classArrowUpNm + '">&nbsp;</span>').hide();
			var spanArrowDown = $('<span class="' + this.classArrowDownNm + '">&nbsp;</span>').hide();
//			var clickedObj = null;

			spanArrowUp.on('click', function(){
				clickHanlder($(this), callback, 'ASC');
			}).css('cursor', 'pointer');

			spanArrowDown.on('click', function(){
				clickHanlder($(this), callback, 'DESC');
			}).css('cursor', 'pointer');

			this.children().append(spanArrowUp).append(spanArrowDown);

			//마우스 오버시 정렬 아이콘 나타내기
			this.children('[' + _self.colKey + ']').on('mouseenter', function(){
				if(_self.parent().parent().find('tbody tr').length < 2) return;		//테이블에 표현된 데이터가 2행 미만 인 경우 return
				$(this).find('.' + _self.classArrowUpNm).show();
				$(this).find('.' + _self.classArrowDownNm).show();
			}).on('mouseleave', function(){
				if(_self.parent().parent().find('tbody tr').length < 2) return;
				$(this).find('.' + _self.classArrowUpNm).not('.' + _self.classActive).hide();
				$(this).find('.' + _self.classArrowDownNm).not('.' + _self.classActive).hide();
			});

			function clickHanlder(obj, callback, direction){
				if(obj.hasClass(_self.classActive)) return;			//이미 정렬 된 경우 return

				if(typeof this.clickedObj != 'undefined') this.clickedObj.removeClass(_self.classActive).hide();
				this.clickedObj = obj;
				obj.addClass(_self.classActive);
				callback.call(this, obj.parent('th').attr(_self.colKey), direction);
			}
		},
		//고정된 화살표 리셋(데이터 갱신용)
		arrowReset : function(){
			this.children().find('.' + this.classArrowUpNm).removeClass(this.classActive).hide();
			this.children().find('.' + this.classArrowDownNm).removeClass(this.classActive).hide();
		},
		//현재 정렬 된 상태 컬럼명, 정렬기준 리턴
		getStatus : function(extendObj){
			var spanObj = this.children().find('.' + this.classActive);
			var sortField = spanObj.parent().attr(this.colKey);
			var direction = (spanObj.hasClass(this.classArrowUpNm) ? 'ASC' : 'DESC');

			if(typeof extendObj == 'object' && (typeof sortField != 'undefined')) $.extend(extendObj, {sortField : sortField, direction : direction});
			return {sortField : sortField, direction : direction};
		}
	});

	$('#bottom_tab a').click(function(e){
		var tab_id = $(this).attr('href');
		$('#bottom_tab a').removeClass('active');
		$(this).addClass('active');
		$('.tbltab').hide();
		$('div' + tab_id + '-tab').show();
		var bottomhg = $('div#conts1-tab').height() + 100;
		var bottomh = $('div#conts1-tab').height() + 169;
		$('#bottom_lay').css("min-height",bottomh+"px");
		$('#bottom_lay .gridHeight2').css("height",bottomhg+"px");
	});

	$('#infodiv a').click(function(e){
		var tab_id = $(this).attr('href');
		$('#infodiv a').removeClass('active');
		$(this).addClass('active');
		$('.divcomt').hide();
		$('div' + tab_id).show();
		return false;
	});


	$('.brdfaqList .showtbl').click(function(e){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).parent().parent().next("tr").addClass("off");
		}else{
			$(this).addClass('active');
			$(this).parent().parent().next("tr").removeClass("off");
		}

		return false;
	});

	$('.faqTblList td a').click(function(e){
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().parent().next("tr").addClass("off");
		}else{
			$(this).parent().addClass('active');
			$(this).parent().parent().next("tr").removeClass("off");
		}

		return false;
	});

	$('.sfaqTbl dt a').click(function(e){
		$('.sfaqTbl dt').removeClass('active');
		$('.sfaqTbl dd').removeClass("on");

		$(this).parent().addClass('active');
		$(this).parent().parent().find("dd").addClass("on");
		return false;
	});

	$('.dic_select_key ul li a').click(function(e){
		$('.dic_select_key ul li').find("a").removeClass("active");
		$(this).addClass("active");
	});

	$('.imgpop .popclose').click(function(e){
		$('.imgpop').hide();
		$('.back').hide();
		$(".mask").remove();
	});
	// 무선국 종합분석
	$('.imgpop2 .popclose').click(function(e){
		$('.imgpop2').hide();
		$('.back').hide();
	});

	/* 2018-07-19 */
	$('.locaition > dl > dt a').click(function(e){
		$(this).parent().parent().find("dd").toggle();
		$(this).parent().toggleClass("on");
		return false;
	});

	/*$('.ftlink li a').click(function(e){
		var tab_id = $(this).attr('href');
		$('div' + tab_id).show();
		$('.back').show();
		return false;
	});*/

	$('.ftlink li a').click(function(e){
		var tab_id = $(this).attr('href');
		$('.contlyr').hide();
		$('div' + tab_id).show();
		$('.back').show();
	});
	$('.contlyr .popclose').click(function(e){
		$('.contlyr').hide();
		$('.back').hide();
	});

	$('.util a.showsitem').click(function(e){
		$('#sitemappop').show();
		$('.back').show();
	});
	/* 2018-07-12 */


	/* 2018-10-29 */
	//tabMenu
	$(".tab_content").hide();
	$(".tab_list li:first").addClass("active").show();
	$(".tab_content:first").show();

	//On Click Event
	$(".tab_list li").click(function() {
		$(".tab_list li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide().removeAttr("tabindex");
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show().attr("tabindex","0");
		return false;
	});

	/*2019-02-18*/
	//통계 화면 년도별 월별 조회 변경
	$("input:radio[name=chkBase]").click(function(){
		if($("input:radio[name=chkBase]:checked").val()=='Y'){
			$(".selYear").show();
			$(".selMonth").hide();
		}else{
			$(".selYear").hide();
			$(".selMonth").show();
		}
	})

});

var currentScrollHeader = 50;
var currentScrollTab = 50;
window.onload = function() {
	hd_scrollController();
	tab_scrollController();

    $(window).on('scroll', function() {
		hd_scrollController();
		tab_scrollController();
    });
}


function hd_scrollController() {
	currentScrollTop = $(window).scrollTop();
	//스크롤이 210이상이라서 헤더가 픽스되면 스크롤이 자동으로 210이하로 변해서 다시 헤더에 픽스를 제거하는게 무한반복되서 픽스된상태에서는 스크롤값을 더 작게 수정
	if($('header').hasClass('fixed')){
		if (currentScrollTop < 100){
			if ($('header').hasClass('fixed')) {
				$('header').removeClass('fixed');
			}
		} else {
			if (!$('header').hasClass('fixed')) {
				$('header').addClass('fixed');
			}
		}
	}else{
		if (currentScrollTop < 210) {
			if ($('header').hasClass('fixed')) {
				$('header').removeClass('fixed');
			}
		} else {
			if (!$('header').hasClass('fixed')) {
				$('header').addClass('fixed');
			}
		}
	}
	
}

function tab_scrollController() {
	currentScrollTab = $(window).scrollTop();
	if (currentScrollTab < 210) {
		if ($('.rndTab').hasClass('fixed')) {
			$('.rndTab').removeClass('fixed');
		}
	} else {
		if (!$('.rndTab').hasClass('fixed')) {
			$('.rndTab').addClass('fixed');
		}
	}
}


$.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
    return this;
}

// 차트 라벨 세로로 출력
function labelFunc(id, value) {
	var str = value;
	var len = str.length;
	var filterStr="";

	for( var i=0; i < len ; i++) {
		filterStr += str.substring(i,i+1)+"\n";
	}
	return filterStr;
}



//일상속의 전파정보
function initEvent06() {
	alert();
	//$(".infor_inner li").on("click", clickTabHandler06);
	$(".wifiwrap .list ul li").on("click", clickTabHandler06);
}

function initSetting06() {
	alert('initSetting06');
	activateTab06($(".infor_inner li").eq(0));
}

function clickTabHandler06() {
	activateTab06($(this));
}

function activateTab06($element) {
	if ($current_item06) {
		$current_item06.removeClass("on");
	}
	$current_item06 = $element;
	$current_item06.addClass("on");
	var n = $current_item06.index();

	activateContent06(n);
}

function activateContent06(n) {
	if ($current_content06) {
		$current_content06.removeClass("on");
	}

	$current_content06 = $(".stt_content article").eq(n);
	$current_content06.addClass("on");
}

/**
 * 쿠키 값 가져오기
 * @param name
 * @return
 */
function getCookie(name) {
    var re = new RegExp('(\\b|\\s)' + name + '=([^;]*)');
    if (document.cookie.search(re) >= 0)
        return unescape(RegExp.$2);

    return null;
}

/**
 * 쿠키 값 설정하기
 * @param name
 * @param value
 * @param validDays
 * @return
 */
function setCookie(name, value, validDays) {
    var today = new Date();
    today.setDate(today.getDate() + validDays);
    document.cookie = name + '=' + escape(value) + '; path=/' + (validDays > 0 ? '; expires=' + today.toGMTString() : '');
}




$(document).ready(function() {

	$('.hmenu_total a').click(function() {
		$('body').addClass("fixed");
		$('#totalMenu').removeClass("fixed").show();
		anioption = {
			time: 0.8,
			easing: 'easeOutCubic'
		};
		$('#totalMenu').animate({
			"right": "0"
		}, anioption);
		$('.overlay').fadeIn();

	});

	$('#totalHeadClose').click(function() {
		anioption = {
			time: 0.6,
			easing: 'easeOutCubic'
		};
		$('#totalMenu').animate({
			"right": "-100%"
		}, anioption);
		$('#totalMenu').addClass("fixed").hide(0.8);
		$('body').removeClass("fixed");
		$('.overlay').fadeOut();
	});

	$('.overlay').click(function() {
		anioption = {
			time: 0.6,
			easing: 'easeOutCubic'
		};
		$('#totalMenu').animate({
			"right": "-100%"
		}, anioption);
		$('#totalMenu').addClass("fixed").hide(0.8);
		$('body').removeClass("fixed");
		$('.overlay').fadeOut();
	});


	$("#totalNav .nav_btn").click(function() {
		$(this).toggleClass("active");
		$(this).next(".depth2").slideToggle(200);
		return false;
	});

	$("#totalNav .depth2 > li > a").click(function() {
		$(this).toggleClass("active");
		$(this).next(".depth3").slideToggle(200);
		return false;
	});

});

//20181104 추가
//레이어팝업 열기
function layerClickOpen(popID, tt){
	//alert(popID +"  " + tt);
	$("#gnbmenu .submenu").hide();
	$("#gnbmenu .submenuBack").hide();
	$(window).scrollTop(0);
	$("body").addClass("layerOpen");
	$("#" +popID).show().focus();
	$("body").append("<div class='mask'></div>");
	$(tt).addClass("focusOn");
}

//레이어팝업 닫기
function layerClickClose(popID){
	//alert(popID);
	$("#" +popID).hide();
	$("body").removeClass("layerOpen");
	$(".mask").remove();
	$(".focusOn").focus().removeClass("focusOn");

}
