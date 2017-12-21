
// 让页面调用这个函数
window.onload = function () {
   //瀑布流有两个参数 第一个为父盒子，第二个为子盒子
   waterfalls('content', 'box')
   // 对页面设置滚动条事件
   window.onscroll = function () {
   	// 当为true时执行
   	     if (load()) {
   	     	// 根据图片创建div 的个数 相当于数据库
   	     	var database = [
   	     	  {'src':'images/img1.jpg'},
   	     	  {'src':'images/img2.jpg'},
   	     	  {'src':'images/img3.jpg'},
   	     	  {'src':'images/img4.jpg'},
   	     	  {'src':'images/img5.jpg'},
   	     	  {'src':'images/img6.jpg'},
   	     	  {'src':'images/img7.jpg'},
   	     	  {'src':'images/img8.jpg'},
   	     	  {'src':'images/img9.jpg'},
   	     	  {'src':'images/img10.jpg'},
   	     	  {'src':'images/img11.jpg'},
   	     	  {'src':'images/img12.jpg'},
   	     	  {'src':'images/img13.jpg'},
   	     	  {'src':'images/img14.jpg'},
   	     	  {'src':'images/img15.jpg'},
   	     	  {'src':'images/img16.jpg'},
   	     	  {'src':'images/img17.jpg'},
   	     	  {'src':'images/img18.jpg'},
   	     	  {'src':'images/img19.jpg'},
   	     	  {'src':'images/img20.jpg'},
   	     	  {'src':'images/img21.jpg'},
   	     	  {'src':'images/img22.jpg'},
   	     	  {'src':'images/img23.jpg'},
   	     	  {'src':'images/img24.jpg'},
   	     	  {'src':'images/img25.jpg'},
   	     	  {'src':'images/img26.jpg'},
   	     	  {'src':'images/img27.jpg'},
   	     	  {'src':'images/img28.jpg'},
   	     	  {'src':'images/img29.jpg'},
   	     	]
   	     	for (var i = 0; i < database.length; i++) {
   	     		// 创建新的盒子
   	     	var box = document.createElement('div');
   	     	var img = document.createElement('img');
   	     	img.src = database[i].src;
   	     	box.className = 'box';
   	     	content.appendChild(box);
   	     	box.appendChild(img);
   	     	}
   	     	waterfalls('content', 'box');
   	     }
   }

 }
// 创建瀑布流函数
// 获取元素
    var content = my$('content');
	var boxs = content.children;
function waterfalls(father, son) {
	// 1 算出可以放多少列
	var boxWidth = boxs[0].offsetWidth; // 所有的盒子都是等宽的 所以我们只需得到一个盒子的宽度
	// 一行可以放多少列 要对其向下取整因为盒子不可能放半个
	var column = Math.floor(content.clientWidth / boxWidth);
	//console.log(column)
	// 2 需要得到里面所有盒子的高度然后找出最小的 用索引找最小的有两种方法、
	// 2.1 用 for..in; 用 indexOf; 知道目标找索引；
	  // 创建一个数组 将所有的 高度都储存在里面
	  var arrayHeight = [];
	  for (var i = 0; i < boxs.length; i++) {
	  	// 将所有的高度都添加到数组里面
	  	if (i < column){ // 这是第一行
	  	 arrayHeight[i] = boxs[i].offsetHeight;
//	  	 console.log(arrayHeight)
	   }else {
	     // 去除里面的最小值 两个参数中取最大值
	     var heightMin = Math.min.apply('', arrayHeight);
//	     console.log(heightMin);
         // 找最小值的索引
        var minIndex = minNumber(heightMin);
//      摆放盒子
        // 第8个盒子开始
        boxs[i].style.position = "absolute";
        boxs[i].style.top = heightMin + 10 + 'px';
        boxs[i].style.left = boxs[minIndex].offsetLeft - 2 + 'px';
        // 每次遍历都需要将最小的加上才加进来的盒子
       arrayHeight[minIndex] = arrayHeight[minIndex] + 10 + boxs[i].offsetHeight;
       }
	   }
	  // 找出最小高度的函数
	    function minNumber(heightMin) {
    	var index = arrayHeight.indexOf(heightMin);
    	return index;
    }
   }
       // 动态加载图片
       // 原理: 当页面拉倒最后一张图片上时就应该继续加载
       // 其实就是lastbox.offsettop < 当前页面的距离 + 滚动出去的距离;
       function load() {// 函数用来判断有没有到达底部
       	 // 需要找到最后一个盒子
         var lastBox = boxs[boxs.length - 1]; //最后一个盒子
         var lastBoxTop = lastBox.offsetTop;  // 最后一个盒子距离顶部的高度
         var scrollTop = getScroll().scrollTop; // 滚出去的位置；
         var clientHeight = document.documentElement.clientHeight; // 当前页面的位置；
         if (lastBoxTop < scrollTop + clientHeight) {
         	return true;
         	// 此时应该加载图片;
         }


};

