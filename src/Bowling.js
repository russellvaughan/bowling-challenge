

function Game(frame){
	this.scoreCard = []
	this._frame = frame
	this.finalScore = 0 
	this.total = []
	this.bonus = 0
}

	Game.prototype.bowl = function(pins) {
		if (this._frame.score.length < 1) {
		this._frame.firstBowl(pins)
			if (this._frame.isStrike() === true) {
				this._addFrame()
			}
		}			
		else {
		this._frame.secondBowl(pins)
		this._calculateBonus()
		this._addFrame()
		}
	};

	Game.prototype._calculate = function() {
		this._flatten();
		this._sum();
	};

	Game.prototype._flatten = function() {
	this.total = this.scoreCard.reduce(function(a, b) {
  return a.concat(b);
	}, []);
	};

	Game.prototype._sum = function() {
		this.finalScore = this.total.reduce(function(a, b) {
  return a + b;
	});
	};


	Game.prototype._addFrame = function(frame){
  this.scoreCard.push(this._frame.score);
  this._calculate()
  this.finalScore += this.bonus
  this._frame.resetFrame();
  };

	Game.prototype._calculateBonus = function() {
		if(this.scoreCard.length > 0 ) {
			if (this.scoreCard.slice(-1)[0].length === 1) {
				this.bonus += this._frame.score.reduce(function(a, b) {
	  return a + b;
	   
		});
			}
		}
	};


	