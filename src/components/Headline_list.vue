<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <q-card flat bordered class="my-card bg-grey-1">
            <img :src="item.urlToImage" v-if="item.urlToImage">
            <q-card-section class="bg-primary text-white">
                <div class="row items-center no-wrap">
                    <div class="col">
                        <div class="text-body1">
                            <a :href="item.url" target="_blank" class="link_title">
                                <span v-if="!stateoftranslation">{{item.title}}</span> 
                                <span v-else>{{ item.translated_text }}</span>          
                            </a>
                        </div>                        
                        <div class="text-caption by q-pt-sm">
                            <span v-if="item.source.name">{{item.source.name}}</span> 
                            <span v-if="item.author"> {{item.author}}</span>
                        </div>
                    </div>                    
                </div>
            </q-card-section>
            <q-separator />
            <q-card-actions class="relative-position">   
                <span class="text-caption">{{publishedAtDate}}</span>
                <q-btn flat color="primary" v-if="item.src_lang" @click="translationData(item.title,item_index,item.src_lang)" class="absolute-right">
                    <span v-if="!stateoftranslation">번역</span> 
                    <span v-else>원본</span>
                </q-btn> 
                <!-- <span> {{item_index}}</span> -->
            </q-card-actions>    
            <!-- <button v-if="item.src_lang" @click="translationData(item.title,item_index,item.src_lang)">
                <span v-if="!stateoftranslation">번역</span> 
                <span v-else>원본</span>
            </button>  -->       
        </q-card>
    </div>    
</template>

<script>
import { date } from 'quasar'
export default {
    props:{
        'item':Object,
        'item_index':Number
        },    
    data(){
        return {
            stateToggle:false
        }
    },   
    computed:{
        publishedAtDate(){
            return date.formatDate(this.item.publishedAt, 'YYYY-MM-DD HH:mm')
        },
        stateoftranslation(){
            let value;
            /*            
            this.item.translated_text == '' && this.stateToggle == false ------> 번역 하기 전 상태, 첫번째 나라 세팅 상태 ---> 원문이 나와야함
            this.item.translated_text != '' && this.stateToggle == false ------> 번역 한 상태, 토글 버튼을 두 번 누른 상태 --> 원문이 나와야 함
            this.item.translated_text == '' && this.stateToggle == true ------> 번역 하기 전 상태이면서, 두번째 나라 세팅상태 --> 원문이 나와야 함
            this.item.translated_text != '' && this.stateToggle == true ------> 번역 한 상태, 토글 누른 상태 ---> 번역한 것이 나와야 함
            */
           if(this.item.translated_text != '' && this.stateToggle == true){
               value = true
           }else{
               value = false
           }
            return value
        }
    },
    methods:{
        translationData(title,index,lang){
            let obj = {target:title,index:index,lang:lang}
            this.$emit("translationData",obj)
            this.stateToggle = !this.stateToggle
        }        
    },
}
</script>

<style scoped>
    .link_title{display:inline-block;color:#fafafa;text-decoration:none;}
    .text-caption.by{color:rgba(255,255,255,.5);}
</style>

