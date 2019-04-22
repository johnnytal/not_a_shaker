function XtraUIbuttons(){
	var DISTANCE = 70;
	
    plus_accel_front = game.add.sprite(620, 170, 'plus');
    plus_accel_front.inputEnabled = true;
    plus_accel_front.events.onInputDown.add(function(){
    	min_accel_front += 0.025;
    	backText.text = "Acc F: " + roundIt(min_accel_front);
    	plus_accel_front.tint = 0xf04030;
    	setTimeout(function(){plus_accel_front.tint = 0xffffff;}, 100);
    }, this);
    
    minus_accel_front = game.add.sprite(550, 170, 'minus');
    minus_accel_front.inputEnabled = true;
    minus_accel_front.events.onInputDown.add(function(){
    	min_accel_front -= 0.025;
    	backText.text = "Acc F: " + roundIt(min_accel_front);
    	minus_accel_front.tint = 0xf04030;
    	setTimeout(function(){minus_accel_front.tint = 0xffffff;}, 100);
    }, this);
    
    backText = game.add.text(minus_accel_front.x, minus_accel_front.y - 30, "Acc F: " + roundIt(min_accel_front),
    {font: '19px', fill: 'black'});

    plus_angle_front = game.add.sprite(620, 50, 'plus');
    plus_angle_front.inputEnabled = true;
    plus_angle_front.events.onInputDown.add(function(){
    	if (!modeAbsAngle){
    		min_angle_front += 0.025;
    	}
    	else{
    		min_abs_angle_front += 0.05;
    	}
    	frontText.text = "Ang F: " + roundIt(min_angle_front) + ' / ' + roundIt(min_abs_angle_front);
    	plus_angle_front.tint = 0xf04030;
    	setTimeout(function(){plus_angle_front.tint = 0xffffff;}, 100);
    }, this);
    
    minus_angle_front = game.add.sprite(620 - DISTANCE, 50, 'minus');
    minus_angle_front.inputEnabled = true;
    minus_angle_front.events.onInputDown.add(function(){
    	if (!modeAbsAngle){
    		min_angle_front -= 0.025;
    	}
    	else{
    		min_abs_angle_front -= 0.05;
    	}
    	frontText.text = "Ang F: " + roundIt(min_angle_front) + ' / ' + roundIt(min_abs_angle_front);
    	minus_angle_front.tint = 0xf04030;
    	setTimeout(function(){minus_angle_front.tint = 0xffffff;}, 100);
    }, this);
	
    frontText = game.add.text(minus_angle_front.x, minus_angle_front.y - 30, "Ang F: " + roundIt(min_angle_front) + ' / ' + roundIt(min_abs_angle_front),
    {font: '19px', fill: 'black'});
    
    ///////
    
    plus2 = game.add.sprite(320, 170, 'plus');
    plus2.inputEnabled = true;
    plus2.events.onInputDown.add(function(){
    	min_accel_back += 0.025;
    	backText2.text = "Acc B: " + roundIt(min_accel_back);
    	plus2.tint = 0xf04030;
    	setTimeout(function(){plus2.tint = 0xffffff;}, 100);
    }, this);
    
    minus2 = game.add.sprite(320 - DISTANCE, 170, 'minus');
    minus2.inputEnabled = true;
    minus2.events.onInputDown.add(function(){
    	min_accel_back -= 0.025;
    	backText2.text = "Acc B: " + roundIt(min_accel_back);
    	minus2.tint = 0xf04030;
    	setTimeout(function(){minus2.tint = 0xffffff;}, 100);
    }, this);
        
    backText2 = game.add.text(minus2.x, minus2.y - 30, "Acc B: " + roundIt(min_accel_back),
    {font: '19px', fill: 'black'});

    plusD2 = game.add.sprite(320, 50, 'plus');
    plusD2.inputEnabled = true;
    plusD2.events.onInputDown.add(function(){
    	if (!modeAbsAngle){
    		min_angle_back += 0.025;
    	}
    	else{
    		min_abs_angle_back += 0.05;
    	}
    	frontText2.text = "Ang B: " + roundIt(min_angle_back) + ' / ' + roundIt(min_abs_angle_back);
    	plusD2.tint = 0xf04030;
    	setTimeout(function(){plusD2.tint = 0xffffff;}, 100);
    }, this);
    
    minusD2 = game.add.sprite(320 - DISTANCE, 50, 'minus');
    minusD2.inputEnabled = true;
    minusD2.events.onInputDown.add(function(){
		if (!modeAbsAngle){
    		min_angle_back -= 0.025;
    	}
    	else{
    		min_abs_angle_back -= 0.05;
    	}
    	frontText2.text = "Ang B: " + roundIt(min_angle_back) + ' / ' + roundIt(min_abs_angle_back);
    	minusD2.tint = 0xf04030;
    	setTimeout(function(){minusD2.tint = 0xffffff;}, 100);
    }, this);
	
    frontText2 = game.add.text(minusD2.x, minusD2.y - 30, "Ang B: " + roundIt(min_angle_back) + ' / ' + roundIt(min_abs_angle_back),
    {font: '19px', fill: 'black'}); 
    
    ///
     
    plusTime = game.add.sprite(620, 290, 'plus');
    plusTime.inputEnabled = true;
    plusTime.events.onInputDown.add(function(){
    	min_time += 5;
    	timeMin.text = "ms: " + roundIt(min_time);
    	plusTime.tint = 0xf04030;
    	setTimeout(function(){plusTime.tint = 0xffffff;}, 100);
    }, this);
    
    minusTime = game.add.sprite(620 - DISTANCE, 290, 'minus');
    minusTime.inputEnabled = true;
    minusTime.events.onInputDown.add(function(){
    	min_time -= 5;
    	timeMin.text = "ms: " + roundIt(min_time);
    	minusTime.tint = 0xf04030;
    	setTimeout(function(){minusTime.tint = 0xffffff;}, 100);
    }, this);
	
    timeMin = game.add.text(minusTime.x, minusTime.y - 30, "ms: " + roundIt(min_time),
    {font: '19px', fill: 'black'});
    
    ///

    modeGravityBtn = game.add.sprite(450, 15, 'minus');
    modeGravityBtn.scale.set(.8,.8);
    modeGravityBtn.tint = 0xf42a1a;
    modeGravityBtn.inputEnabled = true;
    modeGravityBtn.events.onInputDown.add(function(){
    	if (!modeGravity){
    		modeGravity = true;
    		modeGravityBtn.tint = 0xffff2f;
    	}
    	else{
    		modeGravity = false;
    		modeGravityBtn.tint = 0xf42a1a;
    	}
    	
    	gravTxt.text = "Gravity: " + modeGravity;
    }, this);
    
    gravTxt = game.add.text(415, 70, "Gravity: " + modeGravity,
    {font: '16px', fill: 'red'});
    
    ////
    
    modeOneWayBtn = game.add.sprite(450, 120, 'minus');
    modeOneWayBtn.scale.set(.8,.8);
    modeOneWayBtn.tint = 0xf42a1a;
    modeOneWayBtn.inputEnabled = true;
    modeOneWayBtn.events.onInputDown.add(function(){
    	if (!modeOneWay){
    		modeOneWay = true;
    		modeOneWayBtn.tint = 0xffff2f;
    	}
    	else{
    		modeOneWay = false;
    		modeOneWayBtn.tint = 0xf42a1a;
    	}
    	
    	oneWay.text = "One way: " + modeOneWay;
    }, this);
    
    oneWay = game.add.text(415, 175, "One way: " + modeOneWay,
    {font: '16px', fill: 'red'});

    /////

    modeAbsAngleBtn = game.add.sprite(450, 225, 'minus');
    modeAbsAngleBtn.scale.set(.8,.8);
    modeAbsAngleBtn.tint = 0xf42a1a;
    modeAbsAngleBtn.inputEnabled = true;
    modeAbsAngleBtn.events.onInputDown.add(function(){
    	if (!modeAbsAngle){
    		modeAbsAngle = true;
    		modeAbsAngleBtn.tint = 0xffff2f;
    	}
    	else{
    		modeAbsAngle = false;
    		modeAbsAngleBtn.tint = 0xf42a1a;
    	}
    	
    	absAngle.text = "Abs angle: " + modeAbsAngle;
    }, this);
    
    absAngle = game.add.text(415, 280, "Abs angle: " + modeAbsAngle,
    {font: '16px', fill: 'red'});
       
    //////
    
    modeAbsAccelBtn = game.add.sprite(450, 330, 'minus');
    modeAbsAccelBtn.scale.set(.8,.8);
    modeAbsAccelBtn.tint = 0xf42a1a;
    modeAbsAccelBtn.inputEnabled = true;
    modeAbsAccelBtn.events.onInputDown.add(function(){
    	if (!modeAbsAccel){
    		modeAbsAccel = true;
    		modeAbsAccelBtn.tint = 0xffff2f;
    	}
    	else{
    		modeAbsAccel = false;
    		modeAbsAccelBtn.tint = 0xf42a1a;
    	}
    	
    	absAccel.text = "Abs accel: " + modeAbsAccel;
    }, this);
    
    absAccel = game.add.text(415, 385, "Abs accel: " + modeAbsAccel,
    {font: '16px', fill: 'red'});
}