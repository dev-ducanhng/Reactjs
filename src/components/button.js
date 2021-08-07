export default function Button(props) {
    const bg = props.bgColor ? props.bgColor : "bg-indigo-600";
    const cg = ' h-14 px-6 py-2 font-semibold rounded-xl  hover:bg-red-600 text-white ';
    const css = bg + cg;
    
    return (
        <button type="button" className={css} >
            {props.title}
        </button>
    )
}