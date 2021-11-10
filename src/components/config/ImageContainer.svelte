<script>
  import { config } from "../../configurator/Configuration";
</script>

<div class="content">
  {#if $config.color == 1}
    <img src="/cars/model_s_grey.png" alt="Car Grey" />
  {:else if $config.color == 2}
    <img src="/cars/model_s_red.png" alt="Car" />
  {:else}
    <img src="/cars/model_s_white.png" alt="Car" />
  {/if}
</div>
