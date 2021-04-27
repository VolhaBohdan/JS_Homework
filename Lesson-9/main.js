function Animal(name) {
    this._foodAmount = 50;

    var self = this;

    this._formatFoodAmount = function () {
        return self._foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return self._formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self._foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this,arguments);


    var animalFeed = this.feed;
    this.feed = function (){
        animalFeed();
        this._catFeed();
        return this;
    }

    this._catFeed = function() {
        console.log('Кот доволен ^_^');
    };

    this.stroke = function() {
        console.log('Гладим кота');
        return this;
    }
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(250);
barsik.feed().stroke().stroke();