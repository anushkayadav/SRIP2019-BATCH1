//this file contains additional features written by me

//for variable size of the simulator according to screen size
var x=$(".simcir_outer_div").width();
x=x*0.90;

//the if else block decides which circuit to display according to user settings
if(sessionStorage.getItem("siso"))
{
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},
    {"type":"OSC"},
    {"type":"D-FF"},
    {"type":"8bitCounter"},
    {"type":"NumSrc"},
    {"type":"DSO"}
  ],
 "devices":[
    {"type":"8bitCounter","id":"dev0","x":104,"y":24,"label":"8bitCounter"},
    {"type":"D-FF","id":"dev1","x":248,"y":248,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":376,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev3","x":112,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev4","x":360,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev5","x":232,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev6","x":128,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev7","x":472,"y":248,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev8","x":488,"y":168,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev9","x":232,"y":152,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev10","x":216,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev11","x":240,"y":192,"label":"Joint","state":{"direction":1}},
    {"type":"Joint","id":"dev12","x":168,"y":200,"label":"Joint","state":{"direction":2}},
    {"type":"Joint","id":"dev13","x":88,"y":208,"label":"Joint","state":{"direction":1}},
    {"type":"Joint","id":"dev14","x":96,"y":248,"label":"Joint","state":{"direction":0}},
    {"type":"DSO","id":"dev15","x":520,"y":144,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
    {"type":"DC","id":"dev16","x":16,"y":16,"label":"DC"},
    {"type":"Joint","id":"dev17","x":48,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"OSC","id":"dev18","x":8,"y":80,"label":"OSC"},
    {"type":"In","id":"dev19","x":40,"y":328,"label":"In"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev17.out0"},
    {"from":"dev0.in1","to":"dev18.out0"},
    {"from":"dev1.in0","to":"dev6.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev1.out0"},
    {"from":"dev2.in1","to":"dev4.out0"},
    {"from":"dev3.in0","to":"dev19.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev14.out0"},
    {"from":"dev6.in1","to":"dev3.out0"},
    {"from":"dev7.in0","to":"dev2.out0"},
    {"from":"dev8.in0","to":"dev7.out0"},
    {"from":"dev9.in0","to":"dev10.out0"},
    {"from":"dev10.in0","to":"dev0.out3"},
    {"from":"dev11.in0","to":"dev9.out0"},
    {"from":"dev12.in0","to":"dev11.out0"},
    {"from":"dev13.in0","to":"dev12.out0"},
    {"from":"dev14.in0","to":"dev13.out0"},
    {"from":"dev15.in0","to":"dev9.out0"},
    {"from":"dev15.in1","to":"dev8.out0"},
    {"from":"dev17.in0","to":"dev16.out0"},
    {"from":"dev19.in0","to":"dev18.out0"}
  ]
	};

	//sets the Frequency of the OSC.
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[4]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[18]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("siso_module"))
	{
		$("#sisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SISO 3-Register"
		});
	}

	if(sessionStorage.getItem("piso_module"))
	{
		$("#pisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PISO 3-Register"
		});
	}

	if(sessionStorage.getItem("pipo_module"))
	{
		$("#pipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PIPO 3-Register"
		});
	}

	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}
	//set all the settings as string inside div
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");

}

