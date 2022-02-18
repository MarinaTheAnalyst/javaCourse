//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :

//     -- отримує текст з параграфа з id "content" + //     -- змініть кожному елементу колір фону на червоний +
//     -- змініть кожному елементу колір тексту на синій

let content = document.getElementById('content');
console.log(content.style.background = 'red');
let newColor = content.style.color = 'blue';
console.log(newColor);
//     -- замініть текст параграфа з id 'content' на будь-який інший

let textReplace = content.innerHTML = '<i>Trololo</i>';
console.log(textReplace);

// -- отримує текст з блоку з id "rules" + / змініть кожному елементу колір фону на червоний +
// // //     -- змініть кожному елементу колір тексту на синій
let template = document.getElementById('rules');
console.log(template.style.background = 'red');
let newColor1 = template.style.color = 'blue';
console.log(newColor1);


//     -- замініть текст параграфа з id 'rules' на будь-який інший
let replaceContext = template.innerHTML = '<p>Trololo tadam pam</p>'
console.log(replaceContext);

// отримати весь список класів елемента з id=rules і вивести їх в console.log +
// поміняти колір тексту у всіх елементів fc_rules на червоний

// let classRules = document.querySelectorAll('#rules');
// console.log(classRules);

let classRules = document.getElementById('rules');
console.log(classRules);

let rulesFC = document.getElementsByClassName('fc_rules');
    for (const rulesFCElement of rulesFC) {
        rulesFCElement.style.color = 'red';
        }
console.log(rulesFC);