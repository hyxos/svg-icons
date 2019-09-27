<script>
  export let name;
  import svgt from "./svgt.js";
  import hearts from "../hearts/hearts.js";
  let heartKeys = Object.keys(hearts);
  let defaultSvgProps = {
    dimensions: [100, 100],
    stroke: "#010101"
  };
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
    bind:value={defaultSvgProps['dimensions'][0]} />
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
        dimensions: [defaultSvgProps['dimensions'][0], defaultSvgProps['dimensions'][0]]
      })}
      <label for={heartKey}>{heartKey}</label>
      <textarea>{svgt({
        id: heartKey,
        stroke: defaultSvgProps['stroke'],
        content: hearts[heartKey],
        dimensions: [defaultSvgProps['dimensions'][0], defaultSvgProps['dimensions'][0]]
      })}</textarea>
    </div>
  {/each}
</div>