else if(sessionStorage.getItem("sipo")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    
        {"type":"In"},
    {"type":"Out"},

    {"type":"DC"},
    {"type":"Joint"},




    {"type":"NOT"},
    
    {"type":"NAND"},

    {"type":"NOR"},

    {"type":"OSC"},

    {"type":"T-FF"},
    {"type":"D-FF"},
    {"type":"8bitCounter"},


    {"type":"NumSrc"},
    
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"8bitCounter","id":"dev0","x":104,"y":24,"label":"8bitCounter"},
    {"type":"D-FF","id":"dev1","x":248,"y":248,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":376,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev3","x":112,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev4","x":360,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev5","x":232,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev6","x":128,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev7","x":216,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev8","x":96,"y":248,"label":"Joint","state":{"direction":0}},
    {"type":"DC","id":"dev9","x":16,"y":16,"label":"DC"},
    {"type":"Joint","id":"dev10","x":48,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"OSC","id":"dev11","x":8,"y":80,"label":"OSC"},
    {"type":"In","id":"dev12","x":40,"y":328,"label":"In"},
    {"type":"Joint","id":"dev13","x":88,"y":176,"label":"Joint","state":{"direction":1}},
    {"type":"Joint","id":"dev14","x":168,"y":168,"label":"Joint","state":{"direction":2}},
    {"type":"Joint","id":"dev15","x":240,"y":160,"label":"Joint","state":{"direction":1}},
    {"type":"Out","id":"dev16","x":192,"y":192,"label":"Out"},
    {"type":"Out","id":"dev17","x":312,"y":200,"label":"Out"},
    {"type":"DSO","id":"dev18","x":512,"y":64,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
    {"type":"Joint","id":"dev19","x":232,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev20","x":480,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Out","id":"dev21","x":440,"y":200,"label":"Out"},
    {"type":"Joint","id":"dev22","x":496,"y":120,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev23","x":368,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev24","x":384,"y":104,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev25","x":256,"y":200,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev26","x":272,"y":88,"label":"Joint","state":{"direction":0}}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev10.out0"},
    {"from":"dev0.in1","to":"dev11.out0"},
    {"from":"dev1.in0","to":"dev6.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in0","to":"dev1.out0"},
    {"from":"dev2.in1","to":"dev4.out0"},
    {"from":"dev3.in0","to":"dev12.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev5.in0","to":"dev3.out0"},
    {"from":"dev6.in0","to":"dev8.out0"},
    {"from":"dev6.in1","to":"dev3.out0"},
    {"from":"dev7.in0","to":"dev0.out3"},
    {"from":"dev8.in0","to":"dev13.out0"},
    {"from":"dev10.in0","to":"dev9.out0"},
    {"from":"dev12.in0","to":"dev11.out0"},
    {"from":"dev13.in0","to":"dev14.out0"},
    {"from":"dev14.in0","to":"dev15.out0"},
    {"from":"dev15.in0","to":"dev19.out0"},
    {"from":"dev16.in0","to":"dev6.out0"},
    {"from":"dev17.in0","to":"dev1.out0"},
    {"from":"dev18.in0","to":"dev19.out0"},
    {"from":"dev18.in1","to":"dev26.out0"},
    {"from":"dev18.in2","to":"dev24.out0"},
    {"from":"dev18.in3","to":"dev22.out0"},
    {"from":"dev19.in0","to":"dev7.out0"},
    {"from":"dev20.in0","to":"dev21.out0"},
    {"from":"dev21.in0","to":"dev2.out0"},
    {"from":"dev22.in0","to":"dev20.out0"},
    {"from":"dev23.in0","to":"dev17.out0"},
    {"from":"dev24.in0","to":"dev23.out0"},
    {"from":"dev25.in0","to":"dev16.out0"},
    {"from":"dev26.in0","to":"dev25.out0"}
  ]
	};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[7]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[11]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("siso_module"))
	{
		$("#sisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SISO 3-Register"
		});
	}

	if(sessionStorage.getItem("piso_module"))
	{
		$("#pisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PISO 3-Register"
		});
	}

	if(sessionStorage.getItem("pipo_module"))
	{
		$("#pipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PIPO 3-Register"
		});
	}

	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}


	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}



