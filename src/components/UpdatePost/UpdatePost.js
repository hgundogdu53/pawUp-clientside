import React from 'react';
import './UpdatePost.css';

function UpdatePost(props) {
    const post = props.posts.filter(post => post.id === props.postId)
    if (post) {
        return (
            <main className='flex-container'>
                <header>
                    <h1 className='update-post-title'>Update Post</h1>
                </header>
                <section className='update-post-section'>
                    <form id="update-post-form" className='update-post-form' onSubmit={props.updatePost}>
                        <div className="form-section">
                            <label htmlFor="pet_name">Pet Name</label>
                            <input type="text" name="pet_name" defaultValue={post[0].pet_name} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="owner_email">Email</label>
                            <input type="email" name="owner_email" defaultValue={post[0].email} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="breed">Type of Pet</label>
                            <input type="text" name="type_of_pet" defaultValue={post[0].type_of_pet} required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="lifestyle">Hobbies</label>
                            <textarea name="lifestyle" rows="15" placeholder="Please enter a description of your dogs needs and lifestyle" defaultValue={post[0].hobbies} required></textarea>
                        </div>
                        <button type="submit" className='sub-btn'>Submit</button>
                        <button type="reset" className='res-btn'>Reset</button>
                    </form>
                </section>
            </main>
        )
    } else {
        return (
            <main>
                <h1>No Post To Update!</h1>
                <h2>Try Again</h2>
            </main>
        )
    }

}

export default UpdatePost;