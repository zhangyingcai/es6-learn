function getValue(condition) {
    
        if (condition) {
            var value = "blue";
    
            // 其它代码
    
            return value;
        } else {
    
            // value 可以被访问到，其值为 undefined
    
            return null;
        }
        
        // 这里也可以访问到 value，值仍为 undefined
    }
    var a = 1;
    {
        var a = 2;
    }
    console.log(a);
    console.log(window.a);
    const c = 1;
    // c=2;

    console.log(window.RegExp);
    let RegExp = 'hello';
    console.log(RegExp);
    console.log(window.RegExp);
    console.log(window.RegExp === RegExp);

    const zyc = 'hello';
    console.log(window.zyc);