// XHR
// let xhr = new XMLHttpRequest();
// 	// xhr.open('GET','https://my-json-server.typicode.com/strawbang/db-article');
// 	xhr.open('GET','articles.html');
// 	xhr.onload = function (){
// 		console.log(xhr.reponse);
// 		let parserHTML = new DOMParser();
// 		let template = parserHTML.parseFromString(xhr.response, 'text/html');
// 		console.log(template);
// 		let xhrJSON = new XMLHttpRequest();
// 			xhrJSON.open('GET','https://my-json-server.typicode.com/strawbang/db-article/articles');
// 			xhrJSON.onload = function (){
// 				let articles;
// 				try{
// 					articles = JSON.parse(xhr.reponse);
// 				}
// 				catch(e){}
// 				if (articles){
// 					for(let article of articles){
// 						let clone = template.cloneNode(true);
// 						clone.querySelector('[article-content]').innerText = article.content;
// 						document.querySelector('#articles').appendChild(clone);
// 					}
// 				}
// 			}
// 			xhrJSON.send();

// 	}
// 	xhr.send();

fetch('article.html.tpl')
	.then(response => response.text())
	.then(templateString => {
		let parserHTML = new DOMParser();
		let template = parserHTML.parseFromString(templateString, 'text/html').body.firstChild;

		fetch('https://my-json-server.typicode.com/strawbang/db-article/articles')
			.then(response => response.json())
			.then(articles => {
				if (articles){
					for(let article of articles){
						let clone = template.cloneNode(true);
						clone.querySelector('[article-title]').innerText = article.title;
						clone.querySelector('[article-content]').innerText = article.content;
						clone.querySelector('img').innerText = article.img;
						document.querySelector('#articles').appendChild(clone);
					}
				}
			});
	});