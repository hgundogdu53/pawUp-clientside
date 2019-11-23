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
                        <input type="text" name="dog_name" placeholder="Muffin" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="breed">Type of Pet</label>
                        <input type="text" name="breed" placeholder="Cat" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="pet_bday">Birthdate</label>
                        <input type="date" name="pet_bday" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="pet_location">Location</label>
                        <input type="text" name="pet_location" placeholder="San Francisco" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="lifestyle">Hobbies</label>
                        <textarea name="lifestyle" rows="15" placeholder="Please type in hobbies of your pet" required></textarea>
                    </div>
                    <button type="submit" className="sub-btn">Submit</button>
                    <button type="reset" className="res-btn">Reset</button>
                </form>
            </section>
        </main>
    )
}

export default Post;
