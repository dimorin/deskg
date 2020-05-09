<template>
  <q-page padding>    
    <div class="q-col-gutter-sm row items-start q-mb-sm">
      <div class="col-8">
        <q-select square outlined v-model="countryBy" :options="countryByOptions" label="country" emit-value map-options class="col" behavior="dialog">
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents">
              <q-item-section avatar>
                <!-- <q-icon :name="scope.opt.icon" /> -->
                <q-avatar rounded>
                  <img :src="scope.opt.icon">
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label v-html="scope.opt.label" />
                <q-item-label caption>{{ scope.opt.continent }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-4">
        <q-select square filled v-model="categoryBy" :options="categoryByOptions" label="category" emit-value map-options class="col" behavior="dialog"></q-select>
      </div>
    </div>
      
    <div class="row q-col-gutter-sm">      
      <Headline_list v-for="(item,i) in country_headline" :key="i" :item="item" :item_index="i" @translationData="translationData"></Headline_list>      
    </div>    

    <div class="q-my-xl text-center">      
      <q-btn outline color="primary" label="더보기" outline @click="fetchMorePage" v-if="haveMorePage"></q-btn>      
    </div>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
    
  </q-page>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Headline_list from '../components/Headline_list'
export default {
  components:{
    Headline_list
  },
  computed:{
    ...mapState(['countryByOptions','categoryByOptions','country_headline','country_by', 'category_by','pageSize','page','totalResults']),    
    countryBy:{
      get(){
        return this.country_by
      },
      set(value){
        this.SETCOUNTRYBY(value)
      }
    },
    categoryBy:{
      get(){
        return this.category_by
      },
      set(value){
        this.SETCATEGORYBY(value)
      }
    },
    haveMorePage(){      
      let have;
      let lastPage = Math.ceil(this.totalResults / this.pageSize);
      let nextPage = parseInt(this.page) + 1;
      if(nextPage > lastPage){
        have = false
      }else{
        have = true
      }
      return have
    }
  },
  methods:{
    ...mapActions(['SET_COUNTRY_HEADLINE', 'SET_TRANSLATION_DATA','SETCOUNTRYBY','SETCATEGORYBY','SETMOREPAGE']), 
    translationData(obj){
      let target_obj = {src_lang:obj.lang,target_lang:'kr',target:obj.target,index:obj.index};
      this.SET_TRANSLATION_DATA(target_obj);  
    },
    fetchMorePage(){      
      this.SETMOREPAGE();
    }
  },
  created(){    
      this.SET_COUNTRY_HEADLINE()             
  }
}
</script>