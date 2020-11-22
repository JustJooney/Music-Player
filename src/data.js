import {v4 as uuidv4} from 'uuid';

function chillHop(){
	return [
	{
		name: "Sodium",
		cover: "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
		artist: "Philanthrope, Tesk",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=9149",
		color: ["#84d3f6", "#84d3f6"],
		id: uuidv4(),
		active: true,
	},
	{
		name: "Wildlife",
		cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
		artist: "Philanthrope, chromonicci",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
		color: ["#a0493a", "#a0493a"],
		id: uuidv4(),
		active: false,
	},
	{
		name: "Bliss",
		artist: "Misha, Jussi Halme",
		cover: "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
		color: ["#f3939f", "#2a416d"],
		id: uuidv4(),
		active: false,
	},
	{
		name: "Daylight",
		artist: "Aiguille",
		cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
		color: ["#f98e98", "#397eb0"],
		id: uuidv4(),
		active: false,
	},
	{
		name: "Sundew",
		artist: "Delayde, Webmoms",
		cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=7967",
		color: ["#445aca", "#f9e2ef"],
		id: uuidv4(),
		active: false,
	},
	{
		name: "Calm",
		artist: "ØDYSSEE, Florent Garcia",
		cover: "https://chillhop.com/wp-content/uploads/2020/06/d9d8ae69141cb7838e3c53bbf393c6218285e384-1024x1024.jpg",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=9285",
		color: ["#ff97af", "#ff97af"],
		id: uuidv4(),
		active: false,
	},
	{
		name: "Rest Until Dark",
		artist: "Sleepy Fish",
		cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
		audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
		color: ["#fef5df", "#523c44"],
		id: uuidv4(),
		active: false,
	}
	]
}

export default chillHop;