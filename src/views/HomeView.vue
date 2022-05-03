<template>
  <div class="home">
    <cards-list :cards="paginatedCards" />
    <cards-pagination :pages="pages" />
  </div>
</template>

<script>
import CardsList from '@/components/CardsList.vue';
import { mapActions, mapGetters } from 'vuex';
import CardsPagination from '@/components/CardsPagination.vue';

export default {
  components: { CardsList, CardsPagination },
  name: 'HomeView',
  methods: {
    ...mapActions({
      fetchCards: 'fetchCards',
    }),
  },
  computed: {
    ...mapGetters({
      cards: 'getCards',
      pages: 'getPages',
      paginatedCards: 'getPaginatedCards',
    }),
  },
  mounted() {
    this.fetchCards();
  },
};
</script>

<style lang="scss" scoped></style>
