

export const Profile = (
    {username, tag, location, avatar, stats:{followers, views, likes}} 
) => {
    return ( 
<div >
  <div >
    <img width="200"
      src={avatar}
      alt="User avatar"
      
    />
                <p >{username}</p>

                <p >{tag }</p>
                <p >{ location}</p>
  </div>

  <ul >
    <li>
      <span >Followers</span>
                    <span >{ followers}</span>
    </li>
    <li>
      <span >Views</span>
                    <span >{ views}</span>
    </li>
    <li>
      <span >Likes</span>
                    <span >{ likes}</span>
    </li>
  </ul>
</div>
    )
}