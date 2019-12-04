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
                        <input type="text" name="pet_name" placeholder="Muffin" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="type_of_pet">Type of Pet</label>
                        <input type="text" name="type_of_pet" placeholder="Cat" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="birthdate">Birthdate</label>
                        <input type="date" name="birthdate" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" placeholder="San Francisco" />
                    </div>
                    <div className="form-section">
                        <label htmlFor="hobbies">Hobbies</label>
                        <textarea name="hobbies" rows="15" placeholder="Please type in hobbies of your pet" required></textarea>
                    </div>
                    <button type="submit" className="sub-btn">Submit</button>
                    <button type="reset" className="res-btn">Reset</button>
                </form>
            </section>
        </main>
    )
}

export default Post;