else if(sessionStorage.getItem("piso")){
	var counter={
  "width":x,
  "height":800,
  "showToolbox":true,
  "toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},
    
    {"type":"NOT"},
    {"type":"AND"},
    {"type":"NAND"},
    {"type":"OR"},
    {"type":"NOR"},
   
    {"type":"OSC"},
    
    {"type":"T-FF"},
    {"type":"D-FF"},
   
    {"type":"NumSrc"},
   
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"OSC","id":"dev0","x":32,"y":296,"label":"OSC"},
    {"type":"AND","id":"dev1","x":384,"y":80,"label":"AND"},
    {"type":"D-FF","id":"dev2","x":464,"y":232,"label":"D-FF"},
    {"type":"OR","id":"dev3","x":432,"y":96,"label":"OR"},
    {"type":"OR","id":"dev4","x":264,"y":72,"label":"OR"},
    {"type":"AND","id":"dev5","x":216,"y":64,"label":"AND"},
    {"type":"AND","id":"dev6","x":216,"y":96,"label":"AND"},
    {"type":"Joint","id":"dev7","x":448,"y":304,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev8","x":192,"y":16,"label":"NumSrc","state":{"direction":0,"on":false}},
    {"type":"NumSrc","id":"dev9","x":360,"y":16,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"D-FF","id":"dev10","x":128,"y":232,"label":"D-FF"},
    {"type":"Joint","id":"dev11","x":112,"y":304,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev12","x":352,"y":96,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev13","x":184,"y":80,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev14","x":192,"y":96,"label":"Joint","state":{"direction":0}},
    {"type":"AND","id":"dev15","x":384,"y":112,"label":"AND"},
    {"type":"Joint","id":"dev16","x":360,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev17","x":296,"y":216,"label":"D-FF"},
    {"type":"Joint","id":"dev18","x":280,"y":304,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev19","x":40,"y":344,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev20","x":368,"y":344,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev21","x":200,"y":344,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev22","x":104,"y":24,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"NOT","id":"dev23","x":152,"y":360,"label":"NOT"},
    {"type":"Joint","id":"dev24","x":336,"y":368,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev25","x":16,"y":368,"label":"Shift","state":{"direction":0,"on":false}},
    {"type":"DSO","id":"dev26","x":576,"y":224,"label":"DSO","state":{"playing":true,"rangeIndex":0}}
  ],
  "connectors":[
    {"from":"dev1.in0","to":"dev9.out0"},
    {"from":"dev1.in1","to":"dev12.out0"},
    {"from":"dev2.in0","to":"dev3.out0"},
    {"from":"dev2.in1","to":"dev7.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev3.in1","to":"dev15.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev4.in1","to":"dev6.out0"},
    {"from":"dev5.in0","to":"dev8.out0"},
    {"from":"dev5.in1","to":"dev13.out0"},
    {"from":"dev6.in0","to":"dev14.out0"},
    {"from":"dev6.in1","to":"dev21.out0"},
    {"from":"dev7.in0","to":"dev18.out0"},
    {"from":"dev10.in0","to":"dev22.out0"},
    {"from":"dev10.in1","to":"dev11.out0"},
    {"from":"dev11.in0","to":"dev0.out0"},
    {"from":"dev12.in0","to":"dev24.out0"},
    {"from":"dev13.in0","to":"dev23.out0"},
    {"from":"dev14.in0","to":"dev10.out0"},
    {"from":"dev15.in0","to":"dev16.out0"},
    {"from":"dev15.in1","to":"dev20.out0"},
    {"from":"dev16.in0","to":"dev17.out0"},
    {"from":"dev17.in0","to":"dev4.out0"},
    {"from":"dev17.in1","to":"dev18.out0"},
    {"from":"dev18.in0","to":"dev11.out0"},
    {"from":"dev19.in0","to":"dev25.out0"},
    {"from":"dev20.in0","to":"dev21.out0"},
    {"from":"dev21.in0","to":"dev19.out0"},
    {"from":"dev23.in0","to":"dev25.out0"},
    {"from":"dev24.in0","to":"dev23.out0"},
    {"from":"dev26.in0","to":"dev2.out0"}
  ]
};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[9]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[0]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("siso_module"))
	{
		$("#sisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SISO 3-Register"
		});
	}

	if(sessionStorage.getItem("piso_module"))
	{
		$("#pisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PISO 3-Register"
		});
	}

	if(sessionStorage.getItem("pipo_module"))
	{
		$("#pipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PIPO 3-Register"
		});
	}

	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}


