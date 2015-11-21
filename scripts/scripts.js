// initialise google maps
function initMap(lat, lng) {
  lat = typeof lat !== 'undefined' ? lat : "-25.363";
  lng = typeof lng !== 'undefined' ? lng : "131.044";
  var myLatLng = {lat: parseFloat(lat), lng: parseFloat(lng)};
  var mapOptions = {
    zoom: 16,
    center: myLatLng,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Current location'
  });
}

function update_details(e){
	var data_name = e.getAttribute("data-name");
	var data_image = e.getAttribute("data-image");
	var data_date = e.getAttribute("data-date");
	var data_type = e.getAttribute("data-type");
	var data_weight = e.getAttribute("data-weight");
	var data_phone = e.getAttribute("data-phone");
	var data_price = e.getAttribute("data-price");
	var data_quantity = e.getAttribute("data-quantity");
	var data_color = e.getAttribute("data-color");
	var data_link = e.getAttribute("data-link");
	var data_latitude = e.getAttribute("data-latitude");
	var data_longitude = e.getAttribute("data-longitude");
	document.getElementById('parcel_name').textContent= data_name;
	document.getElementById('parcel_image').src = data_image;
	document.getElementById('parcel_date').textContent = data_date;
	document.getElementById('parcel_type').textContent = data_type;
	document.getElementById('parcel_weight').textContent = data_weight;
	document.getElementById('parcel_phone').textContent = data_phone;
	document.getElementById('parcel_price').textContent = data_price;
	document.getElementById('parcel_quantity').textContent = data_quantity;
	document.getElementById('parcel_color').style.background = data_color;
	initMap(data_latitude, data_longitude);

	var d = new Date(parseInt(data_date));
	console.log(d);
	document.getElementById('parcel_date').textContent = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}
window.onload = function() {
	// setTimeout(function(){ document.getElementById("parcels_list").getElementsByTagName('a')[0].click(); }, 3000);
};