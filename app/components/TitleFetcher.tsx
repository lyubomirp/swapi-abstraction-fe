import React, {useEffect} from "react";

const TitleFetcher: React.FC<{dataId:number, k:string}> = ({dataId, k}) => {
    const [data, setData] = React.useState({});

    useEffect(() => {
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/entity-data/?resourceType=${encodeURIComponent(k.toLowerCase())}&id=${encodeURIComponent(dataId)}`);
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/entity-data/?resourceType=${encodeURIComponent(k.toLowerCase())}&id=${encodeURIComponent(dataId)}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [])

    return <span>{`${Object.values(data)[0]}`}</span>
}

export default React.memo<{dataId:number, k:string}>(TitleFetcher)