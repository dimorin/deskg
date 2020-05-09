import axios from 'axios'

function fetchCountryHeadline(country, category, pageSize, page){
    let category_value = category || 'general'
    let pageSize_value = pageSize || 20
    let page_value = page || 1    
    return axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_KEY}&category=${category_value}&pageSize=${pageSize_value}&page=${page_value}`)
}
function translationData(src_lang,  target_lang, target){    
    //return axios.get(`http://localhost:8080/v1/translation/translate?src_lang=${src_lang}&target_lang=${target_lang}&query=${target}`,
    //return axios.get(`/api/v1/translation/translate?src_lang=${src_lang}&target_lang=${target_lang}&query=${target}`,
    return axios.get(`https://5eb65b9d55780e19cb01a3e3--friendly-wozniak-8f07d1.netlify.app/v1/translation/translate?src_lang=${src_lang}&target_lang=${target_lang}&query=${target}`,
    
        {headers: {
          'Authorization': `KakaoAK ${process.env.TRANSLATION_KEY}`,
          }}
      )
}
/* function fetchSources(){
    return axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.NEWS_KEY}`)
} */
export {fetchCountryHeadline, translationData/* , fetchSources */}