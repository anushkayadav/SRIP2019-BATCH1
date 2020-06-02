## REGISTERS


This lab allows you to design and simulate any digital combinational or sequential circuit. Following instruction help you build the Different Registers. A Javascript-based basic tool and simulation enigne is at the hear of this laboratory. You can create many circuits and test them with fixed or time-varying input signals. You can also see the outputs as values or time-varying waveforms.
---

### SISO - Serial In Serial Out
In this Shift Register Serial input if given and Serial Output is observed.Connect the components as per the figure given below.
USe different serial datas using different connections to counter.

![Image](https://github.com/anushkayadav/digital-logic-design-iiith/blob/master/SRIP/Codes/images/siso.png?raw=true)

### SIPO - Seiral In Parallel Out

In this Shift Register Serial input if given and Parallel Output is observed.Connect the components as per the figure given below.
USe different serial datas using different connections to counter.

![Image](https://github.com/anushkayadav/digital-logic-design-iiith/blob/master/SRIP/Codes/images/sipo.png?raw=true)

### PISO - Parallel In Serial Out

In this Shift Register Parallel input if given and Serial Output is observed.Connect the components as per the figure given below.
Give different input to each flip flop using "Numsrc".<br>

The input to NOT gate-

	- 0- Intially, to load parallel data into each FF.
	- 1- To shift 
![Image](https://github.com/anushkayadav/digital-logic-design-iiith/blob/master/SRIP/Codes/images/piso.png?raw=true)


### PIPO - Parallel In Parallel Out

In this Shift Register Parallel input if given and Parallel Output is observed.Connect the components as per the figure given below.Give different input to each flip flop using "Numsrc".
![Image](https://github.com/anushkayadav/digital-logic-design-iiith/blob/master/SRIP/Codes/images/pipo.png?raw=true)


### Bidirectional Shift REgister

In this Shift Register serial input if given and Serial serial is observed.
Connect the components as per the figure given below.<br>
USe different serial datas using different connections to counter.

The input to the not gate- 
	- 0-LEFT SHIFT<br>
	- 1-RIGHT SHIFT<br> 

![Image](https://github.com/anushkayadav/digital-logic-design-iiith/blob/master/SRIP/Codes/images/bireg.png?raw=true)
-----------
#### For Serial Data Input :
ere, 8 bit counter is used to generate Serial Data, which acts as an input in SISO and SIPO.
You have 8 options for serial data-<br>
Connect to following D's for respective serials-

	- D0-0101010101...
	- D1-0011001100...
	- D2-0001110001...
	- D3-0000111100...
	- D4-0000011111...
	- D5-0000001111...
	- D6-0000000111...
	- D7-0000000011...

#### For Parallel Data Input : 

	1. USE Numsrc in PIPO & PISO  to set inputs to a particular number.<br>
	2. Toggle it to get 0/1. <br>

------------------

The tool consist of mainly two pannels: Left Pannel, Right Pannel.

* Left Pannel:You can change the settings from the left pane.

	1. Frequency Input:The frequency input changes the frequency of the oscillator named as OSC on the simulation panel

	2. Modules:The checkboxes are to show you the expected output of your circuit. An abstracted version of the circuit will appear in the simulation. Please try to replicate the output.

	3. Save Settings:Click on the button to save your settings. You need to do it, in order for the settings to apply.

	4. Clear Settings:Click on the button to discard all your settings.

	* WARNING: When you click on save settings or clear settings, your circuit gets cleared automatically, so please choose your settings before hand.
	5. If you get stuck, and are not able to make the counter, the load counter and load ring counter buttons will help you out.

	6. Click the "Clear Workspace" button to clear the simulation.

* Right Pannel: The right pane contains the workspace where you will simulate your experiment.

	1. The toolbox on the left contains the pre-made logic circuits you will require to build a counter.

	2. Drag them on the right, to place them on your breadboard.

	3. The left part of the abstracted circuit contains the inputs, and the right side the outputs.

	4. Click on the circle of the input or output to another input/output to make a connection.

	* You can connect only one line to an input, but an output can have multiple lines.

	5. The "DC" icon outputs digital 1 at all times, connnect it to:


	6. The OSC supplies 1 and 0 in a specific frequency which you set in the settings pane.

	7. The joint icon is just a connection, to make your connections look neater, as the lines from an output to an input are straight.

	8. The DSO displays the output in a graph format for easy verification. It has 8 inputs, you can choose to use any number of them. If you want more, just drag drop more of them.

