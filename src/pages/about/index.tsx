import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="flex flex-col items-center gap-y-8">
      <div className="md:w-44 w-32 md:h-44 h-32 rounded-full">
        <img
          src="/images/mucahit.jpg"
          className="bg-cover w-full h-full rounded-full bg-no-repeat"
        />
      </div>
      <p className="md:text-lg text-base text-zinc-400">
        In this project, I utilized{' '}
        <span className="font-bold text-white">React</span>,{' '}
        <span className="font-bold text-white">Typescript</span>,{' '}
        <span className="font-bold text-white">React Router Dom</span>,{' '}
        <span className="font-bold text-white">React Hot Toast</span>,{' '}
        <span className="font-bold text-white">React Icons</span>
        <span className="font-bold text-white">Zustand</span>
        extensions. I aimed to create a visually appealing design with careful
        attention to animations and appearance. I hope you enjoy exploring my
        project!
      </p>
      <Link
        className="flex items-center gap-x-2 bg-white text-black rounded-full py-2 px-8 transition duration-200 hover:bg-white/80 md:text-lg text-base font-semibold "
        to={'https://github.com/mucahittasan'}
        target="_blank"
      >
        <FaGithub />
        <span> Go to Github Profile</span>
      </Link>
    </section>
  )
}

export default About
