setInterval(function(){
    console.log(1);
},1000);

var exiting = false;
process.on('STGINT',() => {
    if(exiting){
        console.log('退出');
        process.exit();
    }else{
        console.log('第一次按下');
        exiting = true;
        setTimeout(() => {exiting = false;},1000);
    }
}); 