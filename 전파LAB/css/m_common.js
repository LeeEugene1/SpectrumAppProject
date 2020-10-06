var mfc_menuParser = new function(){
	var _self = this;
	this._jsonFile = '/mobile/js/menu_struct.jsn';
	this._menuObj = {};

	this.init = function(){
		this.readJsonFile();
	}

	/* 메뉴 셋팅 */
	this.setMenu = function(rawFile){
		var menuJson = rawFile.responseText;
		this._menuObj = JSON.parse(menuJson);

		if(typeof this._menuObj != 'undefined' && this._menuObj.children.length > 0){
			var topDisplayMenuCnt = 4; 		//상단 대메뉴 노출 수 = 4
			var topWidth = $('.top_menu').width();
			var topLiWidth = Math.floor((topWidth - topDisplayMenuCnt- 2) / topDisplayMenuCnt);

			$('#ul_menu_container').empty();
//			$('.top_menu>ul').empty();

			for(var i in this._menuObj.children){
				//1depth 메뉴 추가
				if(this._menuObj.children[i].isRender == 'Y' && this._menuObj.children[i].menuNm != ''){
					var p_li = $('<li></li>');
//					var top_p_li = $('<li style="width:' + topLiWidth + 'px;"></li>');
//					var top_p_li = $('<li></li>');
					var p_a = $('<a href="' + (this._menuObj.children[i].url == "" ? "#" : (this._menuObj.children[i].url + this._menuObj.children[i].param)) + '" menuseq="' + this._menuObj.children[i].menuSeq + '"><span>' + this._menuObj.children[i].menuNm + '</span></a>');
//					var top_p_a = $('<a style="font-size:23px;" href="' + (this._menuObj.children[i].url == "" ? "#" : (this._menuObj.children[i].url + this._menuObj.children[i].param)) + '" menuseq="' + this._menuObj.children[i].menuSeq + '">' + this._menuObj.children[i].menuNm + '</a>');
//					var top_p_a = $('<a href="/mobile/m_index.do?submain=' + i + '" class="bf0' + i + '" submain="' + i + '">' + this._menuObj.children[i].menuNm + '</a>');

					p_li.append(p_a);
//					top_p_li.append(top_p_a);

					//2depth 메뉴 추가
					if(typeof this._menuObj.children[i].children != 'undefined' && this._menuObj.children[i].children.length > 0){
						for(var k in this._menuObj.children[i].children){
							if(this._menuObj.children[i].children[k].isRender == 'Y' && this._menuObj.children[i].children[k].menuNm != ''){
								var c_ul = $('<ul></ul>');
								var c_li = $('<li></li>');
								var c_a = $('<a href="' + (this._menuObj.children[i].children[k].url == "" ? "#" : (this._menuObj.children[i].children[k].url + this._menuObj.children[i].children[k].param)) + '">' + this._menuObj.children[i].children[k].menuNm + '</a>');
								p_li.append(c_ul.append(c_li.append(c_a)));
							}
						}
					}

//					$('.top_menu>ul').append(top_p_li);			//top 영역 메뉴
					$('#ul_menu_container').append(p_li);		//left 펼침 메뉴
				}
			}
		}
		//해당 메뉴 활성화 & 2depth 메뉴 명 display
		this.menuHighlighter(this._menuObj);
	}

	//menu_struct.jsn file 읽기		-- 추후 스크립틀릿 또는 jstl 기반으로 직접 json 형태 plane text 렌더링 필요
	this.readJsonFile = function(){
	    var rawFile = new XMLHttpRequest();
	    rawFile.open("GET", this._jsonFile, false);
	    rawFile.onreadystatechange = function(){
	        if(rawFile.readyState === 4){
	            if(rawFile.status === 200 || rawFile.status == 0){
	            	_self.setMenu(rawFile);
	            }
	        }
	    }
	    rawFile.send(null);
	}

	/* 페이지 url 기반으로 1depth, 2depth 메뉴 하이라이트 & 메뉴명 display */
	this.menuHighlighter = function (menuObj){
		var hitNodes = _self.getJsonNode(menuObj, 'url', window.location.pathname, false);		//url pathname 으로 우선 일치 노드 검색, return = 배열

		if(hitNodes != null){
			if(hitNodes.length == 1){		//한개의 배열인 경우 highlight
				_self.renderHighLight(menuObj, hitNodes[0]);
			}else{							//배열길이가 1보다 큰 경우(같은 서블릿 주소 또는 파라메터로 메뉴, 화면이 구분 되는 경우)
				for(var i = hitNodes.length-1; i > 0; i--){
					if(window.location.search == ""){				//현재 주소에 파라메터가 없는 경우 제일 마지막 노드를 해당 노드로 확정
						_self.renderHighLight(menuObj, hitNodes[i]);
						break;
					}else{											//현재 주소에 파라메터가 있는 경우 노드의 파라메터(param)로 비교
						console.log('param equal');
						var menuParamObj = _self.stringToObj(hitNodes[i].param);
						var pageParamObj = _self.stringToObj(window.location.search);

						if(_self.objArrEqual(menuParamObj, pageParamObj)){
							_self.renderHighLight(menuObj, hitNodes[i]);
							break;
						}
					}
				}
			}
		}
	}

	/* JSON parent 찾기 */
	this.getJsonParentNode = function (jsonObj, childSeq)
	{
		var id = 'menuSeq';				//유일 아이디로 쓰일 key name
		var parentKey = 'children';		//child 노드를 가진 parent 노드의 key name

	    var i, res;
	    if (!jsonObj || !jsonObj[parentKey]) {
	        return null;
	    }
	    if( Object.prototype.toString.call(jsonObj[parentKey]) === '[object Array]' ) {
	        for (i in jsonObj[parentKey]) {
	            if (jsonObj[parentKey][i][id] === childSeq) {
	                return jsonObj;
	            }
	            res = _self.getJsonParentNode(jsonObj[parentKey][i], childSeq);
	            if (res) {
	                return res;
	            }
	        }
	        return null;
	    } else {
	        if (jsonObj[parentKey][id] === childSeq) {
	            return jsonObj;
	        }
	        return _self.getJsonParentNode(jsonObj[parentKey], childSeq);
	    }
	}

	/* JSON parent 찾기(원하는 레벨까지) */
	this.getJsonParentNodeToLevel = function (menuObj, childNode, stopLevel){
		var resultParentObj = null;
		var searchNodeSeq = childNode.menuSeq;
		do{
			var parentObj = _self.getJsonParentNode(menuObj, searchNodeSeq);
			if(parentObj != null) searchNodeSeq = parentObj.menuSeq;
			resultParentObj = parentObj;
		}
		while(parentObj != null && parentObj.level > stopLevel);

		return resultParentObj;
	}

	/* JSON node 찾기 */
	this.getJsonNode = function (obj, key, val, leafOnly) {
	    var objects = [];
	    for (var i in obj) {
	        if (!obj.hasOwnProperty(i)) continue;
	        if (typeof obj[i] == 'object') {
	            objects = objects.concat(_self.getJsonNode(obj[i], key, val, leafOnly));
	        } else if (i == key && obj[key] == val) {
	        	if(leafOnly){
	        		if(obj.isLeaf == 'Y') objects.push(obj);
	        		else continue;
	        	}else{
	        		objects.push(obj);
	        	}
	        }
	    }
	    return objects;
	}

	/* 전체 노드와 해당 노드로 메뉴 highlight */
	this.renderHighLight = function (menuObj, thisNode){
		if(thisNode.level == '2' && thisNode.isRender == 'Y'){			//level(depth) 가 2인 경우 바로 highlight
			$('#span_menuNavi').text(thisNode.menuNm);
			//console.log(thisNode.url+" , "+thisNode.param);
		}else{																	//levle(depth) 가 2보다 큰(하위 level) 경우 level2 부모 노드 검색
			var resultParentObjLvl2 = _self.getJsonParentNodeToLevel(menuObj, thisNode, 2);
			$('#span_menuNavi').text(resultParentObjLvl2.menuNm);
			//console.log(thisNode.url+" , "+thisNode.param +" , !!!!");

		}
		var resultParentObjLvl1 = _self.getJsonParentNodeToLevel(menuObj, thisNode, 1);
		$('.top_menu a[menuseq=' + resultParentObjLvl1.menuSeq + ']').addClass('on');
	}

	/* 파라메터 object로 리턴 */
	this.stringToObj = function (paramStr){
		var pageParam = paramStr.substr(paramStr.indexOf('?')+1, paramStr.length);
		pageParam = pageParam.split('&');
		var tempObj = {};
		for(var index in pageParam){
			tempObj[pageParam[index].split('=')[0]] = pageParam[index].split('=')[1];
		}
		return tempObj;
	}

	/* 오브젝트간 비교 ori = obj1, dest = obj2 */
	this.objArrEqual = function (obj1, obj2){
		if(obj1 === obj2) return true;

		var matchCnt = Object.keys(obj1).length;
		var matchTrueStack = 0;
		for(var key1 in obj1){
			for(var key2 in obj2){
				if(key1 == key2 && obj1[key1] == obj2[key2]){
					matchTrueStack++;
				}
			}
		}

		if(matchTrueStack == matchCnt) return true;
		else return false;
	}
}

