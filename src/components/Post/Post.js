import React from 'react';
import './Post.css';

function Post(props) {
    return (
        <main className='flex-container'>
            <header>
                <h1 className='post-title'>New Post</h1>
            </header>
            <section className='post-form-section'>
                <form id="post-form" className='post-form' onSubmit={props.addPost}>
                    <div className="form-section">
                        <label htmlFor="pet_name">Pet Name</label>
                        <input type="text" name="dog_name" placeholder="Jax" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="breed">Type of Pet</label>
                        <input type="text" name="breed" placeholder="Maltipoo" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="dog_bday">Birthdate</label>
                        <input type="date" name="dog_bday" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="lifestyle">Hobbies</label>
                        <textarea name="lifestyle" rows="15" placeholder="Please enter a description of your dogs needs and lifestyle" required></textarea>
                    </div>
                    <button type="submit" className="sub-btn">Submit</button>
                    <button type="reset" className="res-btn">Reset</button>
                </form>
            </section>
        </main>
    )
}

export default Post;
