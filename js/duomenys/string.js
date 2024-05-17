/* 
STRING - tekstas, tekstiniu simboliu grandinele

iniciavimas: ' (vienguba), " ( dviguba), ` (backtick)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = 'Labas rytas, Lietuva!';
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute."; 
console.log(kabutes1);

// Dvyguba (") kabute.
const kabutes2 = 'Dvyguba (") kabute.'; 
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Noris';
const fullname = personName + ' ' + personSurname;
console.log(fullname);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12 =  "Vienguba (') ir" + ' dvyguba (") kabutes. ';
console.log(kabutes12);

// Vienguba (') ir dviguba (") kabutes.
const kabutes12_1 =  'Vienguba (\') ir dvyguba (") kabutes.';
const kabutes12_2 =  "Vienguba (') ir dvyguba (\") kabutes.";
const kabutes12_3 =  'Vienguba (\') ir dvyguba (\") kabutes.';
const kabutes12_4 =  "Vienguba (\') ir dvyguba (\") kabutes.";
// escaping
console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

const eilute = 'Saule sviecia, kaip smaugu';
console.log(eilute);

const eilute1 = 'Uzdraustoji knyga';
const eilute2 = ',Lev Tolstoj';
const eilerastis = eilute1 + ' ' + eilute2;
console.log(eilerastis);

/*
<header>
  <img>
  <nav>
        <a></a>
        <a></a>
        <a></a>
   </nav>
</header>        
*/

// \r - return (grazina i eilutes pradzia. butum ant plokstumos ir ziuretum i prieki, tai ir matytum </header>>></a> )
// \n - new line (grazina kursioriu zemyn. sitame terminale siek tiek prastai spausdina atitikmeni)
// \t - tab

const HTML = '\
<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>';

console.log(HTML);

const backtick = `Labas rytas, Lietuva!`
console.log(backtick);

const backtick1 = `backtickine (\`) kabute.`;
const backtick2 = 'backtickine (\`) kabute.';
const backtick3 = "backtickine (\`) kabute.";

const HTML2 = `<header>
<img>
<nav>
      <a></a>
      <a></a>
      <a></a>
 </nav>
</header>`;
console.log(HTML2);

const a = 7;
const b = 5;
const c = a + b;

const ats1 = a + ' + ' + b + ' =  ' + c;
console.log(ats1);

const ats2 = a + " + " + b + " =  " + c;
console.log(ats2);

const ats3 =`${a} + ${b} = ${c}`;     // ${} iterpiame galimybe naudoti kintamuosius
console.log(ats3);

const start = 0;
const finish = 11;
const step = 3;
const answer = 4;
const mini1 = 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + ' vienetai.'; 

console.log(mini1);

const mini2 = `Skaičių intervale tarp ${start} ir ${finish}, besidalijančių be liekanos iš ${step} yra ${answer} vienetai.`;

console.log(mini1.length);  // ilgis
console.log(mini1[0]);     //masyvas


// boolean paverčia į stringą, ta pati info yra ir prie booolean sheeto
console.log ('' + true);
console.log(true.toString());
