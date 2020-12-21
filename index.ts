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

type DefaultColor = 'blue' | 'red' | 'green'

// type Product = {
//     readonly id: number,
//     name: string,
//     price: number,
//     description?: string
// }
//
// const food: Product = {
//     id: 0, name: "bread", price: 0
// }
//
// const products: Product[] = []
// products.push(<Product>food)



interface Product extends ProductType, ProductImage {
    readonly id: number,
    name: string,
    price: number,
    description?: string,
    getTotalPrice: (value: number) => void

}

interface ProductType {
    type: string
}

interface ProductImage {
    img: string
}

const item: Product = {
    id: 1,
    name: '',
    price: 1000,
    description: '',
    type: '',
    img: '',
    getTotalPrice: (value: number):void => {}
}
