var shakerMain = function(game){
	FRONT_COLOR = '#ff00ff';
	BACK_COLOR = '#00ff00';	
	DEFAULT_COLOR = '#f7f7f7';

	aveAccel = 0;
	accelX = 0;
	accelY = 0;
	accelZ = 0;
	
	angle = 0;

	lastfiveAccels = [];
	lastfiveAngles = [];

	min_accel_front = 1.1;
	min_accel_back = 0.6;

	min_angle_front = 2.9;
	min_angle_back = 2.15;
	
	min_abs_angle_front = 0;
	min_abs_angle_back = 0;
	
	min_abs_accel_front = 0;
	min_abs_accel_back = 0;
	
	last_hit = '';
	
	min_time = 180;
	
	reset = true;
	
	modeGravity = true;
	modeOneWay = false;
	modeAbsAngle = false;
	modeAbsAccel = false;
	
	vol = 1;
};

shakerMain.prototype = {
    create: function(){
		game.stage.backgroundColor = DEFAULT_COLOR;

	    debugTxtAngle = game.add.text(20, 15, "Angle" , {font: '22px', fill: 'darkgreen'});
	    debugTxtAccel = game.add.text(20, 45, "Accel" , {font: '22px', fill: 'darkgreen'});
 
	    debugTxtHitAngle = game.add.text(20, 85, "Angle at hit" , {font: '22px', fill: 'black'});
	    debugTxtHitAccel = game.add.text(20, 115, "Accel at hit" , {font: '22px', fill: 'black'});
	    
	    debugTxtLastHit = game.add.text(20, 215, "last hit" , {font: '22px', fill: 'blue'});

		try{window.addEventListener('deviceorientation', readAngle);} catch(e){}
		try{window.addEventListener('devicemotion', readAcc);} catch(e){}

		XtraUIbuttons();
		initPlugIns();
    }
};

function readAngle(event){	
	angle = roundIt(event.gamma);

	debugTxtAngle.text = 'Angle: ' + angle;
	
	lastfiveAngles.push(angle);
	if (lastfiveAngles.length > 5) {
    	lastfiveAngles.shift();
	}
}

function readAcc(event){
	if (!modeGravity){
		accelX = roundIt(event.acceleration.x);
		accelY = roundIt(event.acceleration.y);
		accelZ = roundIt(event.acceleration.z);
	}
	else{
		accelX = roundIt(event.accelerationIncludingGravity.x);
		accelY = roundIt(event.accelerationIncludingGravity.y);
		accelZ = roundIt(event.accelerationIncludingGravity.z);
	}
	
	aveAccel = roundIt((accelX + accelY + accelZ) / 3);
	
	vol = roundIt(Math.abs(aveAccel / 5));
	if (vol > 1) vol = 1;

	if (reset){

		if (
			!modeAbsAccel && Math.abs(lastfiveAccels[lastfiveAccels.length-1] - lastfiveAccels[lastfiveAccels.length-2]) > min_accel_front ||
			modeAbsAccel && lastfiveAccels[lastfiveAccels.length-1] < min_abs_accel_front){ 
			
			if (!modeAbsAngle && lastfiveAngles[lastfiveAngles.length-1] - lastfiveAngles[lastfiveAngles.length-2] > min_angle_front || 
			modeAbsAngle && angle > min_abs_angle_front){
				
				if (!modeOneWay || (modeOneWay && !last_hit == 'FRONT')){
					last_hit = 'FRONT';
					
					newFrontSfx.volume = vol;
					
				    if (newFrontSfx.paused) {
				        newFrontSfx.play();
				    }else{
				        newFrontSfx.currentTime = 0;
				    }
					
					flash(FRONT_COLOR);	
				}	
			}
		}
		
		else if(
			!modeAbsAccel && Math.abs(lastfiveAccels[lastfiveAccels.length-1] - lastfiveAccels[lastfiveAccels.length-2]) > min_accel_back ||
			modeAbsAccel && lastfiveAccels[lastfiveAccels.length-1] > min_abs_accel_back){
				
			if (!modeAbsAngle && lastfiveAngles[lastfiveAngles.length-1] - lastfiveAngles[lastfiveAngles.length-2] < -min_angle_back ||
			modeAbsAngle && angle < min_abs_angle_back){
			
				if (!modeOneWay || (modeOneWay && !last_hit == 'BACK')){
					last_hit = 'BACK';
					
					newBackSfx.volume = vol;
					
				    if (newBackSfx.paused) {
				        newBackSfx.play();
				    }else{
				        newBackSfx.currentTime = 0;
				    }

					flash(BACK_COLOR);
				}
			}
		}
	
	}
	
	debugTxtAccel.text = 'Accel: ' + aveAccel;
	
	lastfiveAccels.push(aveAccel);
	if (lastfiveAccels.length > 5) {
    	lastfiveAccels.shift();
	}	
}

function flash(_color){
	reset = false;
	
	try{clearTimeout(resetTimeOut);}catch(e){};
	
	resetTimeOut = setTimeout(function(){
		reset = true;
	}, min_time);
	
	debugTxtLastHit.text = last_hit + ' | ' + vol;
	
	debugTxtHitAngle.text = 'Angle at hit: ' + angle;
	debugTxtHitAccel.text = 'Accel at hit: ' + aveAccel + '\n(X: ' + accelX + ',  Y: ' + accelY + '\n,  Z: ' + accelZ + ')';

	game.stage.backgroundColor = _color;

	if (_color == FRONT_COLOR){
		window.plugins.flashlight.switchOn();	
	}
	
	navigator.vibrate(40);

	setTimeout(function(){ // back to normal
		if (window.plugins.flashlight.isSwitchedOn()){
			window.plugins.flashlight.switchOff();
		}
		game.stage.backgroundColor = DEFAULT_COLOR;
	}, 80);
}

function roundIt(_num){
	return Math.round(_num * 1000) / 1000;
}

function handleFile(_what, fileObj) {
	var fileReader  = new FileReader;
	
	fileReader.onload = function(){
	   var arrayBuffer = this.result;
	};
	fileReader.readAsArrayBuffer(fileObj[0]);
	
	url = URL.createObjectURL(fileObj[0]); 
	
	if (_what.id == 'audio_file_front'){
		newFrontSfx.src = url;
	}
	else if (_what.id == 'audio_file_back'){
		newBackSfx.src = url;
	}
	else if (_what.id == 'audio_file_right'){
		newRightSfx.src = url;
	}
	else if (_what.id == 'audio_file_left'){
		newLeftSfx.src = url;
	}
}

function initPlugIns(){
    try{window.plugins.insomnia.keepAwake();} catch(e){} // keep awake
    try{StatusBar.hide();} catch(e){} // hide status bar
    try{window.androidVolume.setMusic(30, false);} catch(e){} // max media volume
}