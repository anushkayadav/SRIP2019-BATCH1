function init(){


		var wavesurfer = WaveSurfer.create({
		container: '#waveform',
    	waveColor: 'violet',
    	progressColor: 'purple',


        loaderColor: 'purple',
        cursorColor: 'navy',

    plugins: [
            WaveSurfer.timeline.create({
                container: '#wave-timeline',
                primaryLabelInterval: 1,
                secondaryLabelInterval: 10
            }),
             WaveSurfer.cursor.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
                'background-color': '#000',
                color: '#fff',
                padding: '2px',
                'font-size': '10px'
            }
        }),
         

            WaveSurfer.regions.create(),
        ]

	});

	if (location.search.match('scroll')) {
        options.minPxPerSec = 100;
        options.scrollParent = true;
    }

    if (location.search.match('normalize')) {
        options.normalize = true;
    }



        // Zoom slider
var slider = document.querySelector('#slider');

slider.oninput = function () {
  var zoomLevel = Number(slider.value);
  wavesurfer.zoom(zoomLevel);
};




    wavesurfer.on('ready', function() {
        wavesurfer.enableDragSelection({
            color: randomColor(0.1)
        });

 
    });
    wavesurfer.on('region-click', function(region, e) {
        e.stopPropagation();
        // Play on click, loop on shift click
        e.shiftKey ? region.playLoop() : region.play();
    });


    wavesurfer.on('region-play', function(region) {
        region.once('out', function() {
            wavesurfer.play(region.start);
            wavesurfer.pause();
        });
    });

    function randomColor(alpha) {
    return (
        'rgba(' +
        [
            ~~(Math.random() * 255),
            ~~(Math.random() * 255),
            ~~(Math.random() * 255),
            alpha || 1
        ] +
        ')'
    );
}
//console.log(wavesurfer.regions.list)


	$( "#play" ).click(function(){
		//wavesurfer.backend.ac.resume();
		
		wavesurfer.playPause();
		
	});

	


	

	$("#mySelect").on('change', function() {
		//alert( this.value );
		var sel=this.value;
		if(sel==="Hindi"){

			document.getElementById("utterance").innerHTML = " विदेश् मंत्रालय् के प्रवक्ता ने फिर् कहा" ;
			document.getElementById("translit").innerHTML ="videsh man'traalay ke pravaktaa ne phir kahaa " ;
			document.getElementById("syll").innerHTML = "vi desh man' traa lay ke pra vak taa ne phir ka haa" ;
			document.getElementById("ph").innerHTML = " v i d e sh m a n' t r aa l a y k e p r a v a k t aa n e ph i r k a h aa"  ;
			wavesurfer.load('hindi.mp3');
			$("#final2").empty();
			$("#final3").empty();



			var table = document.getElementById("final1");

			var r0 = table.insertRow(0);
  			var r0c1 = r0.insertCell(0);
  			var r0c2 = r0.insertCell(1);
  			var r0c3 = r0.insertCell(2);
  			var r0c4 = r0.insertCell(3);
  			r0.className="first";

  			r0c1.innerHTML = '<strong>Sym</strong>';
  			r0c2.innerHTML = '<strong>Extn Type</strong>';
  			r0c3.innerHTML = '<strong>Manner</strong>';
  			r0c4.innerHTML = '<strong>Place</strong>';



  			var r1 = table.insertRow(1);
  			var r1c1 = r1.insertCell(0);
  			var r1c2 = r1.insertCell(1);
  			var r1c3 = r1.insertCell(2);
  			var r1c4 = r1.insertCell(3);
  			r1c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="v1" ">v</button>';
  			r1c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			
  			r1c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r1c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r2 = table.insertRow(2);
  			var r2c1 = r2.insertCell(0);
  			var r2c2 = r2.insertCell(1);
  			var r2c3 = r2.insertCell(2);
  			var r2c4 = r2.insertCell(3);
  			r2c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="i1" ">i</button>';
  			r2c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r2c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r2c4.innerHTML='<select class="placefh"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r3 = table.insertRow(3);
  			var r3c1 = r3.insertCell(0);
  			var r3c2 = r3.insertCell(1);
  			var r3c3 = r3.insertCell(2);
  			var r3c4 = r3.insertCell(3);
  			r3c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="d" ">d</button>'
  			r3c2.innerHTML = '<select class="extnvun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r3c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r3c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r4 = table.insertRow(4);
  			var r4c1 = r4.insertCell(0);
  			var r4c2 = r4.insertCell(1);
  			var r4c3 = r4.insertCell(2);
  			var r4c4 = r4.insertCell(3);
  			r4c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="e1" ">e</button>'
  			r4c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r4c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r4c4.innerHTML='<select class="placefm"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r5 = table.insertRow(5);
  			var r5c1 = r5.insertCell(0);
  			var r5c2 = r5.insertCell(1);
  			var r5c3 = r5.insertCell(2);
  			var r5c4 = r5.insertCell(3);
  			r5c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="sh" ">sh</button>'
  			r5c2.innerHTML = '<select class="extnun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r5c3.innerHTML='<select class="mannerf"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r5c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r6 = table.insertRow(6 );
  			var r6c1 = r6.insertCell(0);
  			var r6c2 = r6.insertCell(1);
  			var r6c3 = r6.insertCell(2);
  			var r6c4 = r6.insertCell(3);
  			r6c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="m" ">m</button>'
  			r6c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r6c3.innerHTML='<select class="mannern"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r6c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r7 = table.insertRow(7);
  			var r7c1 = r7.insertCell(0);
  			var r7c2 = r7.insertCell(1);
  			var r7c3 = r7.insertCell(2);
  			var r7c4 = r7.insertCell(3);
  			r7c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="a1" ">a</button>'
  			r7c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r7c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r7c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r8 = table.insertRow(8 );
  			var r8c1 = r8.insertCell(0);
  			var r8c2 = r8.insertCell(1);
  			var r8c3 = r8.insertCell(2);
  			var r8c4 = r8.insertCell(3);
  			r8c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="n1" ">n</button>'
  			r8c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r8c3.innerHTML='<select class="mannern"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r8c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r9 = table.insertRow(9 );
  			var r9c1 = r9.insertCell(0);
  			var r9c2 = r9.insertCell(1);
  			var r9c3 = r9.insertCell(2);
  			var r9c4 = r9.insertCell(3);
  			r9c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="t1" ">t</button>'
  			r9c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r9c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r9c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r10 = table.insertRow(10 );
  			var r10c1 = r10.insertCell(0);
  			var r10c2 = r10.insertCell(1);
  			var r10c3 = r10.insertCell(2);
  			var r10c4 = r10.insertCell(3);
  			r10c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="r1" ">r</button>'
  			r10c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r10c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r10c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r11 = table.insertRow(11 );
  			var r11c1 = r11.insertCell(0);
  			var r11c2 = r11.insertCell(1);
  			var r11c3 = r11.insertCell(2);
  			var r11c4 = r11.insertCell(3);
  			r11c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa1" ">aa</button>'
  			r11c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r11c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r11c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r12 = table.insertRow(12);
  			var r12c1 = r12.insertCell(0);
  			var r12c2 = r12.insertCell(1);
  			var r12c3 = r12.insertCell(2);
  			var r12c4 = r12.insertCell(3);
  			r12c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l" ">l</button>'
  			r12c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r12c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r12c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r13 = table.insertRow(13 );
  			var r13c1 = r13.insertCell(0);
  			var r13c2 = r13.insertCell(1);
  			var r13c3 = r13.insertCell(2);
  			var r13c4 = r13.insertCell(3);
  			r13c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a2" ">a</button>'
  			r13c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r13c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r13c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r14 = table.insertRow(14 );
  			var r14c1 = r14.insertCell(0);
  			var r14c2 = r14.insertCell(1);
  			var r14c3 = r14.insertCell(2);
  			var r14c4 = r14.insertCell(3);
  			r14c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="y" ">y</button>'
  			r14c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r14c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r14c4.innerHTML='<select class="placep"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r15 = table.insertRow(15 );
  			var r15c1 = r15.insertCell(0);
  			var r15c2 = r15.insertCell(1);
  			var r15c3 = r15.insertCell(2);
  			var r15c4 = r15.insertCell(3);
  			r15c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="k1" ">k</button>'
  			r15c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r15c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r15c4.innerHTML='<select class="placev"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r16 = table.insertRow(16 );
  			var r16c1 = r16.insertCell(0);
  			var r16c2 = r16.insertCell(1);
  			var r16c3 = r16.insertCell(2);
  			var r16c4 = r16.insertCell(3);
  			r16c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="e2" ">e</button>'
  			r16c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r16c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r16c4.innerHTML='<select class="placefm"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r17 = table.insertRow(17 );
  			var r17c1 = r17.insertCell(0);
  			var r17c2 = r17.insertCell(1);
  			var r17c3 = r17.insertCell(2);
  			var r17c4 = r17.insertCell(3);
  			r17c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="p" ">p</button>'
  			r17c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r17c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r17c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r18 = table.insertRow(18 );
  			var r18c1 = r18.insertCell(0);
  			var r18c2 = r18.insertCell(1);
  			var r18c3 = r18.insertCell(2);
  			var r18c4 = r18.insertCell(3);
  			r18c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="r2" ">r</button>'
  			r18c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r18c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r18c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r19 = table.insertRow(19 );
  			var r19c1 = r19.insertCell(0);
  			var r19c2 = r19.insertCell(1);
  			var r19c3 = r19.insertCell(2);
  			var r19c4 = r19.insertCell(3);
  			r19c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a3" ">a</button>'
  			r19c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r19c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r19c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r20 = table.insertRow(20 );
  			var r20c1 = r20.insertCell(0);
  			var r20c2 = r20.insertCell(1);
  			var r20c3 = r20.insertCell(2);
  			var r20c4 = r20.insertCell(3);
  			r20c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="v2" ">v</button>'
  			r20c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r20c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r20c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r21 = table.insertRow(21 );
  			var r21c1 = r21.insertCell(0);
  			var r21c2 = r21.insertCell(1);
  			var r21c3 = r21.insertCell(2);
  			var r21c4 = r21.insertCell(3);
  			r21c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a4" ">a</button>'
  			r21c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r21c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r21c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r22 = table.insertRow(22 );
  			var r22c1 = r22.insertCell(0);
  			var r22c2 = r22.insertCell(1);
  			var r22c3 = r22.insertCell(2);
  			var r22c4 = r22.insertCell(3);
  			r22c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="k2" ">k</button>'
  			r22c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r22c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r22c4.innerHTML='<select class="placev"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r23 = table.insertRow(23 );
  			var r23c1 = r23.insertCell(0);
  			var r23c2 = r23.insertCell(1);
  			var r23c3 = r23.insertCell(2);
  			var r23c4 = r23.insertCell(3);
  			r23c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="t2" ">t</button>'
  			r23c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r23c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r23c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r24 = table.insertRow(24 );
  			var r24c1 = r24.insertCell(0);
  			var r24c2 = r24.insertCell(1);
  			var r24c3 = r24.insertCell(2);
  			var r24c4 = r24.insertCell(3);
  			r24c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa2" ">aa</button>'
  			r24c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r24c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r24c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r25 = table.insertRow(25 );
  			var r25c1 = r25.insertCell(0);
  			var r25c2 = r25.insertCell(1);
  			var r25c3 = r25.insertCell(2);
  			var r25c4 = r25.insertCell(3);
  			r25c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="n2" ">n</button>'
  			r25c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r25c3.innerHTML='<select class="mannern"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r25c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r26 = table.insertRow(26 );
  			var r26c1 = r26.insertCell(0);
  			var r26c2 = r26.insertCell(1);
  			var r26c3 = r26.insertCell(2);
  			var r26c4 = r26.insertCell(3);
  			r26c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="e3" ">e</button>'
  			r26c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r26c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r26c4.innerHTML='<select class="placefm"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r27 = table.insertRow(27 );
  			var r27c1 = r27.insertCell(0);
  			var r27c2 = r27.insertCell(1);
  			var r27c3 = r27.insertCell(2);
  			var r27c4 = r27.insertCell(3);
  			r27c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="ph" ">ph</button>'
  			r27c2.innerHTML = '<select class="extnuna"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r27c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r27c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r28 = table.insertRow(28 );
  			var r28c1 = r28.insertCell(0);
  			var r28c2 = r28.insertCell(1);
  			var r28c3 = r28.insertCell(2);
  			var r28c4 = r28.insertCell(3);
  			r28c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="i2" ">i</button>'
  			r28c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r28c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r28c4.innerHTML='<select class="placefh"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r29 = table.insertRow(29 );
  			var r29c1 = r29.insertCell(0);
  			var r29c2 = r29.insertCell(1);
  			var r29c3 = r29.insertCell(2);
  			var r29c4 = r29.insertCell(3);
  			r29c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="r3" ">r</button>'
  			r29c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r29c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r29c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r30 = table.insertRow(30 );
  			var r30c1 = r30.insertCell(0);
  			var r30c2 = r30.insertCell(1);
  			var r30c3 = r30.insertCell(2);
  			var r30c4 = r30.insertCell(3);
  			r30c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="k3" ">k</button>'
  			r30c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r30c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r30c4.innerHTML='<select class="placev"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r31 = table.insertRow(31 );
  			var r31c1 = r31.insertCell(0);
  			var r31c2 = r31.insertCell(1);
  			var r31c3 = r31.insertCell(2);
  			var r31c4 = r31.insertCell(3);
  			r31c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a5" ">a</button>'
  			r31c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r31c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r31c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r32 = table.insertRow(32 );
  			var r32c1 = r32.insertCell(0);
  			var r32c2 = r32.insertCell(1);
  			var r32c3 = r32.insertCell(2);
  			var r32c4 = r32.insertCell(3);
  			r32c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="h" ">h</button>'
  			r32c2.innerHTML = '<select class="extnun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r32c3.innerHTML='<select class="mannerf"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r32c4.innerHTML='<select class="placev"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r33 = table.insertRow(33  );
  			var r33c1 = r33.insertCell(0);
  			var r33c2 = r33.insertCell(1);
  			var r33c3 = r33.insertCell(2);
  			var r33c4 = r33.insertCell(3);
  			r33c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa3" ">aa</button>'
  			r33c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			
  			 r33c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			
  			r33c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'


  			// adding region for each phenome
			$( "#v1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'one',start:0.055,end:0.1,color: randomColor(0.1)});
			});
			$( "#i1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.11,end:0.18,color: randomColor(0.1)});
			});

			$( "#d" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.18,end:0.293,color: randomColor(0.1)});
			});

			$( "#e1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.295,end:0.405,color: randomColor(0.1)});
			});

			$( "#sh" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.413,end:0.555,color: randomColor(0.1)});
			});

			$( "#m" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.555,end:0.623,color: randomColor(0.1)});
			});

			$( "#a1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.627,end:0.666,color: randomColor(0.1)});
			});

			$( "#n1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.671,end:0.745,color: randomColor(0.1)});
			});

			$( "#t1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.745,end:0.784,color: randomColor(0.1)});
			});

			$( "#r1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.785,end:0.830,color: randomColor(0.1)});
			});

			$( "#aa1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.830,end:0.945,color: randomColor(0.1)});
			});

			$( "#l" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:0.945,end:0.994 ,color: randomColor(0.1)});
			});


			$( "#a" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.012,end:1.052 ,color: randomColor(0.1)});
			});

			$( "#y" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.059,end:1.170 ,color: randomColor(0.1)});
			});

			$( "#k1" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.167,end:1.240 ,color: randomColor(0.1)});
			});

			$( "#e2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.256,end:1.350 ,color: randomColor(0.1)});
			});

			$( "#p" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.351,end:1.405 ,color: randomColor(0.1)});
			});

			$( "#r2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.410,end:1.443 ,color: randomColor(0.1)});
			});

			$( "#a3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.450,end:1.481 ,color: randomColor(0.1)});
			});

			$( "#v2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.488,end:1.558 ,color: randomColor(0.1)});
			});

			$( "#a4" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.568,end:1.768   ,color: randomColor(0.1)});
			});

			$( "#k2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.768,end:1.850 ,color: randomColor(0.1)});
			});

			$( "#t2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.850,end:1.870 ,color: randomColor(0.1)});
			});

			$( "#aa2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.870,end:1.959 ,color: randomColor(0.1)});
			});

			$( "#n2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:1.960,end:2.056 ,color: randomColor(0.1)});
			});

			$( "#e3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.095,end:2.236 ,color: randomColor(0.1)});
			});

			$( "#ph" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.236,end:2.335 ,color: randomColor(0.1)});
			});

			$( "#i2" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.337,end:2.391 ,color: randomColor(0.1)});
			});

			$( "#r3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.405,end:2.485 ,color: randomColor(0.1)});
			});

			$( "#k3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.511,end:2.549 ,color: randomColor(0.1)});
			});

			$( "#a5" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.553,end:2.660 ,color: randomColor(0.1)});
			});

			$( "#h" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.663,end:2.743 ,color: randomColor(0.1)});
			});

			$( "#aa3" ).click(function(){
				wavesurfer.clearRegions();
				wavesurfer.addRegion({id:'two',start:2.750,end:2.932 ,color: randomColor(0.1)});
			});


			//validating the choices slected

			$(".extnv").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="voiced"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".extnun").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="unvoiced"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".extnvun").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="v-unasp-plo"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".extnunun").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="unv-unasp-plo"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".extnuna").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="unv-asp-plo"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});


			$(".mannersv").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="short-vo"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".mannersev").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="semi-vo"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".manners").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="stop"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".mannerlv").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="long-vo"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".mannern").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="nasal"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".mannerf").on('change', function() {
				var s=this.value;
					//alert(s);
				if(s==="fri"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placel").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="labial"){
						$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placefm").on('change', function() {
				var s=this.value;
			//alert(s);
				if(s==="front-mid"){
						$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placefh").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="front-high"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placecl").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="central-low"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placed").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="dental"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placea").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="alveolar"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placev").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="velar"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

			$(".placep").on('change', function() {
				var s=this.value;
				//alert(s);
				if(s==="platal"){
					$(this).removeClass("btn btn-danger");
					$(this).addClass("btn btn-success");
				}
				else{
					$(this).removeClass("btn btn-success");
					$(this).addClass("btn btn-danger");
					alert("Wrong.. Try again :(");

				}
			});

				$( "#reset" ).click(function(){
					wavesurfer.clearRegions();
					$("select").removeClass("btn btn-danger");
					$("select").removeClass("btn btn-success");
					$("select").val("none");
				});






	


		}













		if(sel==="Telugu"){
			document.getElementById("utterance").innerHTML = " ఈరోజు వార్తల్లోని ముఖ్యామ్శాలు" ;
			document.getElementById("translit").innerHTML ="iirooju vaartallooni mukhyaamshaalu " ;
			document.getElementById("syll").innerHTML = " ii roo ju vaar tal loo ni mukh yaam shaa lu" ;
			document.getElementById("ph").innerHTML = " ii r oo j u v aa r t a l l oo n i m u kh y aa m sh aa l u"  ;
			wavesurfer.load('telugu.mp3');
			$("#final1").empty();
			$("#final3").empty();
			wavesurfer.clearRegions();

			var table = document.getElementById("final2");

			var r0 = table.insertRow(0);
  			var r0c1 = r0.insertCell(0);
  			var r0c2 = r0.insertCell(1);
  			var r0c3 = r0.insertCell(2);
  			var r0c4 = r0.insertCell(3);
  			r0.className="first";

  			r0c1.innerHTML = '<strong>Sym</strong>';
  			r0c2.innerHTML = '<strong>Extn Type</strong>';
  			r0c3.innerHTML = '<strong>Manner</strong>';
  			r0c4.innerHTML = '<strong>Place</strong>';



  			var r1 = table.insertRow(1);
  			var r1c1 = r1.insertCell(0);
  			var r1c2 = r1.insertCell(1);
  			var r1c3 = r1.insertCell(2);
  			var r1c4 = r1.insertCell(3);
  			r1c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="ii" ">ii</button>';
  			r1c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			
  			r1c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r1c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r2 = table.insertRow(2);
  			var r2c1 = r2.insertCell(0);
  			var r2c2 = r2.insertCell(1);
  			var r2c3 = r2.insertCell(2);
  			var r2c4 = r2.insertCell(3);
  			r2c1.innerHTML = '<button type="button" class="btn btn-outline-dark btn-sm m-1" id="r1" ">r</button>';
  			r2c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r2c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r2c4.innerHTML='<select class="placefh"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r3 = table.insertRow(3);
  			var r3c1 = r3.insertCell(0);
  			var r3c2 = r3.insertCell(1);
  			var r3c3 = r3.insertCell(2);
  			var r3c4 = r3.insertCell(3);
  			r3c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="oo1 ">oo</button>'
  			r3c2.innerHTML = '<select class="extnvun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r3c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r3c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r4 = table.insertRow(4);
  			var r4c1 = r4.insertCell(0);
  			var r4c2 = r4.insertCell(1);
  			var r4c3 = r4.insertCell(2);
  			var r4c4 = r4.insertCell(3);
  			r4c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="j" ">j</button>'
  			r4c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r4c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r4c4.innerHTML='<select class="placefm"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r5 = table.insertRow(5);
  			var r5c1 = r5.insertCell(0);
  			var r5c2 = r5.insertCell(1);
  			var r5c3 = r5.insertCell(2);
  			var r5c4 = r5.insertCell(3);
  			r5c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="u1" ">u</button>'
  			r5c2.innerHTML = '<select class="extnun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r5c3.innerHTML='<select class="mannerf"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r5c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r6 = table.insertRow(6 );
  			var r6c1 = r6.insertCell(0);
  			var r6c2 = r6.insertCell(1);
  			var r6c3 = r6.insertCell(2);
  			var r6c4 = r6.insertCell(3);
  			r6c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="v" ">v</button>'
  			r6c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r6c3.innerHTML='<select class="mannern"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r6c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r7 = table.insertRow(7);
  			var r7c1 = r7.insertCell(0);
  			var r7c2 = r7.insertCell(1);
  			var r7c3 = r7.insertCell(2);
  			var r7c4 = r7.insertCell(3);
  			r7c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="aa1" ">aa</button>'
  			r7c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r7c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r7c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r8 = table.insertRow(8 );
  			var r8c1 = r8.insertCell(0);
  			var r8c2 = r8.insertCell(1);
  			var r8c3 = r8.insertCell(2);
  			var r8c4 = r8.insertCell(3);
  			r8c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="r2" ">r</button>'
  			r8c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r8c3.innerHTML='<select class="mannern"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r8c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r9 = table.insertRow(9 );
  			var r9c1 = r9.insertCell(0);
  			var r9c2 = r9.insertCell(1);
  			var r9c3 = r9.insertCell(2);
  			var r9c4 = r9.insertCell(3);
  			r9c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="t" ">t</button>'
  			r9c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r9c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r9c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r10 = table.insertRow(10 );
  			var r10c1 = r10.insertCell(0);
  			var r10c2 = r10.insertCell(1);
  			var r10c3 = r10.insertCell(2);
  			var r10c4 = r10.insertCell(3);
  			r10c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="a" ">a</button>'
  			r10c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r10c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r10c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r11 = table.insertRow(11 );
  			var r11c1 = r11.insertCell(0);
  			var r11c2 = r11.insertCell(1);
  			var r11c3 = r11.insertCell(2);
  			var r11c4 = r11.insertCell(3);
  			r11c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l1" ">l</button>'
  			r11c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r11c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r11c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r12 = table.insertRow(12);
  			var r12c1 = r12.insertCell(0);
  			var r12c2 = r12.insertCell(1);
  			var r12c3 = r12.insertCell(2);
  			var r12c4 = r12.insertCell(3);
  			r12c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l2" ">l</button>'
  			r12c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r12c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r12c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r13 = table.insertRow(13 );
  			var r13c1 = r13.insertCell(0);
  			var r13c2 = r13.insertCell(1);
  			var r13c3 = r13.insertCell(2);
  			var r13c4 = r13.insertCell(3);
  			r13c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="oo2" ">oo</button>'
  			r13c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r13c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r13c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r14 = table.insertRow(14 );
  			var r14c1 = r14.insertCell(0);
  			var r14c2 = r14.insertCell(1);
  			var r14c3 = r14.insertCell(2);
  			var r14c4 = r14.insertCell(3);
  			r14c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="n" ">n</button>'
  			r14c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r14c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r14c4.innerHTML='<select class="placep"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r15 = table.insertRow(15 );
  			var r15c1 = r15.insertCell(0);
  			var r15c2 = r15.insertCell(1);
  			var r15c3 = r15.insertCell(2);
  			var r15c4 = r15.insertCell(3);
  			r15c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="i" ">i</button>'
  			r15c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r15c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r15c4.innerHTML='<select class="placev"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r16 = table.insertRow(16 );
  			var r16c1 = r16.insertCell(0);
  			var r16c2 = r16.insertCell(1);
  			var r16c3 = r16.insertCell(2);
  			var r16c4 = r16.insertCell(3);
  			r16c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="m1" ">m</button>'
  			r16c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r16c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r16c4.innerHTML='<select class="placefm"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r17 = table.insertRow(17 );
  			var r17c1 = r17.insertCell(0);
  			var r17c2 = r17.insertCell(1);
  			var r17c3 = r17.insertCell(2);
  			var r17c4 = r17.insertCell(3);
  			r17c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="u2" ">u</button>'
  			r17c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r17c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r17c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r18 = table.insertRow(18 );
  			var r18c1 = r18.insertCell(0);
  			var r18c2 = r18.insertCell(1);
  			var r18c3 = r18.insertCell(2);
  			var r18c4 = r18.insertCell(3);
  			r18c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="kh" ">kh</button>'
  			r18c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r18c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r18c4.innerHTML='<select class="placea"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r19 = table.insertRow(19 );
  			var r19c1 = r19.insertCell(0);
  			var r19c2 = r19.insertCell(1);
  			var r19c3 = r19.insertCell(2);
  			var r19c4 = r19.insertCell(3);
  			r19c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="y" ">y</button>'
  			r19c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r19c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r19c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r20 = table.insertRow(20 );
  			var r20c1 = r20.insertCell(0);
  			var r20c2 = r20.insertCell(1);
  			var r20c3 = r20.insertCell(2);
  			var r20c4 = r20.insertCell(3);
  			r20c1.innerHTML = '<button type="button"   class="btn btn-outline-dark btn-sm m-1" id="aa2" ">aa</button>'
  			r20c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r20c3.innerHTML='<select class="mannersev"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r20c4.innerHTML='<select class="placel"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r21 = table.insertRow(21 );
  			var r21c1 = r21.insertCell(0);
  			var r21c2 = r21.insertCell(1);
  			var r21c3 = r21.insertCell(2);
  			var r21c4 = r21.insertCell(3);
  			r21c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="m2" ">m</button>'
  			r21c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r21c3.innerHTML='<select class="mannersv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r21c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r22 = table.insertRow(22 );
  			var r22c1 = r22.insertCell(0);
  			var r22c2 = r22.insertCell(1);
  			var r22c3 = r22.insertCell(2);
  			var r22c4 = r22.insertCell(3);
  			r22c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="sh" ">sh</button>'
  			r22c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r22c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r22c4.innerHTML='<select class="placev"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r23 = table.insertRow(23 );
  			var r23c1 = r23.insertCell(0);
  			var r23c2 = r23.insertCell(1);
  			var r23c3 = r23.insertCell(2);
  			var r23c4 = r23.insertCell(3);
  			r23c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="aa3" ">aa</button>'
  			r23c2.innerHTML = '<select class="extnunun"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r23c3.innerHTML='<select class="manners"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r23c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r24 = table.insertRow(24 );
  			var r24c1 = r24.insertCell(0);
  			var r24c2 = r24.insertCell(1);
  			var r24c3 = r24.insertCell(2);
  			var r24c4 = r24.insertCell(3);
  			r24c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="l3" ">l</button>'
  			r24c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r24c3.innerHTML='<select class="mannerlv"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r24c4.innerHTML='<select class="placecl"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r25 = table.insertRow(25 );
  			var r25c1 = r25.insertCell(0);
  			var r25c2 = r25.insertCell(1);
  			var r25c3 = r25.insertCell(2);
  			var r25c4 = r25.insertCell(3);
  			r25c1.innerHTML = '<button type="button"  class="btn btn-outline-dark btn-sm m-1" id="u3" ">u</button>'
  			r25c2.innerHTML = '<select class="extnv"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r25c3.innerHTML='<select class="mannern"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r25c4.innerHTML='<select class="placed"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'


		}







		if(sel==="Tamil"){
			document.getElementById("utterance").innerHTML = " வணக்கம் இன்ரைய தலைப்பு செய்திகள்" ;
			document.getElementById("translit").innerHTML ="vand~akkam inraiya talaippu cheydikal:" ;
			document.getElementById("syll").innerHTML = "  va nd~a kkam in rai ya ta lai ppu chey di kal:" ;
			document.getElementById("ph").innerHTML = "    v a nd~ a kk a m i n r ai y a t a l ai pp u ch ey d i k a l:"  ;
			wavesurfer.load('tamil.mp3');
			$("#final1").empty();
			$("#final2").empty();

		}


	});


	

	





}
$(init);