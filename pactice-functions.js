var names = ['Bob','Brenda','Ishmael','Earl'];
var complement = " is great!";

function complementGiver(arr,phrase){
	var completed = [];
	for (var i=0; i < arr.length; i +=1){
		completed.push(arr[i] + phrase);
	}
	return completed
}

console.log(complementGiver(names,complement));


var count = 0;

function counter(){
	return count += 1
}

console.log(counter());
console.log(counter());
console.log(counter());