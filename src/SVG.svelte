<script>
export let label, stroke, paths
</script>

<svg id="{label}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100" width="100">
  <g fill="none" stroke="{stroke}" stroke-width="5">
    {@html paths}
  </g>
</svg>