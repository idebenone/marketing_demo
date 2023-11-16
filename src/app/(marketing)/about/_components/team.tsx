const Team = () => {
  const team = [
    {
      name: "Ashish Pathak",
      imageUrl: "./team/ashish.webp",
      role: "Founder | Director",
    },
    {
      name: "Arya Rajurkar",
      imageUrl: "./team/arya.webp",
      role: "Growth Hacker",
    },
    {
      name: "Aniruddh Sharma",
      imageUrl: "./team/aniruddh.webp",
      role: "Educator",
    },
    {
      name: "Shrey Rastogi",
      imageUrl: "./team/shrey.webp",
      role: "Analyst",
    },
    {
      name: "Vineeth G ",
      imageUrl: "./team/vineeth.webp",
      role: "Developer",
    },
    {
      name: "Paridhi Agarwal",
      imageUrl: "./team/paridhi.webp",
      role: "Legal",
    },
  ];
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the minds shaping your Portfolio.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {team.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
