 /*





var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}


Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:



*/




var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end=' ') {
    console.log(start + this.name + end);
}

format.call(country,'',''); // Ukraine
format.apply(null,[country.name]); // [Ukraine] - не знаю как?!
format.call(country.capital,'',''); // Kyiv
format.apply(null,[country.capital.name]); // Kyiv
format.apply(); // undefined
