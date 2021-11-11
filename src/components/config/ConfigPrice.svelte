<script>
  import Card from "../ui/Card.svelte";
  import { config } from "../../configurator/Configuration";

  let engine, color, price;

  const getEngine = (eng) => {
    let name;
    switch (eng) {
      case 1:
        name = "240 PS Single Motor";
        break;
      case 2:
        name = "355 PS Dual Motors";
        break;
      default:
        break;
    }
    return name;
  };

  const getColor = (color) => {
    let cl;
    switch (color) {
      case 1:
        cl = "Gray";
        break;
      case 2:
        cl = "Red";
        break;
      case 3:
        cl = "White";
        break;

      default:
        cl = "grey";
        break;
    }
    return cl;
  };

  const getPrice = (cfg) => {
    let basePrice = 40000;
    if (cfg.color != 1) basePrice += 1200;
    if (cfg.engine != 1) basePrice += 4500;
    return basePrice;
  };

  $: color = getColor($config.color);
  $: engine = getEngine($config.engine);
  $: price = getPrice($config);
</script>

<Card header="Summary">
  <div class="columns">
    <div class="column pl-6 is-size-5">
      <p>
        <b>Engine</b>
      </p>
      <br />
      <p>
        <b>Color</b>
      </p>
    </div>
    <div class="column is-size-5">
      <p>
        {engine}
      </p>
      <br />
      <p>
        {color}
      </p>
    </div>
  </div>
  <hr />
  <div class="columns">
    <div class="column pl-6 is-size-5">
      <p>
        <b>Your Price</b>
      </p>
    </div>
    <div class="column is-size-5">
      <p>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " $"}
      </p>
    </div>
  </div>
</Card>
