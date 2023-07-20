var Flooded_The_Face = "https://audmak.icu/wp-content/uploads/2023/06/01.%20Flooded%20The%20Face%20-%20%28Hiphopde.com%29.mp3",
    Suicide_Doors = "https://audmak.icu/wp-content/uploads/2023/06/02.%20Suicide%20Doors%20-%20%28Hiphopde.com%29.mp3",
    Aye = "https://audmak.icu/wp-content/uploads/2023/06/03.%20Aye%20%28feat.%20Travis%20Scott%29%20-%20%28Hiphopde.com%29.mp3",
    Crush_Em = "https://audmak.icu/wp-content/uploads/2023/06/04.%20Crush%20Em%20-%20%28Hiphopde.com%29.mp3",
    Amped = "https://audmak.icu/wp-content/uploads/2023/06/05.%20Amped%20-%20%28Hiphopde.com%29.mp3",
    x2 = "https://audmak.icu/wp-content/uploads/2023/06/06.%20x2%20-%20%28Hiphopde.com%29.mp3",
    Died_and_Came_Back = "https://audmak.icu/wp-content/uploads/2023/06/07.%20Died%20and%20Came%20Back%20-%20%28Hiphopde.com%29.mp3",
    Spin_Again = "https://audmak.icu/wp-content/uploads/2023/06/08.%20Spin%20Again%20-%20%28Hiphopde.com%29.mp3",
    That_Fiya = "https://audmak.icu/wp-content/uploads/2023/06/09.%20That%20Fiya%20-%20%28Hiphopde.com%29.mp3",
    I_Gotta_Mp3 = "https://audmak.icu/wp-content/uploads/2023/06/10.%20I%20Gotta%20-%20%28Hiphopde.com%29.mp3",
    Mama_Im_Sorry = "https://audmak.icu/wp-content/uploads/2023/06/12.%20Mama%2C%20I%D1%82%D0%90%D0%A9m%20Sorry%20-%20%28Hiphopde.com%29.mp3",
    Endless_Fashion = "https://audmak.icu/wp-content/uploads/2023/06/11.%20Endless%20Fashion%20%28feat.%20Nicki%20Minaj%29%20-%20%28Hiphopde.com%29.mp3",
    Fire_Alarm = "https://audmak.icu/wp-content/uploads/2023/06/16.%20Fire%20Alarm%20-%20%28Hiphopde.com%29.mp3",
    Nakamura = "https://audmak.icu/wp-content/uploads/2023/06/14.%20Nakamura%20-%20%28Hiphopde.com%29.mp3",
    All_Alone = "https://audmak.icu/wp-content/uploads/2023/06/13.%20All%20Alone%20-%20%28Hiphopde.com%29.mp3",
    Pluto_to_Mars = "https://audmak.icu/wp-content/uploads/2023/06/19.%20Pluto%20to%20Mars%20-%20%28Hiphopde.com%29.mp3",
    Werewolf = "https://audmak.icu/wp-content/uploads/2023/06/18.%20Werewolf%20%28feat.%20Bring%20Me%20The%20Horizon%29%20-%20%28Hiphopde.com%29.mp3",
    CS = "https://audmak.icu/wp-content/uploads/2023/06/17.%20CS%20-%20%28Hiphopde.com%29.mp3",
    The_End = "https://audmak.icu/wp-content/uploads/2023/06/23.%20The%20End%20%28feat.%20BABYMETAL%29%20-%20%28Hiphopde.com%29.mp3",
    Rehab = "https://audmak.icu/wp-content/uploads/2023/06/22.%20Rehab%20-%20%28Hiphopde.com%29.mp3",
    Patience = "https://audmak.icu/wp-content/uploads/2023/06/20.%20Patience%20%28feat.%20Don%20Toliver%29%20-%20%28Hiphopde.com%29.mp3",
    Of_Course = "https://audmak.icu/wp-content/uploads/2023/06/25.%20Of%20Course%20%28Bonus%20Track%29%20-%20%28Hiphopde.com%29.mp3",
    Zoom = "https://audmak.icu/wp-content/uploads/2023/06/24.%20Zoom%20%28Bonus%20Track%29%20-%20%28Hiphopde.com%29.mp3",
    SickoMode = "https://hiphopdes.com/uploads/2018/06/03%20SICKO%20MODE.mp3";
var pinkTapePic = "https://upload.wikimedia.org/wikipedia/en/2/2c/Lil_Uzi_Vert_-_Pink_Tape.png",
    travis = "https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg";
var indexPics = 0;
var index = 0;
var index_song_names = 0;
var songs = [The_End,CS,Werewolf,Flooded_The_Face,Suicide_Doors,
            Aye,Crush_Em,Amped,x2,Died_and_Came_Back,Spin_Again,
            That_Fiya,I_Gotta_Mp3,Mama_Im_Sorry,
            Endless_Fashion, Fire_Alarm,Nakamura,All_Alone,
            Pluto_to_Mars,Rehab,Patience,Of_Course,Zoom,SickoMode];
