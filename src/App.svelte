<script>
  export let name;
  import Icon from './Icon.svelte'
  let icons = [
    "bathroom",
    "beach",
    "bed",
    "car",
    "chef",
    "child-care",
    "fishing",
    "horseback-riding",
    "location",
    "people",
    "pool",
    "sailing",
    "sun",
    "surf-board",
    "volcano",
    "water",
    "yoga"
  ]
</script>

<style>
  h1 {
    font-size: 40px;
  }
	#icons {
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    align-content: flex-start;
    flex-wrap: wrap;
    max-width: 500px;
  }
</style>

<h1>SVG Icons</h1>
<div id="icons">
  {#each icons as icon}
    <Icon name={icon} />
  {/each}
</div>