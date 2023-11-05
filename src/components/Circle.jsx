
const Circle = ({children,className ,style}) =>{

    return (
        <div className={"rounded-full "+className} style={style}>
            {children}
        </div>
    );
}

export default Circle;