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
    if(innerHTML.search('var')){
        return innerHTML.replace('var', '<span class="keyword">var</span>');
    }
}

function updateEditorStyle() {
    let elements = document.getElementsByClassName("javascript-editor");
    
    // console.log(x[0].innerHTML);

    // document.getElementsByClassName("javascript-editor")[0].innerHTML = 'doopa';
    // elements.forEach(el => {
    //     el.innerHTML = parseElement(el.innerHTML);
    // });
}
