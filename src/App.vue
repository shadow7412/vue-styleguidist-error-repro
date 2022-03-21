<template>
  <div>
    {{ salutation }} bug.
  </div>
</template>

<script>
const developmentVersion = "DEVELOPMENT";

export default {
  name: "App",
  props: {
    /** Method of greeting the bug */
    salutation: {
      type: String,
      default: "Hello"
    }
  },
  methods: {
    /** A documented method */
    hello() {
      //
    }
  },
};
</script>
