<script setup>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link } from '@inertiajs/vue3'

const form = reactive({
  post: null,
})

defineProps({ posts: Object })

const deleteUser = () => {
    form.delete(route('posts.destroy'));
};


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
                  <h2 class="text-lg font-medium text-gray-900 float-start"> Post Information</h2>

                <Link                   
                    :href="'/posts/create'"
                    class="btn btn-primary btn-sm float-end"
                    >Add</Link
                >
                
              </header> <br>
              <div class="row mb-2 table-responsive">
                 <table class="table table-hover" width="100%">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Post</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody v-for="post in posts" :key="post.id">
                      <tr>
                        <td>{{ post.id }}</td>
                        <td align="right">{{ post.blog }}</td>
                        <td align="right">
                          <Link :href="'/posts/' + post.id +'/edit'" method="get"  class="badge bg-primary" >Edit</Link> &nbsp;
                          <Link :href="'/posts/' + post.id " method="delete"  class="btn btn-info" >Delete</Link>
                        </td>
                      </tr>
                    
                    
                    </tbody>
                  </table>
            
            </div>

              
            </section>
          </div>
        </div>

     
    </AuthenticatedLayout>
</template>
