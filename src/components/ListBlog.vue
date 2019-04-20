<template>
    <div id="show-blogs" v-theme:column="'wide'">
        <h1>List Of All Blogs</h1>
        <input type="text" v-model="search" placeholder="Searchbox" />
        <div v-for="(blog,index) in filteredBlogs" class="single-blog" v-bind:key="index">
            <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
        </div>
    </div>    
</template>
<script>
import searchMixin from '../mixins/searchMixin'
export default {
    data(){
        return{
            blogs: [],
            search:""
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
        });
    },
    filters: {
        toUppercase(value){
             return value.toUpperCase();
        },
        snippet(value){
            return value.slice(0,100)+'...';
        }
    },
    directives:{
        'rainbow':{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString().slice(2,8);
            },
        },
        'theme':{
              bind(el, binding, vnode){
                if(binding.value == 'wide'){
                el.style.maxWidth = "1200px"
                }else if(binding.value== 'narrow'){
                el.style.maxWidth = '500px'
                }
                if(binding.arg == 'column'){
                el.style.background= '#ddd';
                el.style.padding= '20px';
                }
            }
        }
    },
    mixins:[searchMixin]
}
</script>
<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
