<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <list-blog></list-blog> -->
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/AddBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlog from './components/ListBlog'
export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlog,
    'list-blog':listBlog
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
