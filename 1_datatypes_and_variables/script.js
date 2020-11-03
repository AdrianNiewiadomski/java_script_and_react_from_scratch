// jshint esversion:6

function parseElement(innerHTML){
    let lines = innerHTML.split('\n');

    lines = lines.filter(line => /[A-Za-z0-9]/g.test(line))
                .map(line => {
                    return new Line(line)
                        .parseKeywords()
                        .parseLiterals()
                        .parseStrings()
                        .parseFunctions()
                        .getLine();
                });

    return lines.join(separator='<br>');    
}

function updateEditorStyle() {
    let elements = document.getElementsByClassName('javascript-editor');
    
    for(let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = parseElement(elements[i].innerHTML);
    }
}
