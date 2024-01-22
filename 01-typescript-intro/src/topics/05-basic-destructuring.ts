interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

// DESESTRUCTURACION NORMAL OBJECTS
// audioPlayer.song
//  console.log('Song: ', audioPlayer.song);

// DESESTRUCTURACION CÓMODA
// Declaración de constante normal
const song = 'New Song';

// Cambiar nombre para llamarla de forma diferente
const {song:anotherSong} = audioPlayer;

const {author} = audioPlayer.details;

console.log('Song Init: ', song);
console.log('Song: ', anotherSong);
console.log('Author: ', author);

//DESESTRUCTURACIÓN DE ARREGLOS
const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
const [, , ,trunks2]: string[] = ['Goku', 'Vegeta', 'Trunk'];
const trunks = dbz[2] || 'No existe el personaje';

console.error(trunks);
console.error(trunks2);

export {};