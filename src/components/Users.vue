<template>
  <b-container>
    <h4>USERS LIST</h4>
    <b-row>
      <b-col>
        <ul>
          <li
            v-for="user in users"
            :key="user.id"
            @click="() => userId = user.id"
          >
            {{ user.name }}
          </li>
        </ul>
      </b-col>
      <b-col>
        <router-link to="/">
          HOME
        </router-link>
        <div>
          <p>{{ getUser(userId) }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Users',
  data: () => ({
    userId: '',
  }),
  computed: {
    ...mapState({
      users: state => state.users.users,
    }),
    ...mapGetters({
      getUser: 'getUserById',
    }),
  },
};
</script>

<style lang="scss" scoped>

ul {
  list-style: none;
  li {
    cursor: pointer;
  }
}
</style>
