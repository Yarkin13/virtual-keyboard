const divWrapper = document.createElement('div');
const textArea = document.createElement('textarea');
const H1 = document.createElement('h1');
H1.innerText = 'OS Windows, change language = Alt + Shift';
textArea.className = 'input-board';
textArea.id = 'input-board';
divWrapper.className = 'wrapper';
divWrapper.id = 'wrapper';
divWrapper.setAttribute('onselect', 'return false');
divWrapper.setAttribute('onmousedown', 'return false');
document.body.append(H1);
document.body.append(textArea);
document.body.append(divWrapper);
const KEYBOARD = document.getElementById('wrapper');
let objectKeys = {
  1: '`',
  2: '1',
  3: '2',
  4: '3',
  5: '4',
  6: '5',
  7: '6',
  8: '7',
  9: '8',
  10: '9',
  11: '0',
  12: '-',
  13: '=',
  14: 'Backspace',
  15: 'Tab',
  16: 'q',
  17: 'w',
  18: 'e',
  19: 'r',
  20: 't',
  21: 'y',
  22: 'u',
  23: 'i',
  24: 'o',
  25: 'p',
  26: '[',
  27: ']',
  28: 'Del',
  29: 'CapsLock',
  30: 'a',
  31: 's',
  32: 'd',
  33: 'f',
  34: 'g',
  35: 'h',
  36: 'j',
  37: 'k',
  38: 'l',
  39: ';',
  40: "'",
  41: '\\',
  42: 'Enter',
  43: 'Shift',
  44: 'z',
  45: 'x',
  46: 'c',
  47: 'v',
  48: 'b',
  49: 'n',
  50: 'm',
  51: ',',
  52: '.',
  53: '/',
  54: '↑',
  55: 'Shift',
  56: 'Ctrl',
  57: 'Win',
  58: 'Alt',
  59: 'Space',
  60: 'Alt',
  61: 'RU',
  62: '←',
  63: '↓',
  64: '→',
};
const objectClasses = {
  1: 'key',
  2: 'key',
  3: 'key',
  4: 'key',
  5: 'key',
  6: 'key',
  7: 'key',
  8: 'key',
  9: 'key',
  10: 'key',
  11: 'key',
  12: 'key',
  13: 'key',
  14: 'key big-key',
  15: 'key',
  16: 'key',
  17: 'key',
  18: 'key',
  19: 'key',
  20: 'key',
  21: 'key',
  22: 'key',
  23: 'key',
  24: 'key',
  25: 'key',
  26: 'key',
  27: 'key',
  28: 'key',
  29: 'key big-key',
  30: 'key',
  31: 'key',
  32: 'key',
  33: 'key',
  34: 'key',
  35: 'key',
  36: 'key',
  37: 'key',
  38: 'key',
  39: 'key',
  40: 'key',
  41: 'key',
  42: 'key big-key',
  43: 'key big-key',
  44: 'key',
  45: 'key',
  46: 'key',
  47: 'key',
  48: 'key',
  49: 'key',
  50: 'key',
  51: 'key',
  52: 'key',
  53: 'key',
  54: 'key',
  55: 'key',
  56: 'key',
  57: 'key',
  58: 'key',
  59: 'key space',
  60: 'key',
  61: 'key',
  62: 'key',
  63: 'key',
  64: 'key',
  65: 'key',
};
const objectId = {
  1: '`',
  2: '1',
  3: '2',
  4: '3',
  5: '4',
  6: '5',
  7: '6',
  8: '7',
  9: '8',
  10: '9',
  11: '0',
  12: '-',
  13: '=',
  14: 'backspace',
  15: 'tab',
  16: 'q',
  17: 'w',
  18: 'e',
  19: 'r',
  20: 't',
  21: 'y',
  22: 'u',
  23: 'i',
  24: 'o',
  25: 'p',
  26: '[',
  27: ']',
  28: 'delete',
  29: 'capslock',
  30: 'a',
  31: 's',
  32: 'd',
  33: 'f',
  34: 'g',
  35: 'h',
  36: 'j',
  37: 'k',
  38: 'l',
  39: ';',
  40: "'",
  41: '\\',
  42: 'enter',
  43: 'shift',
  44: 'z',
  45: 'x',
  46: 'c',
  47: 'v',
  48: 'b',
  49: 'n',
  50: 'm',
  51: ',',
  52: '.',
  53: '/',
  54: 'arrowup',
  55: 'shift',
  56: 'control',
  57: 'meta',
  58: 'alt',
  59: ' ',
  60: 'alt',
  61: 'ru',
  62: 'arrowleft',
  63: 'arrowdown',
  64: 'arrowright',
};
const objectIdRU = {
  1: '`',
  2: '1',
  3: '2',
  4: '3',
  5: '4',
  6: '5',
  7: '6',
  8: '7',
  9: '8',
  10: '9',
  11: '0',
  12: '-',
  13: '=',
  14: 'backspace',
  15: 'tab',
  16: 'й',
  17: 'ц',
  18: 'у',
  19: 'к',
  20: 'е',
  21: 'н',
  22: 'г',
  23: 'ш',
  24: 'щ',
  25: 'з',
  26: 'х',
  27: 'ъ',
  28: 'delete',
  29: 'capslock',
  30: 'ф',
  31: 'ы',
  32: 'в',
  33: 'а',
  34: 'п',
  35: 'р',
  36: 'о',
  37: 'л',
  38: 'д',
  39: 'ж',
  40: 'э',
  41: '\\',
  42: 'enter',
  43: 'shift',
  44: 'я',
  45: 'ч',
  46: 'с',
  47: 'м',
  48: 'и',
  49: 'т',
  50: 'ь',
  51: 'б',
  52: 'ю',
  53: '.',
  54: 'arrowup',
  55: 'shift',
  56: 'control',
  57: 'meta',
  58: 'alt',
  59: ' ',
  60: 'alt',
  61: 'ru',
  62: 'arrowleft',
  63: 'arrowdown',
  64: 'arrowright',
};
let objectKeysRU = {
  1: 'ё',
  2: '1',
  3: '2',
  4: '3',
  5: '4',
  6: '5',
  7: '6',
  8: '7',
  9: '8',
  10: '9',
  11: '0',
  12: '-',
  13: '=',
  14: 'Backspace',
  15: 'Tab',
  16: 'й',
  17: 'ц',
  18: 'у',
  19: 'к',
  20: 'е',
  21: 'н',
  22: 'г',
  23: 'ш',
  24: 'щ',
  25: 'з',
  26: 'х',
  27: 'ъ',
  28: 'Del',
  29: 'CapsLock',
  30: 'ф',
  31: 'ы',
  32: 'в',
  33: 'а',
  34: 'п',
  35: 'р',
  36: 'о',
  37: 'л',
  38: 'д',
  39: 'ж',
  40: 'э',
  41: '\\',
  42: 'Enter',
  43: 'Shift',
  44: 'я',
  45: 'ч',
  46: 'с',
  47: 'м',
  48: 'и',
  49: 'т',
  50: 'ь',
  51: 'б',
  52: 'ю',
  53: '.',
  54: '↑',
  55: 'Shift',
  56: 'Ctrl',
  57: 'Win',
  58: 'Alt',
  59: 'Space',
  60: 'Alt',
  61: 'ENG',
  62: '←',
  63: '↓',
  64: '→',
};


