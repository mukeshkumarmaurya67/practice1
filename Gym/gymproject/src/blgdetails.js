


const BlogList1=(props)=>{
    return(

<>
        <h2>{props.title} <br /> <br /></h2>
        
        <address><b>Address:</b><br /><i> {props.addressname}</i></address>
        <address><i>{props.addressname2}</i></address>
        <p><b>Manager</b> :{props.manager}</p>
        <p><b>email: </b> {props.email}</p>
        <p><b>Contact Us :</b><i>{props.contact}</i></p>


   
        </>
    )
}
export default BlogList1;