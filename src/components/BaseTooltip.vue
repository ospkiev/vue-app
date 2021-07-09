<template>
  <b-container @click.stop="(e) => e">
    <b-row>
      <b-col cols="12">
        <b-button>Botton</b-button>
        <b-button>Top</b-button>
        <b-button>Left</b-button>
        <b-button>Right</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'BaseTooltip',
};
</script>

<style lang="scss" scoped>
@import '@/style/_vars';
@import '@/style/_mixins';

button {
  width: 82px;
  background-color: #fff;
  padding: 8px 0;
  color: #4468D6;
  margin-right: 12px;
  border-color: $orange;
  position: relative;
}

button::after {
  content: 'text text text';
  position: absolute;
  top: 120%;
  left: -50%;
  width: 150px;
  height: 41px;
  color: #222;
  border: 1px solid #F2F3F6;
  box-shadow: 0px 6px 15px rgba(0, 44, 92, 0.1);
  border-radius: 2px;
  display: none;
}

button:hover::after {
  display: block;
}
</style>