var songNames = ["The End: ☆*: .｡. o(≧▽≦)o .｡.:*☆","CS","Werewolf","Flooded The Face","Suicide Doors",
                "Aye","Crush Em","Amped","X2","Died and Came Back","Spin Again",
                "That Fiya","I Gotta Mp3","Mama,I'm Sorry", "Endless Fashion",
                "Fire Alarm","Nakamura","All Alone", "Pluto to Mars", "Rehab",
                "Patience", "Of Course", "Zoom","Sicko Mode"];
var audio = new Audio(songs[index]);
var isPaused = true; // Track if audio is currently paused
var shuffleBTN = document.getElementById("shufle-btn");

//randomize song played
function randomize() {
    index = Math.floor(Math.random() * songs.length);
    index_song_names = index;
    audio.src = songs[index];
    audio.load();
    audio.play();
    isPaused = false;
    timeElapsed();
    changeText();
    ChangeBTNPic();
    changeImg();
    console.log(index);
}
//event listener for audio change. automatically plays another random song
audio.addEventListener("ended", randomize);

//changes the text of the audio
function changeText() {
    var text = document.getElementById("song_tittle");//song_tittle
    text.innerHTML = songNames[index_song_names];
    var siteTitle = document.getElementById("site_title");
    siteTitle.innerText = songNames[index_song_names];
}

function changeImg() {
    var musicCover = document.getElementById("Music_Cover");//album cover pic
    //change picture to corresponding album
    if(index <= 22){
        musicCover.src = pinkTapePic;
    } else if(index >= 22){
        musicCover.src = travis;
    }
}

//function displays current time for and the total duration song
function timeElapsed() {
    //changes the times to whole numbers
    function wholeNum(time) {
        return Math.floor(time);
    }
    
    function Current_Time() {
        //current time of current song
        console.log("Current Time: " + wholeNum(audio.currentTime) + " seconds");
    }
    
    function Total_Duration() {
        //total duration of current song
        console.log("Total Time: " + wholeNum(audio.duration) + " seconds");
    }

    //current_time <p></p>
    function changeCurrentTime() {
            var rightNowTime = document.getElementById("current_time");
            rightNowTime.innerHTML = wholeNum(audio.currentTime) + ":" + wholeNum(audio.duration);
        }

    //repeat every second
     setInterval(Current_Time,505);
     setInterval(Total_Duration,505);
     setInterval(changeCurrentTime,505);
     setInterval(console.clear,1000);
}

//change pic of play/pause btn
function ChangeBTNPic() {
    const PlayPauseIMG = document.getElementById("play-btn-img");
    if (!audio.paused) {
        PlayPauseIMG.src = "Img/Pause.png";
    } else if (audio.paused) {
        PlayPauseIMG.src = "Img/Play.png";
    }
}

//play and pause audio
function PLAY() {
    function Play() {
        audio.play();
    }
    if (isPaused) {
        Play();
        isPaused = false;
        timeElapsed();
    } else {
        audio.pause();
        isPaused = true;
    }
    console.log(index);
    changeText();
    changeImg();
    ChangeBTNPic();
}

//next song
function NEXT() {
    index++;
    index_song_names++;
    audio.src = songs[index];
    audio.load();
    audio.play();
    var playBtn = document.getElementById("play-btn");
    if (isPaused) {
        isPaused = false;
        //changes what the Play button says to say Pause
        playBtn.innerHTML = "Pause";
    } 
    timeElapsed();
    changeText();
    ChangeBTNPic();
    changeImg();
    console.log(index);
}

//previous song
function PREVIOUS() {
    index --;
    index_song_names--;
    audio.src = songs[index];
    audio.load();
    audio.play();
    var playBtn = document.getElementById("play-btn");
    if (isPaused) {
        isPaused = false;
        //changes what the Play button says to say Pause
        playBtn.innerHTML = "Pause";
    } 
    timeElapsed();
    changeText();
    ChangeBTNPic();
    changeImg();
    console.log(index);
}

//skips to next song after the previous song has finished playing
audio.addEventListener("ended", function(){
    index++;
    index_song_names++;
    audio.src = songs[index];
    audio.load();
    audio.play();
    timeElapsed();
    changeText();
    ChangeBTNPic();
    changeImg();
    console.log(index + " ended");
});

//jumps +10 seconds
function jump_forward() {
    audio.currentTime += 10;
    if (!isPaused) {
        audio.play(); // Resume playback after fast forward
    }
}

//jumps -10 seconds
function jump_back() {
    audio.currentTime -= 10;
    if (!isPaused) {
        audio.play(); // Resume playback after fast forward
    }
}