else if(sessionStorage.getItem("pipo")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"Joint"},
    {"type":"DC"},

  
    {"type":"OSC"},
  
    {"type":"T-FF"},
    {"type":"D-FF"},
    
    {"type":"NumSrc"},
    
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"D-FF","id":"dev0","x":248,"y":248,"label":"D-FF"},
    {"type":"Joint","id":"dev1","x":112,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev2","x":360,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev3","x":232,"y":336,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev4","x":128,"y":248,"label":"D-FF"},
    {"type":"OSC","id":"dev5","x":8,"y":80,"label":"OSC"},
    {"type":"In","id":"dev6","x":40,"y":328,"label":"In"},
    {"type":"Out","id":"dev7","x":312,"y":200,"label":"Out"},
    {"type":"DSO","id":"dev8","x":512,"y":64,"label":"DSO","state":{"playing":true,"rangeIndex":0}},
    {"type":"Joint","id":"dev9","x":480,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Out","id":"dev10","x":440,"y":200,"label":"Out"},
    {"type":"Joint","id":"dev11","x":496,"y":120,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev12","x":368,"y":208,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev13","x":384,"y":104,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev14","x":256,"y":200,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev15","x":272,"y":88,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev16","x":376,"y":248,"label":"D-FF"},
    {"type":"Out","id":"dev17","x":192,"y":192,"label":"Out"},
    {"type":"NumSrc","id":"dev18","x":80,"y":248,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"NumSrc","id":"dev19","x":208,"y":248,"label":"NumSrc","state":{"direction":0,"on":false}},
    {"type":"NumSrc","id":"dev20","x":336,"y":248,"label":"NumSrc","state":{"direction":0,"on":true}}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev19.out0"},
    {"from":"dev0.in1","to":"dev3.out0"},
    {"from":"dev1.in0","to":"dev6.out0"},
    {"from":"dev2.in0","to":"dev3.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev4.in0","to":"dev18.out0"},
    {"from":"dev4.in1","to":"dev1.out0"},
    {"from":"dev6.in0","to":"dev5.out0"},
    {"from":"dev7.in0","to":"dev0.out0"},
    {"from":"dev8.in1","to":"dev15.out0"},
    {"from":"dev8.in2","to":"dev13.out0"},
    {"from":"dev8.in3","to":"dev11.out0"},
    {"from":"dev9.in0","to":"dev10.out0"},
    {"from":"dev10.in0","to":"dev16.out0"},
    {"from":"dev11.in0","to":"dev9.out0"},
    {"from":"dev12.in0","to":"dev7.out0"},
    {"from":"dev13.in0","to":"dev12.out0"},
    {"from":"dev14.in0","to":"dev17.out0"},
    {"from":"dev15.in0","to":"dev14.out0"},
    {"from":"dev16.in0","to":"dev20.out0"},
    {"from":"dev16.in1","to":"dev2.out0"},
    {"from":"dev17.in0","to":"dev4.out0"}
  ]
	};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[4]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[5]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("siso_module"))
	{
		$("#sisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SISO 3-Register"
		});
	}

	if(sessionStorage.getItem("piso_module"))
	{
		$("#pisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PISO 3-Register"
		});
	}

	if(sessionStorage.getItem("pipo_module"))
	{
		$("#pipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PIPO 3-Register"
		});
	}

	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}

