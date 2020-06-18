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
       <!-- <img src="../../public/assets/logo.svg" width="100px" height="100px"> -->
         <VueLogo class="logo" />
    </div>
    <div class="col-md-6 centeralign">
        <div class="card centeralign addmargin" style="width: 18rem;" v-for="template in templatelist" :key="template.id">
            <div class="card-body" v-on:click="setSelectedTemplate(template.name)">
                <h5 class="card-title">{{template.name}}</h5>
                <p class="card-text">Created By : {{template.createdBy}}</p>
                <p class="card-text">created Date : {{template.createdDate}}</p>

                <a class="btn btn-dark" v-on:click="goToDetailsPage(template.id)"><span style="color:white">Click for more details</span></a>
            </div>
        </div>
    </div>
    <Display v-if="selectedTemplate!=''" :selectedTemplate="selectedTemplate" />
</div>

</template>

<script>

// @ is an alias to /src
import Display from '@/components/Display.vue'
import axios from 'axios'
import VueLogo from '../../public/assets/vue.svg';

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
<style scoped>
.logo {
  width:100px;
  height:100px;
}
</style>
