function typeContent(char) {
    let pNumber = $('#display-number');
    let pVerses = $('#display-verses');

    let numberText = pNumber.text();
    let versesText = pVerses.text();

    let numberLen = numberText.length;

    if (numberText.match(/[a-z]/i)) {
        numberText = '';
        numberLen = numberText.length;
        pNumber.text('');
    }

    if (char === '<') {
        position--;
        position = (position+13) % 13;
        pNumber.text(songlist[position].label);
    }
    else if (char === '>') {
        position++;
        position = position % 13;
        pNumber.text(songlist[position].label);
    }
    else if (char === 'A') {
        let saveNumber = '';
        versesText.length > 0 ? saveNumber = numberText.concat(', ', versesText) : saveNumber = numberText;
        if (saveNumber.charAt(0) === '0') { saveNumber = saveNumber.slice(1,saveNumber.length); }

        songlist[position].number = saveNumber;
        position++;
        position = position % 13;

        pNumber.text(songlist[position].label);
        pVerses.text('')
        setFields();
    } else if (char === 'L') {
        pNumber.text(songlist[position].label);
        pVerses.text('')
    } else if (numberLen < 3) {
        numberText += char;
        let allowed = /^[0-9]{0,3}$/g.test(numberText);
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

function makePrintPage() {
    let header = `<meta charset="utf-8">
    <meta name="viewport" value="width=device-width, initial-scale=1">
    <meta name="author" value="Tobias Zysk">
    <meta name="generator" value="JavaScript">
    <title>Gottesdienstgestaltung - Exportvorlage</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
    
    <style>
        @Page Content {
            size: 21cm 29.7cm;
            margin: 10mm 10mm 10mm 10mm;
        }

        body {
            page: Content;
        }

        td {
            padding-bottom: 1.5em;
        }
    </style>`;

    let layout = `
    <div class="container">
        <div class="row">
            <div id="topleft" class="col-md-6"></div>
            <div id="topright" class="col-md-6"></div>
        </div>
        <div class="row">
            <div id="bottomleft" class="col-md-6"></div>
            <div id="bottomright" class="col-md-6"></div>
        </div>
    </div>
    `;

    let template = `
    <div class="card">
    <div class="card-header">
        <strong>Gottesdienstgestaltung</strong>
    </div>
    <div class="card-body">
        <table>
            <tbody>
                <tr>
                    <td>${songlist[0].label}</td>
                    <td>${songlist[0].number}</td>
                    <td>${songlist[0].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[1].label}</td>
                    <td>${songlist[1].number}</td>
                    <td>${songlist[1].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[2].label}</td>
                    <td>${songlist[2].number}</td>
                    <td>${songlist[2].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[3].label}</td>
                    <td>${songlist[3].number}</td>
                    <td>${songlist[3].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[4].label}</td>
                    <td>${songlist[4].number}</td>
                    <td>${songlist[4].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[5].label}</td>
                    <td>${songlist[5].number}</td>
                    <td>${songlist[5].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[6].label}</td>
                    <td>${songlist[6].number}</td>
                    <td>${songlist[6].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[7].label}</td>
                    <td>${songlist[7].number}</td>
                    <td>${songlist[7].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[8].label}</td>
                    <td>${songlist[8].number}</td>
                    <td>${songlist[8].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[9].label}</td>
                    <td>${songlist[9].number}</td>
                    <td>${songlist[9].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[10].label}</td>
                    <td>${songlist[10].number}</td>
                    <td>${songlist[10].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[11].label}</td>
                    <td>${songlist[11].number}</td>
                    <td>${songlist[11].comment}</td>
                </tr>
                <tr>
                    <td>${songlist[12].label}</td>
                    <td>${songlist[12].number}</td>
                    <td>${songlist[12].comment}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>`;

    let doc = window.open('', 'Gottesdienstgestaltung - Exportformat', `toolbar=no,location=no,directories=no,resizeable=yes,width=800, height=100, top=10, left=10`);
    doc.document.head.innerHTML = header;
    doc.document.body.innerHTML = layout;
    doc.document.getElementById('topleft').innerHTML = template;
    doc.document.getElementById('topright').innerHTML = template;
    doc.document.getElementById('bottomleft').innerHTML = template;
    doc.document.getElementById('bottomright').innerHTML = template;
    doc.print();
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
    $('#setBtn').click(() => { typeContent('A') });
    $('#nextBtn').click(() => { typeContent('>') });
    $('#backBtn').click(() => { typeContent('<') });
    $('#exportBtn').click(() => { makePrintPage() });

    setFields();
});

function setFields() {
    $('#label1').text(songlist[0].label + ':');
    $('#label2').text(songlist[1].label + ':');
    $('#label3').text(songlist[2].label + ':');
    $('#label4').text(songlist[3].label + ':');
    $('#label5').text(songlist[4].label + ':');
    $('#label6').text(songlist[5].label + ':');
    $('#label7').text(songlist[6].label + ':');
    $('#label8').text(songlist[7].label + ':');
    $('#label9').text(songlist[8].label + ':');
    $('#label10').text(songlist[9].label + ':');
    $('#label11').text(songlist[10].label + ':');
    $('#label12').text(songlist[11].label + ':');
    $('#label13').text(songlist[12].label + ':');

    $('#number1').text(songlist[0].number);
    $('#number2').text(songlist[1].number);
    $('#number3').text(songlist[2].number);
    $('#number4').text(songlist[3].number);
    $('#number5').text(songlist[4].number);
    $('#number6').text(songlist[5].number);
    $('#number7').text(songlist[6].number);
    $('#number8').text(songlist[7].number);
    $('#number9').text(songlist[8].number);
    $('#number10').text(songlist[9].number);
    $('#number11').text(songlist[10].number);
    $('#number12').text(songlist[11].number);
    $('#number13').text(songlist[12].number);

    $('#display-number').text(songlist[position].label);
}

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
        char = '-';
    }
    if (event.keyCode === 37) { // <-
        char = "<";
    }
    if (event.keyCode === 39) { // ->
        char = ">";
    }
    let allowed = /[0-9AL+\-<>]/g.test(char);
    if (allowed) {
        typeContent(char);
    }
});