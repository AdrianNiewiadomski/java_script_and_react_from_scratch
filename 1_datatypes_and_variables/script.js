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

function replaceKeywords(line){
    let keywords = ['var', 'function', 'return'];

    keywords.forEach(keyword => {
        let re = new RegExp('[^A_Za-z0-9_]{}[^A_Za-z0-9_]'.replace('{}', keyword), 'g');
        line = line.replace(re, ' <span class="keyword">{}</span> '.replace('{}', keyword));
    });

    return line;
}

function parseElement(innerHTML){
    let lines = innerHTML.split('\n');

    lines = lines.filter(line => /[A-Za-z0-9]/g.test(line))
                .map(line => {        
                    return replaceKeywords(line);
                });

    return lines.join(separator='<br>');    
}

function updateEditorStyle() {
    let elements = document.getElementsByClassName("javascript-editor");
    
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = parseElement(elements[i].innerHTML);
    }
}
