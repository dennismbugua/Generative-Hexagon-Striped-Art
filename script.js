for(var i = 0; i < 5; i++) {
	CSS.registerProperty({
		name: `--posY${i}`, 
		syntax: '<length>', 
		initialValue: '0px', 
		inherits: true
	});
}