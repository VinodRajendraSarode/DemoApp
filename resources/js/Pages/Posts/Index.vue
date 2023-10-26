<script setup>
import { reactive } from 'vue'
import { router } from '@inertiajs/vue3'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import App from '@/Layouts/app-layout.vue';
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

    <App>
        

        <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        
            <section  class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
              <header>
                  <h2 class="text-lg font-medium text-gray-900 float-start"> Post Information</h2>
                
              </header> <br>
               <div class="grid grid-cols-5 gap-4 ">
                  <div class="col-end-6">
                        <Link   :href="'/posts/create'"
                          class="btn btn-primary btn-sm float-end"  >
                        <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24px"
                                  height="24px"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="w-5 h-5"
                              >
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              Add New
                    </Link >
                  </div>
          
              </div> <br>
             

              
            </section>
             <div class="table-responsive">
                 <table class="table table-hover" >
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
                          <div class="flex gap-4 items-center justify-center">
                            <Link :href="'/posts/' + post.id +'/edit'" method="get"  class="btn btn-info" >Edit</Link> &nbsp;
                            <Link :href="'/posts/' + post.id " method="delete"  class="btn btn-info" >Delete</Link>
                          </div>
                        </td>
                      </tr>
                    
                    
                    </tbody>
                  </table>
            
              </div>
          </div>
        </div>

     
    </App>
</template>
