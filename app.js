'use strict';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let hours = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    name: 'Seattle',
    maxCustomer: 65,
    minCustomer: 23,
    averCoockies: 6.3,
    customersEachHour: [],
    CookiesEachHour: [],
    total: 0,


    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
        }


    },
    calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
            this.total += this.CookiesEachHour[i];
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let h2elememnt = document.createElement('h2');
        console.log(h2elememnt);
        parent.appendChild(h2elememnt);
        h2elememnt.textContent = this.name;

        let unorderdlist = document.createElement('ul');
        parent.appendChild(unorderdlist);
        // because we need 14 li and this hours array have 14 item
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unorderdlist.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unorderdlist.appendChild(totalElement);
        totalElement.textContent = `Total : ${this.total} cookies`;


    }

}


Seattle.calcCustomersEachHour();
Seattle.calcCookiesEachHour();
Seattle.render();


let Tokyo = {
    name: 'Tokyo',
    maxCustomer: 24,
    minCustomer: 3,
    averCoockies: 1.2,
    customersEachHour: [],
    CookiesEachHour: [],
    total: 0,


    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
        }


    },
    calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
            this.total += this.CookiesEachHour[i];
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let h2elememnt = document.createElement('h2');
        console.log(h2elememnt);
        parent.appendChild(h2elememnt);
        h2elememnt.textContent = this.name;

        let unorderdlist = document.createElement('ul');
        parent.appendChild(unorderdlist);
        // because we need 14 li and this hours array have 14 item
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unorderdlist.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unorderdlist.appendChild(totalElement);
        totalElement.textContent = `Total : ${this.total} cookies`;


    }

}

Tokyo.calcCustomersEachHour();
Tokyo.calcCookiesEachHour();
Tokyo.render();


let Dubai = {
    name: 'Dubai',
    maxCustomer: 38,
    minCustomer: 11,
    averCoockies: 1.2,
    customersEachHour: [],
    CookiesEachHour: [],
    total: 0,


    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
        }


    },
    calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
            this.total += this.CookiesEachHour[i];
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let h2elememnt = document.createElement('h2');
        console.log(h2elememnt);
        parent.appendChild(h2elememnt);
        h2elememnt.textContent = this.name;

        let unorderdlist = document.createElement('ul');
        parent.appendChild(unorderdlist);
        // because we need 14 li and this hours array have 14 item
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unorderdlist.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unorderdlist.appendChild(totalElement);
        totalElement.textContent = `Total : ${this.total} cookies`;


    }

}

Dubai.calcCustomersEachHour();
Dubai.calcCookiesEachHour();
Dubai.render();








let Paris = {
    name: 'Paris',
   maxCustomer: 38,
    minCustomer: 11,
    averCoockies: 1.2,
    customersEachHour: [],
    CookiesEachHour: [],
    total: 0,


    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
        }


    },
    calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
            this.total += this.CookiesEachHour[i];
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let h2elememnt = document.createElement('h2');
        console.log(h2elememnt);
        parent.appendChild(h2elememnt);
        h2elememnt.textContent = this.name;

        let unorderdlist = document.createElement('ul');
        parent.appendChild(unorderdlist);
        // because we need 14 li and this hours array have 14 item
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unorderdlist.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unorderdlist.appendChild(totalElement);
        totalElement.textContent = `Total : ${this.total} cookies`;


    }


}
Paris.calcCustomersEachHour();
Paris.calcCookiesEachHour();
Paris.render();





let Lima = {
    name: 'Lima',
    maxCustomer: 2,
    minCustomer: 16,
    averCoockies: 4.6,
    customersEachHour: [],
    CookiesEachHour: [],
    total: 0,


    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
        }


    },
    calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
            this.total += this.CookiesEachHour[i];
        }
    },
    render: function () {
        let parent = document.getElementById('parent');
        console.log(parent);

        let h2elememnt = document.createElement('h2');
        console.log(h2elememnt);
        parent.appendChild(h2elememnt);
        h2elememnt.textContent = this.name;

        let unorderdlist = document.createElement('ul');
        parent.appendChild(unorderdlist);
        // because we need 14 li and this hours array have 14 item
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            unorderdlist.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

        }

        let totalElement = document.createElement('li');
        unorderdlist.appendChild(totalElement);
        totalElement.textContent = `Total : ${this.total} cookies`;


    }



}

Lima.calcCustomersEachHour();
Lima.calcCookiesEachHour();
Lima.render();






