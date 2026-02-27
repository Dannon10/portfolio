const nums = [1, 2, 3, 4, 5]
const results = nums.map((num) => num * num)

console.log(results)

const names = ['alice', 'bob', 'charlie', 'danielle']

const cap = names.map((name) => { 
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
})

console.log(cap)


const pokemon = ['Bulbasabur', 'Charmander', 'Squirtle']
const ans = pokemon.map((avatar) => `<p>${avatar}</p>`)

console.log(ans)