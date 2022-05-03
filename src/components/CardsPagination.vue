<template>
  <ul class="pagination">
    <li
      class="pagination__page"
      v-for="page in pages"
      :key="page"
      :class="{ 'pagination__page--selected': page === pageNumber }"
      @click="pageChange(page)"
    >
      {{ page }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  props: {
    pages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      pageChange: 'pageChange',
    }),
  },
  computed: {
    ...mapGetters({
      pageNumber: 'getPageNumber',
    }),
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  padding: 2.1rem;
  font-size: 1.4rem;

  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  &__page {
    transition: transform 0.2s;
    transform: scale(1);

    &--selected {
      transform: scale(1.4);
    }
  }
}
</style>
