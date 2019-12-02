function whatever(){
	let newEvent= {};

	newEvent.title = document.getElementById('titleOfEvent').value;
	newEvent.startD = document.getElementById('startDate').value;
	newEvent.endD = document.getElementById('endDate').value;
	newEvent.startT = document.getElementById('startTime').value;	
	newEvent.endT = document.getElementById('endTime').value;
	newEvent.desc = document.getElementById('eventDescription').value;
	newEvent.dur = document.getElementById('duration').value;

	let peopleElements = document.getElementsByClassName('peopleTextBox')

	newEvent.people = Array.from(peopleElements).map(el => el.value);

	console.log(newEvent);

	document.getElementById('choices').style.display="none";

	createGrid(document.getElementById('grid'), newEvent)
}

function createGrid(parentElement, event){

	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	table.appendChild(thead);
	table.appendChild(tbody);

	let timeSlots = createTimeSlots(event.startD, event.endD, event.startT, event.endT, event.dur);


	event.people.forEach(person => {

		let tr = document.createElement('tr');
		tbody.appendChild(tr);


	});


	parentElement.appendChild(table);
}

function createTimeSlots(startDateStr, endDateStr, startTimeStr, endTimeStr, duration){

	let currentDate = new Date(`${startDateStr}T00:00:00`);
	let endDate = new Date(`${endDateStr}T00:00:00`);
	

	let dates=[];
	const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	while(currentDate <= endDate){

		dates.push(`${weekdays[currentDate.getDay()]} ${currentDate.getMonth()} ${currentDate.getDate()}`)
		currentDate.setDate(currentDate.getDate() + 1)
	}

	console.log(dates)

	let startTime = Number(startTimeStr.split(':')[0]);
	let endTime = Number(endTimeStr.split(':')[0]);

	duration = Number(duration)

	currentTime = startTime;

	let times = [];

	while(currentTime + duration < endTime){
		times.push(`${currentTime}-${currentTime + duration}`)
		currentTime++;
	}

	console.log(times);
}