(function(root,String){
    function render(template, context) {
        var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
        return template.replace(tokenReg, function (word, slash1, token, slash2) {
            if (slash1 || slash2) {
                return word.replace('\\', '');
            }
            var variables = token.replace(/\s/g, '').split('.');
            var currentObject = context;
            var i, length, variable;
            for (i = 0, length = variables.length, variable = variables[i]; i < length; ++i) {
                currentObject = currentObject[variable];
                if (currentObject === undefined || currentObject === null) return '';
            }
            return currentObject;
        })
    }
    String.prototype.render = String.prototype.render || function (context) {
        return render(this, context);
    };
    if (typeof exports !== 'undefined'){
        if(typeof module !== 'undefined' && module.exports){
            exports = module.exports = render;
        }
    }else if(typeof define === 'function' && define.amd){
        define('render', [], function(){
            return render;
        });
    }else if(typeof define === 'function' && define.cmd){
        define(function(){
            return render;
        })
    }else{
        root.render = render;
    }
})(this,String);
