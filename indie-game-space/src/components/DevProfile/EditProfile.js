import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import defaultUser from '../../images/defaultUser.png';
import './EditProfile.css';

function EditProfile(props) {

    const [memberList, setMemberList] = useState([[""]]);
    const [devName, setDevName] = useState();
    const [devEmail, setDevEmail] = useState();
    const [devType, setDevType] = useState();
    const [profile, setProfile] = useState();

    console.log(memberList);

    // For Members List
    const handleAddMember =() => {
        setMemberList([...memberList, [""]]);
    }

    const handleRemoveMember = (index) => {
        const list = [...memberList];
        list.splice(index, 1);
        setMemberList(list);
    }

    const handleMemberTextChange = (e, index) => {
        const { value } = e.target;
        const list = [...memberList];
        list[index] = value;
        setMemberList(list);
    }

    // For Image
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setProfile(base64);
    };

    // For Developers Name
    const handleDevName = async(e) => {
        await setDevName(e.target.value);
    }

    // For Developers Email
    const handleDevEmail = async(e) => {
        await setDevEmail(e.target.value);
    }

    // For Developer Type
    const handleDevType = async(e) => {
        await setDevType(e.target.value);
    }

    // On Execute Profile Changes
    const handleSubmit = () => {

        if (window.confirm("Are you sure about the Changes?") === true){

            let data = new FormData();
            
            data.append("user", props.user);
            data.append("devname", devName);
            data.append("profile", profile);
            data.append("email", devEmail);
            data.append("type", devType);
            data.append("members", memberList);

            const url = 'http://localhost/IndieGameSpace/indie-game-space/src/api/updateAccount.php';

            axios.post(url, data)
            .then(response => {
                sessionStorage.setItem("user", devName);
                alert(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err));

        } else {
            window.location.replace('/devProfile');
        }

    }

    // const defaults = () => {
    //     // TODO: get default data for preview
    // }

    return (
        <>
            <div className='form-container'>
                <form>
                    {/* Image Row */}
                    <div className='row-container gap'>
                        <div className='col-container left-field'>
                            <img src={profile ? profile : defaultUser} alt='profile' />
                        </div>
                        <div className='col-container right-field'>
                            <input type='file' onChange={ uploadImage } />
                        </div>
                    </div>
                    {/* Name Row */}
                    <div className='row-container gap'>
                        <div className='col-container left-field'>
                            <label> Developer Name </label>
                        </div>
                        <div className='col-container right-field'>
                            <input type='text' placeholder='Developer Name' onChange={handleDevName} />
                        </div>
                    </div>
                    {/* Email Row */}
                    <div className='row-container gap'>
                        <div className='col-container left-field'>
                            <label> Developer Email </label>
                        </div>
                        <div className='col-container right-field block'>
                            <input type='email' placeholder='someemail@email.com' onChange={handleDevEmail} />
                        </div>
                    </div>
                    {/* Account Type */}
                    <div className='row-container gap'>
                        <div className='col-container left-field'>
                            <label> Developer Type </label>
                        </div>
                        <div className='col-container right-field block'>
                            <select onChange={handleDevType}>
                                <option value=""> -- Select Developer Type -- </option>
                                <option value="individual"> Individual </option>
                                <option value="group"> Group </option>
                            </select>
                        </div>
                    </div>
                    {/* Member/s Row */}
                    <div className='row-container gap'>
                        <div className='col-container left-field'>
                            <label> Members </label>
                        </div>
                        <div className='col-container right-field block'>
                            {memberList.map((member, index) => (
                                <div key={index} className='members gap'>
                                    <input type="text" placeholder='Member Name' value={memberList.name} onChange={(e) => handleMemberTextChange(e, index)} />
                                    {memberList.length > 1 && (
                                        <>
                                            <Button variant='danger' className='spc' onClick={() => {handleRemoveMember(index)}} > - </Button>
                                        </> 
                                    )}
                                </div>
                            ))}
                            <Button variant='success' onClick={handleAddMember}> Add Member Field </Button>
                        </div>
                    </div>
                    {/* Submit Button */}

                    <Button variant='success' type='submit' onClick={handleSubmit}> Submit Changes </Button>
                    <Button variant='success' type='submit' className='spc'> Change Password </Button>


                </form>
            </div>
        </>
    
    )
}

export default EditProfile;