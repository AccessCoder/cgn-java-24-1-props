export type CatProps = {
    name:string,
    url:string
}
export default function Cat(props: Readonly<CatProps>){

    return(
        <>
            <h2>{props.name}</h2>
            <img src={props.url}/>
        </>
    )
}