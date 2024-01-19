
// Arreglo
// const skills: string[] = ['Bash', 'Counter', 'Healing', true, 123];
const skills: string[] = ['Bash', 'Counter', 'Healing'];

// Interface 
interface Character {
    name: string;
    hp: number;
    skills: string[];
    // Simbolo de interrogacion para hacer una variable opcional 
    hometown?: string;
}


// Objeto 
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

console.table(strider);

export{};