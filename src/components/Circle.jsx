
const Circle = ({children,className}) =>{

    return (
        <div className={"rounded-full "+className}>
            {children}
        </div>
    );
}

export default Circle;