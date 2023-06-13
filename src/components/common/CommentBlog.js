import { getDatabase, ref, push, set, onValue } from "firebase/database";
import React, {useEffect, useState} from "react";
import {database} from "../../utils/FirebaseData";

const CommentBlog = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const commentData = getDatabase();
    const commentRef = ref(commentData, 'comments');

    useEffect(() => {
        onValue(commentRef, (snapshot) => {
            const comments = snapshot.val();
            const commentsList = [];
            for (let id in comments) {
                commentsList.push({id, ...comments[id]});
            }
            setComments(commentsList);
        });
    }, []);

    function handleSubmit (event) {
        event.preventDefault();
        const newComment = push(commentRef);
        set(newComment, {
            name,
            email,
            comment,
            createdAt: new Date().toISOString()
        });
        setName('');
        setEmail('');
        setComment('');
    };

    return (
        <>
            <div className="custombox clearfix">
                <h4 className="small-title">Bình luận</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="comments-list">
                            {comments.map((comment, index) => (
                            <div key={index} className="media">
                                <div className="media-body">
                                    <h4 className="media-heading user_name">{comment.name}
                                        <small>{new Date(comment.createdAt).toLocaleString()}</small>
                                    </h4>
                                    <p>{comment.comment}</p>
                                    <a href="#" className="btn btn-primary btn-sm">Trả lời</a>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="invis1"/>

            <div className="custombox clearfix">
                <h4 className="small-title">Bình luận</h4>
                <div className="row">
                    <div className="col-lg-12">
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <input type="text" className="form-control"
                                   placeholder="Họ và tên" required="required"
                                   value={name} onChange={event => setName(event.target.value)}/>
                            <input type="email" className="form-control"
                                   placeholder="Địa chỉ email" required="required"
                                   value={email} onChange={event => setEmail(event.target.value)}/>
                            <textarea className="form-control"
                                      placeholder="Bình luận tại đây" required="required"
                                      value={comment} onChange={event => setComment(event.target.value)}></textarea>
                            <button type="submit" className="btn btn-primary">Gửi bình luận</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentBlog;