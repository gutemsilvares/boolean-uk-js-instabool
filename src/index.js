// write your code here

const imageContainer = document.querySelector(".image-container");

fetch("http://localhost:3000/images")
	.then(function (promise) {
		let data = promise.json();
		return data;
	})
	.then(function (data) {
		for (const item of data) {
			imageContainer.append(cardFunction(item));
		}
	});

// card
function cardFunction(item) {
	// Article section
	const article = document.createElement("article");
	article.classList = "image-card";

	// h2
	const h2 = document.createElement("h2");
	h2.classList = item.title;

	//image
	const image = document.createElement("img");
	image.src = item.image;
	image.classList = "image";

	// div section
	const divSectionLikes = document.createElement("div");
	divSectionLikes.classList = "likes-section";

	// div section children
	const divSpan = document.createElement("span");
	divSpan.classList = "likes";
	divSpan.innerText = item.likes;

	const divButton = document.createElement("button");
	divButton.classList = "likes-button";
	divButton.innerText = "♥";

	divSectionLikes.append(divSpan, divButton);

	// Ul section
	const ulSection = document.createElement("ul");
	ulSection.classList = "comments";

	for (const comment of item.comments) {
		const listElement = document.createElement("li");
		listElement.innerText = comment.content;
		ulSection.append(listElement);
	}

	// form
	const formSection = document.createElement("form");
	formSection.classList = "comment-form";

	// form input
	const formInput = document.createElement("input");
	formInput.classList = "comment-input";
	formInput.setAttribute("type", "text");
	formInput.setAttribute("name", "comment");
	formInput.setAttribute("placeholder", "Add a comment...");

	// form button
	const formButton = document.createElement("button");
	formButton.setAttribute("class", "comment-button");
	formButton.setAttribute("type", "submit");
	formButton.innerText = "Post";

	formSection.append(formInput, formButton);

	article.append(h2, image, divSectionLikes, ulSection, formSection);

	return article;
}
