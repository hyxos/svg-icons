<script>
  export let name;
  import svgt from "./svgt.js";
  import hearts from "../hearts/hearts.js";
  let heartKeys = Object.keys(hearts);
  let defaultSvgProps = {
    dimensions: 100,
    stroke: "#010101"
  };
  const handleSubmit = event => {
    let button = event.target.elements[1]
    let code = event.target.elements[0].value.trim()
    if (code) {
    navigator.clipboard.writeText(code)
      .then(() => {
        console.log("copied")
        if (button.innerText !== 'Copied!') {
          const originalText = button.innerText;
          const originalColor = button.style.backgroundColor
          button.innerText = 'Copied!';
          button.style.backgroundColor = "#4cbb17";
          setTimeout(() => {
            button.innerText = originalText
            button.style.backgroundColor = originalColor
          }, 1500);
        }

      })
      .catch(err => {
        console.log('Something went wrong', err);
      })
  }

  }
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
    padding: 1em;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    min-width: 6em;
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
      <form on:submit|preventDefault={handleSubmit}>
        <label for={heartKey}>{heartKey}</label>
        <textarea>{svgt({
          id: heartKey,
          stroke: defaultSvgProps['stroke'],
          content: hearts[heartKey],
          dimensions: [defaultSvgProps['dimensions']]
        })}</textarea>
        <button type="submit">Copy</button>
      </form>
    </div>
  {/each}
</div>
