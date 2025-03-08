const CoreExpertise = () => {
    return (
      <section className="bg-black text-white p-10">
        <h2 className="text-3xl font-bold text-green-400">Core Expertise</h2>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="bg-gray-800 p-5 rounded">
            <h3 className="font-semibold">Programming Languages</h3>
            <ul className="mt-2 text-sm">
              <li>C / C#</li>
              <li>Java</li>
              <li>Python</li>
              <li>ABAP</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-5 rounded">
            <h3 className="font-semibold">Technical Expertise</h3>
            <ul className="mt-2 text-sm">
              <li>Database Management</li>
              <li>Data Structures</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-5 rounded">
            <h3 className="font-semibold">Web Technologies</h3>
            <ul className="mt-2 text-sm">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default CoreExpertise;
  