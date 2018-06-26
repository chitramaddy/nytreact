import axios from 'axios';

export default {

    //This is to get the articles from NYT
    nytSearch: function(query){
        return axios.get("/api/nyt", {params: query})
    },

    //This is to save the articles to the database
    articleSave: function(articleInfo){
        return axios.post("/api/articles", articleInfo)
    },

    //This is to retrieve all articles from Mongo database
    articleRetrieve: function(){
        return axios.get("/api/articles")
    },

    //This is to delete an article from the database
    articleDelete: function(id){
        return axios.delete(`api/articles/$(id)`)
    }

}