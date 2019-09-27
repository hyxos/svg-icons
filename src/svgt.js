const svgt = ({id, content, dimensions=[100, 100], stroke="black", strokeWidth=5}) =>
`<svg id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="${dimensions[0]}" width="${dimensions[1]}">
  <g fill="none" stroke="${stroke}" stroke-width="${strokeWidth}">
    ${content}
  </g>
</svg>`

module.exports = svgt