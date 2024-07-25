function handleClick() {
    console.log("Hello!");

}
function handleMouseOver() {
    console.log("bye!");
}

function handleDblClick() {
    console.log("you double clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick ={handleClick}>click me!</button>
            <P onMouseOver={handleMouseOver}>
                Lorem ipsum, dolor sit amet
                 consectetur adipisicing elit. Commodi harum ullam 
                 pariatur sed, non sint consequatur est doloribus
                  blanditiis libero alias fugiat corporis
                 dolor unde eligendi itaque quia ex ratione!
                 </P>
                 <button onDblClick={handleDblClick}>double click me!</button>
        </div>
    );
}