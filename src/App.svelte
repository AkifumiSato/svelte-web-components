<script lang="ts">
  export let count = 0
  const handleClick = () => count++
</script>

<p>count is {count}</p>
<button on:click={handleClick}>button</button>
