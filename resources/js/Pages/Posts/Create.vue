<script setup>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';


const form = reactive({
  post: null,
})

function submit() {
  router.post('/posts', form)
}


</script>


<template>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Post</h2>
        </template>

        <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        
            <section  class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
              <header>
                  <h2 class="text-lg font-medium text-gray-900">Create Post</h2>

                
              </header>

                <form @submit.prevent="submit" class="mt-6 space-y-6">
                    <div>
                          <InputLabel for="post" value="Post" />
                        <TextInput
                            id="post"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.post"
                            required
                            autofocus
                            autocomplete="post"
                        />

                    </div>

                  

                

                    <div class="flex items-center gap-4">
                        <PrimaryButton :disabled="form.processing">Save</PrimaryButton>
                    </div>
                </form>
            </section>
          </div>
        </div>

     
    </AuthenticatedLayout>
</template>
