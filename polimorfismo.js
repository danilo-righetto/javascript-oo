/* Usando polimorfismo */

var Value = function() {
    val: 10,
    getValue: function() {
        return this.val + 2;
    };
};

console.log(Value.getValue());

// vamos criar um novo objeto Value e usar polimorfismo

var Value2 = Object.create(Value);

Value2.getValue = function() {
    return this.val + 10;
};

console.log(Value2.getValue());