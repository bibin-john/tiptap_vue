<template>
  <div class="icon" :class="[`icon--${name}`, `icon--${size}`, { 'has-align-fix': fixAlign }]">
      <IconBold v-if="name === 'bold'"/>
      <IconItalic v-if="name === 'italic'"/>
      <IconStrike v-if="name === 'strike'"/>
      <IconUnderline v-if="name === 'underline'"/>
      <IconCode v-if="name === 'code'"/>
      <IconParagraph v-if="name === 'paragraph'"/>
      <IconUl v-if="name === 'ul'"/>
      <IconOl v-if="name === 'ol'"/> 
      <IconQuote v-if="name === 'quote'"/>  
      <IconHr v-if="name === 'hr'"/>
      <IconUndo v-if="name === 'undo'"/>
      <IconRedo v-if="name === 'redo'"/>    
    </div>
</template>

<script>
import IconBold from '../../../public/assets/images/icons/bold.svg';
import IconItalic from '../../../public/assets/images/icons/italic.svg';
import IconStrike from '../../../public/assets/images/icons/strike.svg';
import IconUnderline from '../../../public/assets/images/icons/underline.svg';
import IconCode from '../../../public/assets/images/icons/code.svg';
import IconParagraph from '../../../public/assets/images/icons/paragraph.svg';
import IconUl from '../../../public/assets/images/icons/ul.svg';
import IconOl from '../../../public/assets/images/icons/ol.svg';
import IconQuote from '../../../public/assets/images/icons/quote.svg';
import IconHr from '../../../public/assets/images/icons/hr.svg';
import IconUndo from '../../../public/assets/images/icons/undo.svg';
import IconRedo from '../../../public/assets/images/icons/redo.svg';

export default {
    name: 'Icon',
    components: {
     IconBold,
     IconItalic,
     IconStrike,
     IconUnderline,
     IconCode,
     IconParagraph,
     IconUl,
     IconOl,
     IconQuote,
     IconHr,
     IconUndo,
     IconRedo,
    },
  props: {
    name: {},
    size: {
      default: 'normal',
    },
    modifier: {
      default: null,
    },
    fixAlign: {
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 .3rem;
  top: -.05rem;
  fill: currentColor;

  // &.has-align-fix {
  // 	top: -.1rem;
  // }

  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

}

// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }

  *[d="M0 0h24v24H0z"] {
    display: none;
  }
}
</style>
