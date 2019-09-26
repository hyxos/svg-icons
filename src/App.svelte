<script>
  export let name;
  import Icon from './Icon.svelte'
  import Bathroom from './Bathroom.svelte'
  import Beach from './Beach.svelte'
  import Bed from './Bed.svelte'
  import Car from './Car.svelte'
  import Chef from './Chef.svelte'
  import Childcare from './Childcare.svelte'
  import Fishing from './Fishing.svelte'
  import Horsebackriding from './Horsebackriding.svelte'
  import Location from './Location.svelte'
  import People from './People.svelte'
  import Pool from './Pool.svelte'
  import Sailing from './Sailing.svelte'
  import Sun from './Sun.svelte'
  import Surfboard from './Surfboard.svelte'
  import Volcano from './Volcano.svelte'
  import Water from './Water.svelte'
  
  let defaultSvgProps = { 
    width: 100, 
    height: 100,
    stroke: "#010101"
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
</style>

<h1>SVG Icons</h1>
<div id="color-input">
  <input id="color" name="color" type="text" placeholder="black" bind:value={defaultSvgProps['stroke']}>
  <label for="color"><em>color</em></label>
</div>
<div id="icons">
  <Location {...defaultSvgProps} />
  <Bathroom {...defaultSvgProps} />
  <Bed {...defaultSvgProps} />
  <Beach {...defaultSvgProps} />
  <Car {...defaultSvgProps} />
  <Chef {...defaultSvgProps} />
  <Childcare {...defaultSvgProps} />
  <Fishing {...defaultSvgProps} />
  <Horsebackriding {...defaultSvgProps} />
  <People {...defaultSvgProps} />
  <Pool {...defaultSvgProps} />
  <Sun {...defaultSvgProps} />
  <Sailing {...defaultSvgProps} />
  <Surfboard {...defaultSvgProps} />
  <Volcano {...defaultSvgProps} />
  <Water {...defaultSvgProps} />
</div>