else if(sessionStorage.getItem("bi-shift")){
	var counter={
		"width":x,
		"height":800,
		"showToolbox":true,
  "toolbox":[
    {"type":"In"},
    {"type":"Out"},
    {"type":"DC"},
    {"type":"NOT"},
    {"type":"NAND"},
    {"type":"NOR"},
    {"type":"OSC"},
    {"type":"Joint"},
    {"type":"AND"},
    {"type":"OR"},
    {"type":"T-FF"},
    {"type":"D-FF"},
    {"type":"8bitCounter"},
    {"type":"NumSrc"},
    {"type":"DSO"}
  ],
  "devices":[
    {"type":"DC","id":"dev0","x":0,"y":160,"label":"DC"},
    {"type":"AND","id":"dev1","x":128,"y":184,"label":"AND"},
    {"type":"OR","id":"dev2","x":168,"y":168,"label":"OR"},
    {"type":"OR","id":"dev3","x":320,"y":168,"label":"OR"},
    {"type":"AND","id":"dev4","x":432,"y":144,"label":"AND"},
    {"type":"OR","id":"dev5","x":480,"y":160,"label":"OR"},
    {"type":"AND","id":"dev6","x":616,"y":144,"label":"AND"},
    {"type":"AND","id":"dev7","x":616,"y":176,"label":"AND"},
    {"type":"OR","id":"dev8","x":656,"y":160,"label":"OR"},
    {"type":"D-FF","id":"dev9","x":512,"y":352,"label":"D-FF"},
    {"type":"D-FF","id":"dev10","x":352,"y":352,"label":"D-FF"},
    {"type":"NOT","id":"dev11","x":48,"y":64,"label":"NOT"},
    {"type":"Joint","id":"dev12","x":104,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev13","x":240,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"NumSrc","id":"dev14","x":8,"y":72,"label":"NumSrc","state":{"direction":0,"on":true}},
    {"type":"Joint","id":"dev15","x":32,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev16","x":88,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev17","x":224,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev18","x":384,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev19","x":552,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"AND","id":"dev20","x":280,"y":152,"label":"AND"},
    {"type":"AND","id":"dev21","x":280,"y":184,"label":"AND"},
    {"type":"Joint","id":"dev22","x":400,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev23","x":568,"y":72,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev24","x":96,"y":440,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev25","x":576,"y":440,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev26","x":584,"y":144,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev27","x":200,"y":368,"label":"D-FF"},
    {"type":"Joint","id":"dev28","x":280,"y":368,"label":"Joint","state":{"direction":0}},
    {"type":"AND","id":"dev29","x":432,"y":176,"label":"AND"},
    {"type":"AND","id":"dev30","x":128,"y":144,"label":"AND"},
    {"type":"D-FF","id":"dev31","x":672,"y":344,"label":"D-FF"},
    {"type":"In","id":"dev32","x":48,"y":472,"label":"In"},
    {"type":"OSC","id":"dev33","x":0,"y":296,"label":"OSC"},
    {"type":"Joint","id":"dev34","x":352,"y":480,"label":"Joint","state":{"direction":0}},
    {"type":"Out","id":"dev35","x":304,"y":520,"label":"Out"},
    {"type":"Out","id":"dev36","x":704,"y":512,"label":"Out"},
    {"type":"Joint","id":"dev37","x":504,"y":480,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev38","x":616,"y":480,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev39","x":184,"y":480,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev40","x":752,"y":312,"label":"Joint","state":{"direction":0}},
    {"type":"8bitCounter","id":"dev41","x":24,"y":176,"label":"8bitCounter"},
    {"type":"Joint","id":"dev42","x":752,"y":136,"label":"Joint","state":{"direction":2}},
    {"type":"DSO","id":"dev43","x":424,"y":592,"label":"DSO","state":{"playing":true,"rangeIndex":0}}
  ],
  "connectors":[
    {"from":"dev1.in0","to":"dev16.out0"},
    {"from":"dev1.in1","to":"dev41.out2"},
    {"from":"dev2.in0","to":"dev30.out0"},
    {"from":"dev2.in1","to":"dev1.out0"},
    {"from":"dev3.in0","to":"dev20.out0"},
    {"from":"dev3.in1","to":"dev21.out0"},
    {"from":"dev4.in0","to":"dev42.out0"},
    {"from":"dev4.in1","to":"dev22.out0"},
    {"from":"dev5.in0","to":"dev4.out0"},
    {"from":"dev5.in1","to":"dev29.out0"},
    {"from":"dev6.in0","to":"dev26.out0"},
    {"from":"dev6.in1","to":"dev23.out0"},
    {"from":"dev7.in0","to":"dev19.out0"},
    {"from":"dev7.in1","to":"dev9.out0"},
    {"from":"dev8.in0","to":"dev6.out0"},
    {"from":"dev8.in1","to":"dev7.out0"},
    {"from":"dev9.in0","to":"dev5.out0"},
    {"from":"dev9.in1","to":"dev37.out0"},
    {"from":"dev10.in0","to":"dev3.out0"},
    {"from":"dev10.in1","to":"dev34.out0"},
    {"from":"dev11.in0","to":"dev14.out0"},
    {"from":"dev12.in0","to":"dev11.out0"},
    {"from":"dev13.in0","to":"dev12.out0"},
    {"from":"dev15.in0","to":"dev14.out0"},
    {"from":"dev16.in0","to":"dev15.out0"},
    {"from":"dev17.in0","to":"dev16.out0"},
    {"from":"dev18.in0","to":"dev17.out0"},
    {"from":"dev19.in0","to":"dev18.out0"},
    {"from":"dev20.in0","to":"dev9.out0"},
    {"from":"dev20.in1","to":"dev13.out0"},
    {"from":"dev21.in0","to":"dev17.out0"},
    {"from":"dev21.in1","to":"dev28.out0"},
    {"from":"dev22.in0","to":"dev13.out0"},
    {"from":"dev23.in0","to":"dev22.out0"},
    {"from":"dev24.in0","to":"dev41.out2"},
    {"from":"dev25.in0","to":"dev24.out0"},
    {"from":"dev26.in0","to":"dev25.out0"},
    {"from":"dev27.in0","to":"dev2.out0"},
    {"from":"dev27.in1","to":"dev39.out0"},
    {"from":"dev28.in0","to":"dev27.out0"},
    {"from":"dev29.in0","to":"dev18.out0"},
    {"from":"dev29.in1","to":"dev10.out0"},
    {"from":"dev30.in0","to":"dev10.out0"},
    {"from":"dev30.in1","to":"dev12.out0"},
    {"from":"dev31.in0","to":"dev8.out0"},
    {"from":"dev31.in1","to":"dev38.out0"},
    {"from":"dev32.in0","to":"dev33.out0"},
    {"from":"dev34.in0","to":"dev39.out0"},
    {"from":"dev35.in0","to":"dev28.out0"},
    {"from":"dev36.in0","to":"dev40.out0"},
    {"from":"dev37.in0","to":"dev34.out0"},
    {"from":"dev38.in0","to":"dev37.out0"},
    {"from":"dev39.in0","to":"dev32.out0"},
    {"from":"dev40.in0","to":"dev31.out0"},
    {"from":"dev41.in0","to":"dev0.out0"},
    {"from":"dev41.in1","to":"dev33.out0"},
    {"from":"dev42.in0","to":"dev40.out0"},
    {"from":"dev43.in0","to":"dev36.out0"},
    {"from":"dev43.in1","to":"dev41.out2"}
  ]
	};
	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		counter.toolbox[6]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
		counter.devices[33]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	
	if(sessionStorage.getItem("siso_module"))
	{
		$("#sisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SISO 3-Register"
		});
	}

	if(sessionStorage.getItem("piso_module"))
	{
		$("#pisomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PISO 3-Register"
		});
	}

	if(sessionStorage.getItem("pipo_module"))
	{
		$("#pipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"PIPO 3-Register"
		});
	}

	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		counter.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}
	var html1=JSON.stringify(counter);
	document.querySelector(".simcir").innerHTML=html1;
	document.querySelector(".simcir").classList.add("unclickable");
}


