    // 获取元素；
    function my$ (id) {
    	return document.getElementById(id);
    }
    // 获取第一个元素；
//  function getFirstElementChild(element) {
//      var node, nodes = element.childNodes, i = 0;
//      while (node = nodes[i++]) {
//          if (node.nodeType === 1) {
//              return node;
//          }
//      }
//      return null;
//  }
    function getFirstElementChild(element) {
      var node;
      var nodes = element.childNodes;
      for (var i = 0; i < nodes.length; i++){
      	node = nodes[i];
      	if (node.nodeType == 1) {
      		return node;
      	}
        }
      	return null;
      }
    // 获取下一个元素
    function getNextElementSibling(element) {
      var el = element;
      while (el = el.nextSibling) {
        if (el.nodeType === 1) {
            return el;
        }
      }
      return null;
    }
    // 处理innerText 兼容性问题； 通过innerText 设置标签内容的属性
    function setInnerText (element, content) {
    	// 只要具有innerText属性才会是string 若无则为undefined；
    	if (typeof element.innerText === 'string'){
    		element.innerText = content;
    	}else {
    		element.textContent = content; 
    		
    	}
    }
     // 处理事件兼容性问题；
     // eventName 事件前面不带on
     //  元素, 注册事件, 事件函数
     function addEventListener (element, eventName, fn) {
     	// 判断当前浏览器是否支持addEventlistener;
     	if (element.addEventListener) {
     		element.addEventListener(eventName, fn);
     	}else if (element.attachEvent){
     		element.attachEvent('on' + eventName, fn);
     	}else {
     		element['on' + eventName] = fn;
     	}
     }
     // 移除事件的兼容性处理
     function removeEventListener (element, eventName, fn) {
     	// 判断当前浏览器是否支持addEventlistener;
     	if (element.removeEventListener) {
     		element.removeEventListener(eventName, fn);
     	}else if (element.detachEvent){
     		element.detachEvent('on' + eventName, fn);
     	}else {
     		element['on' + eventName] = null;
     	}
     }
     // 获取页面滚动出去的距离
     function getScroll () {
     	var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
     	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     	return {
     		scrollLeft: scrollLeft,
     		scrollTop: 	scrollTop
     	}
     }
     // 获取鼠标在页面的位置，处理浏览器兼容；
     function getPage (e) {
     	var pageX = e.pageX || e.clientX + getscroll().scrollLeft;
     	var pageY = e.pageY || e.clientY + getscroll().scroll; 
     	return {
     		pageX: pageX,
     		pageY:pageY
     	}
     }
	 // 获取两个日期的时间差
	 function getInterval(start, end) {
		  // 两个日期对象，相差的毫秒数
		  var interval = end - start;
		  // 求 相差的天数/小时数/分钟数/秒数
		  var day, hour, minute, second;
		
		  // 两个日期对象，相差的秒数
		  // interval = interval / 1000;
		  interval /= 1000;
		
		  day = Math.round(interval / 60 / 60 / 24);
		  hour = Math.round(interval / 60 / 60 % 24);
		  minute = Math.round(interval / 60 % 60);
		  second = Math.round(interval % 60);
		  return {
		    day: day,
		    hour: hour,
		    minute: minute,
		    second: second
		  }
		}
	 //格式化日期对象，返回yyyy-MM-dd HH:mm:ss的形式
	 function formatDate(date) {
		// 判断参数date是否是日期对象
		// instanceof  instance 实例(对象)   of 的
		// console.log(date instanceof Date);
		if(!(date instanceof Date)) {
			console.error('date不是日期对象')
			return;
		}
	
		var year = date.getFullYear(),
			month = date.getMonth() + 1,
			day = date.getDate(),
			hour = date.getHours(),
			minute = date.getMinutes(),
			second = date.getSeconds();
	    // 判断位置上是否是大于10；
		month = month < 10 ? '0' + month : month;
		day = day < 10 ? '0' + day : day;
		hour = hour < 10 ? '0' + hour : hour;
		minute = minute < 10 ? '0' + minute : minute;
		second = second < 10 ? '0' + second : second;
	
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
	}



















































