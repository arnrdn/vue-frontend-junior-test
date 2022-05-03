<template>
  <ul>
    <cards-list-item v-for="card in cards" :key="card.id" :card="card" />
  </ul>
</template>

<script>
import CardsListItem from './CardsListItem.vue';

export default {
  components: { CardsListItem },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
