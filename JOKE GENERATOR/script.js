const arr = [
    'What do you call a woman who sets fire to all her bills? Bernadette',

    'Did you hear how the zombie bodybuilder hurt his back? He was dead-lifting',

    'I saw Usain Bolt sprinting around the track shouting, Why did the chicken cross the road!? It was a running joke.', "I asked a friend in Seattle what the difference was between a state like Washington and one like Florida. He shrugged. “Apples and oranges.” ",


    "Two guys stole a calendar. They got six months each. ",

    "Yesterday I saw a guy spill all his Scrabble letters on the road. I asked him, “What’s the word on the street?",


    "The definition of a perfectionist: someone who wants to go from point A to point A+. ",




    "Things I overheard at my health club: 'I’m only taking this class so I don’t eat for an hour.” “Who knew 40 years of neglect would have repercussions?” “Does this body make me look fat?” ",


    "One of my wife’s third graders was wearing a Fitbit watch, which prompted my wife to ask, “Are you tracking your steps?” “No,” said the little girl. “I wear this for Mommy so she can show Daddy when he gets home.” ",


    " Are any Halloween monsters good at math? A. No—unless you Count Dracula!",


    "Since the coronavirus outbreak, my 47-year-old son has been washing his hands religiously. In fact, he said, “I’ve been washing my hands so much, I found the answers to an old eighth-grade math quiz.” "

]
let number = Math.floor(Math.random() * (arr.length - 1))
console.log(number)

let joke = arr[number]
document.querySelector(".joke").innerHTML = `${joke}`

let button = document.querySelector(".btn")
button.addEventListener("click", () => {
    location.reload()
})