/* 현재 페이지 파라메터 관련 - 앱에서 호출시 파라메터로 구분 : mfc_getParam.isApp() */
var mfc_getParam = {
	_thisParam : window.location.search,
	_appParamKey : 'moduleType',
	_appParamVal : 'MobileApp',
	_paramObj : null,
	getSplitObj : function(){
		if(this._thisParam) return mfc_menuParser.stringToObj(this._thisParam);
		else return null;
	},
	isApp : function(){
		this._paramObj = this.getSplitObj();
		if(this._paramObj)
			return this._paramObj[this._appParamKey] == this._appParamVal;
		else
			return false;
	}
}

//console.log(mfc_getParam.isApp());

$(function(){
	$('#m_loginLink').click(function() {
		console.log("location.href=> "+location.href);
		console.log("this.href=> "+this.href);
	    if (location.href.indexOf(this.href) === 0)
	        return true;

	    var noSsl = this.href.search(/localhost|(\d+\.){3}\d+/) > 0;
	    console.log("noSsl=> "+noSsl);
	    if (noSsl)
	        location.href = this.href + '?redirect=' + encodeURIComponent(location.href);
	    else
	        location.href = this.href.replace('http:', 'https:') + '?redirect=' + encodeURIComponent(location.href);
	    return false;
	});
	
	// 모바일앱인 경우 하단의 PC 보기 제거
    var isMobileApp = navigator.userAgent.indexOf('Mobile_App') > 0;
    if (isMobileApp) {
        $('.main_sec04 > a').css('width', '50%').eq(2).remove();
    } else {
        $('.main_sec04 > a').eq(2).click(function() {
            setCookie('viewDesktop', 'true');
        });
    }

});

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

//20181104 추가
//레이어팝업 열기
function layerClickOpen(popID, tt){
	//alert(popID +"  " + tt);
	$(window).scrollTop(0);
	$("body").addClass("layerOpen");
	$("#" +popID).show();
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