function typeContent(char) {
    let pNumber = $('#display-number');
    let pVerses = $('#display-verses');

    let numberText = pNumber.text();
    let versesText = pVerses.text();

    let numberLen = numberText.length;
    let versesLen = versesText.length;

    if (char === 'L') {
        pNumber.text('');
        pVerses.text('')
    } else if (numberLen < 4) {
        numberText += char;
        let allowed = /^[0-9]{0,4}$/g.test(numberText);
        if (allowed) {
            pNumber.text(numberText);
        }
    } else if (/^[1-9]$/g.test(char)) {
        versesText += char;
        let allowed = /^([1-9]{1}[+\-]{1}){0,1}([1-9]{1}[+\-]{1}){0,1}[1-9]{0,1}$/g.test(versesText);

        if (versesText.length > 2 && versesText[0] >= char) {
            return;
        }
        if (versesText.length > 3 && versesText[2] >= char) {
            return;
        }
        if (allowed) {
            pVerses.text(versesText);
        }
    } else if (/^[+-]$/g.test(char)) {
        versesText += char;
        let allowed = /^([1-9]{1}[+\-]{1}){0,1}([1-9]{1}[+\-]{1}){0,1}[1-9]{0,1}$/g.test(versesText);

        if (versesText.length > 3 && versesText[1] === '-' && versesText[1] == char) {
            return;
        }

        if (allowed) {
            pVerses.text(versesText);
        }
    }
}

$(document).ready(() => {
    $('#oneBtn').click(() => { typeContent('1') });
    $('#twoBtn').click(() => {typeContent('2') });
    $('#threeBtn').click(() => { typeContent('3') });
    $('#fourBtn').click(() => { typeContent('4') });
    $('#fiveBtn').click(() => { typeContent('5') });
    $('#sixBtn').click(() => { typeContent('6') });
    $('#sevenBtn').click(() => { typeContent('7') });
    $('#eightBtn').click(() => { typeContent('8') });
    $('#nineBtn').click(() => { typeContent('9') });
    $('#zeroBtn').click(() => { typeContent('0') });
    $('#minusBtn').click(() => { typeContent('-') });
    $('#plusBtn').click(() => { typeContent('+') });
    $('#delBtn').click(() => { typeContent('L') });
});

$(document).on('keyup', (event) => {
    let char = String.fromCharCode(event.keyCode);
    if (event.keyCode === 8) { // <--
        char = 'L';
    }
    if (event.keyCode === 13) { // ENTER
        char = 'A';
    }
    if (event.keyCode === 187) { // +
        char = '+';
    }
    if (event.keyCode === 189) { // -
        char = '-'
    }
    let allowed = /[0-9L+\-]/g.test(char);
    if (allowed) {
        typeContent(char);
    }
});