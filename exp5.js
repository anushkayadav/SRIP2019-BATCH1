


$(init);

function init(){

    function input(){
        var input_div='<div class=" connect input"></div>';
        var input=$(input_div).css({
            "position":"absolute",
            "width":"8px",
            "height":"8px",
            "left":"-2px",
            "top":"38%",
            "background-color":"#47cf73",
            "border-radius":"50%",
            "z-index":"5",
        });
        return input;
    }

    function output(){
        var output_div='<div class="connect output"></div>';
        var output=$(output_div).css({
              "position":"absolute",
              "width":"8px",
              "height":"8px",
              "right":"-2px",
              "top":"38%",
              "background-color":"#47cf73",
              "border-radius":"50%",
              "z-index":"5",
        });
        return output;
    }

    var diagram = [];
    var canvas = $(".canvas");

    $(".componentButton").draggable({
        helper: "clone"
    });

    canvas.droppable({
        drop: function(event, ui) {
            var node = {
                _id: (new Date).getTime(),
                position: ui.helper.position()
            };

            if(ui.helper.hasClass("ground")){
                node.type = "ground";
            }
            else if(ui.helper.hasClass("vSource")){
                node.type = "voltage-source";
            }
            else if(ui.helper.hasClass("resistor")){
                node.type = "resistor";
            }
            else if(ui.helper.hasClass("wire")){
                node.type = "wire";
            }
            else if(ui.helper.hasClass("capacitor")){
                node.type = "capacitor";
            }
            else if(ui.helper.hasClass("inverter")){
                node.type = "inverter";
            }
            else if(ui.helper.hasClass("diode")){
                node.type = "diode";
            }
            else if(ui.helper.hasClass("npn")){
                node.type = "npn";
            }
            else if(ui.helper.hasClass("inputsym")){
                node.type = "inputsym";
            }
            else if(ui.helper.hasClass("outputsym")){
                node.type = "outputsym";
            }
            else{
                return;
            }
            diagram.push(node);
            renderDiagram(diagram);
        }
    });

   


    var gcount=0;//count no. of times ground dropped
    var ccount=0;//count no. of time capacitor dropped
    var icount=0;//count no. of inputs dropped
    var ocount=0;//count no. of outputs dropped
    var invcount=0;//inverter dropped


    $( ".button" ).click(function() {
        $(".canvas").empty();
        diagram=[];//clear the digram array
        gcount=0;//set all counts to 0 again
        ccount=0;
        icount=0;
        ocount=0;
        invcount=0;
    });



    $( ".vSource" ).on( "drag", function( event, ui ) {
        alert("Voltage source is not used in this experiment...Try Again");
        //$( ".vSource" ).draggable({ disabled: true });
    } );

    $( ".resistor" ).on( "drag", function( event, ui ) {
        alert("Resistor is not used in this experiment...Try Again");
        //$( ".vSource" ).draggable({ disabled: true });
    } );

    $( ".npn" ).on( "drag", function( event, ui ) {
        alert("npn is not used in this experiment...Try Again");
        //$( ".vSource" ).draggable({ disabled: true });
    } );

    $( ".diode" ).on( "drag", function( event, ui ) {
         alert("diode is not used in this experiment...Try Again");
        //$( ".vSource" ).draggable({ disabled: true });
    } );


    $( ".canvas" ).on( "drop", function( event, ui ) {

        if(ui.helper.hasClass("ground")){
            alert("ground dropped");
            gcount=gcount+1;
            if(gcount>=1){
                alert("Can have maximum one ground !");
                $( ".ground" ).draggable({ disabled: true });
            }
        }

        if(ui.helper.hasClass("capacitor")){
            alert("capacitor dropped");
            ccount=ccount+1;
            if(ccount>=1){
                alert("Can have maximum one capacitor!");
                $( ".capacitor" ).draggable({ disabled: true });
            }
        }

        if(ui.helper.hasClass("inputsym")){
            alert("input dropped");
            icount=icount+1;
            if(icount>=1){
                alert("Can have maximum one input !");
                $( ".inputsym" ).draggable({ disabled: true });
            }
        }

        if(ui.helper.hasClass("outputsym")){
            alert("output dropped");
            ocount=ocount+1;
            if(ocount>=1){
                alert("Can have maximum one output !");
                $( ".outputsym" ).draggable({ disabled: true });
            }
        }

         if(ui.helper.hasClass("inverter")){
            
            invcount=invcount+1;
            if(invcount>=5){
                alert("Maximum 5 inverters allowed !");
                $( ".inverter" ).draggable({ disabled: true });
            }
        }
    } );



    $( ".btn" ).click(function() {

        if(gcount==0){
          alert("ground is misssing");
        }
        if(icount==0){
          alert("input is misssing");
        }
        if(ocount==0){
          alert("output is misssing");
        }
        if(ccount==0){
          alert("capacitor is misssing");
        }
        if(invcount<5){
          alert("circuit not complete yet!");
        }

    });


    function interact()
{
    $(".output").mousedown(function(event) {
        var cur_gate = $(this).closest('.gate');
        var connector=$('#connector_canvas');
        var cur_con;

        if(!$(cur_gate).data('output_lines'))
            $(cur_gate).data('output_lines', []);

        if(!$(cur_gate).data('line',))
        {
            cur_con = $(document.createElementNS('http://www.w3.org/2000/svg','line'));
            cur_gate.data('line', cur_con);
        }
        else cur_con = cur_gate.data('line');

        connector.append(cur_con);

        var start= cur_gate.position();
        var output_pos=$(this).position();
        var x1=start.left+output_pos.left+($(this).width()/2);
        var y1=start.top+output_pos.top+($(this).height()/2);


        cur_con.attr('x1', x1).attr('y1',y1);
        cur_con.attr('x2',x1+1).attr('y2',y1);
    });



    $(".output").draggable({
        containment: canvas,
        drag: function(event,ui){
            var _end=$(event.target).parent().position();
            var end= $(event.target).position();
            if(_end&&end)
                $(event.target).parent().data('line').attr('x2',end.left+_end.left+5).attr('y2',end.top+_end.top+2);
        },

        stop: function(event,ui){
            if(!ui.helper.closest('.gate').data('line'))
                return;
            ui.helper.css({
                top:"45%",
                right:"-2px",
                left:"auto"
            });
            ui.helper.closest('.gate').data('line').remove();
            ui.helper.closest('.gate').data('line',null);
            console.log("stopped");
        }
    });

    $(".gate").droppable({
        accept: '.output',
        drop: function(event,ui){
            var gate=ui.draggable.closest('.gate'); //the gate whose output is being dragged
            $(this).data('connected-gate',gate);
            ui.draggable.css({
                top:"45%",
                right:"-2px",
                left:"auto"
            });
            gate.data('output_lines').push(gate.data('line'));

            var x_abs=parseInt(gate.data('line').attr('x2'));
            var y_abs=parseInt(gate.data('line').attr('y2'));
            // console.log(x_abs,y_abs);
            // var xx=parseInt($(this).attr('left')) - x_abs;
            // var yy=parseInt($(this).attr('top')) - y_abs;
            // console.log(xx,yy);
            var this_x=parseInt($(this).css('left'));
            var this_y=parseInt($(this).css('top'));
            // console.log(this_x,this_y);
            // console.log($(this).height());
            if((x_abs - this_x)< $(this).width()/2 && (y_abs - this_y)< $(this).height()/2)
                console.log("left upper");
        }   
    });
}

   


      function renderDiagram(diagram){

        canvas.empty();
        var s='<svg id="connector_canvas"></svg>';
        canvas.append(s);
        for(var d in diagram){
            var node = diagram[d];
            console.log(node);
            var html = "";
            if(node.type === "ground") {
                html = '<div><img src="images/ground.png" style="width:30px ;height:60px;"></div>';
            }
            else if(node.type === "voltage-source") {
                html = "<div><img src='images/voltage.png' style='width:50px;height:50px;'></div>";
            }
            else if(node.type === "resistor") {
                html = "<img src='images/resistor.png' style='width:50px;height:50px;'>";
            }
            else if(node.type === "wire") {
                html = "<img src='images/wire.gif' style='width:50px;height:50px;'>";
            }
            else if(node.type === "capacitor") {
                html = "<div class ='ui-item' ><img src='images/capacitor.png' style='width:90px;height:45px;'></div>";
            }
            else if(node.type === "inverter") {
                html = "<div class ='ui-item'><img src='images/inverter.png' style='width:100px;height:40px;'></div>";
            }
            else if(node.type === "diode") {
                html = "<img src='images/diode.png' style='width:50px;height:50px;'>";
            }
            else if(node.type === "npn") {
                html = "<img src='images/npn.png' style='width:50px;height:50px;'>";
            }
            else if(node.type === "inputsym") {
                html = "<div><img src='images/input.gif' style='width:50px;height:50px;'></div>";
            }
            if(node.type === "outputsym") {
                html = "<div><img src='images/output.gif' style='width:50px;height:50px;'></div>";
            }

            var dom = $(html).css({
                "position": "absolute",
                "top": node.position.top,
                "left": node.position.left,
                "z-index":2,
                "max-width":"7%"
            }).draggable({
                containment:"parent",
                stop: function(event, ui) {
                    console.log(ui);
                    var id = ui.helper.attr("id");
                    for(var i in diagram) {
                        if(diagram[i]._id == id) {
                            diagram[i].position.top = ui.position.top;
                            diagram[i].position.left = ui.position.left;
                        }
                    }
                }
            }).attr("id", node._id).addClass('gate');
            dom.append(input()).append(output());
            canvas.append(dom);
        }
        interact();
    }

 }
 








            
            
            
            