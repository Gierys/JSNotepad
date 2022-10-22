/* script.js
 * The script containing all of the functions for the JSNotepad application.
 * Date: 22.10.2022
 * By Gierys - Github: https://github.com/gierys
 */


const CHARCOUNTINTERVAL = setInterval(count_chars, 250);
const LINECOUNTINTERVAL = setInterval(count_lines, 250);

function save(){
    var fileName = prompt("Enter a name for your file");
    var fileName = fileName + ".txt";
    var saveData = document.getElementById("mainTextArea").value;
    var SaveFile = new Blob([saveData], {type: "text/plain;charset=utf-8"});
    saveAs(SaveFile, fileName); 
}

function choose_file(){
    if(document.getElementById("fileSelector").style.display == "none"){
    document.getElementById("fileSelector").style.display = "block";
    document.getElementById("fileready").style.display = "block";
    }else{
    document.getElementById("fileSelector").style.display = "none";
    document.getElementById("fileready").style.display = "none";
    }
}

function load(){
    var selectedFile = document.getElementById("fileSelector").files[0];
    var reader = new FileReader();
    reader.addEventListener("loadend", function() { document.getElementById("mainTextArea").value = reader.result; });
    reader.readAsText(selectedFile);
    document.getElementById("fileSelector").style.display = "none";
    document.getElementById("fileready").style.display = "none";
}

function new_file(){
    window.open("index.html", "_blank");
}    

function count_lines(){
    var contents = document.getElementById("mainTextArea").value; 
    var textArray = contents.split("\n");
    document.getElementById("linenum").innerHTML = textArray.length;
}

function count_chars(){
    var text = document.getElementById("mainTextArea").value; 
    var textArray = text.split("");
    var newLines = text.split("\n");
    document.getElementById("charnum").innerHTML = textArray.length - newLines.length + 1;
}


    function light_mode(){
    document.body.style.backgroundImage = "url('./images/bg_light.png')";
    document.getElementById("mainTextArea").style.backgroundColor = "silver";
    document.getElementById("mainTextArea").style.color = "rgb(33, 34, 37)";
    document.getElementById("countersContainer").style.color = "rgb(33, 34, 37)";
    for(i=0; i<6; i++){
        document.getElementsByTagName("button")[i].style.color = "rgb(33, 34, 37)";
        document.getElementsByTagName("button")[i].style.backgroundColor = "silver";
    }
}

    function dark_mode(){
    document.body.style.backgroundImage = "url('./images/bg_dark.png')";
    document.getElementById("mainTextArea").style.backgroundColor = "rgb(33, 34, 37)";
    document.getElementById("mainTextArea").style.color = "silver";
    document.getElementById("countersContainer").style.color = "deepskyblue";
    for(i=0; i<6; i++){
        document.getElementsByTagName("button")[i].style.color = "deepskyblue";
        document.getElementsByTagName("button")[i].style.backgroundColor = "rgb(33, 34, 37)";
    }
}

    function toggle_wrap(){
    if(document.getElementById("mainTextArea").style.whiteSpace == "pre-wrap"){
        document.getElementById("mainTextArea").style.whiteSpace = "pre";
        document.getElementById("mainTextArea").style.overflowX = "scroll";
    }else{
        document.getElementById("mainTextArea").style.whiteSpace = "pre-wrap";
        document.getElementById("mainTextArea").style.overflowX = "hidden";
    }
}

/*

function count_words(){
    var text = document.getElementById("mainTextArea").value; 
    var textArray = text.split(" ");
    document.getElementById("wordnum").innerHTML = textArray.length;
}

*/