<svelte:options tag="svelte-counter" />

<script lang="ts">
  import { db } from '../lib/db.ts'

  let count = null
  const handleClick = async () => {
    count++
    await db.counter_table.put({ id: 1, name: 'button_count', count })
  }
  ;(async () => {
    const data = await db.counter_table
      .where('name')
      .equals('button_count')
      .toArray()
    console.log(data)
    const storedCount = data[0]?.count
    count = storedCount ?? 0
  })()
</script>

{#if count === null}
  <p>loading</p>
{:else}
  <p>count is {count}</p>
{/if}
<button on:click={handleClick}>button</button>
