<script setup>
import { ref, onMounted } from "vue";

import CreateModal from "./components/CreateModal.vue";
import BsModal from 'bootstrap/js/dist/modal';

const modal = ref("");

const openModal = () => {
  modal.value.show();
};

const createModalComponentRef = ref(null);
onMounted(() => {
  modal.value = new BsModal(createModalComponentRef.value.createModalRef.hModal);
});
</script>
<template>
  <button type="button" class="btn btn-primary" @click="openModal">open</button>
  <CreateModal
    ref="createModalComponentRef"
  />
</template>
<style lang="scss">
@import "./assets/all.scss";
</style>