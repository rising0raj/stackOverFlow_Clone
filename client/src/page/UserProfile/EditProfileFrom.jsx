import React ,{useState} from 'react'
import {useDispatch } from 'react-redux'
import {updateProfile} from '../../action/users'

const EditProfileFrom = ({currentUser,setSwitch}) => {

    const [name,setName]=useState(currentUser?.result.name)
    const [about,setAbout]=useState(currentUser?.result.about)
    const [tags,setTags]=useState('')
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(tags.length ===0)
        {
            dispatch(updateProfile(currentUser?.result?._id,{name,about,tags:currentUser?.tags}))
        }
        else{
            dispatch(updateProfile(currentUser?.result?._id,{name,about,tags}))
        }
        setSwitch(false);
    }

    return (
    <div>
        <h1 className="edit-profile-title"> Edit Your Profile</h1>
        <h2 className="edit-profile_title-2">Public information</h2>
        <form action="" className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>Display Name</h3>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label htmlFor="about">
                <h3>About</h3>
                <textarea name="" id="about" cols="30" rows="10" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea>
            </label>
            <label htmlFor="tags">
                <h3>Watched tags</h3>
                <p>Add tags separated by 1 space</p>
                <input type='text' id='tags' onChange={(e)=>setTags(e.target.value.split(' '))}/>
            </label><br/>
            <input type='submit' value='Save Profile' className='user-submit-btn'/>
            <button type='button' className='user-cancel-btn' onClick={()=>setSwitch(false)}>Cancel</button>
        </form>
    </div>
    )
}

export default EditProfileFrom
    