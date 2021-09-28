function Song(songName, artist) {

    this.songName = songName,
        this.artist = artist,
        this.play = function() {
            console.log('Playing: ' + this.songName);
        }
}


const song1 = new Song("Lalisa", "Lisa");
const song2 = new Song("ชีวิตยังคงสวยงาม", "Bodyslam");



song1.play();
song2.play();