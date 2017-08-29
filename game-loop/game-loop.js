
var EventService = EventService || {};

EventService = function(){
  "use strict";
  
  function eventLoop(objsToUpdate) {
		// processInput
		processInput();
		// update
		update(objsToUpdate);
		// render
		render();
	}
	
	return eventLoop;

	/*
	 * Handles any user input that has happened since the last call
	 */
	function processInput() {
		return;
	}

	/*
	 * Advances the game simulation one step; runs AI, physics, etc.
	 */
	function update(objsToUpdate) {
		objsToUpdate.forEach(function(updateFunc) {
			updateFunc();
		});
	}

	/*
	 *  Draws the scene 
	 */
	function render() {
		
	}
};


/* 
 * Abstract Update Method Pattern
 * * Each game entity should maintain its own behavior
 * 
 */


