 # Recat 
 [react官网](https://react.docschina.org/)
 ![react](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F544385-826e7b97a5760c91.JPG%3FimageMogr2%2Fauto-orient%2Fstrip%257CimageView2%2F2%2Fw%2F1240&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658104469&t=49c8bfa2fab26f66afbde5e46eae392a)
 <br>
 <br>
 <br>
 ___
 <br>
 <br>

 1. **setState是同步还是异步？**   
   
    setState一般在合成事件和钩子函数是'异步'，这个异步指的是执行顺序的变化而已，为了性能优化会考虑将多个属性修改批量更新，优化为最后一次的更新，类似vue的nexttick。
    
    但是在原生事件和setTimout是同步的，你可以通过在setState的第二个参数传入callback获取最新的值

 2. **什么是高阶组件，请举例说明？**  
 [什么是高阶组件，请举例说明？](https://juejin.cn/post/6940422320427106335)
  
    高阶组件可以看为是一个组件复用的组件，HOC就是一种react的特性的设计模式  
    从最早的mixins 到extends 可能会方法冲突，再到HOC --》hooks  

    运用HOC我们可以抽离state，props，来控制组件的按需渲染，业务逻辑抽离，监听事件和生命周期，或者反向继承获取到父组件，劫持生命周期或者替换虚拟dom。  

    正式代理（直接hoc包裹返回新的组件）的缺点: 无法获取父组件的状态，如果要获取，需要通过ref。同时无法直接继承静态属性

    反向继承（直接hoc包裹继承父组件）的缺点: 多次复用，会覆盖上一次。


 1. **为什么有时候react两次setState，只执行一次**
      
    React会对多次连续的 setState进行合并，如果你想立即使用上次 setState后的结果进行下一次 setState，可以让 setState 接收一个函数而不是一个对象。这个函数用第一个参数为上一次的state，第二个参数为此时更新被应用props


 2. **redux有哪些原则？ 原理呢?**
  [](https://juejin.cn/post/6868103822271758344)

    1.单一的数据源，store都集中在一个状态树中

    2，state是只读的，只能通过action来改变，reducer来处理

    3.reducer必须是纯函数，不能是有副作用，当状态改变的时候，需要返回一个新的state
 3. **react是如何处理异常的？**
 4. **react为什么需要fiber, fiber的优点有哪些？**
     fiber出现是为了解决react的自上而下渲染性能的问题，可以以链表的形式来实时保存当时的状态，不用重新渲染子组件。
     fiber本质就是解决虚拟dom树中的算法用到了dfs的后续遍历，fiber的架构解决了原架构的如果断开无法找到父节点，每个节点会有3个指针，一个指向第一个子节点，下个兄弟节点，父节点。本质就是一个是树结构一个是链表的结构。

     总结： react无法像vue做精确的更新，导致需要将组件的渲染切片，利用fiber可以回溯到父节点。

     fiber的概念就是一个虚拟dom树的diff算法比较的时候开销大，用fiber可以分段获取状态比较diff，开销小些，最后比较完成后渲染更新视图

 5. **redux的中间件机制 ？**
     
      中间件机制类似koa，experess内的我们常用的登录校验，那么redux在这里解决的就是reducer执行之前，强化dispatch做一个处理，本质就是一个compose的高阶函数嵌套，柯里化，你可以处理日志操作，对异步函数做层封装。
 6. **react的性能优化**
      
 7.  **react的合成事件是什么，和原生事件的区别？**

``

