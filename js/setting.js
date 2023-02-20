 import {Quiz} from "./quiz.js"
 
 export class Setting {
    constructor(){
        this.category = document.getElementById('category')
        this.difficulty = document.getElementsByName('difficulty')
        this.number = document.getElementById('numberOfQuestions')
        document.getElementById('startBtn').addEventListener("click",this.getDataUser.bind(this));
        
        
      
};
   async getDataUser(){
        let category = this.category.value
        let difficulty =Array.from(this.difficulty).filter((ele) =>ele.checked)[0].value
        let number = this.number.value
        let api = `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
        let data = await this.fetchData(api)
        let res = data.results
        if (res.length > 0) {
            let quiz = new Quiz(res)
            $('#setting').fadeOut(500,()=>{
            $('#quiz').fadeIn(500)
        })
        }else{
            $('#formAlert').fadeIn(500)
        }
        
    };

     async fetchData(api){
       let response = await fetch(api)
        return response.json()
    }

};