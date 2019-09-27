let fs = require('fs'),
    path = require('path'),
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser,
    { XMLSerializer } = require('xmldom')
let ids = [
  "bathroom",
  "beach",
  "bed",
  "car",
  "chef",
  //"childcare",
  "fishing",
  //"horsebackriding",
  "location",
  "people",
  "pool",
  //"sailing",
  "sun",
  "surfboard",
  //"volcano",
  "water",
  "yoga"
]

let heart = (id, svg) =>
`${id}: '${svg}'`
let heartsObj = hearts =>
`let hearts = {
  ${hearts}
}
module.exports = hearts
`

let hearts = ''

let loadPathString = id => path.join(__dirname, '..', 'svgs', `${id}.svg`)
let writePathString = path.join(__dirname, '..', 'hearts', 'hearts.js')

let urlFilter = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi

ids.map(id => {
  let raw = fs.readFileSync(loadPathString(id), 'utf-8')
  // console.log(raw)
  let select = xpath.useNamespaces({"svgml": "http://www.w3.org/2000/svg"})
  let doc = new dom().parseFromString(raw, "image/svg+xml")
  //console.log(doc.toString())
  let nodes = select("//svgml:g/*", doc)
  let string = heart(id, nodes.toString().replace(urlFilter, "")
                                          .replace(/xmlns=""/g, ""))
  string = string.split(",").join("") + ",\n  "
  hearts += string 
})  

fs.writeFileSync(writePathString, heartsObj(hearts))