// this file is to be executed in the end, because the functions and variables used are declared in the library simcir files

// This is the SISO module  by me
simcir.registerDevice("SISO 3-Register",
{
	"width":520,
	"height":500,
	 "devices":[
    {"type":"D-FF","id":"dev0","x":272,"y":184,"label":"D-FF"},
    {"type":"D-FF","id":"dev1","x":384,"y":184,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":160,"y":184,"label":"D-FF"},
    {"type":"Out","id":"dev3","x":512,"y":176,"label":"Out"},
    {"type":"Joint","id":"dev4","x":144,"y":256,"label":"Joint","state":{"direction":0}},
    {"type":"In","id":"dev5","x":72,"y":248,"label":"Clk"},
    {"type":"Joint","id":"dev6","x":256,"y":256,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev7","x":368,"y":256,"label":"Joint","state":{"direction":0}},
    {"type":"In","id":"dev8","x":72,"y":176,"label":"SI"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev2.out0"},
    {"from":"dev0.in1","to":"dev6.out0"},
    {"from":"dev1.in0","to":"dev0.out0"},
    {"from":"dev1.in1","to":"dev7.out0"},
    {"from":"dev2.in0","to":"dev8.out0"},
    {"from":"dev2.in1","to":"dev4.out0"},
    {"from":"dev3.in0","to":"dev1.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev6.in0","to":"dev4.out0"},
    {"from":"dev7.in0","to":"dev6.out0"}
  ]
}
);



// This is the SIPO module  by me
simcir.registerDevice("SIPO 3-Register",
{
    "width":520,
    "height":550,
     "devices":[
    {"type":"D-FF","id":"dev0","x":144,"y":176,"label":"D-FF"},
    {"type":"D-FF","id":"dev1","x":264,"y":176,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":384,"y":176,"label":"D-FF"},
    {"type":"In","id":"dev3","x":24,"y":280,"label":"CLK"},
    {"type":"Joint","id":"dev4","x":128,"y":288,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev5","x":248,"y":288,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev6","x":368,"y":288,"label":"Joint","state":{"direction":0}},
    {"type":"Out","id":"dev7","x":208,"y":88,"label":"O1"},
    {"type":"Out","id":"dev8","x":328,"y":88,"label":"O2"},
    {"type":"Out","id":"dev9","x":448,"y":88,"label":"O3"},
    {"type":"In","id":"dev10","x":56,"y":168,"label":"SI"}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev10.out0"},
    {"from":"dev0.in1","to":"dev4.out0"},
    {"from":"dev1.in1","to":"dev5.out0"},
    {"from":"dev2.in1","to":"dev6.out0"},
    {"from":"dev4.in0","to":"dev3.out0"},
    {"from":"dev5.in0","to":"dev4.out0"},
    {"from":"dev6.in0","to":"dev5.out0"},
    {"from":"dev7.in0","to":"dev0.out0"},
    {"from":"dev8.in0","to":"dev1.out0"},
    {"from":"dev9.in0","to":"dev2.out0"}
  ]
}
);


// This is the PISO module  by me
simcir.registerDevice("PISO 3-Register",
{
    "width":520,
    "height":550,
     "devices":[
    {"type":"D-FF","id":"dev0","x":96,"y":208,"label":"D-FF"},
    {"type":"In","id":"dev1","x":32,"y":288,"label":"CLK"},
    {"type":"In","id":"dev2","x":248,"y":32,"label":"In2"},
    {"type":"In","id":"dev3","x":104,"y":32,"label":"In3"},
    {"type":"In","id":"dev4","x":64,"y":144,"label":"In1"},
    {"type":"Joint","id":"dev5","x":80,"y":296,"label":"Joint","state":{"direction":0}},
    {"type":"In","id":"dev6","x":32,"y":344,"label":"Shift0/1"},
    {"type":"NOT","id":"dev7","x":96,"y":344,"label":"NOT"},
    {"type":"OR","id":"dev8","x":208,"y":112,"label":"OR"},
    {"type":"AND","id":"dev9","x":160,"y":96,"label":"AND"},
    {"type":"NAND","id":"dev10","x":160,"y":128,"label":"NAND"},
    {"type":"Joint","id":"dev11","x":144,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev12","x":256,"y":112,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev13","x":240,"y":352,"label":"Joint","state":{"direction":0}},
    {"type":"D-FF","id":"dev14","x":240,"y":200,"label":"D-FF"},
    {"type":"Joint","id":"dev15","x":224,"y":296,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev16","x":128,"y":352,"label":"Joint","state":{"direction":0}},
    {"type":"OR","id":"dev17","x":352,"y":112,"label":"OR"},
    {"type":"AND","id":"dev18","x":304,"y":96,"label":"AND"},
    {"type":"NAND","id":"dev19","x":304,"y":128,"label":"NAND"},
    {"type":"Out","id":"dev20","x":480,"y":200,"label":"Out"},
    {"type":"D-FF","id":"dev21","x":384,"y":200,"label":"D-FF"},
    {"type":"Joint","id":"dev22","x":368,"y":296,"label":"Joint","state":{"direction":0}}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev4.out0"},
    {"from":"dev0.in1","to":"dev5.out0"},
    {"from":"dev5.in0","to":"dev1.out0"},
    {"from":"dev7.in0","to":"dev6.out0"},
    {"from":"dev8.in0","to":"dev9.out0"},
    {"from":"dev8.in1","to":"dev10.out0"},
    {"from":"dev9.in0","to":"dev3.out0"},
    {"from":"dev9.in1","to":"dev11.out0"},
    {"from":"dev10.in0","to":"dev6.out0"},
    {"from":"dev10.in1","to":"dev0.out0"},
    {"from":"dev11.in0","to":"dev16.out0"},
    {"from":"dev12.in0","to":"dev13.out0"},
    {"from":"dev13.in0","to":"dev16.out0"},
    {"from":"dev14.in0","to":"dev8.out0"},
    {"from":"dev14.in1","to":"dev15.out0"},
    {"from":"dev15.in0","to":"dev5.out0"},
    {"from":"dev16.in0","to":"dev7.out0"},
    {"from":"dev17.in0","to":"dev18.out0"},
    {"from":"dev17.in1","to":"dev19.out0"},
    {"from":"dev18.in0","to":"dev2.out0"},
    {"from":"dev18.in1","to":"dev12.out0"},
    {"from":"dev19.in0","to":"dev6.out0"},
    {"from":"dev19.in1","to":"dev14.out0"},
    {"from":"dev20.in0","to":"dev21.out0"},
    {"from":"dev21.in0","to":"dev17.out0"},
    {"from":"dev21.in1","to":"dev22.out0"},
    {"from":"dev22.in0","to":"dev15.out0"}
  ]
}
);


// This is the PIPO module  by me
simcir.registerDevice("PIPO 3-Register",
{
    "width":520,
    "height":550,
     "devices":[
    {"type":"D-FF","id":"dev0","x":96,"y":216,"label":"D-FF"},
    {"type":"D-FF","id":"dev1","x":296,"y":216,"label":"D-FF"},
    {"type":"D-FF","id":"dev2","x":480,"y":216,"label":"D-FF"},
    {"type":"In","id":"dev3","x":448,"y":152,"label":"In3"},
    {"type":"Joint","id":"dev4","x":280,"y":296,"label":"Joint","state":{"direction":0}},
    {"type":"Joint","id":"dev5","x":80,"y":296,"label":"Joint","state":{"direction":0}},
    {"type":"In","id":"dev6","x":32,"y":288,"label":"CLK"},
    {"type":"In","id":"dev7","x":64,"y":152,"label":"In1"},
    {"type":"Out","id":"dev8","x":160,"y":152,"label":"Out1"},
    {"type":"In","id":"dev9","x":264,"y":152,"label":"In2"},
    {"type":"Out","id":"dev10","x":360,"y":152,"label":"Out2"},
    {"type":"Out","id":"dev11","x":544,"y":152,"label":"Out3"},
    {"type":"Joint","id":"dev12","x":464,"y":296,"label":"Joint","state":{"direction":0}}
  ],
  "connectors":[
    {"from":"dev0.in0","to":"dev7.out0"},
    {"from":"dev0.in1","to":"dev5.out0"},
    {"from":"dev1.in0","to":"dev9.out0"},
    {"from":"dev1.in1","to":"dev4.out0"},
    {"from":"dev2.in0","to":"dev3.out0"},
    {"from":"dev2.in1","to":"dev12.out0"},
    {"from":"dev4.in0","to":"dev5.out0"},
    {"from":"dev5.in0","to":"dev6.out0"},
    {"from":"dev8.in0","to":"dev0.out0"},
    {"from":"dev10.in0","to":"dev1.out0"},
    {"from":"dev11.in0","to":"dev2.out0"},
    {"from":"dev12.in0","to":"dev4.out0"}
  ]
}
);




