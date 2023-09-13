import { useRef, useState } from "react";
import Cookies from "js-cookie";
const UpdateProfilePicture = () => {

  const [error,setError] = useState<String>()
  const newEmailInput = useRef<HTMLInputElement>(null)
  type data = {
    error?:String
  }
  const updateProfilePicture = async (e:React.FormEvent) => {
    e.preventDefault()
    const response = await fetch("http://localhost:4000/verify", {
      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
      body: JSON.stringify({ token: Cookies.get("Auth_Token") }),
    });
    const {username} = await response.json()
    const res = await fetch("http://localhost:4000/user/updateEmail", {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("Auth_Token")}`,
      },
      method: "POST",
      body: JSON.stringify({
        username,
        newEmail:newEmailInput.current!.value
      }),
    });
    const data:data = await res.json();
    if(data.error) {setError(data.error as String)}

  };
  
  return (
    <form className="form-group d-flex flex-column justify-content-center text-center align-items-center" onSubmit={updateProfilePicture}>
      <h2 className="lead my-2">
      Change Email
        </h2>
        
      <input
        type="text"
        ref={newEmailInput}
        className="form-control my-1"
       
        placeholder="Enter new email..."
      />
      <button className="btn btn-danger my-1" type="submit">Submit</button>
    </form>
  );
};

export default UpdateProfilePicture;