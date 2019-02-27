<template>
<div>
    <h2> Simple example to showcase Modal in vue.js </h2>
    <ModalExample></ModalExample>
    <b-button @click="navigate()" variant="outline-primary">go back</b-button>
</div>    
</template>

<script>
import ModalExample from '@/components/modal/ModalExample.vue'
export default {
  name: 'ModalIndex',
  components: { ModalExample },
  methods:{
       navigate(){
         this.$router.go(-1)
       }
    }
}
</script>
