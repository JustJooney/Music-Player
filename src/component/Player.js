import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Player({currentSong, isPlaying, setIsPlaying, audioRef, songs, setCurrentSong, setSongs}){

	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});

	function playSongHandler(){
		if(isPlaying){
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else{
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	}

	function timeUpdateHandler(e){
		const current = e.target.currentTime;
		const duration = e.target.duration;
		const roundedCurrent = Math.round(current);
		const roundedDuration = Math.round(duration);
		const animation = Math.round((roundedCurrent / roundedDuration) * 100);
		setSongInfo({...songInfo,
			currentTime: current,
			duration: duration,
			animationPercentage: animation,
		});
	}

	function getTime(time){
		return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
	}

	function dragHandler(e){
		audioRef.current.currentTime = e.target.value;
		setSongInfo({...songInfo, currentTime: e.target.value});
	}


	async function skipTrackHandler(direction){
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		if(direction === 'skip-forward'){
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
		}
		if(direction === 'skip-back'){
			if((currentIndex - 1) % songs.length === -1){
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryHandler(songs[songs.length - 1]);
				if (isPlaying) audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
			activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
		}
		if(isPlaying) audioRef.current.play();
	}

	function activeLibraryHandler(nextPrev){
		const newSongs = songs.map((s) => {
			if(s.id === nextPrev.id){
				return{
					...s,
					active: true,
				}
			} else {
				return {
					...s,
					active: false,
				}
			}
		});

		setSongs(newSongs);
	}

	async function songEndHandler(){
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if(isPlaying) audioRef.current.play();
	}

	const trackAnim = {
		transform: `translateX(${songInfo.animationPercentage}%)`
	};

	return(
		<div className='player'>
			<div className='time-control'>
				<p>{getTime(songInfo.currentTime)}</p>
				<div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className='track'>
					<input 
						min={0} 
						max={songInfo.duration || 0} 
						onChange={dragHandler} 
						value={Math.floor(songInfo.currentTime)} 
						type='range' />
					<div style={trackAnim} className='animate-track'></div>
				</div>
				<p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon className='skip-back' onClick={() => skipTrackHandler('skip-back')} size='2x' icon={faAngleLeft} />
				<FontAwesomeIcon onClick={playSongHandler} className='play' size='2x' icon={isPlaying ? faPause : faPlay} />
				<FontAwesomeIcon className='skip-forward' onClick={() => skipTrackHandler('skip-forward')} size='2x' icon={faAngleRight} />
			</div>
			<audio 
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={songEndHandler}>
			</audio>
		</div>
	)
}

export default Player;