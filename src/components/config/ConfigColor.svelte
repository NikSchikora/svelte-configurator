<script>
  import Card from "../ui/Card.svelte";
  import { config } from "../../configurator/Configuration";

  const updateColor = (color) => {
    config.update((temp) => ({ ...temp, color: color }));
  };
</script>

<Card header="Color">
  <div class="columns">
    <div class="column">
      <div
        class="selector__wrapper is-flex is-flex-direction-column is-align-items-center"
        class:active={$config.color == 1}
        on:click={() => updateColor(1)}
      >
        <div id="color__grey" class="selector__color" />
        <p>Gray</p>
      </div>
    </div>
    <div class="column">
      <div
        class="selector__wrapper is-flex is-flex-direction-column is-align-items-center"
        class:active={$config.color == 2}
        on:click={() => updateColor(2)}
      >
        <div id="color__red" class="selector__color" />
        <p>Red</p>
      </div>
    </div>
    <div class="column">
      <div
        class="selector__wrapper is-flex is-flex-direction-column is-align-items-center"
        class:active={$config.color == 3}
        on:click={() => updateColor(3)}
      >
        <div id="color__white" class="selector__color" />
        <p>White</p>
      </div>
    </div>
  </div>
</Card>

<style>
  .selector__wrapper {
    border: solid 1px #333;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    margin: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .selector__color {
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    margin-bottom: 0.5rem;
    border: solid 1px #000;
  }

  #color__grey {
    background-color: darkslategray;
  }

  #color__red {
    background-color: red;
  }

  #color__white {
    background-color: white;
  }

  .active {
    background-color: lightgray;
  }
</style>
