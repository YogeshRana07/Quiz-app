const queBank=[
    {
        question:"What is favourite fod of Rana ?",
        answer:["Bread-Omelate","Kathi Roll","Tikki-Chaat","Pizza"],
        correct:"Bread-Omelate",
        questionid:"01"
    },

    {
        question:"What's is the dream of Rana ?",
        answer:["Web Developer","Gym-trainer","Leader","Hacker"],
        correct:"Web-Developer",
        questionid:"02"
    },
    
    {
        question:"What do you think about Rana ?",
        answer:["Simple","Flirty","Smart","Gunda"],
        correct:"Simple",
        questionid:"03"
    },
    
    {
        question:"What's Rana like most GF or Yaar ?",
        answer:["GF","Yaar","None"],
        correct:"Yaar",
        questionid:"04"
    },
    

    {
        question:"What's Rana thinks about Girls ?",
        answer:["Respect","Bad-think"],
        correct:"Respect",
        questionid:"05"
    },
    
    {
        question:"What is passion of Rana ?",
        answer:["Gym","Study","Programming","None"],
        correct:"Gym",
        questionid:"06"
    },
    
    {
        question:"Who is favourite singer of Rana ?",
        answer:["Arijit Singh","Atif Aslam","Dilpreet Dhillon","Diljeet"],
        correct:"Arijit Singh",
        questionid:"07"
    },
    
    {
        question:"Which sport Rana like most to play ?",
        answer:["Cricket","Volleyball","Basketball","Badminton"],
        correct:"Cricket",
        questionid:"08"
    },
    
    {
        question:"What do you think about Rana is Spritual or Not ?",
        answer:["Yes","No"],
        correct:"Yes",
        questionid:"09"
    },
    
    {
        question:"Can Rana die for his friends ?",
        answer:["Yes","No"],
        correct:"Yes",
        questionid:"10"
    },

]
export default(n=4) =>
Promise.resolve(queBank.sort(()=> 0.5 - Math.random()).splice(0,n));