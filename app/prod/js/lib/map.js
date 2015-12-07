var style = [{featureType:"all",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{lightness:100},{visibility:"on"},{color:"#000000"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{color:"#000000"},{gamma:9.91},{visibility:"off"}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"},{color:"#ff0000"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"},{color:"#ffffff"}]},{featureType:"administrative.country",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"simplified"},{color:"#f2f2f2"}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"on"},{color:"#f2f2f2"}]},{featureType:"landscape.natural.landcover",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape.natural.terrain",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"},{color:"#fecc1a"}]},{featureType:"poi.attraction",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.government",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.government",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.medical",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.school",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"poi.school",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{visibility:"simplified"},{color:"#fecc1a"}]},{featureType:"road.highway.controlled_access",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"transit.station",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#ffffff"}]}];

function googleMapFunc(googleMap){
    if(googleMap.length){
        var longitude = parseFloat(googleMap.attr('data-longitude')) || 53.894717,
            latitude = parseFloat(googleMap.attr('data-latitude')) || 27.562312,
            latlng = new google.maps.LatLng(longitude, latitude);

        var at = googleMap.attr('id');

        var myOptions = {
            zoom: 12,
            center: new google.maps.LatLng(53.894717, 27.562312),
            streetViewControl: false,
            zoomControl: false,
            scaleControl: false,
            panControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById(at), myOptions);
        var mapType = new google.maps.StyledMapType(style, { name:"Grayscale" });
        
        controlls = _customZoom(map);
        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlls);

        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');

        var companyImage = new google.maps.MarkerImage();
        var companyPos = new google.maps.LatLng(53.894717, 27.562312);
        var companyMarker = new google.maps.Marker({
            position: companyPos
        });

        var boxText = document.createElement("div");
        boxText.style.cssText = "background: url('./prod/img/svg/map_marker.svg') no-repeat; width: 34px; height: 54px;";
        var boxContent = '';
        var myOptions = {
            content: boxText,
            disableAutoPan: false,
            maxWidth: 0,
            pixelOffset: new google.maps.Size(-11, -32),
            zIndex: null,
            infoBoxClearance: new google.maps.Size(1, 1),
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false,
            closeBoxURL:''
        };
        var ib = new InfoBox(myOptions);
        ib.open(map, companyMarker);
    }
}
function _customZoom (map) {
    var container = document.createElement('div');

    container.innerHTML = "<div class='map__zoom-in'><svg viewBox='0 0 34.958 33.5' xmlns='http://www.w3.org/2000/svg'><g><g class='stroke'><path d='m1.532,1.523l31.996,0l0,63.991999l-31.996,0l0,-63.991999z' stroke-miterlimit='10' stroke-width='3' fill='none' clip-rule='evenodd' fill-rule='evenodd'/></g><g class='fill'><path d='m16.030001,13.538l2,0l0,9.997999l-2,0l0,-9.997999z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,17.537001l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,48.533001l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m1.032,32.535l31.996,0l0,3l-31.996,0l0,-3z' clip-rule='evenodd' fill-rule='evenodd'/></g></g></svg></div><div class='map__zoom-out'><svg viewBox='0 0 34.958 33.5' xmlns='http://www.w3.org/2000/svg'><g><g class='stroke'><path d='m1.532,-31.989063l31.996,0l0,63.992001l-31.996,0l0,-63.992001z' stroke-miterlimit='10' stroke-width='3' fill='none' clip-rule='evenodd' fill-rule='evenodd'/></g><g class='fill'><path d='m16.030001,-19.974062l2,0l0,9.997999l-2,0l0,-9.997999z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,-15.975061l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m12.03,15.020939l9.999,0l0,2l-9.999,0l0,-2z' clip-rule='evenodd' fill-rule='evenodd'/><path d='m1.032,-0.977063l31.996,0l0,3l-31.996,0l0,-3z' clip-rule='evenodd' fill-rule='evenodd'/></g></g></svg></div>";
    container.className = 'controlls__map';

    google.maps.event.addDomListener(container.querySelector('.map__zoom-in'), 'click', function () {
        map.setZoom(map.getZoom() + 1);
    });

    google.maps.event.addDomListener(container.querySelector('.map__zoom-out'), 'click', function () {
        map.setZoom(map.getZoom() - 1);
    });

    return container;
}

$('.accordion.contacts .head').each(function(){
    var this_ = $(this);

    this_.on('click', function(){
        var map = $(this).next().find('.maps');

        if(map.hasClass('open')){
            google.maps.event.trigger(map, 'resize');
            return false;
        } else {
            map.addClass('open')
            setTimeout(function(){
                googleMapFunc(map);
            }, 100);
        };        
    });
});

function googleGroups(){
    var myOptions = {
        zoom: 12,
        center: new google.maps.LatLng(53.894717, 27.562312),
        streetViewControl: false,
        zoomControl: false,
        scaleControl: false,
        panControl: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_groups'), myOptions),
        mapType = new google.maps.StyledMapType(style, { name:"Grayscale" });  

    controlls = _customZoom(map);
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlls);
    
    map.mapTypes.set('tehgrayz', mapType);
    map.setMapTypeId('tehgrayz');

    setMarkers(map);
};
var schools = [];
function setMarkers(map){
    var maping = $('.accordion.contacts').find('.maps');

    maping.each(function(index){
        var data = [];
            data[0] = $(this).data('longitude');
            data[1] = $(this).data('latitude');
            data[2] = $(this).parents('.content').prev().find('.js-address').html();
            data[3] = $(this).parents('.content').prev().find('.js-tel').html();
            data[4] = $(this).parents('.content').prev().find('.js-time').html();
            schools[index] = data;
    });

    var image = {
        url: 'prod/img/svg/map_marker.svg',
        size: new google.maps.Size(31, 54),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 54)
    };

    var infowindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 150
    });

    var markersBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < schools.length; i++) {
        var school = schools[i];

        var markerPosition = new google.maps.LatLng(school[0], school[1]);
        markersBounds.extend(markerPosition);
        var marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            icon: image,
            info: '<div id="gm_content" class="tip_containet">' + '<div class="tip_title">' + school[2] + '</div>' + '<div class="tip_address">' + school[3] + '</div>' + '<div class="tip_phone">' + school[4] + '</div>' + '</div>'
        });
        (function (marker, i){
            google.maps.event.addListener(marker, 'click', function(){
                infowindow.setContent(this.info);
                infowindow.open(map, marker);
            });
        })(marker, i);
    };
    map.setCenter(markersBounds.getCenter(), map.fitBounds(markersBounds));
};
googleGroups();