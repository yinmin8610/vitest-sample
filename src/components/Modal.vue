<script setup>
import { onMounted, ref } from "vue";
const hModal = ref();

onMounted(() => {
  // console.log('hModal', hModal.value);
  hModal.value.addEventListener("hidden.bs.modal", () => {

  });
});

defineExpose({
  hModal,
})
</script>

<template>
  <div
    id="exampleModal"
    ref="hModal"
    class="modal fade"
    tabindex="-1"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">title</h5>
          <button
            type="button"
            class="modal-dismiss"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            close
          </button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
