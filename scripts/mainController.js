app.controller("mainController", function($scope,$http,$filter){
	var parcel_url = "https://zoomcar-ui.0x10.info/api/courier?type=json&query=list_parcel";
	var api_hit_url = "https://zoomcar-ui.0x10.info/api/courier?type=json&query=api_hits";
	var local_api_hit = "data/api_hits.json";
	var local_parcel = "data/parcels.json";
	// $scope.load_first = function(){
	// 	document.getElementById("parcels_list").getElementsByTagName('a')[0].click();
	// }
// API Hits
	$http.get(api_hit_url).success(function(response){
		$scope.api_hits = response;
	});

// API Parcels 
	$http.get(parcel_url).success(function(response){
		var parcelsData = response;
		$scope.parcels_data = parcelsData.parcels;
	})
	.finally(function() {
		document.getElementById("parcels_list").getElementsByTagName('a')[0].click();
	});
// Order
	var orderBy = $filter('orderBy');
	$scope.order = function(predicate, reverse) {
		$scope.parcels_data = orderBy($scope.parcels_data, predicate, reverse);
	};
});