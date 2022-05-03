<template>
  <li class="list-item">
    <h3>{{ card.name }}</h3>
    <h4>{{ card.gender }}</h4>
    <h5>{{ card.status }}</h5>
    <h6>{{ card.origin.name }}</h6>
    <img :src="card.image" :alt="`${card.name} character card`" />
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
