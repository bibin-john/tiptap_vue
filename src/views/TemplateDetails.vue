<style scoped>

.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.vue-logo-back {
    background-color: black;
}

</style>

<template>

<div class="home">
    <div class="vue-logo-back">
        <VueLogo class="logo" />
    </div>
    <div class="card" v-if="templateDetails.id">
        <div class="card-header">
            Template Details
        </div>
        <div class="card-body">
            <h5 class="card-title">{{templateDetails.name}}</h5>
            <p class="card-text">Name : {{templateDetails.name}}</p>
            <p class="card-text">Created By : {{templateDetails.createdBy}}</p>
            <p class="card-text">Created Date : {{templateDetails.createdDate}}</p>
            <p class="card-text">Heading : {{templateDetails.heading}}</p>
            <p class="card-text">Description : {{templateDetails.description}}</p>
            <p class="card-text">File : {{templateDetails.file}}</p>  
             <editor-content :editor="editor" />        
            <a v-on:click="goToMainPage()" class="btn btn-dark"><span style="color:white">Go Back</span></a>
        </div>
    </div>


</div>

</template>

<script>

// @ is an alias to /src
import axios from 'axios'
import { Editor, EditorContent } from 'tiptap'
import VueLogo from '../../public/assets/vue.svg';

export default {
    
    name: 'templatedetails',
    components: {
    EditorContent,
    VueLogo
  },
    mounted() {
        axios({
            method: "GET",
            "url": "assets/samplejson/template"+this.$route.params.id+".json"
        }).then(response => {
            this.templateDetails = response.data;
        }, error => {
            console.error(error);
        });

        this.editor = new Editor({
         content: '<p>This is just a paragraph</p>',
        })
    },
    data() {
        return {
            templateDetails: {},
             editor: null
        }
    },
    methods: {
        goToMainPage: function() {
            this.$router.push("/template");
        }
    }
}

</script>
<style scoped>
.logo {
  width:100px;
  height:100px;
}
</style>
