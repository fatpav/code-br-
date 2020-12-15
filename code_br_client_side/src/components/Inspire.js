const Inspire = () => {

    const inspoQuotes = [
        
        "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.", 
        "You must expect great things of yourself before you can do them.", 
        "The best and most beautiful things in the world cannot be seen or even touched--they must be felt with the heart.",
        "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed no hope at all.", 
        "We know what we are, but know not what we may be.", 
        "Many of life's failures are people who did not realize how close they were to success when they gave up.", 
        "You alone cannot change the world, but you can cast a stone across the water to create many ripples.", 
        "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", 
        "Try to be a rainbow in someone's cloud.", "Don't let the fear of losing be greater than the excitement of winning.", 
        "To me, business isn't about wearing suits or pleasing stockholders. It's about being true to yourself, your ideas and focusing on the essentials.", 
        "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.", 
        "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 
        "In the end, it's not the years in your life that count. It's the life in your years.", 
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", 
        "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.", 
        "Perfection is not attainable, but if we chase perfection, we can catch excellence.", 
        "The most important thing is to enjoy your life--to be happy--it's all that matters.",
        "Success is not an accident, success is a choice"    
    ]

    function getRandomQuote () {
        const randomQuote = inspoQuotes[Math.floor(Math.random()*inspoQuotes.length)]
        return randomQuote
    }
    
    // console.log(getRandomQuote());

    return (
        <>
        <h2>I'm inspiring</h2>
        <p>{getRandomQuote()}</p>
            {/* <form>
            <input onClick={getRandomQuote} type="submit"> New Quote</input>
            </form> */}
            
        
        </>
    )
};

export default Inspire;