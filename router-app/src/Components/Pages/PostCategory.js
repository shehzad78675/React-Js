import { useParams } from "react-router-dom"

const PostCategory = () => {
    let {category} = useParams();
    return(
        <div className="mt-3">
            <h1>Post Page - {category}</h1>
        </div>
    )
}

export default PostCategory;