
team1ScoreEl = document.getElementById("team1-score")
team2ScoreEl = document.getElementById("team2-score")
timerEl = document.getElementById("time")

const startMinutes = 12
let time = startMinutes * 60

team1Score = 0
team2Score = 0

function updateTimer(){
    let minutes = Math.floor(time/60)
    let seconds = time % 60

    if(seconds < 10){
        seconds = "0" + seconds
    }

    timerEl.innerHTML = `${minutes}:${seconds}`
    time--
    if(time<0){
        clearInterval(intervalID)
    }
}

let intervalID = setInterval(() => {
    updateTimer()
}, 1000);

function renderScore(){
    team1ScoreEl.textContent = team1Score
    team2ScoreEl.textContent = team2Score
    if( team1Score > team2Score ){
        team1ScoreEl.style.color = "#2dcb0d"
        team2ScoreEl.style.color = "#ec294c"
    }
    else if( team2Score > team1Score){
        team1ScoreEl.style.color = "#ec294c"
        team2ScoreEl.style.color = "#2dcb0d"
    }
    else if ((team1Score > 0 && team2Score > 0) && (team1Score === team2Score)) {
        team1ScoreEl.style.color = "#f0f415"
        team2ScoreEl.style.color = "#f0f415"
    }
}

renderScore()

function increaseScoreByOne(teamClass){
    if(teamClass === "team1"){
        team1Score++
        renderScore()
    }
    else if(teamClass === "team2"){
        team2Score++
        renderScore()
    }
}

function increaseScoreByTwo(teamClass){
    if(teamClass === "team1"){
        team1Score += 2
        renderScore()
    }
    else if(teamClass === "team2"){
        team2Score += 2
        renderScore()
    }
}

function increaseScoreByThree(teamClass){
    if(teamClass === "team1"){
        team1Score += 3
        renderScore()
    }
    else if(teamClass === "team2"){
        team2Score += 3
        renderScore()
    }
}

function resetTimer(){
    time = startMinutes * 60
    intervalID = setInterval(() => {
        updateTimer()
    }, 1000);
}

function resetGame(){
    team1Score = 0
    team1ScoreEl.style.color = "#ec294c"
    team2Score = 0
    team2ScoreEl.style.color = "#ec294c"
    renderScore()
    resetTimer()
}
