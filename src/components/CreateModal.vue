<template>
  <Form v-slot="{ errors }" ref="refs">
    <Modal ref="createModalRef">
      <template #body>
        <div class="mb-3">
          <label for="addTitle" class="form-label">稱號</label>
          <Field
            id="addTitle"
            v-model="title.name"
            name="稱號"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['稱號'] }"
            rules="required"
          />
          <ErrorMessage name="稱號" class="invalid-feedback" />
        </div>
      </template>
      <template #footer>
        <button type="submit" class="btn btn-primary">建立</button>
      </template>
    </Modal>
  </Form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Modal from "./Modal.vue";

const refs = ref();
const createModalRef = ref(null);
const title = ref({});

defineExpose({
  createModalRef,
})
</script>