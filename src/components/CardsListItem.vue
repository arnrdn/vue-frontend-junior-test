<template>
  <li class="list-item">
    <div class="list-item__information">
      <div class="list-item__name-gender">
        <div class="list-item__name">{{ card.name }}</div>
        <div class="list-item__gender">{{ card.gender }}</div>
      </div>
      <div class="list-item__status-origin">
        <div :class="`list-item__status list-item__status--${statusColor}`">
          {{ unknownCapitalizationStatus }}
        </div>
        <div class="list-item__origin">{{ unknownCapitalizationOrigin }}</div>
      </div>
    </div>
    <div class="list-item__img-container">
      <img
        class="list-item__img"
        :src="card.image"
        :alt="`${card.name} character card`"
      />
    </div>
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
  computed: {
    statusColor() {
      if (this.card.status === 'Alive') {
        return 'green';
      } else if (this.card.status === 'Dead') {
        return 'red';
      } else {
        return 'gray';
      }
    },
    unknownCapitalizationStatus() {
      if (this.card.status === 'unknown') {
        return (
          this.card.status.charAt(0).toUpperCase() + this.card.status.slice(1)
        );
      } else {
        return this.card.status;
      }
    },
    unknownCapitalizationOrigin() {
      if (this.card.origin.name === 'unknown') {
        return (
          this.card.origin.name.charAt(0).toUpperCase() +
          this.card.origin.name.slice(1)
        );
      } else {
        return this.card.origin.name;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  font-size: 1.2rem;

  &__information {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
  }

  &__status {
    &--green {
      color: #00bd4c;
    }

    &--red {
      color: #e50000;
    }

    &--gray {
      color: #7b7b7b;
    }
  }

  &__status-origin {
    text-align: right;
  }

  &__gender,
  &__origin {
    color: #8d8d8d;
  }

  &__name,
  &__status {
    font-weight: 700;
  }

  &__img {
    width: 100%;
  }
}
</style>
