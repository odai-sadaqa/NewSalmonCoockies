'use strict';

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let hours = ['6 am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let shopsName = [];

function Shop(name, minCustomer, maxCustomer, avgCookies) {
    this.locationName = name;
    this.minCustomers = minCustomer;
    this.maxCustomers = maxCustomer;
    this.avgCookies = avgCookies;
    this.totalCookiesPerDay = 0;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    shopsName.push(this)
}

Shop.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(random(this.minCustomers, this.maxCustomers));
    }
    // console.log(this.customersEachHour);
    // console.log(random(this.minCustomers, this.maxCustomers))
}

Shop.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
        this.totalCookiesPerDay += this.cookiesEachHour[i];
    }
}

let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 23, 65, 4.6);


let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);
console.log(parent);

function makeHeader() {
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    let firstTh=document.createElement('td');
    headerRow.appendChild(firstTh);
    firstTh.textContent = 'name';


    for (let i = 0; i < hours.length; i++) {
        let hoursTh = document.createElement('th');
        headerRow.appendChild(hoursTh);
        hoursTh.textContent = hours[i];

    }

    let lastTh = document.createElement('th');
    headerRow.appendChild(lastTh);

    lastTh.textContent = 'Daily Location Total';

}

Shop.prototype.render = function () {
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);
    let nameTd = document.createElement('td');
    dataRow.appendChild(nameTd);
    nameTd.textContent = this.locationName;

    for (let i = 0; i < hours.length; i++) {
        let cookiesTd = document.createElement('td');
        dataRow.appendChild(cookiesTd);
        cookiesTd.textContent = this.cookiesEachHour[i];

    }

    let totalTd = document.createElement('td');
    dataRow.appendChild(totalTd);
    totalTd.textContent = this.totalCookiesPerDay;

}

function makeFooter() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let firstTh = document.createElement('th');
    footerRow.appendChild(firstTh);
    firstTh.textContent = 'Totals';

    let totalOfTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalForEachHour = 0;
        for (let j = 0; j < shopsName.length; j++) {
            totalForEachHour += shopsName[j].cookiesEachHour[i];

            totalOfTotal += shopsName[j].cookiesEachHour[i];

        }

        let footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalForEachHour;

    }

    let lastTh = document.createElement('th');
    footerRow.appendChild(lastTh);
    lastTh.textContent = totalOfTotal;
}


 let cookiesForm= document.getElementById('form');

 cookiesForm.addEventListener('submit',submitter);

 function submitter(event){
     event.preventDefault();
     console.log(event);

     let name= event.target.locationName.value;
     console.log(name);

     let minCustomers=parseInt(event.target.minCustomers.value);
     console.log(minCustomers);

     let maxCustomers=parseInt(event.target.maxCustomers.value);
     console.log(maxCustomers);

     let AvgCookies=parseFloat(event.target.AvgCookies.value);
     console.log(AvgCookies);

     let addedShop= new Shop (name,minCustomers,maxCustomers,AvgCookies);

     table.textContent="";
     addedShop.calcCustomersEachHour();
     addedShop.calcCookiesEachHour();
    //   addedShop.render();


    makeHeader();

    for (let i = 0; i < shopsName.length; i++) {
    
        // shopsName[i].calcCustomersEachHour=[];
        // shopsName[i].calcCookiesEachHour=[];
        // shopsName[i].totalCookiesPerDay=[];
        // shopsName[i].calcCustomersEachHour();
        // shopsName[i].calcCookiesEachHour();
        shopsName[i].render();
        // shopsName[i].render();
    }
    makeFooter();
    
    

console.log(addedShop);
 }



makeHeader();

for (let i = 0; i < shopsName.length; i++) {

   
    shopsName[i].calcCustomersEachHour();
    shopsName[i].calcCookiesEachHour();
    shopsName[i].render();
    // shopsName[i].render();
}
makeFooter();












// let Seattle = {
//     name: 'Seattle',
//     maxCustomer: 65,
//     minCustomer: 23,
//     averCoockies: 6.3,
//     customersEachHour: [],
//     CookiesEachHour: [],
//     total: 0,


//     calcCustomersEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
//         }


//     },
//     calcCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
//             this.total += this.CookiesEachHour[i];
//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2elememnt = document.createElement('h2');
//         console.log(h2elememnt);
//         parent.appendChild(h2elememnt);
//         h2elememnt.textContent = this.name;

//         let unorderdlist = document.createElement('ul');
//         parent.appendChild(unorderdlist);
//         // because we need 14 li and this hours array have 14 item
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             unorderdlist.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

//         }

