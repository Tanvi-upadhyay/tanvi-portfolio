const Contact = () => {
    return (
      <section className="bg-black text-white p-10">
        <h2 className="text-3xl font-bold">Let's Talk?</h2>
        <form className="mt-5">
          <input type="text" placeholder="First Name" className="p-2 m-2 bg-gray-800" />
          <input type="text" placeholder="Last Name" className="p-2 m-2 bg-gray-800" />
          <input type="email" placeholder="Email" className="p-2 m-2 bg-gray-800" />
          <textarea placeholder="Your message" className="p-2 m-2 bg-gray-800"></textarea>
          <button className="bg-green-500 px-4 py-2 mt-3">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  