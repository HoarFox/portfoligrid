!function(t){function e(e){for(var o,s,r=e[0],l=e[1],d=e[2],u=0,c=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&c.push(n[s][0]),n[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(h&&h(e);c.length;)c.shift()();return a.push.apply(a,d||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={0:0},a=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var h=l;a.push([6,1]),i()}({5:function(t,e,i){},6:function(t,e,i){"use strict";i.r(e);var o,n,a,s,r,l,d=i(0),h=i.n(d);i(1),i(4),i(5);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}h.a,l=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),o=h.a,n="ekkoLightbox",a=o.fn[n],s={title:"",footer:"",maxWidth:9999,maxHeight:9999,showArrows:!0,wrapping:!0,type:null,alwaysShowClose:!1,loadingMessage:'<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',leftArrow:"<span>&#10094;</span>",rightArrow:"<span>&#10095;</span>",strings:{close:"Close",fail:"Failed to load image:",type:"Could not detect remote target type. Force the type using data-type"},doc:document,onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}},r=function(){function t(e,i){var n=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this._config=o.extend({},s,i),this._$modalArrows=null,this._galleryIndex=0,this._galleryName=null,this._padding=null,this._border=null,this._titleIsShown=!1,this._footerIsShown=!1,this._wantedWidth=0,this._wantedHeight=0,this._touchstartX=0,this._touchendX=0,this._modalId="ekkoLightbox-"+Math.floor(1e3*Math.random()+1),this._$element=e instanceof h.a?e:o(e),this._isBootstrap3=3==o.fn.modal.Constructor.VERSION[0];var a='<h4 class="modal-title">'+(this._config.title||"&nbsp;")+"</h4>",r='<button type="button" class="close" data-dismiss="modal" aria-label="'+this._config.strings.close+'"><span aria-hidden="true">&times;</span></button>',l='<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header'+(this._config.title||this._config.alwaysShowClose?"":" hide")+'">'+(this._isBootstrap3?r+a:a+r)+'</div><div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div><div class="modal-footer'+(this._config.footer?"":" hide")+'">'+(this._config.footer||"&nbsp;")+"</div></div></div>";o(this._config.doc.body).append('<div id="'+this._modalId+'" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">'+l+"</div>"),this._$modal=o("#"+this._modalId,this._config.doc),this._$modalDialog=this._$modal.find(".modal-dialog").first(),this._$modalContent=this._$modal.find(".modal-content").first(),this._$modalBody=this._$modal.find(".modal-body").first(),this._$modalHeader=this._$modal.find(".modal-header").first(),this._$modalFooter=this._$modal.find(".modal-footer").first(),this._$lightboxContainer=this._$modalBody.find(".ekko-lightbox-container").first(),this._$lightboxBodyOne=this._$lightboxContainer.find("> div:first-child").first(),this._$lightboxBodyTwo=this._$lightboxContainer.find("> div:last-child").first(),this._border=this._calculateBorders(),this._padding=this._calculatePadding(),this._galleryName=this._$element.data("gallery"),this._galleryName&&(this._$galleryItems=o(document.body).find('*[data-gallery="'+this._galleryName+'"]'),this._galleryIndex=this._$galleryItems.index(this._$element),o(document).on("keydown.ekkoLightbox",this._navigationalBinder.bind(this)),this._config.showArrows&&this._$galleryItems.length>1&&(this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">'+this._config.leftArrow+'</a><a href="#">'+this._config.rightArrow+"</a></div>"),this._$modalArrows=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay").first(),this._$lightboxContainer.on("click","a:first-child",(function(t){return t.preventDefault(),n.navigateLeft()})),this._$lightboxContainer.on("click","a:last-child",(function(t){return t.preventDefault(),n.navigateRight()})),this.updateNavigation())),this._$modal.on("show.bs.modal",this._config.onShow.bind(this)).on("shown.bs.modal",(function(){return n._toggleLoading(!0),n._handle(),n._config.onShown.call(n)})).on("hide.bs.modal",this._config.onHide.bind(this)).on("hidden.bs.modal",(function(){return n._galleryName&&(o(document).off("keydown.ekkoLightbox"),o(window).off("resize.ekkoLightbox")),n._$modal.remove(),n._config.onHidden.call(n)})).modal(this._config),o(window).on("resize.ekkoLightbox",(function(){n._resize(n._wantedWidth,n._wantedHeight)})),this._$lightboxContainer.on("touchstart",(function(){n._touchstartX=event.changedTouches[0].screenX})).on("touchend",(function(){n._touchendX=event.changedTouches[0].screenX,n._swipeGesure()}))}return l(t,null,[{key:"Default",get:function(){return s}}]),l(t,[{key:"element",value:function(){return this._$element}},{key:"modal",value:function(){return this._$modal}},{key:"navigateTo",value:function(t){return t<0||t>this._$galleryItems.length-1?this:(this._galleryIndex=t,this.updateNavigation(),this._$element=o(this._$galleryItems.get(this._galleryIndex)),void this._handle())}},{key:"navigateLeft",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(0===this._galleryIndex){if(!this._config.wrapping)return;this._galleryIndex=this._$galleryItems.length-1}else this._galleryIndex--;return this._config.onNavigate.call(this,"left",this._galleryIndex),this.navigateTo(this._galleryIndex)}}},{key:"navigateRight",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(this._galleryIndex===this._$galleryItems.length-1){if(!this._config.wrapping)return;this._galleryIndex=0}else this._galleryIndex++;return this._config.onNavigate.call(this,"right",this._galleryIndex),this.navigateTo(this._galleryIndex)}}},{key:"updateNavigation",value:function(){if(!this._config.wrapping){var t=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay");0===this._galleryIndex?t.find("a:first-child").addClass("disabled"):t.find("a:first-child").removeClass("disabled"),this._galleryIndex===this._$galleryItems.length-1?t.find("a:last-child").addClass("disabled"):t.find("a:last-child").removeClass("disabled")}}},{key:"close",value:function(){return this._$modal.modal("hide")}},{key:"_navigationalBinder",value:function(t){return 39===(t=t||window.event).keyCode?this.navigateRight():37===t.keyCode?this.navigateLeft():void 0}},{key:"_detectRemoteType",value:function(t,e){return!(e=e||!1)&&this._isImage(t)&&(e="image"),!e&&this._getYoutubeId(t)&&(e="youtube"),!e&&this._getVimeoId(t)&&(e="vimeo"),!e&&this._getInstagramId(t)&&(e="instagram"),("audio"==e||"video"==e||!e&&this._isMedia(t))&&(e="media"),(!e||["image","youtube","vimeo","instagram","media","url"].indexOf(e)<0)&&(e="url"),e}},{key:"_getRemoteContentType",value:function(t){return o.ajax({type:"HEAD",url:t,async:!1}).getResponseHeader("Content-Type")}},{key:"_isImage",value:function(t){return t&&t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)}},{key:"_isMedia",value:function(t){return t&&t.match(/(\.(mp3|mp4|ogg|webm|wav)((\?|#).*)?$)/i)}},{key:"_containerToUse",value:function(){var t=this,e=this._$lightboxBodyTwo,i=this._$lightboxBodyOne;return this._$lightboxBodyTwo.hasClass("in")&&(e=this._$lightboxBodyOne,i=this._$lightboxBodyTwo),i.removeClass("in show"),setTimeout((function(){t._$lightboxBodyTwo.hasClass("in")||t._$lightboxBodyTwo.empty(),t._$lightboxBodyOne.hasClass("in")||t._$lightboxBodyOne.empty()}),500),e.addClass("in show"),e}},{key:"_handle",value:function(){var t=this._containerToUse();this._updateTitleAndFooter();var e=this._$element.attr("data-remote")||this._$element.attr("href"),i=this._detectRemoteType(e,this._$element.attr("data-type")||!1);if(["image","youtube","vimeo","instagram","media","url"].indexOf(i)<0)return this._error(this._config.strings.type);switch(i){case"image":this._preloadImage(e,t),this._preloadImageByIndex(this._galleryIndex,3);break;case"youtube":this._showYoutubeVideo(e,t);break;case"vimeo":this._showVimeoVideo(this._getVimeoId(e),t);break;case"instagram":this._showInstagramVideo(this._getInstagramId(e),t);break;case"media":this._showHtml5Media(e,t);break;default:this._loadRemoteContent(e,t)}return this}},{key:"_getYoutubeId",value:function(t){if(!t)return!1;var e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return!(!e||11!==e[2].length)&&e[2]}},{key:"_getVimeoId",value:function(t){return!!(t&&t.indexOf("vimeo")>0)&&t}},{key:"_getInstagramId",value:function(t){return!!(t&&t.indexOf("instagram")>0)&&t}},{key:"_toggleLoading",value:function(t){return(t=t||!1)?(this._$modalDialog.css("display","none"),this._$modal.removeClass("in show"),o(".modal-backdrop").append(this._config.loadingMessage)):(this._$modalDialog.css("display","block"),this._$modal.addClass("in show"),o(".modal-backdrop").find(".ekko-lightbox-loader").remove()),this}},{key:"_calculateBorders",value:function(){return{top:this._totalCssByAttribute("border-top-width"),right:this._totalCssByAttribute("border-right-width"),bottom:this._totalCssByAttribute("border-bottom-width"),left:this._totalCssByAttribute("border-left-width")}}},{key:"_calculatePadding",value:function(){return{top:this._totalCssByAttribute("padding-top"),right:this._totalCssByAttribute("padding-right"),bottom:this._totalCssByAttribute("padding-bottom"),left:this._totalCssByAttribute("padding-left")}}},{key:"_totalCssByAttribute",value:function(t){return parseInt(this._$modalDialog.css(t),10)+parseInt(this._$modalContent.css(t),10)+parseInt(this._$modalBody.css(t),10)}},{key:"_updateTitleAndFooter",value:function(){var t=this._$element.data("title")||"",e=this._$element.data("footer")||"";return this._titleIsShown=!1,t||this._config.alwaysShowClose?(this._titleIsShown=!0,this._$modalHeader.css("display","").find(".modal-title").html(t||"&nbsp;")):this._$modalHeader.css("display","none"),this._footerIsShown=!1,e?(this._footerIsShown=!0,this._$modalFooter.css("display","").html(e)):this._$modalFooter.css("display","none"),this}},{key:"_showYoutubeVideo",value:function(t,e){var i=this._getYoutubeId(t),o=t.indexOf("&")>0?t.substr(t.indexOf("&")):"",n=this._$element.data("width")||560,a=this._$element.data("height")||n/(560/315);return this._showVideoIframe("//www.youtube.com/embed/"+i+"?badge=0&autoplay=1&html5=1"+o,n,a,e)}},{key:"_showVimeoVideo",value:function(t,e){var i=this._$element.data("width")||500,o=this._$element.data("height")||i/(560/315);return this._showVideoIframe(t+"?autoplay=1",i,o,e)}},{key:"_showInstagramVideo",value:function(t,e){var i=this._$element.data("width")||612,o=i+80;return t="/"!==t.substr(-1)?t+"/":t,e.html('<iframe width="'+i+'" height="'+o+'" src="'+t+'embed/" frameborder="0" allowfullscreen></iframe>'),this._resize(i,o),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_showVideoIframe",value:function(t,e,i,o){return i=i||e,o.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+e+'" height="'+i+'" src="'+t+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this._resize(e,i),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_showHtml5Media",value:function(t,e){var i,o=this._getRemoteContentType(t);if(!o)return this._error(this._config.strings.type);i=o.indexOf("audio")>0?"audio":"video";var n=this._$element.data("width")||560,a=this._$element.data("height")||n/(560/315);return e.html('<div class="embed-responsive embed-responsive-16by9"><'+i+' width="'+n+'" height="'+a+'" preload="auto" autoplay controls class="embed-responsive-item"><source src="'+t+'" type="'+o+'">'+this._config.strings.type+"</"+i+"></div>"),this._resize(n,a),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}},{key:"_loadRemoteContent",value:function(t,e){var i=this,n=this._$element.data("width")||560,a=this._$element.data("height")||560,s=this._$element.data("disableExternalCheck")||!1;return this._toggleLoading(!1),s||this._isExternal(t)?(e.html('<iframe src="'+t+'" frameborder="0" allowfullscreen></iframe>'),this._config.onContentLoaded.call(this)):e.load(t,o.proxy((function(){return i._$element.trigger("loaded.bs.modal")}))),this._$modalArrows&&this._$modalArrows.css("display","none"),this._resize(n,a),this}},{key:"_isExternal",value:function(t){var e=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==location.protocol||"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host}},{key:"_error",value:function(t){return console.error(t),this._containerToUse().html(t),this._resize(300,300),this}},{key:"_preloadImageByIndex",value:function(t,e){if(this._$galleryItems){var i=o(this._$galleryItems.get(t),!1);if(void 0!==i){var n=i.attr("data-remote")||i.attr("href");return("image"===i.attr("data-type")||this._isImage(n))&&this._preloadImage(n,!1),e>0?this._preloadImageByIndex(t+1,e-1):void 0}}}},{key:"_preloadImage",value:function(t,e){var i=this;e=e||!1;var n=new Image;return e&&function(){var a=setTimeout((function(){e.append(i._config.loadingMessage)}),200);n.onload=function(){a&&clearTimeout(a),a=null;var t=o("<img />");return t.attr("src",n.src),t.addClass("img-fluid"),t.css("width","100%"),e.html(t),i._$modalArrows&&i._$modalArrows.css("display",""),i._resize(n.width,n.height),i._toggleLoading(!1),i._config.onContentLoaded.call(i)},n.onerror=function(){return i._toggleLoading(!1),i._error(i._config.strings.fail+"  "+t)}}(),n.src=t,n}},{key:"_swipeGesure",value:function(){return this._touchendX<this._touchstartX?this.navigateRight():this._touchendX>this._touchstartX?this.navigateLeft():void 0}},{key:"_resize",value:function(t,e){e=e||t,this._wantedWidth=t,this._wantedHeight=e;var i=t/e,n=this._padding.left+this._padding.right+this._border.left+this._border.right,a=this._config.doc.body.clientWidth>575?20:0,s=this._config.doc.body.clientWidth>575?0:20,r=Math.min(t+n,this._config.doc.body.clientWidth-a,this._config.maxWidth);t+n>r?(e=(r-n-s)/i,t=r):t+=n;var l=0,d=0;this._footerIsShown&&(d=this._$modalFooter.outerHeight(!0)||55),this._titleIsShown&&(l=this._$modalHeader.outerHeight(!0)||67);var h=this._padding.top+this._padding.bottom+this._border.bottom+this._border.top,u=parseFloat(this._$modalDialog.css("margin-top"))+parseFloat(this._$modalDialog.css("margin-bottom")),c=Math.min(e,o(window).height()-h-u-l-d,this._config.maxHeight-h-l-d);e>c&&(t=Math.ceil(c*i)+n),this._$lightboxContainer.css("height",c),this._$modalDialog.css("flex",1).css("maxWidth",t);var g=this._$modal.data("bs.modal");if(g)try{g._handleUpdate()}catch(t){g.handleUpdate()}return this}}],[{key:"_jQueryInterface",value:function(e){var i=this;return e=e||{},this.each((function(){var n=o(i),a=o.extend({},t.Default,n.data(),"object"==u(e)&&e);new t(i,a)}))}}]),t}(),o.fn[n]=r._jQueryInterface,o.fn[n].Constructor=r,o.fn[n].noConflict=function(){return o.fn[n]=a,r._jQueryInterface},h()(document).on("click",'[data-toggle="lightbox"]',(function(t){t.preventDefault(),h()(this).ekkoLightbox()})),h()(".port-item").click((function(){h()(".collapse").collapse("hide")}))}});