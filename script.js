class Keyboard {
    constructor() {
        keyboard_container: null;
            title: null;
            text: null;
            keyboard: null;
            down_text: null;
            keyObj: null;
            storage: localStorage;
        
    }

    init() {
        
this.keyboard_container = document.createElement('div');
this.keyboard_container.className = "keyboard-container";
document.body.append(this.keyboard_container);


this.title = document.createElement('h1');
this.title.className = "title";
this.title.innerHTML = "RSS Виртуальная клавиатура";
this.keyboard_container.append(this.title);

this.text = document.createElement('textarea');
this.text.className = "keyboard-input";
//this.text.setAttribute('autofocus', 'autofocus');
this.keyboard_container.append(this.text);

this.keyboard = document.createElement('div');
this.keyboard.className = "keyboard";
this.keyboard_container.append(this.keyboard);

this.keyObj = [ // массив из объектов для каждой клавиши
            { // `
                "en": "&#96;",
                "ru": "ё",
                "shifted_en": "~",
                "shifted_ru": "Ё",
                "code" : "Backquote",
            },
            { // 1
                "en": "1",
                "ru": "1",
                "shifted_en": "!",
                "shifted_ru": "!",
                "code" : "Digit1",
            },
            { // 2
                "en": "2",
                "ru": "2",
                "shifted_en": "@",
                "shifted_ru": '"',
                "code" : "Digit2",
            },
            { // 3
                "en": "3",
                "ru": "3",
                "shifted_en": "#",
                "shifted_ru": "№",
                "code" : "Digit3",
            },
            { // 4
                "en": "4",
                "ru": "4",
                "shifted_en": "$",
                "shifted_ru": ";",
                "code" : "Digit4",
            },
            { // 5
                "en": "5",
                "ru": "5",
                "shifted_en": "%",
                "shifted_ru": "%",
                "code" : "Digit5",
            },
            { // 6
                "en": "6",
                "ru": "6",
                "shifted_en": "^",
                "shifted_ru": ":",
                "code" : "Digit6",
            },
            { // 7
                "en": "7",
                "ru": "7",
                "shifted_en": "&",
                "shifted_ru": "?",
                "code" : "Digit7",
            },
            { // 8
                "en": "8",
                "ru": "8",
                "shifted_en": "*",
                "shifted_ru": "*",
                "code" : "Digit8",
            },
            { // 9
                "en": "9",
                "ru": "9",
                "shifted_en": "(",
                "shifted_ru": "(",
                "code" : "Digit9",
            },
            { // 0
                "en": "0",
                "ru": "0",
                "shifted_en": ")",
                "shifted_ru": ")",
                "code" : "Digit0",
            },
            { // -
                "en": "-",
                "ru": "-",
                "shifted_en": "_",
                "shifted_ru": "_",
                "code" : "Minus",
            },
            { // =
                "en": "=",
                "ru": "=",
                "shifted_en": "+",
                "shifted_ru": "+",
                "code" : "Equal",
            },
            { // bsp
                "en": "Backspace",
                "ru": "Backspace",
                "shifted_en": "Backspace",
                "shifted_ru": "Backspace",
                "code" : "Backspace",
            },
            { // tab
                "en": "Tab",
                "ru": "Tab",
                "shifted_en": "Tab",
                "shifted_ru": "Tab",
                "code" : "Tab",
            },
            { // q
                "en": "q",
                "ru": "й",
                "shifted_en": "Q",
                "shifted_ru": "Й",
                "code" : "KeyQ",
            },
            { // w
                "en": "w",
                "ru": "ц",
                "shifted_en": "W",
                "shifted_ru": "Ц",
                "code" : "KeyW",
            },
            { // e
                "en": "e",
                "ru": "у",
                "shifted_en": "E",
                "shifted_ru": "У",
                "code" : "KeyE",
            },
            { // r
                "en": "r",
                "ru": "к",
                "shifted_en": "R",
                "shifted_ru": "К",
                "code" : "KeyR",
            },
            { // t
                "en": "t",
                "ru": "е",
                "shifted_en": "T",
                "shifted_ru": "Е",
                "code" : "KeyT",
            },
            { // y
                "en": "y",
                "ru": "н",
                "shifted_en": "Y",
                "shifted_ru": "Н",
                "code" : "KeyY",
            },
            { // u
                "en": "u",
                "ru": "г",
                "shifted_en": "U",
                "shifted_ru": "Г",
                "code" : "KeyU",
            },
            { // i
                "en": "i",
                "ru": "ш",
                "shifted_en": "I",
                "shifted_ru": "Ш",
                "code" : "KeyI",
            },
            { // o
                "en": "o",
                "ru": "щ",
                "shifted_en": "O",
                "shifted_ru": "Щ",
                "code" : "KeyO",
            },
            { // p
                "en": "p",
                "ru": "з",
                "shifted_en": "P",
                "shifted_ru": "З",
                "code" : "KeyP",
            },
            { // {
                "en": "[",
                "ru": "х",
                "shifted_en": "{",
                "shifted_ru": "Х",
                "code" : "BracketLeft",
            },
            { // }
                "en": "]",
                "ru": "ъ",
                "shifted_en": "}",
                "shifted_ru": "Ъ",
                "code" : "BracketRight",
            },
            { // \
                "en": "&#92;",
                "ru": "&#92;",
                "shifted_en": "|",
                "shifted_ru": "/",
                "code" : "Backslash",
            },
            { // del
                "en": "Del",
                "ru": "Del",
                "shifted_en": "Del",
                "shifted_ru": "Del",
                "code" : "Delete",
            },
            { // caps
                "en": "CapsLock",
                "ru": "CapsLock",
                "shifted_en": "CapsLock",
                "shifted_ru": "CapsLock",
                "code" : "CapsLock",
            },
            { // a
                "en": "a",
                "ru": "ф",
                "shifted_en": "A",
                "shifted_ru": "Ф",
                "code" : "KeyA",
            },
            { // s
                "en": "s",
                "ru": "ы",
                "shifted_en": "S",
                "shifted_ru": "Ы",
                "code" : "KeyS",
            },
            { // d
                "en": "d",
                "ru": "в",
                "shifted_en": "D",
                "shifted_ru": "В",
                "code" : "KeyD",
            },
            { // f
                "en": "f",
                "ru": "а",
                "shifted_en": "F",
                "shifted_ru": "А",
                "code" : "KeyF",
            },
            { // g
                "en": "g",
                "ru": "п",
                "shifted_en": "G",
                "shifted_ru": "П",
                "code" : "KeyG",
            },
            { // h
                "en": "h",
                "ru": "р",
                "shifted_en": "H",
                "shifted_ru": "Р",
                "code" : "KeyH",
            },
            { // j
                "en": "j",
                "ru": "о",
                "shifted_en": "J",
                "shifted_ru": "О",
                "code" : "KeyJ",
            },
            { // k
                "en": "k",
                "ru": "л",
                "shifted_en": "K",
                "shifted_ru": "Л",
                "code" : "KeyK",
            },
            { // l
                "en": "l",
                "ru": "д",
                "shifted_en": "L",
                "shifted_ru": "Д",
                "code" : "KeyL",
            },
            { // ;
                "en": ";",
                "ru": "ж",
                "shifted_en": ":",
                "shifted_ru": "Ж",
                "code" : "Semicolon",
            },
            { // '
                "en": "'",
                "ru": "э",
                "shifted_en": '"',
                "shifted_ru": "Э",
                "code" : "Quote",
            },
            { // Enter
                "en": "ENTER",
                "ru": "ENTER",
                "shifted_en": "ENTER",
                "shifted_ru": "ENTER",
                "code" : "Enter",
            },
            { // shift
                "en": "Shift",
                "ru": "Shift",
                "shifted_en": "Shift",
                "shifted_ru": "Shift",
                "code" : "ShiftLeft",  //ShiftLeft shiftKey
            },
            { // z
                "en": "z",
                "ru": "я",
                "shifted_en": "Z",
                "shifted_ru": "Я",
                "code" : "KeyZ",
            },
            { // x
                "en": "x",
                "ru": "ч",
                "shifted_en": "X",
                "shifted_ru": "Ч",
                "code" : "KeyX",
            },
            { // c
                "en": "c",
                "ru": "с",
                "shifted_en": "C",
                "shifted_ru": "С",
                "code" : "KeyC",
            },
            { // v
                "en": "v",
                "ru": "м",
                "shifted_en": "V",
                "shifted_ru": "М",
                "code" : "KeyV",
            },
            { // b
                "en": "b",
                "ru": "и",
                "shifted_en": "B",
                "shifted_ru": "И",
                "code" : "KeyB",
            },
            { // n
                "en": "n",
                "ru": "т",
                "shifted_en": "N",
                "shifted_ru": "Т",
                "code" : "KeyN",
            },
            { // m
                "en": "m",
                "ru": "ь",
                "shifted_en": "M",
                "shifted_ru": "Ь",
                "code" : "KeyM",
            },
            { // ,
                "en": ",",
                "ru": "б",
                "shifted_en": "<",
                "shifted_ru": "Б",
                "code" : "Comma",
            },
            { // .
                "en": ".",
                "ru": "ю",
                "shifted_en": ">",
                "shifted_ru": "Ю",
                "code" : "Period",
            },
            { // /
                "en": "/",
                "ru": ".",
                "shifted_en": "?",
                "shifted_ru": ",",
                "code" : "Slash",
            },
            { // up
                "en": "&uarr;",
                "ru": "&uarr;",
                "shifted_en": "&uarr;",
                "shifted_ru": "&uarr;",
                "code" : "ArrowUp",
            },
            { // shift
                "en": "Shift",
                "ru": "Shift",
                "shifted_en": "Shift",
                "shifted_ru": "Shift",
                "code" : "ShiftRight",  //ShiftRight shiftKey
            },
            { // ctrl
                "en": "Ctrl",
                "ru": "Ctrl",
                "shifted_en": "Ctrl",
                "shifted_ru": "Ctrl",
                "code" : "ControlLeft",  //ControlLeft ctrlKey
            },
            { // windows
                "en": "Win",
                "ru": "Win",
                "shifted_en": "Win",
                "shifted_ru": "Win",
                "code" : "MetaLeft",   // code=MetaLeft metaKey
            },
            { // alt
                "en": "Alt",
                "ru": "Alt",
                "shifted_en": "Alt",
                "shifted_ru": "Alt",
                "code" : "AltLeft",  // code=AltLeft altKey
            },
            { // space
                "en": "",
                "ru": "",
                "shifted_en": "",
                "shifted_ru": "",
                "code" : "Space",
            },
            { // alt
                "en": "Alt",
                "ru": "Alt",
                "shifted_en": "Alt",
                "shifted_ru": "Alt",
                "code" : "AltRight",  // code=AltRight altKey
            },
            { // ctrl
                "en": "Ctrl",
                "ru": "Ctrl",
                "shifted_en": "Ctrl",
                "shifted_ru": "Ctrl",
                "code" : "ControlRight",  //ControlRight ctrlKey
            },
            { // left
                "en": "&larr;",
                "ru": "&larr;",
                "shifted_en": "&larr;",
                "shifted_ru": "&larr;",
                "code" : "ArrowLeft",
            },
            { // down
                "en": "&darr;",
                "ru": "&darr;",
                "shifted_en": "&darr;",
                "shifted_ru": "&darr;",
                "code" : "ArrowDown",
            },
            { // right
                "en": "&rarr;",
                "ru": "&rarr;",
                "shifted_en": "&rarr;",
                "shifted_ru": "&rarr;",
                "code" : "ArrowRight",
            },
        ];

this.keyboard.innerHTML = `  <div class="keyboard-row">
<div class="button key"><button></button></div> <!-- 14 клавиш в первой строке-->
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button key"><button></button></div>
<div class="button func" id="key-backspace"><button></button></div>
</div>
<div class="keyboard-row">
    <div class="button func" id="key-tab"><button></button></div> <!-- 15 клавиш во второй строке-->
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button func" id="key-delete"><button></button></div>
</div>
<div class="keyboard-row">
    <div class="button func" id="key-capslock"><button></button></div> <!-- 13 клавиш в третьей строке-->
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button func" id="key-enter"><button></button></div>
</div>
<div class="keyboard-row">
    <div class="button func" id="key-shift-left"><button></button></div> <!-- 13 клавиш в четвертой строке-->
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button key"><button></button></div>
    <div class="button func" id="key-up"><button></button></div>
    <div class="button func" id="key-shift-right"><button></button></div>
    
</div>
<div class="keyboard-row">
    <div class="button func id="key-ctrl-left"><button></button></div> <!-- 9 клавиш -->
    <div class="button func"><button></button></div>
    <div class="button func" id="key-alt-left"><button></button></div>
    <div class="button func" id="key-space"><button></button></div>
    <div class="button func" id="key-alt-right"><button></button></div>
    <div class="button func" id="key-ctrl-right"><button></button></div>
    <div class="button func" id="key-left"><button></button></div>
    <div class="button func" id="key-down"><button></button></div>
    <div class="button func" id="key-right"><button></button></div>
    
</div>`;


this.keyboard_container.insertAdjacentHTML('beforeend',`
<div class="down-text">
<h4>Клавиатура создана в операционной системе Windows</h4>
<h4>Клавиши переключения языка: Ctrl+Alt</h4>
</div>`);
    }

    functional () {

const ALL_BUTTONS = document.getElementsByClassName("button");
const LETTER_BUTTON = document.getElementsByClassName("key");
const TEXTAREA = document.getElementsByClassName("keyboard-input")[0];
const CAPS = document.getElementById("key-capslock");
const SHIFT_LEFT = document.getElementById("key-shift-left");
const SHIFT_RIGHT = document.getElementById("key-shift-right");
const SHIFT = [SHIFT_LEFT, SHIFT_RIGHT];
const UP = document.getElementById("key-up");
const DOWN = document.getElementById("key-down");
const LEFT = document.getElementById("key-left");
const RIGHT = document.getElementById("key-right");
const ARROWS = [UP, DOWN, LEFT, RIGHT];
let capsOn = false;



let langSwitch = localStorage;

if (langSwitch["lang"] === 'en') {          //язык при загрузке страницы
    for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
        ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['en'];
    }
} else if (langSwitch["lang"] === 'ru') {
    for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
        ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['ru'];
}
} else {
    for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
        ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['en'];
}
}

