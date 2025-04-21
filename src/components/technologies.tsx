export function Technologies() {
    const stats = [
      {
        image: (
          <img
            src="/assets/React.png"
            alt="React"
            width={100}
            height={100}
            className="w-full h-auto relative z-10 rounded-xl"
          />
        ),
     
      },
      {
        image: (
          <img
            src="/assets/Angular.png"
            alt="Nexium Team"
            width={100}
            height={100}
            className="w-full h-auto relative z-10 rounded-xl"
          />
        ),
       
      },
      {
        image: (
          <img
            src="/assets/SprinBoot.png"
            alt="Satisfaction"
            width={100}
            height={100}
            className="w-full h-auto relative z-10 rounded-xl"
          />
        ),
      
      },
      {
        image: (
          <img
            src="/assets/NodeJs.png"
            alt="Awards"
            width={100}
            height={100}
            className="w-full h-auto relative z-10 rounded-xl"
          />
        ),
       
      },
    ];
  
    return (
        <section className="py-0.2 bg-gradient-to-r from-gray-900 via-purple-900 to-[#1d1a39] text-white">

        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="mb-2">{stat.image}</div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  