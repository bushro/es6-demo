{
    // 对象中扩展运算符的使用

    // 复制对象
    const obj = {name: 'Nick', video: 'es6', info: {height: 180}}
    console.log("原来", obj)
    const initObj = {color: 'red'}
    let videoObj = {...obj}
    console.log(videoObj)

    // 引入原对象  替换对象中的值
    let obj2 = {...obj, name: 'Jack'}
    const newArr = JSON.parse(JSON.stringify(obj));
    obj.info.height = 200
    console.log("...拷贝，修改原来的值。拷贝后的值已经变化", obj2)
    console.log("JSON拷贝，修改原来的值。拷贝后的值不变", newArr)

    //合并对象
    let obj3 = {...obj, ...initObj}
    console.log(obj3)

    // 坑点
    // 简单类型的时候，使用扩展运算符是没问题的，但是如果扩展运算符展开对象以后，还是一个对象的话，我们复制的只是一个指针
}

{
    let name = '小明'
    let age = 18
    let es5Obj = {
        name: name,
        age: age,
        sayHello: function () {
            console.log('this is es5Obj')
        }
    }
    let es6Obj = {
        name,
        age,
        sayHello() {
            console.log('this is es6Obj')
        }
    }

    console.log('es5', es5Obj)
    console.log('es6', es6Obj)
    es5Obj.sayHello()
    es6Obj.sayHello()
}

{
    let key = 'name'
    let es5Obj = {}
    es5Obj[key] = '小明'
    let es6Obj = {
        [key]: '小红'
    }
    console.log(" es5Obj、es6Obj:", es5Obj, es6Obj)
}

{
    // 新增方法

    // Object.is()和'==='
    let result = Object.is(NaN, NaN)
    console.log(result, NaN === NaN)

    // Object.assign()
    const person = {name: '小米', age: 18, info: {height: 180}}
    let person2 = {}
    Object.assign(person2, person)
    person.info.height = 160
    person.name = '华为'
    console.log(person2)
    console.log("assign拷贝后的对象:" + person2.info.height + " " + person2.name);
}

{
    // Array.from 类数组对象 有length,可遍历
    const str = 'hello'
    const strList = Array.from(str)
    console.log(strList)
    // 将伪数组转换成数组
    let likeArr = {
        0: 'react',
        1: 'Vue',
        2: 'angular',
        3: 'Node',
        'length': 4
    }
    let arr = Array.from(likeArr);
    console.log(arr);

    //set结构生成转为真正的数组
    let arr3 = [1, 1, 2, 97, 56, 56, 56, 56];
    let set = new Set(arr3);
    console.log(set);
    let arr2 = Array.from(set);
    console.log(arr2);


    //将map结构转为真数组
    const map = new Map();
    map.set('one', 'React');
    map.set('two', 'Vue');
    map.set('three', 'Angular');
    console.log(map);
    const arr1 = Array.from(map);
    console.log(arr1);


}

{
    let xdkey = {
        hobby1: '吃饭',
        hobby2: '睡觉',
        hobby3: '敲代码',
    };
    console.log(Object.keys(xdkey));
    let xdvalue = {
        hobby1: '吃饭',
        hobby2: '睡觉',
        hobby3: '敲代码',
    };
    console.log(Object.values(xdvalue));

    let entries = {
        hobby1: '吃饭',
        hobby2: '睡觉',
        hobby3: '敲代码',
    };
    console.log(Object.entries(entries));
    // Object.keys() Object.values(), Object.entries()
    const json = {name: 'Nick', video: 'es6', date: 2019}
    let obj = {}
    for (const key of Object.keys(json)) {
        obj[key] = json[key]
    }
    console.log(" key of Object.keys ", obj)

    const list = [{title: 'es6', id: 1}, {title: 'webpack', id: 2}, {title: 'vue', id: 3}, {title: 'webpack', id: 4}]
    //keys:0,1,2,3
    console.log("keys:", Object.keys(list))
    //values:一个个对象
    console.log("values:", Object.values(list))
    const dicts = [
        {
            "name": "低危",
            "type": "ALARMGRADE",
            "value": "1"
        },
        {
            "name": "中危",
            "type": "ALARMGRADE",
            "value": "2"
        },
        {
            "name": "高危",
            "type": "ALARMGRADE",
            "value": "3"
        },
        {
            "name": "一般",
            "type": "ACT_LEVEL",
            "value": "1"
        },
        {
            "name": "紧急",
            "type": "ACT_LEVEL",
            "value": "2"
        },
        {
            "name": "非常紧急",
            "state": 1,
            "type": "ACT_LEVEL",
            "value": "3"
        }
    ];
    var actions = [];
    var key = "ACT_LEVEL";
    var value = "3";
    console.log(Object.keys(dicts))
    /**
     *    ES6中some和every方法
     *    1.some表示只有一个满足条件就返回true
     *    2.every则表示只有全部满足条件才会返回true
     */
    Object.keys(dicts).some((key) => {
        if (dicts[key].value == ('' + value)) {
            actions.push(dicts[key].name);
            return true;
        }
    })
    console.log("字典 " + actions.join(''))
}

