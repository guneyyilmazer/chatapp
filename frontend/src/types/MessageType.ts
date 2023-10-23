export type message = {
    sender:  {
      username:string,
      userId:string
    };
    content:  string ;
    pictures?: string[]
    sent:string,
    profilePicture:string,
    seenBy?:[{userId:string,username:string,profilePicture:string}]
  };
