// function CardsList() {
//     return (
//         <div>
//             <div>Cards List Here</div>
//         </div>
//     );
// }
//
// export default CardsList;
const CardsList = ({ results }) => {

    let display;

    if (results) {
        display = results.map(x => {
            return(
                <div> {x.name}</div>
            )
        })
    } else {
        display = "No Characters Found :/";
    }
    return <>
        {display}
    </>
};

export default CardsList;
