<script>
  import Card from "../ui/Card.svelte";
  import { config } from "../../configurator/Configuration";
  const getColor = (color) => {
    let cl;
    switch (color) {
      case 1:
        cl = "grey";
        break;
      case 2:
        cl = "red";
        break;
      case 3:
        cl = "white";
        break;

      default:
        cl = "grey";
        break;
    }
    return "/cars/model_s_" + cl + ".jpg";
  };
  let color = "";
  $: color = getColor($config.color);
</script>

<div class="content">
  <img src={color} alt="Car Grey" />
</div>
