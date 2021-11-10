<script>
  export let header = "";
</script>

<div class="card mt-5">
  <div class="card-content">
    <p class="title is-4">{header}</p>
  </div>
  <div class="card-content">
    <slot><!-- optional fallback --></slot>
  </div>
</div>
