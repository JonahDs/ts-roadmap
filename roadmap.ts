// variable assignments
// syntax: let | const *variable naam* : *variable type* = value 

// 'let' duidt aan dat x kan re-assigned worden later in de code, onderstaande code is dus valid, x wordt assigned en op de lijn eronder aangepast
// x is van type number aangezien de ': number' en kan dus enkel natuurlijke getalen krijgen (c++ is dit dus een int)
let x: number = 0; 
x = 5;

// const duidt aan dat de variable later niet kan re-assigned worden, het type kan worden afgeleid door typescript zelf
// als je zelf het type wilt schrijven dan is onderstaande code equivalent aan 'const a: string = 'tekst''
// in typescript is er geen verschil tussen single quote en double quote. de norm is single quote voor strings
const a = 'tekst';

// array assignment
// syntax is zoals gewoonlijk maar dan met [] achter dus ': typename[]'
const myArray: number[] = [1, 2, 3, 4];

// type creating
// je kan schema's maken van waaraan je variable moet voldoen
// onderstaande code maakt een type aan (net zoals de type number, string, ...) met de aangeduide structuur
type MyObject = { 
    name: string;
    phone: string;
    isAvialable: boolean;
    credits: number;
}

// gebruik van je bovenstaande defined type en assignment aan de attributen van het type
const object: MyObject = {
    name: 'leander', phone: '44', isAvialable: true, credits: 44
}

const objectName: string = object.name;

// Wanneer je typescript a la javacript wilt laten werken kun je : any schrijven
// typescript cared nu niet over de structuur van je object, je kan eender welke parameters verzinnen en assignen
// probeer in zo weinig mogelijk gevallen : any te gebruiken, want het gebruik daarvan defeats the purpose van typescript volledig
const object2: any = { iets: 4, bs: 'ggg', randomattr: 44 };

const bestaat_niet = object2.dit_attribuut_bestaat_niet; // dit is geldig, ookal heb je niet zo'n attribuut gemaakt in de lijn hierboven (dit kom omdat object2 van type any is). bestaat_niet krijgt dan de value 'undefined'

// classes bestaan ook, maar ga je amper tegenkomen in frontend en backend development
class MyClass {
    name: string;
    constructor(name: string) {
       this.name = name; 
    }
}

const instanceOfClass = new MyClass('hello'); // new duidt niet aan dat het om een pointer gaat zoals in c++, typescript kent geen pointers

// loops
// classic for
for (let i = 0; myArray.length - 1; i++) {
    // do stuff
};

// foreach loop
for (let object in myArray) {
    // do stuff
};

// de way to go in typescript, bovenstaande methodes worden amper gebruikt (ik kan me zelfs de laatste keer niet herinneren)
// gebruik steeds deze manier, de compiler kan dit iets meer performant maken dan bovenstaande gevallen. Syntax wordt later duidelijk
myArray.forEach(value => {
    // do stuff
});

// while
// wordt amper gebruikt, zelf nog nooit de nood aan gehad om dit te moeten gebruiken
while(true) {
    // do stuff
};

// functions
// je kan gewoon eender waar in je TS file een functie definieren
// manier 1: syntax 'function functionName(params): return type {}, indien je ': return type' niet schrijft bepaalt TS gebaseerd op je code wat het return type is
// onderstaande functie is dus identiek met "function myFunc(name: string) { return name; }" aangezien je 'name' returned en dat van type string is weet TS dus dat de functie een string returned
function myFunct(name: string): string {
    // do stuff
    return name;
};

myFunct('hello');

// optie 2: syntax const functieName = (params): return type => {}, myFunct en myFunct2 doen exact hetzelfde en compileren naar dezelfde broncode, ook hier kan ': string' weglaten, TS kan zelf het return type bepalen zoals de code hierboven
const myFunct2 = (name: string): string => {
    // do stuff
    return name;
};

myFunct2('hello');

// TS heeft een hele boel handige built in functies zoals bv de forEach
// je kan een functie maken en deze doorgeven aan de forEach methode, deze zal dan voor elk element in je array die functie oproepen
const sharedFunction = (param: number) => {
    // do stuff
};

myArray.forEach(sharedFunction); // klasiek loopen over je array
const results: number[] = myArray.filter(sharedFunction); // filter alle waarden uit myArray die voldoen aan de sharedFunction logica en stop ze in een array
const doesIclude: boolean = myArray.includes(4); // kijk of myArray de waarde 4 bevat, in dat geval returned deze functie true
const index: number = myArray.indexOf(4); // vindt de index waarop de eerste match zit
// deze bovenstaande voorbeelden zijn slechts te tip of the iceberg, er zijn nog een hoop handige built-in functies

// indien je maar 1 keer in je code een forEach zou hebben dan is het nogal gek om daarvoor een functie te maken (zoals we hierboven sharedFunction maakte)
// je kan dan gewoon eenvoudig weg je functie maken in de foreach (zoals ze eerder deden bij de loops)
// value krijgt bij elke iteratie de waarde uit de array, ook index krijgt de juiste waarde
// indien je gee nood hebt aan de index kan je dit gewoon weglaten zoals de deden bij de loops sectie
myArray.forEach((value, index) => {
    // do stuff
});
