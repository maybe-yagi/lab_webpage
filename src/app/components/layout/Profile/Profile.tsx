import Image from "next/image";

const Profile = () => {
  return(
    <div id="profile" className="my-10 w-9/10 bg-background bg-opacity-70 p-10 lg:my-48 lg:w-3/5 xl:w-1/2">
      <div className="flex flex-nowrap">
        <Image alt="profile photo" src="/images/profile.png" width={200} height={200} className="rounded-full"/>
        <div>
          <h2>profile</h2>
          <p>name: 鄭　萬溶</p>
          <p></p>
        </div>     
      </div>
    </div>
  )
}

export default Profile;