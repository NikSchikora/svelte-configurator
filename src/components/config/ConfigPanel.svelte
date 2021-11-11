<script>
  import ImageContainer from "./ImageContainer.svelte";
  import ConfigMotor from "./ConfigMotor.svelte";
  import ConfigColor from "./ConfigColor.svelte";
  import ConfigPrice from "./ConfigPrice.svelte";
</script>

<div class="container mt-5 pt-5">
  <div class="columns is-vcentered">
    <div class="column stretch">
      <ImageContainer />
    </div>
    <div class="column">
      <ConfigMotor />
      <ConfigColor />
      <ConfigPrice />
    </div>
  </div>
</div>

<style>
</style>
