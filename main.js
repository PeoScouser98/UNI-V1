const instance = {
	baseURL: "https://jsonplaceholder.typicode.com/posts",
};

const $ = (selector) => {
	const elements = document.querySelectorAll(selector);
	return elements.length === 1 ? elements[0] : elements;
};

let menuData = [
	{
		title: "Overview",
		link: "#",
	},
	{
		title: "About",
		link: "#",
	},
	{
		title: "Admissions",
		link: "#",
	},
	{
		title: "Campus",
		link: "#",
	},
	{
		title: "Gallery",
		link: "#",
	},
	{
		title: "Brochures",
		link: "#",
	},
	{
		title: "News",
		link: "#",
	},
];

const navLink = $("#nav-link");
const params = new URLSearchParams(window.location.search);

const renderMenu = (menuData) => {
	if (navLink) {
		navLink.innerHTML = menuData
			.map(
				(item) => /* html */ `
				<li
					class="sm:h-12 ${params.get("page") === item.title ? "menu-item nav-link-active" : "menu-item"}"
					data-page="${item.title}"
				>
				<a href="">${item.title}</a></li>`
			)
			.join("");
	}
};

const renderPostList = async () => {
	try {
		const postsData = await (await fetch(instance.baseURL)).json();
		const postList = $("#post-list");
		if (postList && Array.isArray(postsData)) {
			postList.innerHTML = postsData
				.map(
					(post) => /*html*/ `
	
												<div class="card bg-transparent p-0 w-full">
													<figure>
														<a href="#" class="w-full">
															<img src="https://picsum.photos/300/200" alt="Shoes" class="rounded-xl w-full" loading="lazy" />
														</a>
													</figure>
													<div class="card-body w-full px-0 py-2">
														<div class="tooltip" data-tip="${post.title}">
															<a href="#" class="font-bold text-xl w-full text-left block first-letter:uppercase line-clamp-2">${post.title}</a>
														</div>
														<p class=" w-full line-clamp-3">${post.body}</p>
													</div>
												</div>
	
													`
				)
				.join("");
		}
	} catch (error) {}
};

renderPostList();
renderMenu(menuData);

$(".menu-item").forEach((item) => {
	if (item) {
		item.onclick = () => {
			params.set("page", item.dataset.page);

			history.pushState(null, "", window.location.pathname + "?" + params);
		};
	}
});
