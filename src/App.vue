<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <list-blog></list-blog> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/AddBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlog from './components/ListBlog'
import header from './components/Header'
export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlog,
    'list-blog':listBlog,
    'app-header':header
  },
  data(){
    return{

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  body{
    margin: 0;
    font-family: 'Courier New', Courier, monospace
  }
</style>