else{
	var obj={
		"width":x,
		"height":800,
		"showToolbox":true,
		"toolbox":[
		{"type":"In"},
    	{"type":"Out"},
    	{"type":"DC"},
    	{"type":"NOT"},
    	{"type":"NAND"},
		{"type":"NOR"},
		{"type":"OSC"},
		{"type":"Joint"},
		{"type":"AND"},
		{"type":"OR"},
		{"type":"T-FF"},
    	{"type":"D-FF"},
    	{"type":"8bitCounter"},
		{"type":"NumSrc"},
		{"type":"DSO"}
		],

		"devices":[
		],

		"connectors":[
		]
	};

	if(sessionStorage.getItem("OSCfreq"))
	{
		$("#freq").val(sessionStorage.getItem("OSCfreq"));
		obj.toolbox[6]["freq"]=parseInt(sessionStorage.getItem("OSCfreq"),10);
	}
	else
	{
		$("#freq").val("");
	}

	if(sessionStorage.getItem("siso_module"))
	{
		$("#sisomod").attr("checked", true);
		obj.toolbox.push({
			"type":"SISO 3-Register"
		});
	}

	if(sessionStorage.getItem("piso_module"))
	{
		$("#pisomod").attr("checked", true);
		obj.toolbox.push({
			"type":"PISO 3-Register"
		});
	}

	if(sessionStorage.getItem("pipo_module"))
	{
		$("#pipomod").attr("checked", true);
		obj.toolbox.push({
			"type":"PIPO 3-Register"
		});
	}

	if(sessionStorage.getItem("sipo_module"))
	{
		$("#sipomod").attr("checked", true);
		obj.toolbox.push({
			"type":"SIPO 3-Register"
		});
	}

	var html=JSON.stringify(obj);
	document.querySelector(".simcir").innerHTML=html;
}





