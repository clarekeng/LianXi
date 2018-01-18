// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', () => {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//   }
// });



// process.stdin.on('data',(data) =>{
//     process.stdout.write(data);
// });


var q = '请输入';
var users = {
    'admin' : '111',
    'user1' : '222',
    'user2' : '333'
};
var isInputUsername = true;
var username = '';
console.log(111)
process.stdout.write(q+'\n');
process.stdin.on('data',(input) =>{
    input = input.toString().trim();
    if (!username) {
         if(Object.keys(users).indexOf(input) === -1){
        process.stdout.write('用户名不存在'+'\n');
        process.stdout.write(q+'\n');
        username = '0';
        }else{
            process.stdout.write( '请输入密码'+'\n');
            
            username = input;
        }
    }else{
        if (input === users[username]) {
            console.log('登陆成功');
            console.log(users[username])
        } else {
            process.stdout.write('请输入密码'+'\n');
        }
    }
   
});