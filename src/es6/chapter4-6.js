{
    let set = new Set(['1', 2, 3, 4, 5])
    // 添加元素
    set.add(1)
    console.log(set)
    // 内部是使用Object.is(), 同值相等
    console.log('size', set.size)
}

{
    // 判断属性 has, 删除属性 delete, 清空 clear
    let set = new Set()
    const item = {fruit: 'apple'}
    // set.add({fruit: 'apple'})
    set.add(item)
    console.log('has', set.has(item))
}

{
    // keys(), values(), entries(), set里面key和value的值相等, for of 默认遍历values
    const set = new Set([1, 2, 3, 4, 5])
    for (const value of set.entries()) {
        console.log(value)
    }
}

{
    const array = [1, 2, 4, 5, 1, 2, 5, 7, 9, 7]
    let unique = new Set(array)
    let uniqueArray = Array.from(unique)
    console.log(uniqueArray)
}

{
    /**
     * WeakSet 和 Set的区别
     * 1. 元素只能是对象， 对象也是弱引用
     * 2. 无法遍历， 没有size， 也没有clear
     *  */

    let obj = {}
    let weakset = new WeakSet()
    weakset.add(obj)
    console.log(weakset)
}