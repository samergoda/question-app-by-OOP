export class Quiz {
  constructor(res) {
    this.result = res;
    this.currentIndex = 0;
    this.score = 0
    document
      .getElementById("next")
      .addEventListener("click", this.NextQeustion.bind(this));
    this.showQuistions();
document.getElementById('tryBtn').addEventListener('click',function () {
$('#finish').fadeOut(500,()=>{
  $('#setting').fadeIn(500)
})
})

  }
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  showQuistions() {
    document.getElementById("question").innerHTML =
      this.result[this.currentIndex].question;

    let answers = [
      this.result[this.currentIndex].correct_answer,
      ...this.result[this.currentIndex].incorrect_answers,
    ];
    document.getElementById("currentQuestion").innerHTML =
      this.currentIndex + 1;
    document.getElementById("totalNumberOfQuestions").innerHTML =
      this.result.length;
    this.shuffle(answers);

    let container = "";
    for (let i = 0; i < answers.length; i++) {
      container += `
                            <div class="form-check">
                              <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="answer" value="${answers[i]}" >
                                ${answers[i]}
                             </label>
                            </div>`;
    }
    document.getElementById("rowAnswer").innerHTML = container;
  }

  NextQeustion() {
    

    if (Array.from(document.getElementsByName('answer')).filter((ele)=> ele.checked).length != 0) {
          let correctAnswer = this.result[this.currentIndex].correct_answer
          let userAnswer = Array.from(document.getElementsByName('answer')).filter((ele)=> ele.checked)[0].value 
    this.checkUserAnswer(correctAnswer,userAnswer)
    this.currentIndex++;
    $('#alert').fadeOut(500)
    if (this.currentIndex < this.result.length) {
      this.showQuistions();

    } else {
      $("#quiz").fadeOut(500, () => {
        $("#finish").fadeIn(500);
      });
      document.getElementById('score').innerHTML = this.score
     
    }
    }else{
      $('#alert').fadeIn(500)
  }

    

  }


  checkUserAnswer(correct_answer,userAnswer){
    if (correct_answer == userAnswer) {
     $('#Correct').fadeIn(500).fadeOut(500)
     this.score ++
    }else{
      $('#inCorrect').fadeIn(500).fadeOut(500)


    }
  }
}
