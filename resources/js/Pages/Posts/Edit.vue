<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';




const props = defineProps({ blog: Object });

const form = useForm({
    blog: props.blog.blog
});

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
                  <h2 class="text-lg font-medium text-gray-900">Edit Post</h2>

                
              </header>

                <form @submit.prevent="form.patch(route('posts.update', props.blog.id))" class="mt-6 space-y-6">
                  
                     <div>
                          <InputLabel for="post" value="Post" />
                       
                          <TextInput
                            id="post"
                            type="text"
                            class="mt-1 block w-full"
                            v-model="form.blog"
                            required
                            autofocus
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
