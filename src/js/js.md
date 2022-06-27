 # Recat 
 [react官网](https://react.docschina.org/)
 ![react](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F544385-826e7b97a5760c91.JPG%3FimageMogr2%2Fauto-orient%2Fstrip%257CimageView2%2F2%2Fw%2F1240&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658104469&t=49c8bfa2fab26f66afbde5e46eae392a)
   [2019年17道高频React面试题及详解](https://juejin.cn/post/6844903922453200904#heading-3)
 <br>
 <br>
 <br>
 ___
 <br>
 <br>

 1. **说说继承 ？ **   
    1. 通过原型链将其他构造函数联系在一起，但是能获取父类， 子类无法跟父类通信。父类数据共享
    2. 构造函数继承通过改变this指向，继承对应的类，缺点就是方法挂载在父类，无法通过原型链共享。
    3. 组件继承就是前面两个组合在一起，但是多个执行一次call
    4. 寄生式组合继承，而是通过空构造函数对父类的原型对象做一个拷贝，然后将原型对象的constructor指向对应的子类，子类的prototype指向对应的原型对象。
    5. 通过class的extends继承，super相当于父类，super（）获取原型上的属性，传入对应的参数定义this，也可以直接通过super.获取父类方法。