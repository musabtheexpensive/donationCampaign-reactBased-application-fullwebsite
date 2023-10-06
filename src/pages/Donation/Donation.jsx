import { useLoaderData, useParams } from "react-router-dom";

const Donation = () => {
    const params =useParams()
    console.log(params);

    const cards =useLoaderData()
    console.log(cards);
  return (
    <div>
        Donate
    </div>
    // <div className="gap-5">
    //   <div>
    //     <img
    //       className=" mt-7 w-6/12 mx-auto"
    //       src="https://i.ibb.co/nQ42G98/Education.png"
    //       alt=""
    //     />
    //   </div>
    //   <div>
    //     <h1 className="text-4xl font-semibold">Good Education</h1>
    //   </div>
    //   <div >
    //     <p className="gap-4">
    //       There are many things that can be done to ensure that all people have
    //       access to a good education. Governments can invest in public schools,
    //       provide financial assistance to students, and make sure that all
    //       schools have qualified teachers and resources. Families can support
    //       their children's education by creating a learning environment at home
    //       and helping them with their schoolwork. Teachers can create a positive
    //       and supportive learning environment for their students and challenge
    //       them to reach their full potential.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Donation;
