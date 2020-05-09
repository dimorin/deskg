import Vue from 'vue'
import Vuex from 'vuex'
import {fetchCountryHeadline, translationData/* , fetchSources */} from '../api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country_headline:[],
    sources:[],
    countryByOptions: [ 
      {label:'UAE',value:'ae',continent:'Asia',icon:'statics/countrys/United Arab Emirates.png',lang:'ar'},
      {label:'Argentina',value:'ar',continent:'America',icon:'statics/countrys/Argentina.png',lang:'es'},
      {label:'Austria',value:'at',continent:'Europe',icon:'statics/countrys/Austria.png',lang:'de'},
      {label:'Australia',value:'au',continent:'Oceania',icon:'statics/countrys/Australia.png',lang:'en'},                
      {label:'Belgium',value:'be',continent:'Europe',icon:'statics/countrys/Belgium.png',lang:'fr'},
      {label:'Brazil',value:'br',continent:'America',icon:'statics/countrys/Brazil.png',lang:'pt'},
      {label:'Bulgaria',value:'bg',continent:'Europe',icon:'statics/countrys/Bulgaria.png',lang:'ru'},
      {label:'Canada',value:'ca',continent:'America',icon:'statics/countrys/Canada.png',lang:'en'},
      {label:'Switzerland',value:'ch',continent:'Europe',icon:'statics/countrys/Swaziland.png',lang:'de'},
      {label:'China',value:'cn',continent:'Asia',icon:'statics/countrys/China.png',lang:'cn'},
      {label:'Colombia',value:'co',continent:'America',icon:'statics/countrys/Colombia.png',lang:'es'},
      {label:'Cuba',value:'cu',continent:'America',icon:'statics/countrys/Cuba.png',lang:'es'},
      {label:'Czech Republic',value:'cz',continent:'Europe',icon:'statics/countrys/Czech Republic.png',lang:''},
      {label:'Germany',value:'de',continent:'Europe',icon:'statics/countrys/Germany.png',lang:'de'},
      {label:'Egypt',value:'eg',continent:'Asia',icon:'statics/countrys/Egypt.png',lang:'ar'},
      {label:'France',value:'fr',continent:'Europe',icon:'statics/countrys/France.png',lang:'fr'},
      {label:'United Kingdom',value:'gb',continent:'Europe',icon:'statics/countrys/United Kingdom.png',lang:'en'},             
      {label:'Greece',value:'gr',continent:'Europe',icon:'statics/countrys/Greece.png',lang:''},
      {label:'Hong Kong',value:'hk',continent:'Asia',icon:'statics/countrys/Hong Kong.png',lang:'cn'},
      {label:'Hungary',value:'hu',continent:'Europe',icon:'statics/countrys/Hungary.png',lang:''},
      {label:'Indonesia',value:'id',continent:'Asia',icon:'statics/countrys/Indonesia.png',lang:'id'},
      {label:'Ireland',value:'ie',continent:'Europe',icon:'statics/countrys/Ireland.png',lang:'en'},
      {label:'Israel',value:'il',continent:'Asia',icon:'statics/countrys/Israel.png',lang:''},
      {label:'India',value:'in',continent:'Asia',icon:'statics/countrys/India.png',lang:'en'}, 
      {label:'Italy',value:'it',continent:'Europe',icon:'statics/countrys/Italy.png',lang:'it'},
      {label:'Japan',value:'jp',continent:'Asia',icon:'statics/countrys/Japan.png',lang:'jp'},
      {label:'South Korea',value:'kr',continent:'Asia',icon:'statics/countrys/South Korea.png',lang:''},
      {label:'Lithuania',value:'lt',continent:'Europe',icon:'statics/countrys/Lithuania.png',lang:''},
      {label:'Latvia',value:'lv',continent:'Europe',icon:'statics/countrys/Latvia.png',lang:''},                
      {label:'Morocco',value:'ma',continent:'Africa',icon:'statics/countrys/Morocco.png',lang:'fr'},
      {label:'Mexico',value:'mx',continent:'America',icon:'statics/countrys/Mexico.png',lang:'es'},
      {label:'Malaysia',value:'my',continent:'Asia',icon:'statics/countrys/Malaysia.png',lang:'en'},                
      {label:'Nigeria',value:'ng',continent:'Africa',icon:'statics/countrys/Nigeria.png',lang:'en'},
      {label:'Netherlands',value:'nl',continent:'Europe',icon:'statics/countrys/Netherlands.png',lang:'nl'},
      {label:'Norway',value:'no',continent:'Europe',icon:'statics/countrys/Norway.png',lang:''},
      {label:'New Zealand',value:'nz',continent:'Oceania',icon:'statics/countrys/New Zealand.png',lang:'en'},
      {label:'Philippines',value:'ph',continent:'Asia',icon:'statics/countrys/Philippines.png',lang:'en'},
      {label:'Poland',value:'pl',continent:'Europe',icon:'statics/countrys/Poland.png',lang:''},
      {label:'Portugal',value:'pt',continent:'Europe',icon:'statics/countrys/Portugal.png',lang:'pt'},
      {label:'Romania',value:'ro',continent:'Europe',icon:'statics/countrys/Romania.png',lang:''},
      {label:'Serbia',value:'rs',continent:'Europe',icon:'statics/countrys/Serbia.png',lang:''},
      {label:'Russia',value:'ru',continent:'Asia',icon:'statics/countrys/Russian Federation.png',lang:'ru'},
      {label:'Saudi Arabia',value:'sa',continent:'Asia',icon:'statics/countrys/Saudi Arabia.png',lang:'ar'},
      {label:'Sweden',value:'se',continent:'Europe',icon:'statics/countrys/Sweden.png',lang:''},
      {label:'Singapore',value:'sg',continent:'Asia',icon:'statics/countrys/Singapore.png',lang:'en'},
      {label:'Slovenia',value:'si',continent:'Europe',icon:'statics/countrys/Slovenia.png',lang:''},
      {label:'Slovakia',value:'sk',continent:'Europe',icon:'statics/countrys/Slovakia.png',lang:''},
      {label:'Thailand',value:'th',continent:'Asia',icon:'statics/countrys/Thailand.png',lang:'th'},
      {label:'Turkey',value:'tr',continent:'Asia',icon:'statics/countrys/Turkey.png',lang:'tr'},
      {label:'Taiwan',value:'tw',continent:'Asia',icon:'statics/countrys/Taiwan.png',lang:'cn'},
      {label:'Ukraine',value:'ua',continent:'Europe',icon:'statics/countrys/Ukraine.png',lang:'ru'},
      {label:'United States',value:'us',continent:'America',icon:'statics/countrys/United States of America.png',lang:'en'},
      {label:'Venuzuela',value:'ve',continent:'America',icon:'statics/countrys/Venezuela.png',lang:'es'},
      {label:'South Africa',value:'za',continent:'Africa',icon:'statics/countrys/South Africa.png',lang:'en'}
    ],
    categoryByOptions: [ 
      {label:"all", value:"general"},
      {label:"business", value:"business"},
      {label:"entertainment", value:"entertainment"},        
      {label:"health", value:"health"},
      {label:"science", value:"science"},
      {label:"sports", value:"sports"},
      {label:"technology", value:"technology"} 
    ],
    country_by:'us',
    category_by:'general',
    pageSize:20,
    page:1,
    totalResults:0,
  },
  mutations: {    
    SET_COUNTRY_HEADLINE(state, articles){
      let country = state.countryByOptions.find(item => item.value == state.country_by);
      let lang = country.lang
      articles.map(article => {        
        Object.assign(article,{translated_text:'',src_lang:lang})
      })
      state.country_headline = articles
    },
    SETMOREPAGE(state, articles){
      let country = state.countryByOptions.find(item => item.value == state.country_by);
      let lang = country.lang
      articles.map(article => {
        Object.assign(article,{translated_text:'',src_lang:lang})
      })      
      state.country_headline = state.country_headline.concat(articles)//state.country_headline 에 state.page 내용을 합치기
    },
    SETTOTLRESULTS(state,total){
      state.totalResults = total
    },
    SET_TRANSLATION_DATA(state, obj){      
      state.country_headline[obj.index].translated_text = obj.translated_text;
    },
    SETCOUNTRYBY(state,value){
      state.country_by = value;
    },
    SETCATEGORYBY(state,value){
      state.category_by = value;
    },
    RESETCATEGORYBY(state){
      state.category_by = 'general';
    },
    SETSOURCES(state, sources){
      state.sources = sources
    },
    SETPAGE(state, page){
      state.page = page
    }
  },
  actions: {
    /* async SETSOURCES({commit}){
      const response = await fetchSources();
      let sources = response.data.sources
      commit('SETSOURCES',sources)
    }, */
    async SET_COUNTRY_HEADLINE({commit, state}){      
      const response = await fetchCountryHeadline(state.country_by, state.category_by, state.pageSize, state.page);
      const total = response.data.totalResults
      commit('SETTOTLRESULTS',total)
      const articles = response.data.articles;            
      commit('SET_COUNTRY_HEADLINE', articles)
    },
    async SET_TRANSLATION_DATA({commit},obj){
      const response = await translationData(obj.src_lang, obj.target_lang, obj.target);      
      let translated_obj = {translated_text:response.data.translated_text[0][0], index:obj.index};      
      commit('SET_TRANSLATION_DATA',translated_obj);
    },
    SETCOUNTRYBY({dispatch,commit}, value){      
      commit('SETCOUNTRYBY',value)
      commit('RESETCATEGORYBY')
      commit('SETPAGE',1) //page 1로 초기화
      dispatch('SET_COUNTRY_HEADLINE')
    },
    SETCATEGORYBY({dispatch,commit},value){
      commit('SETCATEGORYBY',value)      
      commit('SETPAGE',1) //page 1로 초기화
      dispatch('SET_COUNTRY_HEADLINE')
    },
    async SETMOREPAGE({commit,state}){            
      commit('SETPAGE',++state.page) 
      const response = await fetchCountryHeadline(state.country_by, state.category_by, state.pageSize, state.page);
      const articles = response.data.articles;            
      commit('SETMOREPAGE', articles)      
    }
  },
  modules: {
  }
})