//         let totalElement = document.createElement('li');
//         unorderdlist.appendChild(totalElement);
//         totalElement.textContent = `Total : ${this.total} cookies`;


//     }

// }


// Seattle.calcCustomersEachHour();
// Seattle.calcCookiesEachHour();
// Seattle.render();


// let Tokyo = {
//     name: 'Tokyo',
//     maxCustomer: 24,
//     minCustomer: 3,
//     averCoockies: 1.2,
//     customersEachHour: [],
//     CookiesEachHour: [],
//     total: 0,


//     calcCustomersEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
//         }


//     },
//     calcCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
//             this.total += this.CookiesEachHour[i];
//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2elememnt = document.createElement('h2');
//         console.log(h2elememnt);
//         parent.appendChild(h2elememnt);
//         h2elememnt.textContent = this.name;

//         let unorderdlist = document.createElement('ul');
//         parent.appendChild(unorderdlist);
//         // because we need 14 li and this hours array have 14 item
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             unorderdlist.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

//         }

//         let totalElement = document.createElement('li');
//         unorderdlist.appendChild(totalElement);
//         totalElement.textContent = `Total : ${this.total} cookies`;


//     }

// }

// Tokyo.calcCustomersEachHour();
// Tokyo.calcCookiesEachHour();
// Tokyo.render();


// let Dubai = {
//     name: 'Dubai',
//     maxCustomer: 38,
//     minCustomer: 11,
//     averCoockies: 1.2,
//     customersEachHour: [],
//     CookiesEachHour: [],
//     total: 0,


//     calcCustomersEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
//         }


//     },
//     calcCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
//             this.total += this.CookiesEachHour[i];
//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2elememnt = document.createElement('h2');
//         console.log(h2elememnt);
//         parent.appendChild(h2elememnt);
//         h2elememnt.textContent = this.name;

//         let unorderdlist = document.createElement('ul');
//         parent.appendChild(unorderdlist);
//         // because we need 14 li and this hours array have 14 item
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             unorderdlist.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

//         }

//         let totalElement = document.createElement('li');
//         unorderdlist.appendChild(totalElement);
//         totalElement.textContent = `Total : ${this.total} cookies`;


//     }

// }

// Dubai.calcCustomersEachHour();
// Dubai.calcCookiesEachHour();
// Dubai.render();








// let Paris = {
//     name: 'Paris',
//    maxCustomer: 38,
//     minCustomer: 11,
//     averCoockies: 1.2,
//     customersEachHour: [],
//     CookiesEachHour: [],
//     total: 0,


//     calcCustomersEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
//         }


//     },
//     calcCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
//             this.total += this.CookiesEachHour[i];
//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2elememnt = document.createElement('h2');
//         console.log(h2elememnt);
//         parent.appendChild(h2elememnt);
//         h2elememnt.textContent = this.name;

//         let unorderdlist = document.createElement('ul');
//         parent.appendChild(unorderdlist);
//         // because we need 14 li and this hours array have 14 item
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             unorderdlist.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

//         }

//         let totalElement = document.createElement('li');
//         unorderdlist.appendChild(totalElement);
//         totalElement.textContent = `Total : ${this.total} cookies`;


//     }


// }
// Paris.calcCustomersEachHour();
// Paris.calcCookiesEachHour();
// Paris.render();





// let Lima = {
//     name: 'Lima',
//     maxCustomer: 2,
//     minCustomer: 16,
//     averCoockies: 4.6,
//     customersEachHour: [],
//     CookiesEachHour: [],
//     total: 0,


//     calcCustomersEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.customersEachHour.push(random(this.minCustomer, this.maxCustomer));
//         }


//     },
//     calcCookiesEachHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.CookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.averCoockies));
//             this.total += this.CookiesEachHour[i];
//         }
//     },
//     render: function () {
//         let parent = document.getElementById('parent');
//         console.log(parent);

//         let h2elememnt = document.createElement('h2');
//         console.log(h2elememnt);
//         parent.appendChild(h2elememnt);
//         h2elememnt.textContent = this.name;

//         let unorderdlist = document.createElement('ul');
//         parent.appendChild(unorderdlist);
//         // because we need 14 li and this hours array have 14 item
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             unorderdlist.appendChild(liElement);

//             liElement.textContent = `${hours[i]}: ${this.CookiesEachHour[i]} cookies`;

//         }

//         let totalElement = document.createElement('li');
//         unorderdlist.appendChild(totalElement);
//         totalElement.textContent = `Total : ${this.total} cookies`;


//     }



// }

// Lima.calcCustomersEachHour();
// Lima.calcCookiesEachHour();
// Lima.render();






