!function(t){function e(t){return t.indexOf("px")?t.substring(0,t.length-2):canvas_height.indexOf("%")?t.substring(0,t.length-1):void 0}function i(t){if(t.toString().indexOf("px")<-1&&t.toString().indexOf("%")<-1)return t+="px"}function n(t,e){return e<0?parseInt(t)/100*360*(Math.PI/180)-Math.PI/2:(parseInt(t)+parseInt(e))/100*360*(Math.PI/180)-Math.PI/2}function r(e){t(".progress-percentage").text(Math.round(h.percent)+"%")}function s(t){var i=e(h.height.toString()),s=e(h.width.toString()),o=document.createElement("canvas");o.height=i,o.width=s;var a=o.getContext("2d");a.strokeStyle=h.color,a.lineWidth=h.line_width,a.beginPath();var c=n(h.starting_position,-1),p=n(h.starting_position,h.percent),d=0,g=s/2,l=i/2;return d=i>=s?.9*s/2-2*h.line_width:.9*i/2-2*h.line_width,a.arc(g,l,d,c,p,h.counter_clockwise),a.stroke(),h.percentage&&r(t),o}var h={},o={init:function(e){var n=t.extend({color:"#000000",height:"300px",width:"300px",line_width:8,starting_position:25,percent:100,counter_clockwise:!1,percentage:!0,text:""},e);h=n;var r=t("<div class='progress-percentage'></div>");h.percentage||r.text(h.percentage),t(this).append(r);var o=t("<div class='progress-text'></div>");return"percent"!=h.text&&o.text(h.text),t(this).append(o),100!=h.starting_position&&(h.starting_position=h.starting_position%100),100!=h.ending_position&&(h.ending_position=h.ending_position%100),i(h.width),i(h.height),t(this).css({height:h.height,width:h.width}),t(this).addClass("circular-progress-bar"),t(this).find("canvas").remove(),t(this).append(s(t(this))),this},percent:function(e){return h.percent=e,t(this).css({height:h.height,width:h.width}),t(this).children("canvas").remove(),t(this).append(s(t(this))),this},animate:function(e,i){t(this).css({height:h.height,width:h.width});var n=i/10,r=(e-h.percent)/n,o=t(this),a=setInterval(function(){h.percent<e?(o.children("canvas").remove(),h.percent+=r,o.append(s(o))):clearInterval(a)},10);return this}};t.fn.circularProgress=function(e){return o[e]?o[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist."):o.init.apply(this,arguments)}}(jQuery)