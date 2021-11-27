var directories = {
	C: "C",
	CSS: "CSS_Guides",
	Git: "Git",
	HTML: "Html",
	JS: "JS",
	Linux: "Linux",
	MySQL: "MySQL",
	Python3: "Python3"
}

let links = document.querySelector("#links");

for(const [key, value] of Object.entries(directories)){
	let item = document.createElement('li');
	let link = document.createElement('a');
	
	link.innerHTML = key;
	link.setAttribute('href', value);
	
	item.appendChild(link);
	links.appendChild(item);
	
}
