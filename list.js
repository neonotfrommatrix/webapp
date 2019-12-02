const friendList = [
{
	image : 'image.jpg',
	name : 'first last',
	checked: true
},
{
	image : 'image.jpg2',
	name : 'first2 last2',
	checked: true
},
{
	image : 'image.jpg3',
	name : 'first3 last3',
	checked: true
},
{
	image : 'image.jpg4',
	name : 'first4 last4',
	checked: true
},
{
	image : 'image.jpg5',
	name : 'first5 last5',
	checked: true
},
]

console.log(friendList)

const friendListUL = document.getElementById('friendsListUL');

friendList.forEach((item) => {
	let li = document.createElement('li');
	li.innerHTML = item.name;
	friendListUL.appendChild(li);

});