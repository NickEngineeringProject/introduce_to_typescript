"use strict";
var User = /** @class */ (function () {
    function User(username, age) {
        this.username = username;
        this.age = age;
        this.id = new Date().getTime() + Math.floor(Math.random() * 10000);
    }
    return User;
}());
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.create = function (username, age) {
        var user = new User(username, age);
        this.users.push(user);
        return user;
    };
    UserFactory.users = [];
    return UserFactory;
}());
var user1 = UserFactory.create('Nikita', 19);
var user2 = UserFactory.create('Jove', 0);
var btn = document.getElementById('btn');
var table = document.getElementById('table-body');
btn.addEventListener('click', function () {
    var DOMUsername = document.getElementById('username');
    var DOMAge = document.getElementById('age');
    var username = DOMUsername.value;
    var age = +DOMAge.value;
    var user = UserFactory.create(username, age);
    var template = "\n        <tr>\n            <th scope=\"row\">" + user.id + "</th>\n            <td>" + username + "</td>\n            <td>" + age + "</td>\n        </tr>\n    ";
    table.insertAdjacentHTML('beforeend', template);
    DOMUsername.value = DOMAge.value = '';
});
console.log(UserFactory.users);
