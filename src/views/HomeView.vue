<template>
  <div class="home">
    <cards-list :cards="cards" />
  </div>
</template>

<script>
import CardsList from '@/components/CardsList.vue';
// @ is an alias to /src
import { mapState, mapActions } from 'vuex';

export default {
  components: { CardsList },
  name: 'HomeView',
  methods: {
    ...mapActions({
      fetchCards: 'fetchCards',
    }),
  },
  computed: {
    ...mapState({
      cards: 'cards',
    }),
  },
  mounted() {
    this.fetchCards();
  },
};
</script>
