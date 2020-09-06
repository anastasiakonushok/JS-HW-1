// pls make at least 5 persons
const people = [{
    id: 1,
    name: 'Anna', 
    age: 19,
    moneyAmount: 100,
    desiredAlcoholName: 'whisky', 
    desiredAlcoholAmount: 2,
},
{
    id: 2,
    name: 'Max',
    age: 22,
    moneyAmount: 40,
    desiredAlcoholName: 'rum',
    desiredAlcoholAmount: 3,
},
{
    id: 3,
    name: 'Katy',
    age: 25,
    moneyAmount: 150,
    desiredAlcoholName: 'tequila',
    desiredAlcoholAmount: 1,
},
{
    id: 4,
    name: 'Olga',
    age: 18,
    moneyAmount: 70,
    desiredAlcoholName: 'wine',
    desiredAlcoholAmount: 3,
},
{
    id: 5,
    name: 'Julia',
    age: 24,
    moneyAmount: 120,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 2,
}
];
console.log (people);

// pls make at least 5 alcohol

const alcoholPriceForOneItem = {
    whisky: 23, // don't change this one
    vodka:15,
    rum:20,
    tequila:25,
    wine:13    
};

const LEGAL_AGE = 18; // don't change this

/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */
function getLegalAgePeople(arr, ageParamName) {
    // WRITE CODE HERE
    const result = arr.filter(function (person) // создается массив result который с помощью метода filter преобразует массив 
    {
        const age = person[ageParamName];
        const isLegal = age >= LEGAL_AGE;
        return isLegal;
    });
    // const result = arr.filter(p => p[ageParamName] >= LEGAL_AGE);
    return result;
}
console.log (getLegalAgePeople);
/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
 */
function getPeopleWhoHaveMoneyForAlcohol(arr) {
    // WRITE CODE HERE
    const result = arr.filter(function (person) {
        const alcohol = person.desiredAlcoholName;
        const price = alcoholPriceForOneItem[alcohol];
        const total = price * person.desiredAlcoholAmount;
        const enoughMoney = total <= person.moneyAmount;
        return enoughMoney;
    });
    return result;
}
console.log (getPeopleWhoHaveMoneyForAlcohol);
/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
 */
function buyAlcohol(arr) {
    // WRITE CODE HERE
    const result = arr.map(function (person) {
        const alcohol = person.desiredAlcoholName;
        const price = alcoholPriceForOneItem[alcohol];
        const total = price * person.desiredAlcoholAmount;

        const message = person.name + " bought " + person.desiredAlcoholAmount + " bottles of " + alcohol + " for " + total + " rubles";
        return message;
    });

    return result;
}
console.log (buyAlcohol);

// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}
console.log (check());