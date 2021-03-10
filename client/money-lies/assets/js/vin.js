$(function() {
  $('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: null,
    color: '#bcb388',
    enableZoom: true,
    showTooltip: true,
    selectedColor: '#83420d',
    hoverColor: '#83420d',
    borderWidth: '.5',
    borderOpacity: '1',
    borderColor: "#fff",
    colors: {
      wa: '#BBC25C',
      or: '#A9AF3D',
      ca: '#9A9F28',
      id: '#E4E7BE',
      nv: '#BBC25C',
      az: '#D6DA9D',
      mt: '#C8CE7D',
      ut: '#E4E7BE',
      nm: '#D6DA9D',
      wy: '#D6DA9D',
      co: '#C8CE7D',
      nd: '#C8CE7D',
      sd: '#C8CE7D',
      ne: '#D6DA9D',
      ks: '#E4E7BE',
      ok: '#E4E7BE',
      tx: '#E4E7BE',
      mn: '#C8CE7D',
      ia: '#E4E7BE',
      mo: '#E4E7BE',
      ar: '#F1F3DE',
      la: '#D6DA9D',
      mi: '#E4E7BE',
      wi: '#D6DA9D',
      il: '#D6DA9D',
      ky: '#D6DA9D',
      tn: '#E4E7BE',
      ms: '#F1F3DE',
      al: '#E4E7BE',
      in: '#E4E7BE',
      oh: '#E4E7BE',
      wv: '#D6DA9D',
      va: '#C8CE7D',
      nc: '#D6DA9D',
      sc: '#C8CE7D',
      ga: '#E4E7BE',
      fl: '#C8CE7D',
      ny: '#A9AF3D',
      pa: '#C8CE7D',
      md: '#A9AF3D',
      de: '#BBC25C',
      nj: '#A9AF3D',
      ct: '#A9AF3D',
      ri: '#A9AF3D',
      ma: '#A9AF3D',
      vt: '#A9AF3D',
      nh: '#B0B847',
      me: '#B0B847',
      ak: '#A9AF3D',
      hi: '#8B8E14'
    },
    onRegionClick: function(event, code, region) {
      $(".active").removeClass("active");

      $("#" + code).addClass("active");
      $.smoothScroll({
        scrollElement: $('.map-data'),
        scrollTarget: $('#' + code),
      });
    },


    onLabelShow: function(event, label, code) {

      var html = $("#" + code).html();

      label[0].innerHTML = html;

    }

  });

  $.getJSON("assets/js/data.json", function(data) {

    var items = [];
    $.each(data, function(key, val) {

      var html = '<div id="' + val.code + '" class="active d-block d-sm-flex d-sm-block d-md-none state-data my-2">';
      html += '<h3 class="m-0 w-100 w-sm-40 w-md-100 text-center text-md-left d-flex align-items-center align-items-md-start d-md-block justify-content-center"> <b><strong class="d-inline d-sm-block">' + val.state + '</strong> <span class="d-sm-block d-md-none d-inline ">#' + val.rank + '</span></b></h3>';
      html += '<div class="d-flex d-sm-none d-md-flex text-left labels"><strong class="d-block w-33">Growth</strong> <strong class="d-block w-66">How Long $1M Could Last</strong></div>';
      html += '<div class="info w-100 w-sm-60 w-md-100 text-left">';
      html += '<div class="d-flex"><strong class="d-block w-33"><b>3%</b><i class="d-md-none"></i></strong> <strong class="d-block w-66 term"><span><b>' + val.scenario3[0] + '</b> YEARS.</span> <span><b>' + val.scenario3[1] + '</b> months</span></strong></div>';
      html += '<div class="d-flex"><strong class="d-block w-33"><b>5%</b><i class="d-md-none"></i></strong> <strong class="d-block w-66 term"><span><b>' + val.scenario2[0] + '</b> years.</span> <span><b>' + val.scenario2[1] + '</b> months</span></strong></div>';
      html += '<div class="d-flex"><strong class="d-block w-33"><b>7%</b><i class="d-md-none"></i></strong> <strong class="d-block w-66 term"><span><b>' + val.scenario1[0] + '</b> years.</span> <span><b>' + val.scenario1[1] + '</b> months</span></strong></div>';

      html += '</div>';

      html += '</div>';
      items.push(html);
    });

    $(".map-data").html(items.join(""));
    var stateHeight = $('.state-data:first-child').outerHeight();
    $(".map-data").height(stateHeight);

    $(window).resize(function(){

      $(".map-data").html(items.join(""));
      var stateHeight = $('.state-data:first-child').outerHeight();
      $(".map-data").height(stateHeight);

      $.smoothScroll({
        scrollElement: $('.map-data'),
        scrollTarget: $('.active')
      });
    });

    $(document).on("click", ".state-data", function() {
      $(".active").removeClass("active");
      $(this).addClass("active");

      var state = $(this).attr("id");

      $("#jqvmap1_" + state).click();

    });

  });


});