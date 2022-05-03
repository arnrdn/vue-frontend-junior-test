<template>
  <ul class="list">
    <cards-list-item
      class="list__item"
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
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

<style lang="scss" scoped>
.list {
  margin: 1.5rem 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 30rem));
  gap: 3rem;
  justify-content: center;

  @media only screen and (min-width: 61.125em) {
    grid-template-columns: repeat(2, 30rem);
  }
}
</style>
