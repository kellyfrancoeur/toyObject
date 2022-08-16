const toys = [
    {
        id: 1,
        name: "Barbie",
        maker: "Mattel",
        price: 30,
        released: 1959
    },
    {
        id: 2,
        name: "Operation",
        maker: "Hasboro",
        price: 25,
        released: 1964
    },
    {
        id: 3,
        name: "Nerf",
        maker: "Hasbro",
        price: 40,
        released: 1969
    }
]
const newToy = {
        id: 4,
        name: "Slip N Slide",
        maker: "Wham-O",
        price: 35,
        released: 1961
}
toys.push(newToy)
for (const toy of toys){
    toy.price = toy.price * 1.05
    console.log(`The name of the toy is ${toy.name}, made by ${toy.maker}, released in ${toy.released}, and the price is $${toy.price}`)
}
