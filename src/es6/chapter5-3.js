{
    // ES5的时候是通过构造函数来实现类的功能的
    function Person(name, age) {
        this.name = name
        this.age = age
    }

    Person.prototype.sayHello = function () {
        console.log(`大家好， 我叫${this.name}，我今年${this.age}岁了`)
    }

    const p = new Person('小明', 17)
    console.log(p)
}

{
    // ES6改造ES5实现类的方法
    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log(`大家好， 我叫${this.name}，我今年${this.age}岁了`)
        }
    }

    const p = new Person('小红', 17)
    console.log('class', p)
    console.log(typeof Person)
}

{
    // 类的继承
    class Parent {
        constructor(name = 'Nick') {
            this.name = name
        }
    }

    class Child extends Parent {
        constructor(name = 'Jack') {
            // super要放在构造函数的最前面
            super(name)
            this.name = name
        }
    }

    console.log('继承', new Child())
}

{
    class Person {
        constructor(name = 'Nick') {
            this.name = name
        }

        get fullName() {
            return this.name + '\xa0' + 'Liu'
        }

        set fullName(value) {
            this.name = value
        }
    }

    const p = new Person()
    console.log('get', p.fullName)
    p.fullName = 'Jack'
    console.log('set', p.name)
}

{
    // 定义静态方法
    class Person {
        constructor(name = 'Nick') {
            this.name = name
        }

        static sayHello(obj) {
            console.log('my name is ' + obj.name)
        }
    }

    const p = new Person('小花')
    Person.sayHello(p)
}

{
    // 定义静态属性
    class Person {
        static prop = 'test'

        constructor(name = 'Nick') {
            this.name = name
        }

        static sayHello(obj) {
            console.log('my name is ' + obj.name)
        }
    }

    // Person.prop = 'test'
    console.log(Person.prop)
}