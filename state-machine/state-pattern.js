/*
 * Each state has a set of TRANSITIONS, each associated 
 * with an input and pointing to a state
 * - If the INPUT matches a transition for the current state, 
 *    the machine changes to the state that transition points to
 * - If no transition is defined for an input on the current state, 
 *    the input is ignored
 */
 

/*
 * - First we define an interface for the state
 * - All behavior that is state-dependent 
 *   (every place that would have a switch)
 *   becomes a virtual method in that interface
 *  Example: handleInput(), update()
 */
 
 /*
 * Sequence of inputs or EVENTS is sent to the machine
 */
var StateFull = StateFull ||{};

(function() {
	
	StateFull = {
		StateMachine: (createStateMachine())(),
		handleEvent: handleEvent,
		addObject: addObject
		
	}
	var StateMachine = StateMachine || {};
	var States = States || {};
	var State = State || {};

	State = {
		handleEvent: function () {},
		update: function () {}
	};
	var objects = [];
	
	function addObject(object) {
		objects.push(object);
	}
	
	function createStateMachine() {
		
		var states = [];
		
		return {
			handleInput: handleInput,
			
		}
		
		function handleInput(input) {
			
		}
	}
	
	function handleEvent(event){
		
	}
});
