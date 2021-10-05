""/* Se define la clase, el nombre debe comenzar en mayúscula. 
La clase es el molde genérico de los objetos */
class Pokemon{
    /* Se definen los atributos, es decir las características de cada objeto que sigue un molde */
    #name="";
    #type="";
    #evolutions=[];

    /* Método que ayuda a inicializar los objetos. Si no se declara un constructor se contruyyen objetos vacios */
    constructor(name,type,evolutions){
        /* This específica a qué atributo de la clase se está refiriendo */
            this.#name = name;
            this.#type = type;
            this.#evolutions = evolutions;

    }
    /* Con el método set se pueden crear métodos que accedan y asignen a los datos con # */
    set name(name){
        this.#name=name;
    }

    set type(type){
        this.#type=type;
    }

    set evolutions(evolutions){
        this.#evolutions=evolutions;
    }

    /* Con el método get se puede acceder a los atributos */
    get name(){
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get evolutions(){
        return this.#evolutions;
    }

    /*Este es un método exclusivo de la clase  */
    attack(){
        return `${this.#name}, está atacando`;
    }

    /* Cuando dentro de un método el parámetro se iguala a 0, solo se está inicializando y es un valor por defecto */
    evolve(evolution=0){
        /* Valida que la opción exista EVOLVe != evolve*
        || (or) las barras indican que de no existir el valor evolutions, se asigne vacio */
        const EVOLVE= this.evolutions[evolution] ||'';
        let message='No puede evolucionar';

        if (EVOLVE){
            message=`${this.#name} está evolucionando a ${EVOLVE}`;
            this.#name=EVOLVE;
        }
        return message;
    }
} 

/* Aquí estamos declarando objetos de la clase pokemón */
const Charmander=new Pokemon('Charmander', 'Fire', ['Charmaleon','Charizar']);
const Squirtle=new Pokemon('Squirtle', 'Water',['Wartotle','Blastoise']);

/* Aquí se están llamando los atributos */

console.log((`${Charmander.name} es de tipo ${Charmander.type}`));

/* Aquí se llaman los métodos */
console.log(Charmander.attack());
console.log(Charmander.evolve(evolution=0));

/* Si se vuelve a llamar el atributo name devolverá el valor modificado del método evolve */
console.log((`${Charmander.name} es de tipo ${Charmander.type}`));
/* Acá el ejemplo con Squirtle */
console.log('-------------------------------------------------------------')
/* Aquí se están llamando los atributos */

console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));

/* Aquí se llaman los métodos */
console.log(Squirtle.attack());
console.log(Squirtle.evolve(evolution=0));

/* Si se vuelve a llamar el atributo name devolverá el valor modificado del método evolve */
console.log((`${Squirtle.name} es de tipo ${Squirtle.type}`));


/* En el encapsulamiento (#) no se puede acceder a los atributos sin usar los métodos propios del objeto */
/* Del tipo #name hace los datos privados y al usar:

console.log(Charmander.#name) el resultado es inaccesible*/


/* Herencia 
 la clase "hijo" hereda de la Clase "padre/super"*/

class TypeFire extends Pokemon{

    constructor(name,evolutions){
        /* Atravès de Super se rellena el constructor con la clase padre */
        super(name,'fire',evolutions);
    }
    message(){
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }
}

/* Creandoo objetos de la clase TypeFire */

const charmander=new TypeFire('Charmander', ['Charmaleon', 'Charizar']);

console.log(charmander.message());

charmander.name='gato';
console.log(charmander.message());
