// console.time('main');
// // for (var i = 0; i < 100; i++) {
    
// //     console.log(i);
// // }
// setTimeout(()=>{
//    for (var i = 0; i < 1000000; i++) {} 
//    console.log('循环完了'); 
// },0)
// console.timeEnd('main');
// console.log('完成执行了');


// //回调函数都是以错误优先
// function getFileAsync (path,callback){
//     if (错误条件) {
//         callback(new Error('xxx错误'))
//     }else{
//         callback(null,data);
//     }
// }


function isEvenOrOdd(number,callback){
    //console.log(1)
    if (typeof number ==='number') {
        if(number % 2){
            callback(null,'当前输入的是奇数');
        }else{
            callback(null,'当前输入的是偶数');
        }
    }else{
        //throw new Error('你传入的不是数字');
         callback(new Error('你传入的不是数字'))
    }
}



isEvenOrOdd(12,(error,data)=>{
    if (error) throw error;
    console.log(data);
});
// isEvenOrOdd(3,(error,data)=>{
//     if (error) throw error;
//     console.log(data);
// });
// isEvenOrOdd('wwwww',(error,data)=>{
//     if (error) throw error;
//     console.log(data);
// });
