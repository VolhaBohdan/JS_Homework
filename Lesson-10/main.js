
//Задача 1

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



//задача 2

function deepClone (obj) {
    var newObj = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if(typeof obj[key] === 'object') {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = obj[key]
        }                
    }
    return newObj;
};

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);