import React, { useEffect, useState } from "react";
import play from './image/play.png'; 
import pause from './image/pause.png'; 
import stop from './image/stop.png';
import speaker from './image/sound.png';
import speakermute from './image/mute.png';
import next from './image/next.png';
import previous from './image/previous.png';
const Videoplayer = () => {
    let videoslist = [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    ];
    let videoName = [
    "Video-1","Video-2","Video-3","Video-4","Video-5","Video-6","Video-7","Video-8" ,"Video-9","Video-10", "Video-11","Video-12"
    ];
    let x = document.getElementById("video-tg");
    let pbrx = document.getElementById("pbar");
    let plbtn = document.getElementById("plybtn");
    let psbtn = document.getElementById("pusbtn");
    let [track, setTrack] = useState(1);
    let [initialPbar, setPbar] = useState(0);

   let updateTime=()=>{
 
    setPbar((Math.round((x.currentTime/x.duration)*100))+"%");
   }

//    let updateWidth=()=>{
    // pbrx.style.width=initialPbar;
//    }


//    useEffect(()=>{
//     document.getElementById("pbar").style.width=initialPbar;
//     updateTime();

    // updateWidth();
 
//    },[initialPbar]);

    let playNow = () => {
        x.play();
        plbtn.style.display='none';
     psbtn.style.display='unset';
    };
    let pauseNow = () => {
        x.pause();
        psbtn.style.display='none';
        plbtn.style.display='unset'
    };
    let forwardNow = () => {
        setTrack(track + 1);
        x.load();
        x.play();
        if (track === 10) {
            setTrack(0);
        }
    };
    let backwardNow = () => {
        setTrack(track - 1);
        x.load();
        x.play();
    };
    let mu = document.getElementById("muteu");
    let muteUnmute = () => {
        // x.muted = true;
        if (x.muted == true) {
            mu.src = speaker;
            x.muted = false;
        }
        else {
            x.muted = true;
            mu.src = speakermute;
        }
        // x.muted==true ? x.muted=false :x.muted=true;
    };
    let stopNow = () => {
        setTrack(null);
        x.load();
    };
    let playvideo = (e) => {
        setTrack(e.target.value);
        x.load();
        x.play();
    };

let vplps=()=>{
    let x = document.getElementById("video-tg");
    if(x.play== false){
      alert("hi")
    }
  else{
    alert("no")
  }
}

    return (
        <>
        <section className="mt-5">
            <div className="container justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center">
                    <div className="music-player">
                        <div className="music-top-area">
                            <div className="visual-area">
                                <video width="100%" id="video-tg" type="button" onClick={vplps}>
                                    <source src={videoslist[track]} />
                                </video>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div
                                        className="progress"
                                        style={{ width: "95%", height: "5px" }}
                                    >
                                        <div class="progress-bar" id="pbar"></div>
                                    </div>
                                </div>
                                <div className="media-control-area">
                                <img
                                        src={previous} width="45" height="45"
                                        type="button"
                                        onClick={backwardNow}
                                    />
                                    <img
                                        src={pause} width="45" height="45"
                                        id="plybtn"
                                        type="button"
                                        onClick={() => {
                                            playNow();
                                        }}
                                    />
                                    <img
                                        src={play} width="45" height="45"
                                        id="pusbtn"
                                        type="button"
                                        onClick={pauseNow}
                                        style={{display:'none'}}
                                    />
                                    <img
                                        src={next} width="45" height="45"
                                        type="button"
                                        onClick={forwardNow}
                                    />
                                    <img id="muteu" src={speaker}
                                        width="45" height="45"
                                        type="button"
                                        onClick={muteUnmute}
                                    />
                                    <img
                                        src={stop} width="45" height="45"
                                        type="button"
                                        onClick={stopNow}
                                    />
                                </div>
                            </div>
                            <div className="track-area">
                                <ul
                                    style={{
                                        height: "430px",
                                        overflowX: "auto",
                                        width: "50%",
                                        marginBottom: "50px",
                                    }}
                                >
                                    {videoName.map((file, index) => {
                                        return (
                                            <div key={index}>
                                                <li
                                                    style={{
                                                        padding: "10px",
                                                        marginBottom: "3px",
                                                        background: "cadetblue",
                                                        textAlign: "center",
                                                    }}
                                                    type="button"
                                                    onClick={playvideo}
                                                    value={index}
                                                >
                                                    {file}
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="togle-button">
                                <h4>Hide</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
{/* <button onClick={findTime}>Current time</button> */}
        </>
    )
}
export default Videoplayer;