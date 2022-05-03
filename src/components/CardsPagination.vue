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

<style></style>
