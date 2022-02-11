
const fortuneCookies= [
    "Conquer your fears or they will conquer you",
    "All the glitters are not gold",
    "An idle brain is the devel's workshop",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}
