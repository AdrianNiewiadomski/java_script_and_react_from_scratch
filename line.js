// jshint esversion:6

class Line {
    constructor(line){
        this.line = line;
    }

    parseKeywords(){
        let keywords = ['class', 'var', 'let', 'const', 'function', 'return', 'constructor'];
    
        keywords.forEach(keyword => {
            let re = new RegExp('[^A_Za-z0-9_]{}[^A_Za-z0-9_]'.replace('{}', keyword), 'g');
            this.line = this.line.replace(re, ' <span class="keyword">{}</span> '.replace('{}', keyword));
        });
    
        return this;
    }

    parseLiterals() {
        if(this.line.includes('true')) {
            this.line = this.line.replace('true', '<span class="literal">true</span>');
        }

        if(this.line.includes('false')) {
            this.line = this.line.replace('true', '<span class="literal">false</span>');
        }

        let result = this.line.match(/[ ][0-9]+[\.]?[0-9]*/g);
        if(result != null){
            result.forEach(el => {
                this.line = this.line.replace(el, '<span class="literal">'+el+'</span>');
            });
        }

        return this;
    }

    parseStrings() {
        let result = this.line.match(/[ ]['"][A-Za-z0-9 ]*['"]/g);
        
        if(result != null){
            result.forEach(el => {
                this.line = this.line.replace(el, '<span class="string">'+el+'</span>');
            });
        }

        return this;
    }

    parseFunctions() {
        let result = this.line.match(/[ \.][A-Za-z]+\(/g);

        if(result != null){
            result.forEach(el => {
                this.line = this.line.replace(el.slice(1, -1), '<span class="function">'+el.slice(1, -1)+'</span>');
            });
        }

        return this;
    }

    getLine(){
        return this.line;
    }
}
