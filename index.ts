class User {
    public id: number = new Date().getTime() + Math.floor(Math.random() * 10000)
    constructor(public username: string, public age: number) {}
}

class UserFactory {
    public static users: User[] = []
    public static create(username: string, age: number): User {
        const user: User = new User(username, age)
        this.users.push(user)
        return user
    }
}

const user1: User = UserFactory.create('Nikita', 19)
const user2: User = UserFactory.create('Jove', 0)

const btn: HTMLElement = <HTMLElement>document.getElementById('btn')
const table: HTMLElement = <HTMLElement>document.getElementById('table-body')

btn.addEventListener('click', () => {
    const DOMUsername: HTMLInputElement = <HTMLInputElement>document.getElementById('username')
    const DOMAge: HTMLInputElement = <HTMLInputElement>document.getElementById('age')

    const username: string = DOMUsername.value
    const age: number = +DOMAge.value

    const user: User = UserFactory.create(username, age)

    const template = `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${username}</td>
            <td>${age}</td>
        </tr>
    `

    table.insertAdjacentHTML('beforeend', template)

    DOMUsername.value = DOMAge.value = ''

})

console.log(UserFactory.users)