////////////////////////////////
// Easy Going
////////////////////////////////

 for (let num = 1; num <= 20; num++)

 // console.log(num);
   
   
////////////////////////////////
// Get Even
////////////////////////////////

for (let num = 2; num <= 200; num+=2)

//console.log(num);


////////////////////////////////
// Fizz Buzz
////////////////////////////////


 for (let num = 1; num <= 100; num++) {

   if (num % 3 === 0 && num % 5 === 0) {

        console.log("Fizz Buzz");
    }

    else if(num % 3 === 0) {

        console.log("Fizz");
    }

    else if(num % 5 === 0) {

 
        console.log("Buzz");

   }
   
} 

////////////////////////////////
// Wild Wild life
////////////////////////////////



const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]  


for ( let i = 0; i < wolfy.length; i++ );

//Plantee just had her birthday; change Plantee's array to reflect her being a year older.

if ( i = 2 ) {

    wolfy[i] = 17;
} 

//Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"

if ( i = 0 ) {

    wolfy[0].splice=(0, 1, "Gameboy");
} 

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

if ( i = 3 ) {

    wolfy[i] = "Gotham City"
}

//Give D'Art a second hometown by adding "Hawkins"
for ( let i = 0; i < dart.length; i++ ); 

if ( i = 3) {

    dart.push( "Hawkins ")
}

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (let i of ninjaTurtles) {


console.log(i.toUpperCase())
    
}



    
////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


// sort array in alphabetical order
favMovies.sort();

//removed 'Fast and Furious'
favMovies.pop();

// add "Guardians of the Galaxy" to the end of array
favMovies.push("Guardians of the Galaxy");

// reverse order of array
favMovies.reverse();

// remove first element of array
favMovies.shift();

// add "Guardians of the Galaxy to begining of array"
favMovies.unshift("Guardians of the Galaxy");

//splice "Django Unchained" and add "Avatar"
//console.log(favMovies.indexOf('Django Unchained')) to find Django Unchained index
favMovies.splice(15, 1, "Avatar");

//slice the last half of the array
const middle = Math.ceil(favMovies.length / 2);

const left = favMovies.slice(0, middle);


//console.log(slice)


// console log index for Fast and Furious returns a negative 2
console.log(favMovies.indexOf("Fast and Furious."))
*/

////////////////////////////////
// Where is Waldo
////////////////////////////////


const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];





////////////////////////////////
// Excited Kitten 
////////////////////////////////




const kittyTalk = [["...human... why you taking pictures of me...?"], ["...the catnip made me do it..."], ["...why does the red dot always get away...?"]]

for (let meow = 0; meow <= 20; meow++) {

 //console.log('"Love me, pet me! HSSSSSS!"');

    if ( meow % 2 === 0);

   kittyTalk[meow] = Math.floor( Math.random(kittyTalk) *20);

}







 