// Add HTML  structure

for (let i = 1; i < 65; i += 1) {
  if (sessionStorage.getItem('object') === null) {
    const div = document.createElement('div');
    div.innerText = objectKeys[i];
    div.className = objectClasses[i];
    divWrapper.append(div);
    div.id = objectId[i];
  } else { // saving the language when refreshing the page
    const div = document.createElement('div');
    div.innerText = JSON.parse(sessionStorage.getItem('object'))[i];
    div.className = objectClasses[i];
    divWrapper.append(div);
    div.id = objectId[i];
  }
}


// Change language
const CAPS = document.getElementById('capslock');
let flag = false;
document.onkeydown = (event) => {
  if (event.code === 'AltLeft') flag = true;
  if (event.code === 'ShiftLeft' && flag) {
    flag = false;
    if ([...KEYBOARD.querySelectorAll('div')][60].innerHTML === 'RU') {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeysRU[i];
        [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectIdRU[i];
      }
      if (CAPS.classList.contains('active-caps')) CAPS.classList.remove('active-caps');
      sessionStorage.clear();
      sessionStorage.setItem('object', JSON.stringify(objectKeysRU));// add object in session storage
      objectKeysRU = JSON.parse(sessionStorage.getItem('object'));
    } else {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeys[i];
        [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectId[i];
      }
      if (CAPS.classList.contains('active-caps')) CAPS.classList.remove('active-caps');
      sessionStorage.clear();
      sessionStorage.setItem('object', JSON.stringify(objectKeys)); // add object in session storage
      objectKeys = JSON.parse(sessionStorage.getItem('object'));
    }
  }
};

