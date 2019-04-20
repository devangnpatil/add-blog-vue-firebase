<template>
    <div id="show-blogs" v-theme:column="'wide'">
        <h1>All Blogs</h1>
        <div v-for="(blog,index) in blogs" class="single-blog" v-bind:key="index">
            <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            blogs: []
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
        })
    }
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
