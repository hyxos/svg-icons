let fs = require('fs')
let path = require('path')
let icons = [
  "bathroom",
  "beach",
  "bed",
  "car",
  "chef",
  "childcare",
  "fishing",
  "horsebackriding",
  "location",
  "people",
  "pool",
  "sailing",
  "sun",
  "surfboard",
  "volcano",
  "water",
  "yoga"
]

let svelteTemplate = (id, svg) =>
`<script>
  export let width, height, stroke
</script>
<div class="icon">
  ${svg}
  <label for="${id}">${id}</label>
</div>
`
let loadPathString = icon => path.join(__dirname, '..', '..', 'public', 'svgs', `${icon}.svg`)
let writePathString = icon => path.join(__dirname, '..', `${icon}.svelte`)

icons.map(id => {
  let content = fs.readFileSync(loadPathString(id), 'utf-8')
  content = content.replace('width="100"', 'width={width}')
                  .replace('height="100"', 'height={height}')
                  .replace(/"#294242"/g, '{stroke}')
                  .replace('<svg', `<svg id=${id}`)
  let output = svelteTemplate(id, content.trim())
  let fileName = id[0].toUpperCase() + id.slice(1, id.length)
  fs.writeFileSync(writePathString(fileName), output)
})