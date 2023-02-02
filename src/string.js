export function revertString(str) {
    let revertedStr = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      revertedStr += str[i];
    }
    return revertedStr;
  }


export function anagram(str) {
    let strAnagram = ''

    for (let i = str.length - 1; i >= 0; i--) {
        strAnagram += str[i]
    }

    if (str === strAnagram) {
      return `Строка ${str} является анаграмом`
    } else {
      return `Строка ${str} не является анаграмом`
    }
}

// console.log(anagram('anna'))