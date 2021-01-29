import React, { useState } from "react";
import { MDBContainer,MDBRow, MDBCol} from "mdbreact";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBTooltip, MDBIcon } from "mdbreact";

import { MDBInput } from "mdbreact";
import Navbarpage from "./Navbar";
import Card from "./Card";

const App=()=>{
    const [mod,setmod]=useState(false);
    const open=()=>setmod(true);
    const close=()=>setmod(false);

    

    const [note,setnotes]=useState({
        title:"",
        content:"",
    });
    

    const inputevent=(event)=>{
        const {name,value}=event.target;
        setnotes((preval)=>{
            return{
                ...preval,[name]:value
            }
        })
    }


    const [addnote,setaddnote]=useState([]);

    const add=()=>{

        setaddnote((predata)=>{
            return [...predata,note];
        })
        setmod(false);
        setnotes("");
    }



    const onDelete=(id)=>{
        setaddnote((preval)=>
                preval.filter((vals,index)=>{
                return index!==id;
            })
        )
    }


        





    return (
        <>    
            <Navbarpage/>   
            <MDBContainer className="my-3">
                <div className="text-center">
                    <MDBTooltip placement="bottom">                    
                            <MDBBtn onClick={open} className="rounded text-center mx-auto" tag="a" size="lg" floating gradient="aqua">
                                <MDBIcon icon="plus-circle" size="lg" />
                            </MDBBtn>                 
                        <span>
                        <em>Add data</em> 
                        </span>
                    </MDBTooltip>
                </div>

                {/* modal section */}
                <MDBModal isOpen={mod}>
                    <MDBModalHeader toggle={close}>Add Notes</MDBModalHeader>
                    <MDBModalBody>
                    <MDBInput label="Title" name="title" size="sm" onChange={inputevent} value={note.title} />
                    <MDBInput type="textarea" name="content" onChange={inputevent} label="Content" size="md" value={note.content}/>
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={close}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={add}>Save</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>


            {/* card section */}

            <MDBContainer className="mt-4">
                <MDBRow>             
                    
                        {addnote.map((data,index)=>{
                            return(
                            <>
                                <MDBCol size="12" lg="4"  md="6" sm="12" className="p-3">
                                    <Card
                                    key={index}
                                    id={index} 
                                    titles={data.title}
                                    contents={data.content}
                                    deleteitem={onDelete}
                                    />
                                </MDBCol> 
                            </>
                            )
                        })}
                             
                </MDBRow>        
            </MDBContainer>  

        </>
    )
}

export default App;