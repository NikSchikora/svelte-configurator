<script>
  import TopBar from "./components/ui/TopBar.svelte";
  import ConfigPanel from "./components/config/ConfigPanel.svelte";
  import Footer from "./components/ui/Footer.svelte";
</script>

<main class="wrapper">
  <TopBar />
  <div class="container mt-5">
    <h1 class="is-size-1">Electric Car Configurator</h1>
  </div>
  <ConfigPanel />
</main>
<Footer />

<style>
  .wrapper {
    min-height: 85vh;
  }
</style>
