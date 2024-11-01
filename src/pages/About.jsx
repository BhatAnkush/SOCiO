import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="flex justify-between flex-col-reverse md:flex-row py-20 px-8">
        <div className="space-y-3 basis-9/12">
          <h1 className="text-4xl font-bold capitalize border-b-2 border-violet-400">About me</h1>
          <h3 className="text-4xl font-bold capitalize">
            hello, I'm <span className='text-violet-500'>Ankush Ananth Bhat</span>
          </h3>
          <p className="text-lg font-semibold">
            Introducing <span className='text-violet-500'>Ankush Bhat,</span> I have completed my B.E. in Information Science from Sahyadri College, Mangaluru. I have a strong passion for web and Java development, always eager to learn and tackle new challenges. Thanks for getting to know me!
          </p>
        </div>
        <div className="flex-grow-4">
          <img loading='lazy' width={440} src="https://www.vidyard.com/wp-content/themes/vidyard-website/img/pages/company/about-us/main-image.png.webp" alt="" />
        </div>
      </div>
    </Layout>
  );
}
