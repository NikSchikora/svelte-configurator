<script>
  import Card from "../ui/Card.svelte";
  import { config } from "../../configurator/Configuration";

  const changeColor = (eng) => {
    config.update((temp) => ({ ...temp, engine: eng }));
  };
</script>

<Card header="Engine">
  <div class="columns">
    <div class="column">
      <div
        class="selector__wrapper is-flex is-flex-direction-column is-align-items-center"
        class:active={$config.engine == 1}
        on:click={() => changeColor(1)}
      >
        <p>240 PS Single Motor</p>
      </div>
    </div>
    <div class="column">
      <div
        class="selector__wrapper is-flex is-flex-direction-column is-align-items-center"
        class:active={$config.engine == 2}
        on:click={() => changeColor(2)}
      >
        <p>355 PS Dual Motors</p>
      </div>
    </div>
  </div>
</Card>

<style>
  .selector__wrapper {
    border: solid 1px #b1b2ba;
    padding: 1rem 0.5rem;
    border-radius: 20px;
    margin: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .active {
    border: solid 3px #317ffa;
  }
</style>
