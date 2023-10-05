/* eslint-disable  */
import { Link, useLocation } from "react-router-dom";
import SocialUserInfo from "../../Components/Social/SocialPost/SocialUserInfo/SocialUserInfo";
import SocialPostBadge from "../../Components/Social/SocialPost/SocialPostBadge/SocialPostBadge";
import SocialPostText from "../../Components/Social/SocialPost/SocialPostText/SocialPostText";
import SocialLikeCommentsBtn from "../../Components/Social/SocialPost/SocialLikeCommentsBtn/SocialLikeCommentsBtn";
import { useEffect, useState } from "react";
import { instance } from "../../lib/AxiosInstance";
import CommentBox from "./CommentBox";
import CommentContainer from "./CommentContainer";
import BackButton from "../../Components/globalBackButton/BackButton";


type DetailsProps = {
    postData: any
}


export default function PostDetails() {
    // console.log(`🎪🎭🎑`, postData);
    const [postUserName, setPosterName] = useState('');
    // const [postUser, setPostUser] = useState({});
    const [postData, setPostData] = useState(null);
    const { pathname, state } = useLocation();
    const postId = pathname.split('/').pop();
    const [forceUpdate, setForceUpdate] = useState(Date.now());

    const updatePostPage = () => {
        setForceUpdate(Date.now() + Math.ceil(Math.random() * 1000));
    }

    // console.log(`state = `, state)
    useEffect(() => {
        const dbCall = async () => {

            const { data: { data: reqPost } } = await instance.get(`/social/post/${postId}`);
            const { data: { data: { alpaca: auser, db } } } = await instance.get(`/accounts/cached/${state.userId}`);
            if (auser['trusted_contact']) {

                setPosterName(`${auser['trusted_contact']['given_name']} ${auser['trusted_contact']['family_name']}`);
            }

            if (auser['trusted_contact']) {

                setPosterName(`${auser['trusted_contact']['given_name']} ${auser['trusted_contact']['family_name']}`);
            }

            // const realPost = reqPost[0].comments.sort
            setPostData(reqPost[0]);
            console.log(`🎇🎇🔥🚒👨‍🚒👨‍🚒👨‍🚒👨‍🚒🔥 🔥🚒🚒👩‍🚒`, reqPost[0]);
        };
        dbCall();
    }, [forceUpdate])
    // const postId = postData._id;

    return (

        postData ? <div className="mt-3 mb-3 bg-white-500 px-4 rounded-md "  >
            <BackButton />
            <div>
                <SocialUserInfo name={postUserName} user={postData?.user[0]} postDate={postData?.createdAt} />
            </div>
            <div>
                <SocialPostText text={postData?.text} />
            </div>
            <div>
                <SocialPostBadge symbolData={postData?.symbol[0]} order_type={postData?.order_type} order_id={postData?.order_id} buyer_id={postData?.buyer_id} dbPrice={postData.buying_price} />
            </div>
            <div style={{ width: '80%', margin: '0px auto', marginTop: '8px' }}>
                <img style={{ borderRadius: '12px' }} src={postData?.links?.pop()} />
            </div>
            <div>
                <SocialLikeCommentsBtn postId={postId} data={postData} />
            </div>
            <div>
                <CommentBox updater={updatePostPage} postId={postData._id} />
            </div>
            <div>
                <CommentContainer update={forceUpdate} userList={postData.comment_user} comments={postData.comments} />
            </div>

        </div> : null


    );


}