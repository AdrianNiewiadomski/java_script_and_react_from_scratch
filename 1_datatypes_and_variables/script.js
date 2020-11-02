// jshint esversion:6

// var my_var = 2;
// function ali(myvar) {
//     return myvar*2;
// }
// var aa = 'aa';
// var aa = true;

// console.log(aa);

// var d = document;
// console.log(d);


// var isPasswordCorrect = true;
// console.log(isPasswordCorrect);

// var myString = 'Mary had a little lamb';
// console.log(myString);

// var myDoc = document;
// console.log(myDoc);  

function parseElement(innerHTML){
    let lines = innerHTML.split('\n');
    lines = lines.map(element => element.replace(/[^A_Za-z0-9$_](var)[^A_Za-z0-9$_]/g, '<span class="keyword">var</span> '));
    return lines.join(separator='<br>');    
}

function updateEditorStyle() {
    let elements = document.getElementsByClassName("javascript-editor");
    
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = parseElement(elements[i].innerHTML);
    }
}
