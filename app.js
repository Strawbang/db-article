// XHR
let xhr = new XMLHttpRequest();
	// xhr.open('GET','https://my-json-server.typicode.com/strawbang/db-article');
	xhr.open('GET','articles.html');
	xhr.onload = function (){
		console.log(xhr.reponse);
		let parserHTML = new DOMParser();
		let template = parserHTML.parseFromString(xhr.response, 'text/html');
		console.log(template);
		let xhrJSON = new XMLHttpRequest();
			xhrJSON.open('GET','https://my-json-server.typicode.com/strawbang/db-article');
			xhrJSON.onload = function (){
				let articles;
				try{
					articles = JSON.parse(xhr.reponse);
				}
				catch(e){}
				if (articles){
					for(let article of articles){
						document.querySelector('#articles').appendChild(template.cloneNode(true));
					}
				}
			}
			xhrJSON.send();

	}
	xhr.send();