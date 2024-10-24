<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-btn
        color="primary"
        class="mx-2"
        @click="handleAiRequest"
    >
      AI Request
    </v-btn>
  </v-container>
</template>

<script setup>
const handleAiRequest = () => {
  console.log('AI Request 버튼 클릭됨');
};
</script>

<style scoped>
.v-btn {
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
}
</style>
