// const arr = ["a", "b", "c", "d"]

// const join = arr.join("")

// console.log(join, "and", arr)

// const wordFlipper = (word) => {
    
//     const flip = word.split(" ").reverse(" ").join(" ")
//     console.log(flip)
// }

// wordFlipper("my dill is thicker than oatmeal")

// const arr = ["a", "b", "c", "d", "e", "f"]

// const arrayMaker = () => {
//     return console.log(arr.map(x => x + " is right"))
// }

// arrayMaker()

const minMax = (arr) => {
    const holder = []
    const toMap = console.log(Math.min(...arr), Math.max(...arr))
    const mapped = holder.push(toMap)
    console.log(mapped, holder)
}

minMax([12, -1, 4])