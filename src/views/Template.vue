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
    <div class="col-md-6 centeralign">
        <div class="card centeralign addmargin" style="width: 18rem;" v-for="template in templatelist" :key="template.id">
            <div class="card-body" v-on:click="setSelectedTemplate(template.name)">
                <h5 class="card-title">{{template.name}}</h5>
                <p class="card-text">Created By : {{template.createdBy}}</p>
                <p class="card-text">created Date : {{template.createdDate}}</p>

                <a class="btn btn-dark" v-on:click="goToDetailsPage(template.id)"><span class="link-btn" >Click for details</span></a>
            </div>
        </div>
    </div>
    <Display v-if="selectedTemplate!=''" :selectedTemplate="selectedTemplate" />
</div>

</template>

<script>
//import '../../public/assets/sass/style.scss'
import '../../public/assets/sass/main.scss'



// @ is an alias to /src
import Display from '@/components/Display.vue'
import axios from 'axios'
import VueLogo from '../../public/assets/images/logos/vue.svg';

export default {
    name: 'templates',
    mounted() {
        axios({
            method: "GET",
            "url": "assets/samplejson/templatelist.json"
        }).then(response => {
            this.templatelist = response.data;
        }, error => {
            // eslint-disable-next-line
            console.error(error);
        });
    },
    data() {
        return {
            templatelist: [],
            selectedTemplate: ""
        }
    },
    components: {
        Display,
        VueLogo
    },
    methods: {
        setSelectedTemplate: function(name) {
            this.selectedTemplate = name;
        },
        goToDetailsPage: function(id) {
            this.$router.push("/templatedetails/"+id);
        }
    }
}

</script>
<style scoped lang="scss" >
.logo {
  width:100px;
  height:100px;
}
.link-btn{
    padding: 0.7rem 1rem;
    border-radius: 5px;
    background: #000000;
    color: #ffffff;
    font-size: 0.8rem;
    overflow-x: auto; 
}
</style>
