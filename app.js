var rock_button  = document.getElementById('rock')
var paper_button = document.getElementById('paper')
var scissor_button = document.getElementById('scissor')
var player_input 
var computer_input
var insert_image = document.getElementById('insert_image')
var insert_image1 = document.getElementById('insert_image1')
var myscore = document.getElementById('myscore')
var compscore = document.getElementById('comscore')
var play_again = document.getElementById('button')
var win = document.getElementById('winner')


rock_button.addEventListener('click',function(){
    insert_image.innerHTML = `<img class="class_image" src="./assets/rock-hand.png" >`;
    player_input = 'rock'
    function_calling()
})

paper_button.addEventListener('click',function(){
    insert_image.innerHTML = `<img class="class_image" src="./assets/paper-hand.png" >`;
    player_input = 'paper'
    random_value()
    function_calling()
})

scissor_button.addEventListener('click',function(){
    insert_image.innerHTML = `<img class="class_image" src="./assets/scissors-hand.png" >`;
    player_input = 'scissor'
    random_value()
    function_calling()
})

play_again.addEventListener('click',function(){
    location.reload()
})
// play_again.addEventListener('click',function(){
//     console.log(player_input)
//     console.log(computer_input)
// })

function random_value(){
    var list_name = ['rock','paper','scissor']
    var list_image = ['./assets/rock-hand.png','./assets/paper-hand.png','./assets/scissors-hand.png']
    var random_num = Math.floor(Math.random()*3)
    insert_image1.innerHTML = `<img class="class_image" src=${list_image[random_num]} >`
    computer_input = list_name[random_num]
}

var player_score = 0
var computer_score = 0

function update_score(){

    if (player_input == 'rock'){
        if (computer_input == 'paper'){
            computer_score ++
        }else if (computer_input == 'scissor') {
            player_score ++
        }
    }else if (player_input == 'scissor'){
        if (computer_input == 'paper'){
            player_score++
        }else if (computer_input == 'rock'){
            computer_score++
        }
    }else if (player_input == 'paper'){
        if (computer_input == 'rock'){
            player_score++
        }else if (computer_input == 'scissor'){
            computer_score++
        }
    }

}


function function_calling(){
    random_value()
    update_score()
    myscore.textContent = player_score
    compscore.textContent = computer_score
    display_change()

    
}

function display_change(){
    if (computer_score >=5 || player_score >= 5){
        rock_button.style.display = "none"
        paper_button.style.display = "none"
        scissor_button.style.display = "none"
        play_again.style.display = "flex"

    }

    if (player_score >=5){
        win.textContent = 'You Won!'
        console.log('hhh')

    }else if (computer_score >=5){
        win.textContent = 'Opps computer Won'
        console.log('eee')
    }
}


