<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-primary">
      <q-toolbar class="justify-between">
         <!-- <div class="flex ">
            <q-item-section avatar>
              <q-avatar>                
                <img src="statics/logo_deskg.svg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">DESK.G</q-item-label>
              <q-item-label caption lines="1">전세계 헤드라인 뉴스</q-item-label>
            </q-item-section>            
         </div> -->
         <q-toolbar-title>
            <span class="text-subtitle1">TODAY </span><span class="text-subtitle1"><strong>{{todayDate}}</strong></span>  
          </q-toolbar-title>
         <q-btn flat color="primary" icon="public" @click="worldmap_dialog = true" />
      </q-toolbar>
      <!-- <q-toolbar>
          <q-toolbar-title>
            <span class="text-subtitle1">TODAY </span><span class="text-subtitle1"><strong>{{todayDate}}</strong></span>  
          </q-toolbar-title>
      </q-toolbar> -->
    </q-header>
    <q-footer bordered class="bg-white text-primary text-center q-py-sm">      
        <div class="text-caption">
          © 2020 DESK.G<br>
          powered by NewsAPI.org
        </div>      
    </q-footer>    

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="worldmap_dialog" transition-show="slide-left"transition-hide="slide-right" full-width>
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-body">
            <div class="country-item">
              <span class="rect" style="background-color:#0d47a1;"></span>
              <span>뉴스 제공 국가</span>
            </div>
            <div class="country-item">
              <span class="rect" style="background-colorcolor:#f5f5f5;"></span>
              <span>뉴스 미제공 국가</span>
            </div>          
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>       

        <q-card-section class="q-py-md">
          <world-map></world-map>          
        </q-card-section>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script>

import { date } from 'quasar'
import WorldMap from 'src/components/WorldMap'
export default {
  name: 'Layout',

  components: {
    WorldMap
  },

  data () {
    return {
      worldmap_dialog: false,
    }
  },

  computed:{
    todayDate(){
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  },
  
}
</script>

<style scoped>
  .q-avatar{border-radius:0;}
  .text-caption{margin-top:0;}
  .country-item{display:inline-block;}
  .country-item span{display:inline-block;vertical-align: middle;margin-right:10px;}
  .country-item span.rect{width:10px;height:10px;border:1px solid #DEDEDE;}  
</style>
