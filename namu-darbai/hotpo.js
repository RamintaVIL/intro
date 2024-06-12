/*
https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript
*/

var hotpo = function(n){
    let steps = 0;             // inicijuoju zingsniu sk.
    if(n === 0) return 0;      // jei n yra 0, grazina 0 zingsniu

   while (n !== 1) {           // tol kol taps 1
    if (n % 2 === 0) {         // jei n yra lyginis padalinu is 2
        n = n / 2              // jei n yr nelyginis, atlieku veiksmus
    } else {
        n = 3 * n + 1;
    }
    steps++                    // padidinti zinsgsniu skaiciu
   }
   return steps;
}

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));

/*
Kaip skaiciuojama:
1. 3 * 23 + 1 = 70
2. 70 / 2 = 35
3. 3 * 35 +1 = 106
4. 106 / 2 = 53
5. 3 * 53 + 1 = 160
6. 160 / 2 = 80
7. 80 / 2 = 40
8. 40 / 2 = 20
9. 20 / 2 = 10
10. 10 / 2 = 5
11. 3 * 5 + 1 = 16
12. 16 / 2 = 8
13. 8 / 2 = 4
14. 4 / 2 =2
15. 2 / 2 =1
*/

