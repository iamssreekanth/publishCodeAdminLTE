//alert('sree');

function loadData(value)
{
     //alert('sree');
    //alert(id);
    //debugger
    //$('#'+value).DataTable({destroy: true }).clear();
    //if ( ! $.fn.DataTable.isDataTable( '#'+value ) ) {
    setTimeout(function () {
        $('#'+value).DataTable({
        //$('#tbldivDistrictwise').DataTable({
          destroy: true,
          pageLength : 7,

         // dom: 'Bfrtip',
        //   buttons: [
        //       'copy', 'csv', 'excel', 'pdf', 'print'
        //   ],
    
          'paging'      : true,
          'lengthChange': false,
          'searching'   : false,
          'ordering'    : true,
          'info'        : true,
          'autoWidth'   : false
        });
        $('.overlay').hide();
    }
    , 10);
  //}
}


function show(value)
{
$('#'+value).show();
}
function hide()
{
  $('#'+value).hide();
}

function clearData(value)
{
  if ( ! $.fn.DataTable.isDataTable( '#'+value ) ) {
  var dataTable = $('#'+value).DataTable();
  dataTable.clear();
  }
}



function loadDONUTData(value)
{
     //alert('sree');
    //alert(id);
    //debugger
    //$('#'+value).DataTable({destroy: true }).clear();
    //if ( ! $.fn.DataTable.isDataTable( '#'+value ) ) {
    setTimeout(function () {
/*
     * DONUT CHART
     * -----------
     */

    // var donutData = [
    //   { label: 'Series2', data: 30, color: '#3c8dbc' },
    //   { label: 'Series3', data: 20, color: '#0073b7' },
    //   { label: 'Series4', data: 50, color: '#00c0ef' }
    // ]
    var donutData = [
      { label: 'Active', data: 30, color: '#00a65a' },
      { label: 'Pending', data: 20, color: '#f39c12' },
      { label: 'Inactive', data: 50, color: '#dd4b39' }
    ]
    $.plot('#donut-chart', donutData, {
      series: {
        pie: {
          show       : true,
          radius     : 1,
          innerRadius: 0.5,
          label      : {
            show     : true,
            radius   : 2 / 3,
            formatter: labelFormatter,
            threshold: 0.1
          }

        }
      },
      legend: {
        show: false
      }
    })
    /*
     * END DONUT CHART
     */
  }
  , 10);
//}
}

function loadMap(value) {
//   var markers = [{lat:18.1124,lng:79.0193}
//     ,{lat:17.6466822,lng:80.8627215}
//   ,{lat:18.5427703,lng:78.2233483}
// ,{lat:17.5054565,lng:80.8163114}
// ,{lat:18.5667366,lng:77.9535287}
// ,{lat:17.1883,lng:79.2000}
// ,{lat:17.3305097,lng:80.6980136}];
// var image = {
//   url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//   // This marker is 20 pixels wide by 32 pixels high.
//   size: new google.maps.Size(20, 32),
//   // The origin for this image is (0, 0).
//   origin: new google.maps.Point(0, 0),
//   // The anchor for this image is the base of the flagpole at (0, 32).
//   anchor: new google.maps.Point(0, 32)
// };
var shape = {
  coords: [1, 1, 1, 20, 18, 20, 18, 1],
  type: 'poly'
};
var icon = {
  url: "../res/sit_marron.png", // url
  scaledSize: new google.maps.Size(50, 50), // scaled size
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};
var markers = value;
  var mapOptions = {
      center: new google.maps.LatLng(17.3850, 78.4867),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var infoWindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById("divMap"), mapOptions);
  for (i = 0; i < markers.length; i++) {
      var data = markers[i]
      var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          //icon: image,
          //label: 'P',
          //shape:shape,
          title: data.ppcCode+'-' + data.ppcName,
      });
      // (function (marker, data) {
      //     google.maps.event.addListener(marker, "click", function (e) {
      //         infoWindow.setContent(data.description);
      //         infoWindow.open(map, marker);
      //     });
      // })(marker, data);
  }
}
function loadDate(value) {
   //Date picker
   $('#'+value).datepicker({
    format: 'dd/MM/yyyy',
    autoclose: true
  })
}


function loadTableau()
{
// $(document).ready(function(){
 //sReekanth
    $.getScript("https://repsvr.cgg.gov.in/javascripts/api/viz_v1.js");
// });
}