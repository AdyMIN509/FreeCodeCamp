// DOM element
const postContainer = document.getElementById("posts-container");


const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const dataTest =
{
  "users": [
    {
      "id": 6,
      "username": "QuincyLarson",
      "name": "Quincy Larson",
      "avatar_template": "/user_avatar/QuincyLarson_{size}.png"
    },
    {
      "id": 576147,
      "username": "JOY-OKORO",
      "name": "Joy Okoro",
      "avatar_template": "/user_avatar/JOY-OKORO_{size}.png"
    }
  ],
  "topic_list": {
    "topics": [
      {
        "id": 684569,
        "title": "The freeCodeCamp Podcast is back – now with video",
        "slug": "the-freecodecamp-podcast-is-back-now-with-video",
        "posts_count": 8,
        "views": 542,
        "bumped_at": "2024-04-15T16:01:26.403Z",
        "category_id": 1,
        "posters": [
          { "user_id": 6 },
          { "user_id": 576147 }
        ]
      }
    ]
  }
}

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};


// function
function timeAgo(past) {
	const time = new Date(past);
	const now = new Date();
	const difs = now - time;
	const inMinutes = Math.floor(difs / (1000 * 60));
	const inHours 	= Math.floor(difs / (1000 * 60 * 60));
	const inDays 	= Math.floor(difs / (1000 * 60 * 60 * 24));
	return inMinutes < 60 ? `${inMinutes}m ago` : inHours < 24 ? `${inHours}h ago` : `${inDays}d ago`;
}

function viewCount(n) {
	return n < 1000 ? n : String(Math.floor(n/1000)) + "k";
}

function forumCategory(n) {
	if (Object.hasOwn(allCategories, n)) {
		const cat = allCategories[n];
		return `<a href="${forumCategoryUrl + cat.className}/${n}" class="category ${cat.className}">${cat.category}</a>`
	} else {
		return `<a href="${forumCategoryUrl}general/${n}" class="category general">General</a>`
	}
};

function avatars(posters, users) {
	const out = [];
	posters.forEach(el=> {
		const currId = el.user_id;
		const userIndex = users.findIndex(e=> e["id"] === currId);
		const url = users[userIndex].avatar_template.replace("{size}", "30");
		const posterName = users[userIndex].name;
		const imgTag = `<img src="${url[0] === "/" ? avatarUrl : ""}${url}" alt="${posterName}"/>`;
		out.push(imgTag)
	});
	return out.join("");
}


function showLatestPosts(obj) {
	const users = obj.users;
	const topic_list = obj.topic_list;
	const topics = topic_list.topics;
	const rowHtmlTag = topics.map(e=>`
		<tr>
			<td>
				<a class="post-title" href="${forumTopicUrl}${e.slug}/${e.id}">${e.title}</a>
				${forumCategory(e.category_id)}
			</td>
			<td>
				<div class="avatar-container">${avatars(e.posters, users)}</div>
			</td>
			<td>${e.posts_count - 1}</td>
			<td>${viewCount(e.views)}</td>
			<td>${timeAgo(e.bumped_at)}</td>
		</tr>
		`)
	postContainer.innerHTML = rowHtmlTag.join("");
}

async function fetchData() {
	try {
		const res = await fetch(forumLatest);
		const data = await res.json();
		showLatestPosts(data);
	} catch(err) {
		console.log(err)
	}
}

fetchData();