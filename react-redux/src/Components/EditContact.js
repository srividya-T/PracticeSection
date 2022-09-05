import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [number, setNumber] = useState("");
    const {id} = useParams();

    const contacts = useSelector(state=>state);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(()=>{
        if (currentContact) {
            setName (currentContact.name);
            setEmail (currentContact.email);
            setNumber (currentContact.number);
        }
    },[currentContact]);

    const handleSubment = (e)=>{
        e.preventDefault();

        const checkEmail = contacts.find(
            contact => contact.id !== parseInt(id) && contact.email === email && email);
        const checkNumber = contacts.find(
            contact => contact.id !== parseInt(id) && contact.number === parseInt(number));
        if(!email || !number || !name){
            return toast.warning("Please fill in all fields!");
        };
        if(checkEmail){
            return toast.error("This email is already Exists!");
        };
        if(checkNumber){
            return toast.error("This number is already Exists!");
        }

        const data = {
            id: parseInt(id),
            name,
            email, 
            number
        }
        dispatch({type:"UPDATE_CONTACT", payload:data});
        toast.success("Student updated successfully!!");
        navigate.push("/");
    };     

  return (
    <div className="container">        
    {currentContact ? (
        <>
        
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubment}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control my-2"
                             value={name} onChange={e=> setName(e.target.value) }/> 
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control my-2"
                             value={email} onChange={e=> setEmail(e.target.value) }/>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Phone number" className="form-control mt-2"
                             value={number} onChange={e=> setNumber(e.target.value) }/>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Update Student" className="btn btn-dark my-2"/>
                            <Link to="/" className="btn btn-danger my-3">Cancle</Link>
                        </div>
                    </form>
                </div>
            </div>   
        </>
    ):(
        <h1 className="display-3 my-5 text-center">
            Student contact with id {id} not exists</h1>
    )};             
    </div>
  );
}

export default EditContact