const RU = document.getElementById('ru');
RU.addEventListener('click', () => {
  if ([...KEYBOARD.querySelectorAll('div')][60].innerHTML === 'RU') {
    for (let i = 1; i < 65; i += 1) {
      [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeysRU[i];
      [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectIdRU[i];
    }
    sessionStorage.clear();
    sessionStorage.setItem('object', JSON.stringify(objectKeysRU));// add object in session storage
    objectKeysRU = JSON.parse(sessionStorage.getItem('object'));
  } else {
    for (let i = 1; i < 65; i += 1) {
      [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeys[i];
      [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectId[i];
    }
    sessionStorage.clear();
    sessionStorage.setItem('object', JSON.stringify(objectKeys));// add object in session storage
    objectKeys = JSON.parse(sessionStorage.getItem('object'));
  }
});

// Language and register definition
document.addEventListener('keydown', (event) => {
  if (event.key.length === 1) {
    if (/[a-z]{1,1}/.test(event.key)) {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeys[i];
        [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectId[i];
      }
    } else if (/[A-Z]{1,1}/.test(event.key)) {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeys[i].toUpperCase();
        [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectId[i];
      }
    } else if (/[А-Я]{1,1}/.test(event.key)) {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeysRU[i].toUpperCase();
        [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectIdRU[i];
      }
    } else if (/[а-я]{1,1}/.test(event.key)) {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeysRU[i];
        [...KEYBOARD.querySelectorAll('div')][i - 1].id = objectIdRU[i];
      }
    }
  }
  textArea.focus();
});

document.addEventListener('keypress', (event) => {
  const s = event.key;
  if (event.key.toUpperCase() === s) {
    CAPS.classList.add('active-caps');
  }
});


// Backlight keys

document.addEventListener('keydown', (event) => {
  if (event.key === !'F12') document.getElementById(event.key.toLowerCase()).classList.add('active-key');
});

document.addEventListener('keyup', (event) => {
  if (event.key === !'F12') document.getElementById(event.key.toLowerCase()).classList.remove('active-key');
});

// CapsLock

document.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') {
    if ([...KEYBOARD.querySelectorAll('div')][28].innerHTML === 'CapsLock') {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML.toUpperCase();
      }
    } else if ([...KEYBOARD.querySelectorAll('div')][60].innerHTML === 'RU') {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeys[i];
      }
    } else {
      for (let i = 1; i < 65; i += 1) {
        [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeysRU[i];
      }
    }
  }
});


document.addEventListener('keydown', (event) => { // backlight caps
  if (event.key === 'CapsLock') {
    if (CAPS.classList.contains('active-caps')) CAPS.classList.remove('active-caps');
    else CAPS.classList.add('active-caps');
  }
});

CAPS.addEventListener('click', () => { // backlight caps
  if (CAPS.classList.contains('active-caps')) CAPS.classList.remove('active-caps');
  else CAPS.classList.add('active-caps');
});


CAPS.addEventListener('click', () => {
  if ([...KEYBOARD.querySelectorAll('div')][28].innerHTML === 'CapsLock') {
    for (let i = 1; i < 65; i += 1) {
      [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML.toUpperCase();
    }
  } else if ([...KEYBOARD.querySelectorAll('div')][60].innerHTML === 'RU') {
    for (let i = 1; i < 65; i += 1) {
      [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeys[i];
    }
  } else {
    for (let i = 1; i < 65; i += 1) {
      [...KEYBOARD.querySelectorAll('div')][i - 1].innerHTML = objectKeysRU[i];
    }
  }
});


// Click and add in input
const FORM = document.getElementById('input-board');
let text = '';
KEYBOARD.addEventListener('click', (event) => {
  if (event.toElement.classList.contains('key')) {
    if (event.toElement.innerText.length === 1) {
      text = FORM.value;
      text += event.toElement.innerText;
      FORM.value = text;
    }
  }
});

// Click backspace
KEYBOARD.addEventListener('click', (event) => {
  if (event.toElement.id === 'backspace') {
    text = FORM.value;
    text = text.slice(0, -1);
    FORM.value = text;
  }
});

//  Click space
const SPACE = document.getElementById(' ');
const space = ' ';
SPACE.addEventListener('click', () => {
  text = FORM.value + space;
  FORM.value = text;
});

//  Del
const DEL = document.getElementById('delete');
DEL.addEventListener('click', () => {
  text = '';
  FORM.value = text;
});

//  Animation
KEYBOARD.addEventListener('mousedown', (event) => {
  event.target.classList.add('click-key');
});

KEYBOARD.addEventListener('mouseup', (event) => {
  event.target.classList.remove('click-key');
});

// Enter
const enter = '\n';
const ENTER = document.getElementById('enter');
ENTER.addEventListener('click', () => {
  FORM.value = text + enter;
});

// TAB
const tab = '  ';
const TAB = document.getElementById('tab');
TAB.addEventListener('click', () => {
  text = FORM.value + tab;
  FORM.value = text;
});
