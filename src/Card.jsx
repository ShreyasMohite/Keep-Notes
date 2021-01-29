import React from "react";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,MDBBtn,MDBCol,MDBIcon } from 'mdbreact';

const Card=(props)=>{
    const deletenote=()=>{
        props.deleteitem(props.id);
    }
    
    return(
        <>
            <MDBCol style={{ maxWidth: "22rem" }} className="mx-auto">
                <MDBCard>
                    
                    <MDBCardBody>
                        <MDBCardTitle>{props.titles}</MDBCardTitle>
                        <MDBCardText>{props.contents}</MDBCardText>
                        <MDBBtn tag="a" className="rounded-circle p-4 w-25" size="lg" floating gradient="blue" onClick={deletenote}>
                            <MDBIcon icon="trash-alt" />
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}

export default Card;