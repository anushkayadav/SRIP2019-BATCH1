
function init(){
//var input1_id=0;
//var input2_id=0;
var id=0;


function input1()
{
	var input_div='<div class="input input1"></div>';
	var input=$(input_div).css({
		position:"absolute",
		width:"8px",
		height: "8px",
		left:"-2px",
		top:"22%",
		"background-color":"grey",
		"border-radius":"50%",
		"z-index":"5"
	});
	return input;
}

function input2()
{
	var input_div='<div class="input input2"></div>';
	var input=$(input_div).css({
		position:"absolute",
		width:"8px",
		height: "8px",
		left:"-2px",
		top:"65%",
		"background-color":"grey",
		"border-radius":"50%",
		"z-index":"5"
	});
	return input;
}

function output()
{
	var outputDiv="<div class='output'></div>";
	var output=$(outputDiv).css({
		position:"absolute",
		width:"8px",
		height: "8px",
		right:"-2px",
		top:"45%",
		"background-color":"#47cf73",
		"border-radius":"50%",
		"z-index":"5"
	});
	return output;
}
var canvas=$("#drop_zone");
var diagram={"devices":[],"connectors":[]};
var tools=$(".drag");
tools.draggable({helper:"clone"});





function interact()
{
	$(".output").mousedown(function(event) {
		var curGate = $(this).closest(".gate");
		var connector=$("#connector_canvas");
		var curCon;

		if(!$(curGate).data("line",))
		{
			curCon = $(document.createElementNS("http://www.w3.org/2000/svg","line"));
			curGate.data("line", curCon);
		}
		else{
			curCon = curGate.data("line");
		} 
		connector.append(curCon);
		var start= curGate.position();
		var outputPosition= $(this).position();
		var x1=start.left+outputPosition.left+($(this).width()/2);
		var y1=start.top+outputPosition.top+($(this).height()/2);

		curCon.attr("x1",x1).attr("y1", y1).attr("x2",x1+1).attr("y2",y1);
	});


	$(".output").draggable({
		containment: canvas,
		drag: function(event,ui){
			var _end=$(event.target).parent().position();
			var end= $(event.target).position();
			if(_end&&end){
				$(event.target).parent().data("line").attr("x2",end.left+_end.left+5).attr("y2",end.top+_end.top+2);
			}
		
		},

		stop: function(event,ui){
			if(!ui.helper.closest(".gate").data("line")){
				return;
			}
			ui.helper.css({top:"45%",right:"-2px",left:"auto"});
			ui.helper.closest(".gate").data("line").remove();
			ui.helper.closest(".gate").data("line",null);
			console.log("stopped");
		}
	});


	$(".gate").droppable({
		accept: ".output",
		drop: function(event,ui){
		var gate=ui.draggable.closest(".gate"); //the gate whose output is being dragged
		var gateId=gate.attr("id");
		var gateChild=gate.children();
		var nowChild=$(this).children();
			
		ui.draggable.css({top:"45%",right:"-2px",left:"auto"});
		gate.data("output_line",gate.data("line"));

		var xAbs=parseInt((gate.data("line").attr("x2")),10);
		var yAbs=parseInt((gate.data("line").attr("y2")),10);
		var thisX=parseInt(($(this).css("left")),10);
		var thisY=parseInt(($(this).css("top")),10);
		if((xAbs - thisX)< $(this).width())
		{
			if($(this).data("inp")){
				$(this).data("inp").remove();
			}
		    $(this).data("inp",gate.data("line"));
		    var css_selector="#"+gateId+" .input";
		    var x2=$(this).position().left + $(css_selector).position().left+3;
		    var y2=$(this).position().top + $(css_selector).position().top+3;
		    gate.data("line").attr("x2", x2).attr("y2", y2);
		}
		else {
			gate.data("line").remove();
		}
		gate.data("line", null);
		// console.log("dropped");
		//console.log(gate);
		//console.log(nowChild);

		


		

		}
	});
}




function renderDiagram(diagram){
	canvas.empty();
	var s='<svg id="connector_canvas"></svg>';
	canvas.append(s);
	for(var d in diagram.devices)
	{
		var node=diagram.devices[d];
		//var image="images/"+node.type+".svg";
		//console.log(image);
		//html='<div><img src="'+image+'" class="img-thumbnail"></div>';
		console.log(node);
            var html = "";
            if(node.type === "and") {
                html = '<div><img src="images/and.svg" class="img-thumbnail " style="width:100px;height:50px;"</div>';
            }
            else if(node.type === "or") {
                html = "<div><img src='images/or.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            else if(node.type === "nand") {
                html = "<div><img src='images/nand.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            else if(node.type === "nor") {
                html = "<div><img src='images/nor.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            else if(node.type === "xor") {
                html = "<div><img src='images/xor.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            else if(node.type === "xnor") {
                html = "<div><img src='images/xnor.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            else if(node.type === "buffer") {
               html = "<div><img src='images/buffer.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            else if(node.type === "tff") {
               html = "<div><img src='images/T-Type_Flip-flop.svg' class='img-thumbnail ' style='width:100px;height:50px;'</div>";
            }
            

		var dom=$(html).css({
			position:"absolute",
			top: node.position.top,
			left: node.position.left,
			"z-index":2,
			"max-width":"7%"
		}).draggable({
			containment:"parent",
			drag: function(event,ui){
				var lines= $(this).data("output_line");
				var inp= $(this).data("inp");
				if(lines){$(lines).attr("x1", $(this).position().left + $(this).width()).attr("y1", $(this).position().top + ($(this).height())/2);}
				if(inp){$(inp).attr("x2", $(this).position().left + 2).attr("y2", $(this).position().top+ $('.input').position().top+5);}
			},
			stop: function(event,ui){
				var id=ui.helper.attr("id");
				diagram.devices[id].position.top=ui.position.top;
				diagram.devices[id].position.left=ui.position.left;
			}
		}).attr("id", node._id).addClass('gate');
		dom.append(input1()).append(input2()).append(output());
		canvas.append(dom);
	}
	interact();
}

canvas.droppable({
	drop: function(event, ui){
		var node={_id: id,
			position: ui.helper.position()
		};

		node.position.left-=$("#tools").width();
		id=id+1;
		if(ui.helper.hasClass("drag")){
			node.type=ui.helper.prevObject.attr("id");
			console.log(node.type);
		}
		else{
			id=id-1;
			return;
		}
		diagram.devices.push(node);
		renderDiagram(diagram);
	}
});








    $( ".button" ).click(function() {
        $("#drop_zone").empty();
        diagram.devices=[];//clear the digram array
        
		 $("#mygraph").attr('src',"images/graph1.png");
    });



   


    


 





}

$(init);