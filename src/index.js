// write your code here
const renderPosts = async () => {
	let uri = "http://localhost:3000/comments";
	const res = await fetch(uri);
	const posts = await res.json();
	console.log(comments);

	let template = "";
	comments.forEach((comment) => {
		template +=
			'<div class="comments"><h2>${comments.title}</h2><p><small>${comment.likes} likes</small></p><p>${comment.body.slice(0, 200)}</p><a href="/details.html"></a></div>';
	});
};

window.addEventListener("DOMContentLoaded", () => renderPosts());