$("#sisomod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("siso_module",1);
	}
	else
	{
		sessionStorage.removeItem("siso_module");
		
	}
});

$("#sipomod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("sipo_module",1);
	}
	else
	{
		sessionStorage.removeItem("sipo_module");
		
	}
});

$("#pisomod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("piso_module",1);
	}
	else
	{
		sessionStorage.removeItem("piso_module");
		
	}
});

$("#pipomod").change(function(event) {
	if(this.checked)
	{
		sessionStorage.setItem("pipo_module",1);
	}
	else
	{
		sessionStorage.removeItem("pipo_module");
		
	}
});



$("#load_siso").click(function(event) {
	sessionStorage.setItem("siso",1);
	sessionStorage.removeItem("sipo");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");
	sessionStorage.removeItem("bi-shift");


	location.reload();
});

$("#load_sipo").click(function(event) {
	sessionStorage.setItem("sipo",1);
	sessionStorage.removeItem("siso");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");
	sessionStorage.removeItem("bi-shift");

	location.reload();
});

$("#load_piso").click(function(event) {

	sessionStorage.setItem("piso",1);
	sessionStorage.removeItem("siso");
	sessionStorage.removeItem("sipo");
	sessionStorage.removeItem("pipo");
	sessionStorage.removeItem("bi-shift");
	location.reload();
});

$("#load_pipo").click(function(event) {

	sessionStorage.setItem("pipo",1);
	sessionStorage.removeItem("siso");
	sessionStorage.removeItem("sipo");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("bi-shift");

	location.reload();
});

$("#load_bishift").click(function(event) {
	sessionStorage.setItem("bi-shift",1);
	sessionStorage.removeItem("siso");
	sessionStorage.removeItem("sipo");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");


	location.reload();
});

$("#clear_workspace").click(function(event) {
	sessionStorage.removeItem("sipo");
	sessionStorage.removeItem("siso");
	sessionStorage.removeItem("piso");
	sessionStorage.removeItem("pipo");
	location.reload();
});

$("#freq").change(function(event) {
	sessionStorage.setItem("OSCfreq", parseInt(this.value,10));
});

$("#clear_settings").click(function(event) {
	sessionStorage.clear();
});