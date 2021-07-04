<template>
  <b-container @click.stop="(e) => e">
    <b-row>
      <b-col cols="12">
        <b-form-select
          v-model="selectedUser"
        >
          <b-form-select-option
            v-for="user in users"
            :key="user.id"
            :value="user.name"
          >
            <p>{{ user.name }}</p>
          </b-form-select-option>
        </b-form-select>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    users: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    selectedUser: 'name 1',
  }),
};
</script>

<style lang="css" scoped>

.custom-select {
  width: 20%;
  height: 32px;
}
</style>
