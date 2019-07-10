var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        loaderColor: 'purple',
        cursorColor: 'navy',
        plugins: [WaveSurfer.cursor.create()]
    };

    // Init wavesurfer
    wavesurfer = WaveSurfer.create(options);

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
  			r0c1.innerHTML = "Sym";
  			r0c2.innerHTML = "Extn Type";
  			r0c3.innerHTML = "Manner";
  			r0c4.innerHTML = "Place";



  			var r1 = table.insertRow(1);
  			var r1c1 = r1.insertCell(0);
  			var r1c2 = r1.insertCell(1);
  			var r1c3 = r1.insertCell(2);
  			var r1c4 = r1.insertCell(3);
  			r1c1.innerHTML = "v";
  			r1c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r1c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r1c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

  			var r2 = table.insertRow(2);
  			var r2c1 = r2.insertCell(0);
  			var r2c2 = r2.insertCell(1);
  			var r2c3 = r2.insertCell(2);
  			var r2c4 = r2.insertCell(3);
  			r2c1.innerHTML = "i";
  			r2c2.innerHTML = '<select id="extn"><option value="" selected disabled hidden>select extn type</option><option value="none" >none</option><option value="voiced">voiced</option><option value="unvoiced">unvoiced</option><option value="unv-unasp-plo" >Unvoiced-Unasp-plosive</option><option value="unv-asp-plo" >Unvoiced-asp-plosive</option><option value="v-unasp-plo" >voiced-Unasp-plosive</option><option value="v-asp-plo" >voiced-asp-plosive</option></select>';
  			r2c3.innerHTML='<select id="manner"><option value="" selected disabled hidden>select manner</option><option value="none" >none</option><option value="stop">stop</option><option value="nasal">nasal</option><option value="semi-vo" >semi-vowel</option><option value="short-vo" >short-vowel</option><option value="long-vo" >long-vowel</option><option value="dipth" >dipthong</option><option value="fri" >fricative</option></select>'
  			r2c4.innerHTML='<select id="place"><option value="" selected disabled hidden>select place</option><option value="none" >none</option><option value="velar">velar</option><option value="platal">platal</option><option value="alveolar" >alveolar</option><option value="retroflex" >retroflex</option><option value="dental" >dental</option><option value="labial" >labial</option><option value="front-high" >front-high</option><option value="front-mid" >front-mid</option><option value="central-low" >central-low</option><option value="back-high" >back-high</option><option value="back-mid" >back-mid</option></select>'

		}

		if(sel==="Telugu"){
			document.getElementById("utterance").innerHTML = " ఈరోజు వార్తల్లోని ముఖ్యామ్శాలు" ;
			document.getElementById("translit").innerHTML ="iirooju vaartallooni mukhyaamshaalu " ;
			document.getElementById("syll").innerHTML = " ii roo ju vaar tal loo ni mukh yaam shaa lu" ;
			document.getElementById("ph").innerHTML = " ii r oo j u v aa r t a l l oo n i m u kh y aa m sh aa l u"  ;
			wavesurfer.load('telugu.mp3');
			$("#final1").empty();
			$("#final3").empty();

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

    
});





