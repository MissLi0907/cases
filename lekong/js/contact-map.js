 window.onload = function(){
   var map = new BMap.Map("container");
   $(function(){
	   var key="青岛乐控电气自动化技术有限公司";
	   searchByStationName(key);
   });

   //map.centerAndZoom("山东省", 12);
   //map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
   //map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用
   map.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件
   map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件
   var localSearch = new BMap.LocalSearch(map);
   localSearch.enableAutoViewport(); //允许自动调节窗体大小
   function searchByStationName(keyword) {
	   var lng = $("#zb_x").val();
	   var lat = $("#zb_y").val();
	   var point = new BMap.Point();
	   if (lng > 0 && lat > 0) {
		   point = new BMap.Point(lng, lat);
	   } else {
		   localSearch.search(keyword);
		   localSearch.setSearchCompleteCallback(function(searchResult) {

			   var poi = searchResult.getPoi(0);
			   // console.log(poi)
			   point = new BMap.Point(poi.point.lng, poi.point.lat);
		   });
	   }
	   map.centerAndZoom(point, 15);
	   var marker = new BMap.Marker(point); // 创建标注，为要查询的地方对应的经纬度
	   map.addOverlay(marker);
	   var content =keyword;
	   
	   marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
   }
}