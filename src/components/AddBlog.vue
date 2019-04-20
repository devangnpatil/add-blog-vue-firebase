<template>
  <div id="add-blog">
    <h2>Add a new blog post</h2>
    <form>
        <label for="Blog Title:">Blog Title</label>
        <input type="text" required v-model.lazy="blog.title">
        <label for="Blog Content">Blog Content</label>
        <textarea name="" id="" cols="30" rows="10" v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="Ninja" v-model="blog.categories"/>
            <label>Mario</label>
            <input type="checkbox" value="Mario" v-model="blog.categories"/>
            <label>Ryu</label>
            <input type="checkbox" value="Ryu" v-model="blog.categories"/>
            <label>Wizards</label>
            <input type="checkbox" value="Wizards" v-model="blog.categories"/>
        </div>
        <label for="">Author</label>
        <select name="" id="" v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
        </select>
        <button type="button" v-on:click.prevent="submitBlog">Submit</button>
    </form>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content: {{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
        blog:{
            title:"",
            content:"",
            categories:[],
            author:""
        },
        authors: ["Devang", "Virat", "Avenger", "John"]
    }
  },
  methods: {
      submitBlog: function(){
          this.$http.post("https://jsonplaceholder.typicode.com/posts", {
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data);
          })
      }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}

</style>
