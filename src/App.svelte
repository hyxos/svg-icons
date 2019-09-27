<script>
  export let name;
  import SVG from './SVG.svelte'
  import hearts from '../hearts/hearts.js'
  let heartKeys = Object.keys(hearts)
  
  let defaultSvgProps = { 
    width: 100, 
    height: 100,
    stroke: "#010101"
  }
  console.log(hearts)
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
  <input id="color" name="color" type="text" placeholder="black" bind:value={defaultSvgProps['stroke']}>
  <label for="color"><em>color</em></label>
</div>
<div id="icons">
  {#each heartKeys as heartKey}
    <div class="icon">
      <SVG label={heartKey} stroke={defaultSvgProps["stroke"]}
          paths={hearts[heartKey]} />
      <label for={heartKey}>{heartKey}</label>
    </div>
  {/each}
</div>
