const Header = (props) => {
    return(
        <>
            <div className="text-3xl font-bold col-span-12 p-8 uppercase">
                {props.title}
            </div>
        </>
    )
}
export default Header