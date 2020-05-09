<template>
  <q-page>
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
    <input  @keyup.esc="clearm" @keyup.enter="alertm" v-autofocus>
  </q-page>
</template>

<script>
  export default {
    name: 'PageIndex',
    methods:{
      clearm(){
        console.log('clear')
      },
      alertm(){
        console.log('alert')
      }
    },
    directives:{
      autofocus:{
        inserted(el){
          el.focus()
        }
      }
    }
  }
</script>
