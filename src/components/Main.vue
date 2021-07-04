<template>
  <b-container fluid>
    <b-container
      fluid
      class="wrapper"
      @click="currentComponent = ''"
    >
      <h5>Test Task</h5>
      <main>
        <div class="title">
          <h4
            class="title_baseselect"
            :class="{'active' : currentComponent === 'BaseSelect'}"
            @click.stop="currentComponent = 'BaseSelect'"
          >
            Component: BaseSelect
          </h4>
          <h4
            class="title_basetooltip"
            :class="{'active' : currentComponent === 'BaseTooltip'}"
            @click.stop="currentComponent = 'BaseTooltip'"
          >
            Component: BaseTooltip
          </h4>
        </div>
        <div class="components">
          <BaseSelect
            v-if="currentComponent === 'BaseSelect' || currentComponent === ''"
            :users="users"
          />
          <BaseTooltip
            v-if="currentComponent === 'BaseTooltip' || currentComponent === ''"
          />
        </div>
      </main>
    </b-container>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import BaseSelect from '@/components/BaseSelect';
import BaseTooltip from '@/components/BaseTooltip';

export default {
  name: 'Main',
  components: {
    BaseSelect,
    BaseTooltip,
  },
  data: () => ({
    currentComponent: '',
  }),
  computed: {
    ...mapState({
      users: state => state.users.users,
    }),
  },
  created() {
    this.$store.dispatch('getUsers');
  },
};
</script>

<style lang="css" scoped>

.wrapper {
  width: 100%;
  padding: 100px 80px;
}

h5 {
  font-weight: 600;
  margin-bottom: 15px;
}
main {
  padding: 30px 40px;
  border: 1px solid #F2F3F6;
  box-shadow: 0px 2px 6px rgba(0, 44, 92, 0.1);
  border-radius: 2px;
  min-height: 320px;
  height: max-content;
  min-width: 100%;
  margin: 0;
}

.title {
  display: flex;
  margin-bottom: 60px;
}

.title_baseselect, .title_basetooltip {
  font-size: 18px;
  font-size: 500;
  cursor: pointer;
  color: #ABB2BF;
}

.title_baseselect {
  margin-right: 30px;
}

.active {
  color: #4468D6;
}

.components {
  display: flex;
}
</style>
