const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: 1,
	about: "Тут я рассказываю о себе....",
	avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};


// const users = {
// 	0: { name: "Валерия", lastname: "Енютина", id: 4 },
// 	1: { name: "Ипатий", lastname: "Яблочков", id: 9 },
// 	2: { name: "Серж", lastname: "Петров", id: 7 },
// 	3: { name: "Константин", lastname: "Тетерин", id: 2 },
// 	4: { name: "Владислав", lastname: "Енютин", id: 22 },
// 	5: { name: "Евгения", lastname: "Петрова", id: 14 },
// };
let users = {};

export function getUser(userId) {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id == userId) return users[i];
		}
	return user;
}

export async function getUsers() {
	let response = await fetch("http://aroma.jessy.p-host.in/getUsers");
	users = await response.json();

	return users;
}
