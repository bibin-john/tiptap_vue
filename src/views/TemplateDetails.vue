<template>

<div class="home">
    <div class="vue-logo-back">
        <VueLogo class="logo" />
    </div>
    <div class="card-header">
            Template Details
    </div>

  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <icon name="bold" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <icon name="italic" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <icon name="strike" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <icon name="underline" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <icon name="paragraph" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <icon name="ul" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <icon name="ol" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <icon name="quote" />
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <icon name="code" />
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          <icon name="hr" />
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <icon name="undo" />
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          <icon name="redo" />
        </button>

      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>     
      <div class="card" v-if="templateDetails.id">        
        <div class="card-body">
            <h5 class="card-title">{{templateDetails.name}}</h5>
            <p class="card-text">Name : {{templateDetails.name}}</p>
            <p class="card-text">Created By : {{templateDetails.createdBy}}</p>
            <p class="card-text">Created Date : {{templateDetails.createdDate}}</p>
            <p class="card-text">Heading : {{templateDetails.heading}}</p>
            <p class="card-text">Description : {{templateDetails.description}}</p>
            <p class="card-text">File : {{templateDetails.file}}</p>  
            <a v-on:click="goToMainPage()" class="btn btn-dark"><span class="link-btn" >Go Back</span></a>
        </div>
    </div>


</div>

</template>

<script>

// @ is an alias to /src
import axios from 'axios'
import Icon from '../components/Icon'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'
import VueLogo from '../../public/assets/images/logos/vue.svg';

export default {
    
    name: 'templatedetails',
    components: {
    EditorContent,
    EditorMenuBar,
    Icon,
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

        
    },
    data() {
        return {
            templateDetails: {},
            editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
        `,
      })
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
.addmargin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.vue-logo-back {
    background-color: black;
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
