/*
请实现一个函数用来找出字符流中第一个只出现一次的字符。
例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。 
*/

var hashtable = {};
var queue = [];

//Init module if you need
function Init()
{
    // write code here
    hashtable = {};
    queue = [];
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    hashtable[ch] = hashtable[ch] ? hashtable[ch] + 1 : 1;
    if (hashtable[ch] === 1) {
        queue.push(ch);
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    while (queue.length > 0 && hashtable[queue[0]] > 1) {
        queue.shift();
    }
    if (queue.length > 0) {
        return queue[0];
    }
    return '#';
}

Insert('g');
console.log('call Insert(g) -->> ' + queue);
console.log('call FirstAppearingOnce() -->> ' + FirstAppearingOnce());
console.log(hashtable);

Insert('o');
console.log('call Insert(o) -->> ' + queue);
console.log('call FirstAppearingOnce() -->> ' + FirstAppearingOnce());
console.log(hashtable);

Insert('o');
console.log('call Insert(o) -->> ' + queue);
console.log('call FirstAppearingOnce() -->> ' + FirstAppearingOnce());
console.log(hashtable);

Insert('g');
console.log('call Insert(g) -->> ' + queue);
console.log('call FirstAppearingOnce() -->> ' + FirstAppearingOnce());
console.log(hashtable);
Insert('l');

console.log('call Insert(l) -->> ' + queue);
console.log('call FirstAppearingOnce() -->> ' + FirstAppearingOnce());
console.log(hashtable);

Insert('e');
console.log('call Insert(e) -->> ' + queue);
console.log('call FirstAppearingOnce() -->> ' + FirstAppearingOnce());
console.log(hashtable);

var str = 'helloworld';
for (var i = 0; i < str.length; i++) {
  Insert(str[i]);
  console.log(FirstAppearingOnce());
}