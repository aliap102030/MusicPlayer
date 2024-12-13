


const musics = [
  


    {
      id: 1,
        name: "Maroon 5",
        cover:"./files/Maroon-5-Sugar.png",
        link: "https://dl1.volombede.com/musics/Maroon%205/Maroon%205%20-%20Sugar.mp3",
        text: "Sugar",
      },
      {
        id: 2,
        name: "Sting",
        cover:"./files/sting.png",
        link: "https://dls.musics-fa.com/tagdl/downloads/Sting%20-%20Shape%20Of%20My%20Heart%20(320).mp3",
        text: "Shape Of My Heart",
      },
      {
        id: 3,
        name: "همایون شجریان",
        cover:"./files/shajarina.png",
        link: "https://ts17.tarafdari.com/contents/user869501/content-sound/hayedeh-abr-mibarad-music-irani.com_.mp3",
        text: "ابر میبارد ",
      },
      {
          id: 4,
        name: "Christina Perri",
        cover:"./files/christina.png",
        link: "https://dl5.download1music.ir/Music/2023/Christina%20Perri/Christina%20Perri%20-%20A%20Thousand%20Years,%20Pt.%202.mp3",
        text: "A Thousand Years",
      },
      
    ]
    
    
    
    var index=0
    
    function next(){
    
        index++
        if(index>musics.length-1){
            index=0
        
        }
        
        showplayer(musics[index])
        document.getElementById("audio").play()
    }
    
    function perv(){
        index--
        if(index<0){
            index=musics.length-1
        }
        showplayer(musics[index])
        document.getElementById("audio").play()
    }
    
    
    function showplayer(music){
    
    document.getElementById("cover").style.backgroundImage=`url(${music.cover})`
    document.getElementById("text").innerHTML=music.text
    document.getElementById("name").innerHTML=music.name
    var audio=document.getElementById("audio")
    audio.setAttribute("src",music.link)
    audio.play()
    }
    showplayer(musics[index])
    
       