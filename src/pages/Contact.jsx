import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="h-[450px]  bg-[#eee]">
      <h2 className="text-3xl text-bold text-center">Contact</h2>

      <div className="my-5 flex gap-x-5 px-10">
        <button
          onClick={() => navigate("/")}
          className="bg-red-900 text-white p-3"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-red-900 text-white p-3"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Contact;
