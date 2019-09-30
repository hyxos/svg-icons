<script>
  import svgt from "./svgt.js";
  import hearts from "../hearts/hearts.js";
  let heartKeys = Object.keys(hearts);
  let defaultSvgProps = {
    dimensions: 100,
    stroke: "#010101"
  };
  
  const handleSubmit = event => {
    let button = event.target.elements[1];
    let code = event.target.elements[0].value.trim();
    if (code) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          console.log("copied");
          if (button.innerText !== "Copied!") {
            const originalText = button.innerText
            const originalColor = button.style.color
            const originalBGColor = button.style.backgroundColor
            button.innerText = "Copied!"
            button.style.color = "lightgray"
            button.style.backgroundColor = defaultSvgProps['stroke']
            setTimeout(() => {
              button.innerText = originalText
              button.style.color = originalColor
              button.style.backgroundColor = originalBGColor
            }, 1500)
          }
        })
        .catch(err => {
          console.log("Something went wrong", err);
        });
    }
  };

  const handleToggle = event => {
    let code = event.target.nextElementSibling
    let span = event.target
    if (span.innerText === '> code') {
      span.innerText = 'v hide'
      span.style.color = "white"
    }
    else {
      span.innerText = '> code'
      span.style.color = '#010101'
    }
    code.classList.toggle("ta")
  }
  const handleDownload = content => window.URL.createObjectURL(new Blob([content], {type: 'text/csv'}))
</script>

<style>
  h1 {
    text-align: center;
    font-size: 40px;
  }
  #color-input {
    text-align: center;
  }
  #icons {
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    align-content: center;
    flex-wrap: wrap;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  button {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
  textarea {
    height: 300px;
    width: 100px;
  }
  .code-toggle {
    margin: 5px;
    background-color: #f3a285;
    width: 100px;
    text-align: left;
    padding: 2px 6px;
  }
  .ta {
    display: none;
  }
</style>

<h1>SVG Icons</h1>
<div id="color-input">
  <input
    id="color"
    name="color"
    type="text"
    placeholder="#010101"
    bind:value={defaultSvgProps['stroke']} />
  <label for="color">
    <em>color</em>
  </label>
  <input
    id="size"
    name="size"
    type="text"
    placeholder="100"
    bind:value={defaultSvgProps['dimensions']} />
  <label for="size">
    <em>size</em>
  </label>
</div>
<div id="icons">
  {#each heartKeys as heartKey}
    <div class="icon">
      {@html svgt({
        id: heartKey,
        stroke: defaultSvgProps['stroke'],
        content: hearts[heartKey],
        dimensions: [defaultSvgProps['dimensions']]
      })}
      <label for={heartKey}>{heartKey}</label>
      <form on:submit|preventDefault={handleSubmit}>
        <span class="code-toggle" on:click={handleToggle}>> code</span>
        <textarea class="ta">{svgt({
            id: heartKey,
            stroke: defaultSvgProps['stroke'],
            content: hearts[heartKey],
            dimensions: [defaultSvgProps['dimensions']]
          })}</textarea>
        <button type="submit">Copy -> 📋</button>
      </form>
      <a href={handleDownload(svgt({
        id: heartKey,
        stroke: defaultSvgProps['stroke'],
        content: hearts[heartKey],
        dimensions: [defaultSvgProps['dimensions']]
      }))} download={heartKey + '.svg'}>Download</a>
    </div>
  {/each}
</div>
