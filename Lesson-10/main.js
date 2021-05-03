
//Задача 1
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }
    this._foodAmount = amount;
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
}

var barsik = new Cat('Барсик');
barsik.dailyNorm(250);
barsik.feed().stroke().stroke();


//задача 2
function deepClone(obj) {
    var newObj = (obj === null) ? null : Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
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
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

//Задача 3
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    } else if (typeof obj1 === 'function' && typeof obj2 === 'function') {
        return obj1.toString() === obj2.toString();
    } else if (((typeof obj1 === 'object' || typeof obj1 === 'function') && obj1 != null) && ((typeof obj2 === 'object' || typeof obj2 === 'function') && obj2 != null)) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) { return false; }
        for (var prop in obj1) {
            if (!deepEqual(obj1[prop], obj2[prop])) {
                return false;
            }
        }
        return true;
    } else {
        return obj1 === obj2;
    }
}

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
    method: function () {
        alert('Hello');
    }
};


var newObj = {
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
    method: function () {
        alert('Hello');
    }
};

newObj.object.object2.array2[1].name = 'Vasya';
newObj.array.push(2);

deepEqual(initialObj, newObj);