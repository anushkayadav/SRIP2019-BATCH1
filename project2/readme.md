# Documentation for SRIP PROJECT - REGISTERS

### Introduction: 

This module explains about how to build registers which are the units of memory storage in computers. In computer architecture, a processor register is a small amount of storage available as part of a CPU or other digital processor. Such registers are (typically) addressed by other mechanisms than main memory and can be accessed more quickly. Almost all computers, load-store architecture or not, load data from a larger memory into registers where it is used for arithmetic, manipulated, or tested, by some machine instruction. Manipulated data is then often stored back in main memory, either by the same instruction or a subsequent one.



---

#### SISO- Serial In Serial Out

The shift register, which allows serial input (one bit after the other through a single data line) and produces a serial output is known as Serial-In Serial-Out shift register. Since there is only one output, the data leaves the shift register one bit at a time in a serial pattern, thus the name Serial-In Serial-Out Shift Register.

The logic circuit given below shows a serial-in serial-out shift register. The circuit consists of four D flip-flops which are connected in a serial manner. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop.

![Image](https://media.geeksforgeeks.org/wp-content/uploads/FlipFlop.png)


#### SIPO- Serial In Parallel Out

The shift register, which allows serial input (one bit after the other through a single data line) and produces a parallel output is known as Serial-In Parallel-Out shift register.

The logic circuit given below shows a serial-in-parallel-out shift register. The circuit consists of four D flip-flops which are connected. The clear (CLR) signal is connected in addition to the clock signal to all the 4 flip flops in order to RESET them. The output of the first flip flop is connected to the input of the next flip flop and so on. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop.

![Image](https://media.geeksforgeeks.org/wp-content/uploads/FlipFlop1.png)

#### PISO-  Parallel In Serial Out

TThe shift register, which allows parallel input (data is given separately to each flip flop and in a simultaneous manner) and produces a serial output is known as Parallel-In Serial-Out shift register.

The logic circuit given below shows a parallel-in-serial-out shift register. The circuit consists of four D flip-flops which are connected. The clock input is directly connected to all the flip flops but the input data is connected individually to each flip flop through a multiplexer at the input of every flip flop. The output of the previous flip flop and parallel data input are connected to the input of the MUX and the output of MUX is connected to the next flip flop. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop.

![Image](https://media.geeksforgeeks.org/wp-content/uploads/FIL.jpg)

#### PIPO- Parallel In Parallel Out

The shift register, which allows parallel input (data is given separately to each flip flop and in a simultaneous manner) and also produces a parallel output is known as Parallel-In parallel-Out shift register.

The logic circuit given below shows a parallel-in-parallel-out shift register. The circuit consists of four D flip-flops which are connected. The clear (CLR) signal and clock signals are connected to all the 4 flip flops. In this type of register, there are no interconnections between the individual flip-flops since no serial shifting of the data is required. Data is given as input separately for each flip flop and in the same way, output also collected individually from each flip flop.of the next flip flop and so on. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop.

![Image](https://media.geeksforgeeks.org/wp-content/uploads/FlipFlop2.png)

#### Bidirectonal Shift Registers

If we shift a binary number to the left by one position, it is equivalent to multiplying the number by 2 and if we shift a binary number to the right by one position, it is equivalent to dividing the number by 2.To perform these operations we need a register which can shift the data in either direction.

Bidirectional shift registers are the registers which are capable of shifting the data either right or left depending on the mode selected. If the mode selected is 1(high), the data will be shifted towards the right direction and if the mode selected is 0(low), the data will be shifted towards the left direction.

The logic circuit given below shows a Bidirectional shift register. The circuit consists of four D flip-flops which are connected. The input data is connected at two ends of the circuit and depending on the mode selected only one and gate is in the active state.

![Image](https://media.geeksforgeeks.org/wp-content/uploads/Fil.jpg)




## Objective:

- The objective of this experiment is to understand the working of the Shift Registers.
- Try to make basic Shift Register and Parallel Shift Register.

## Procedure:

1. With The help of [About](https://github.com/anushkayadav/digital-logic-design-iiith/blob/master/SRIP/Codes/About.md) Page , try to build the Circuit.
2. Simulate and analyse the graph.

# Technical Details:

## Languages Used:
1. HTML
2. CSS
3. Javascript

## Libraries Used:
1. [Bootstrap](https://getbootstrap.com/) 
2. [jQuery](https://jquery.com/)

## Module Used
1. [Simcir](https://kazuhikoarase.github.io/simcirjs/)
[github link](https://github.com/kazuhikoarase/simcirjs)

## Implementation:

### The simcir module

The simcir module basically searches for a div with class named "simcir". It reads the json data inside that div, and transforms it into a live simulation. 

The json data contains the following things:
1. width(integer)- width of the simulator on the screen in px
2. height(integer)- height of the simulator in px
3. showToolbox(boolean)- decides if the toolbox(the left panel) is to be displayed or not.
4. toolbox(array)- items/tools to be shown in toolbox
5. devices(array)- devices to be displayed on the breadboard
6. connectors(array)- connections between the simulated tools/items.

### Overview

More circuits/tools have been added to the simulation, and premade circuit data is created to load the counters with the click of a button.

### Files

#### end.js

##### Overview:
Added more functionality to the existing module.

##### Technicalities
1. used the function registerDevice() which is defined in the module simcir to add more items/tools that are required by the simulation
2. it's named end.js because it has to be run in the end, after all the js files, because it uses variables from the simcir module's js files

following modules are constructed in this file-
		SISO 3-Register
		SIPO 3-Register
		PISO 3-Register
		PIPO 3-Register

#### main.js

##### Overview:
This file manages all the local variables and remembers the settings to be applied on refreshes of the page.

##### Technicalities:
1. Made the width of the simulator dynamic by using the screen size of the pc which is running the simulation to utilize maximum width possible without scrolling
2. This file uses 'sessionStorage' variables(which uses key value pairs to store data), which remain as long as the tab is open, and do not clear on page refreshes. These variables are used to store the settings of the user.
3. Since the simcir library uses the json data provided at the start, and then replaces it by the simulation, we need to refresh the page and set new json data in the 'simcir' div.
4. Different settings are stored in different key-value pairs in sessionStorage.
	* 'OSCfreq' - The frequency of OSC
	* 'siso_module' - Checkbox of SISO 3-Register module
	* 'sipo_module' - Checkbox of SIPO 3-Register module 
	* 'piso_module' - Checkbox of PISO 3-Register module 
	* 'pipo_module' - Checkbox of PIPO 3-Register module  
	* 'siso' - Is true if the button "Load SISO" is clicked
	* 'sipo' - Is true if the button "Load SISO" is clicked
	* 'piso' - Is true if the button "Load SISO" is clicked
	* 'pipo' - Is true if the button "Load SISO" is clicked
	* 'bi-shift' - Is true if the button "Load Bidirectional Shift REG" is clicked
	
5. The program first checks if there should be any circuit preloaded. If yes, then it checks all the settings and sets them up accordingly. If no, then it loads a blank simulation with the settings applied.
6. The file also handles all the click events on the webpage to make the buttons interactable





