import { useLocation } from "react-router-dom";

type DetailsProps = {
    postData : any
}

export default function PostDetails(){

    const {pathname} = useLocation();
    console.log(pathname);
return (
    <div>
        <h1>Social post details </h1>
    </div>
);
}