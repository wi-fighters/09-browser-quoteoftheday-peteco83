(() => {
    const arrayOfQuotes = [
        "Trying winning in the moment", "La vida es un perro", "Ante la duda, la mas tetuda", "Chocolate por la noticia"
    ];


    // console.log(textQuote);

    const button = document.querySelector("button");

    const randomQuote = () => {

        const textQuote = arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];
        document.getElementById("frase").innerHTML = textQuote;


    };

    // arrayOfQuotes.forEach(button => {

    button.addEventListener("click", randomQuote)

    // });

    // console.dir(arrayOfQuotes);





})();






