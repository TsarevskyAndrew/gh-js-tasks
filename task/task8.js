'use strict';

/**
 * Система регистрации
 *
 * В скором времени в Берляндии откроется новая почтовая служба "Берляндеск".
 * Администрация сайта хочет запустить свой проект как можно быстрее, поэтому они попросили Вас о помощи.
 * Вам предлагается реализовать прототип системы регистрации сайта.
 *
 * Система должна работать по следующему принципу. Каждый раз, когда новый пользователь хочет зарегистрироваться,
 * он посылает системе запрос name со своим именем. Если данное имя не содержится в базе данных системы,
 * то оно заносится туда и пользователю возвращается ответ OK, подтверждающий успешную регистрацию.
 * Если же на сайте уже присутствует пользователь с именем name, то система формирует новое имя
 * и выдает его пользователю в качестве подсказки, при этом подсказка также добавляется в базу данных.
 * Новое имя формируется по следующему правилу. К name последовательно приписываются числа,
 * начиная с единицы (name1, name2, ...), и среди них находят такое наименьшее i,
 * что namei не содержится в базе данных сайта.
 *
 * Входные данные
 * Масив запросов. Каждый запрос представляет собой непустую строку
 * длиной не более 32 символов, состоящую только из строчных букв латинского алфавита.
 *
 * Выходные данные
 * В выходных данных должно содержаться n строк в масиве — ответы системы на запросы: ОК в случае успешной регистрации,
 * или подсказку с новым именем, если запрашиваемое уже занято.
 */

var registrationTests = [
    {
        parameters: [
            [
                "abacaba",
                "acaba",
                "abacaba",
                "acab"
            ]
        ],
        expectedResult: [
            "OK",
            "OK",
            "abacaba1",
            "OK"
        ]
    },
    {
        parameters: [
            [
                "first",
                "first",
                "second",
                "second",
                "third",
                "third",
                "third"
            ]
        ],
        expectedResult: [
            "OK",
            "first1",
            "OK",
            "second1",
            "OK",
            "third1",
            "third2"
        ]
    }
];


function registration(names) {
    let allNames = [];
    for (let i = 0; i < names.length; i++) {
        let ind = 0;
        let currentName = names[i];
        let find = true;
        while (find) {
            find = false;
            for (let j = 0; j < allNames.length; j++) {
                if (currentName === allNames[j]) {
                    find = true;
                    break;
                }
            }
            if (find) {
                ind++;
                currentName = names[i] + ind;
            }
        }
        allNames.push(currentName)
    }
    let res = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i] === allNames[i]) {
            res.push('OK');
        } else {
            res.push(allNames[i]);
        }
    }
    return res;a
}


tasks.push({
    title: "Система регистрации",
    solution: registration,
    tests: registrationTests
});