TEXTAREA.focus();

let range = new Range();
range.setStart(TEXTAREA, 0);
range.setEnd(TEXTAREA, TEXTAREA.value.length);

function insertText(text) {   // опишем функцию для нормального ввода текста в textarea
    let start = TEXTAREA.selectionStart;   //ищем первое положение выделенного символа
    let end = TEXTAREA.selectionEnd; //ищем последнее положение выделенного символа
    let finalText = TEXTAREA.value.substring(0, start) + text + TEXTAREA.value.substring(end); // текст до + вставка + текст после
    TEXTAREA.value = finalText; // подмена значения
    TEXTAREA.focus();  // возвращаем фокус на элемент
    TEXTAREA.selectionEnd = ( start == end )? (end + text.length) : end ; // возвращаем курсор на место - учитываем выделили ли текст или просто курсор поставили
}

function removeText() { // опишем функцию для нормальной работы backspace в textarea
    let start = TEXTAREA.selectionStart;   //ищем первое положение выделенного символа
    let end = TEXTAREA.selectionEnd; //ищем последнее положение выделенного символа
    let finalText = TEXTAREA.value.substring(0, start-1) + TEXTAREA.value.substring(start);
    TEXTAREA.value = finalText; // заменяем значение
    TEXTAREA.focus();  // возвращаем фокус на элемент
    TEXTAREA.selectionEnd = end-1; // двигаем курсор
}


    [...LETTER_BUTTON].forEach( a => {
        a.addEventListener("click", () => {  //ввод 
            insertText(a.innerText) 
         })
    });

    ARROWS.forEach( a => {
        a.addEventListener("click", () => {  //ввод 
            insertText(a.innerText) 
         })
    });

    
   CAPS.addEventListener("click", () =>{   //CAPS по клику
        if (capsOn === false) {
            [...LETTER_BUTTON].forEach( a => {
                a.getElementsByTagName("button")[0].innerText = a.getElementsByTagName("button")[0].innerText.toUpperCase();
                 CAPS.classList.add("button-func-hovered");
                 capsOn = true;
                 TEXTAREA.focus(); 
             })
        } else {

    [...LETTER_BUTTON].forEach( a => {
       a.getElementsByTagName("button")[0].innerText = a.getElementsByTagName("button")[0].innerText.toLowerCase();
        CAPS.classList.remove("button-func-hovered");
        capsOn = false;
        TEXTAREA.focus(); 
    })
    }
   }) 

   document.addEventListener('keydown', (event) => {  // эмуляция CAPS по нажатию
   
    if (event.code === "CapsLock") {
    
    
    if (capsOn === false) {
        [...LETTER_BUTTON].forEach( a => {
            a.getElementsByTagName("button")[0].innerText = a.getElementsByTagName("button")[0].innerText.toUpperCase();
             CAPS.classList.add("button-func-hovered");
             capsOn = true;
             TEXTAREA.focus(); })} else {

                [...LETTER_BUTTON].forEach( a => {
                    a.getElementsByTagName("button")[0].innerText = a.getElementsByTagName("button")[0].innerText.toLowerCase();
                     CAPS.classList.remove("button-func-hovered");
                     capsOn = false;
                     TEXTAREA.focus(); 
             })}
                      
    }})



   SHIFT.forEach(a => {   //по клику
   a.addEventListener("mousedown", () => { // вешаем слушатель событий на shift 
    if (langSwitch["lang"] === "en") {
        for (let i=0; i < virtual_keyboard.keyObj.length; i ++) {
            ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["shifted_en"];
        }
        document.addEventListener("mouseup", () => {
            for (let i=0; i < virtual_keyboard.keyObj.length; i ++) {
                ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["en"];
            }
        });
     } else if (langSwitch["lang"] === "ru") {
            for (let i=0; i < virtual_keyboard.keyObj.length; i ++) {
                ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["shifted_ru"];
            }
            document.addEventListener("mouseup", () => {
                for (let i=0; i < virtual_keyboard.keyObj.length; i++) {
                    ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["ru"];
                }
            });
        }
    });
})

 document.addEventListener('keydown', (event) => {  // эмуляция Shift по нажатию
   
    if ((event.code === "ShiftLeft")|| (event.code === "ShiftRight")) {
        if (langSwitch["lang"] === "en") {
    for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
         ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["shifted_en"];
         TEXTAREA.focus();
        }} else { 
            for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
                ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["shifted_ru"];
                TEXTAREA.focus();
               }
        }
    
    };
                 
        document.addEventListener('keyup', (event) => {  // эмуляция отжатия клавиш
            
            if ((event.code === "ShiftLeft")|| (event.code === "ShiftRight")) {
                if (langSwitch["lang"] === "en") {
                for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
                    ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["en"];
                    TEXTAREA.focus();
                    }} else {
                        for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
                            ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]["ru"];
                            TEXTAREA.focus();                          }
                    }};
        
    })
})
 


   document.getElementById("key-space").addEventListener("click", () => {  //ввод пробел
   insertText(' ');});
    
    document.getElementById("key-tab").addEventListener("click", () => {  //ввод  таб
        insertText('\t');}) ;

    document.getElementById("key-enter").addEventListener("click", () => {  //ввод энтр
        insertText('\n');}) 

    document.getElementById("key-backspace").addEventListener("click", () => {  //ввод бэкспейс
        removeText();
        }) 


    document.getElementById("key-delete").addEventListener("click", () => {  //ввод 
        let start = TEXTAREA.selectionStart;   //ищем первое положение выделенного символа
        let end = TEXTAREA.selectionEnd; //ищем последнее положение выделенного символа
        let finalText = TEXTAREA.value.substring(0, start) + TEXTAREA.value.substring(start+1);
            TEXTAREA.value = finalText; // заменяем значение
            TEXTAREA.focus();  // возвращаем фокус на элемент
            TEXTAREA.selectionEnd = end; 
        })     


    document.addEventListener('keydown', (event) => {    //смена языка
        if (event.ctrlKey && event.altKey) {       
     
    if (langSwitch["lang"] === 'en') {
        Object.defineProperty(langSwitch, "lang", {value: 'ru'})
        for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
            ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['ru'];
        }
    } else if (localStorage.getItem('lang') === 'ru') {
        Object.defineProperty(langSwitch, "lang", {value: 'en'})
        for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
            ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['en'];
    }
    } else {
        if (document.documentElement.lang === 'en') {
            langSwitch.setItem("lang","ru");
            for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
                ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['ru'];
            }
        } else if (document.documentElement.lang === 'ru') {
            langSwitch.setItem("lang","en");
            for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
                ALL_BUTTONS[i].getElementsByTagName("button")[0].innerHTML = virtual_keyboard.keyObj[i]['en'];
            }
        }

    }
}
});


document.addEventListener('keydown', (event) => {  // эмуляция нажатия клавиш
   
    for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
        if (virtual_keyboard.keyObj[i]['code'] === event.code) {
            ALL_BUTTONS[i].classList.add("button-actived");
        }};
                 
        document.addEventListener('keyup', (event) => {  // эмуляция отжатия клавиш
   
             for (let i = 0; i < virtual_keyboard.keyObj.length; i++) {
                  if (virtual_keyboard.keyObj[i]['code'] === event.code) { 
                      ALL_BUTTONS[i].classList.remove("button-actived");
        }};
        
    })

    })


}

}


const virtual_keyboard = new Keyboard();
virtual_keyboard.init();
virtual_keyboard.functional();

