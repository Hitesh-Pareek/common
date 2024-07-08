<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <demo-component></demo-component>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});

import DemoComponent  from "src/components/DemoComponent.vue";
</script>
