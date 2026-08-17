export default function checkAnagrams(text, word) {
    text = text.toUpperCase().replace(" ", "");
    word = word.toUpperCase().replace(" ", "");

    if (text.length != word.length) return false;

    let arr = new Array(26).fill(0);

    for (let x of text) {
        arr[x.charCodeAt(0) - 65] += 1;
    }

    for (let x of word) {
        arr[x.charCodeAt(0) - 65] -= 1;
    }

    for (let x of arr) if (x != 0) return false;

    return true;
}
