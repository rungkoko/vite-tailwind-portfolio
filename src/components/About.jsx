import React from "react";

const About = ({ language }) => {
  const info = [
    { text: language === 'en' ? "Completed Projects" : "โครงการที่เสร็จสมบูรณ์", count: "10" },
    { text: language === 'en' ? "Companies Work" : "ทำงานในบริษัท", count: "01" }
  ];

  const googleDriveLink = "https://drive.google.com/file/d/1OzuOrRm0Rn9g7xwO6RUO9zUZHkvxFjtr/view?usp=drivesdk";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="flex py-2 md:py-5 md:flex-row flex-col items-center justify-center">
      <div className="text-center mt-8">
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold md:text-left text-center">
                {language === 'en' ? "About" : "เกี่ยวกับ"} <span className="text-cyan-600">{language === 'en' ? "Me" : "ฉัน"}</span>
              </h3>
              <p className="text-gray-400 my-3 text-lg md:text-left text-center">
                {language === 'en' ? "My introduction" : "แนะนำตัว"}
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {language === 'en' 
                  ? "I am currently pursuing b.tech in IT, As a Developer specializing in web development With hands-on experience in crafting dynamic user interfaces, I bring a blend of creativity and technical expertise to my role."
                  : "ฉันกำลังศึกษา b.tech ในสาขา IT เป็นนักพัฒนาที่เชี่ยวชาญในการพัฒนาเว็บ ด้วยประสบการณ์ในการสร้างอินเทอร์เฟซผู้ใช้ที่มีประสิทธิภาพ ฉันนำความคิดสร้างสรรค์และทักษะทางเทคนิคมาใช้ในบทบาทของฉัน."}
                <br />
                {language === 'en' 
                  ? "Having secured an internship as a Frontend Developer at a reputable company, I've dived headfirst into Angular development, harnessing the power of Bootstrap for responsive and visually appealing designs."
                  : "หลังจากที่ได้รับการฝึกงานเป็น Frontend Developer ในบริษัทที่มีชื่อเสียง ฉันได้เริ่มต้นการพัฒนา Angular ใช้ประโยชน์จาก Bootstrap เพื่อการออกแบบที่ตอบสนองและสวยงาม."}
                <br />
                {language === 'en'
                  ? "Additionally, my journey has acquainted me with Node.js, empowering me to contribute to server-side functionalities as well."
                  : "นอกจากนี้ ในการเดินทางของฉันฉันยังได้เรียนรู้ Node.js ซึ่งทำให้ฉันสามารถมีส่วนร่วมในการพัฒนาเซิร์ฟเวอร์ได้เช่นกัน."}
                <br />
                {language === 'en'
                  ? "Beyond Angular, I possess a versatile skill set. I am proficient in JavaScript, TypeScript, React.js, Bootstrap, Firebase, and GitHub, ensuring that I am well-equipped to adapt to diverse project requirements."
                  : "นอกจาก Angular ฉันยังมีทักษะหลากหลาย ฉันเชี่ยวชาญใน JavaScript, TypeScript, React.js, Bootstrap, Firebase, และ GitHub เพื่อให้มั่นใจว่าฉันสามารถปรับตัวให้เข้ากับความต้องการของโครงการที่หลากหลายได้."}
                <br />
                {language === 'en'
                  ? "My focus lies in delivering exceptional user experiences through intuitive and scalable UI components. I have honed my skills in crafting impressive user interfaces, ensuring seamless navigation and optimal performance across devices."
                  : "ฉันมุ่งเน้นการมอบประสบการณ์ผู้ใช้ที่ยอดเยี่ยมผ่านการสร้าง UI ที่เข้าใจง่ายและสามารถปรับขนาดได้ ฉันได้ฝึกฝนทักษะในการสร้างอินเทอร์เฟซผู้ใช้ที่น่าประทับใจเพื่อให้มั่นใจในการนำทางที่ราบรื่นและประสิทธิภาพที่ดีที่สุดในทุกอุปกรณ์."}
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>
                {language === 'en' ? "Check Resume" : "ตรวจสอบประวัติย่อ"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
