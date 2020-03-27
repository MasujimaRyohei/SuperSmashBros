var langNo = {
    jp: 1, en: 2, kr: 3, cn: 4
}

function getTitle(no, lang) {
    var req = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/MasujimaRyohei/SuperSmashBros/master/Series/Title.csv";
    req.open("get", url, true);
    req.send();

    req.onload = function () {
        var array = convertCSVtoArray(req.responseText);

        document.getElementById("title").innerHTML = array[no][langNo[lang]];
    }


}

function getCharacter(no, lang) {
    var url = "https://raw.githubusercontent.com/MasujimaRyohei/SuperSmashBros/master/Series/" + no + "/PlayableCharacterList.csv";
    console.log(url);
    var req = new XMLHttpRequest();
    req.open("get", url);
    req.send();
    req.onload = function () {

        var array = convertCSVtoArray(req.responseText);
        var result = new Array();
        for (var i = 1; i < array.length; i++) {
            result.push(array[i][langNo[lang]]);
        }
        document.getElementById("char").innerHTML = result;
    }
}
function convertCSVtoArray(str) {
    var result = [];
    var tmp = str.split("\n");

    for (var i = 0; i < tmp.length; ++i) {
        result[i] = tmp[i].split(',');
    }

    return result;
}

function onClick() {
    var no = document.getElementById("no").value;
    var lang = document.getElementById("lang").value;

    getTitle(no, lang);
    getCharacter(no, lang);
}