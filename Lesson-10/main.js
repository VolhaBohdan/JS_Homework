function Animal(name) {
    this.foodAmount = 50;

    var self = this;

    Animal.prototype.formatFoodAmount = function () {
        return this.foodAmount + ' гр.';
    }

    Animal.prototype.dailyNorm = function(amount) {
        if (!arguments.length) return self.formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self.foodAmount = amount;
    };

    this.name = name;

    Animal.prototype.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}


function Cat(name) {
    Animal.apply(this,arguments);
}


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
  };

  Cat.prototype.stroke = function() {
    console.log('Гладим кота');
    return this;
}


var barsik = new Cat('Барсик');
barsik.dailyNorm(250);
barsik.feed().stroke().stroke();