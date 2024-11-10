{
    // 添加元素
    let map = new Map();
    map.set([1, 2, 3], 'number')
    console.log(map)

    let map2 = new Map([['name', 'Nick'], ['sex', 'male'], ['age', 18]])
    map2.set("address", "三明")
    console.log(map2);
    console.log(map2.size);

    map2.set('name', 'Jack').set('hobbies', ['swimming', 'running'])
    console.log('set', map2)

    console.log('get', map2.get('hobbies'))
    console.log('get2', map2.get('age'))

    console.log('has', map2.has('age'))
    map2.delete('hobbies')
    console.log(map2);
    map2.clear()
    console.log('clear', map2);
}

{
    // keys() values() entries() 遍历器生成函数， forEach
    const map = new Map([
        ['name', '小明'],
        ['age', 20]
    ])
    // for of 循环 默认遍历map
    for (let item of map) {
        console.log(item)
        console.log(item[0], item[1])
    }
    // for of 循环 默认遍历keys
    for (let key of map.keys()) {
        console.log("key", key)
    }
    // for of 循环 默认遍历values
    for (let value of map.values()) {
        console.log("value", value)
    }

    // for of 循环 默认遍历entries
    for (let [key, value] of map.entries()) {
        console.log("key->value", key, value)
    }
}

// WeakMap
/**
 * 1. 只接受对象作为一个键名，不接受其他类型的数据作为键名
 * 2. 因为键名所指的对象不触发垃圾回收机制
 * 3. 没有clear， 没有size， 无法遍历
 */

{
    let weakmap = new WeakMap([
        [{name: 'hah'}, 'jack']
    ])
    console.log("weakmap", weakmap)

    const ulObj = document.getElementById('test')

    let obj = {name: 'jack'}
    let array = [obj, 'person']
    array[0] = null

}