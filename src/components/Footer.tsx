

export default function Footer(){
  return (
    <footer className="py-8 mt-12 bg-black/90 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Bianca Arielly</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/bianca-arielly-fontes-pereira-a39b31260/">LinkedIn</a>
          <a href="https://github.com/BiancaAriellyFP">GitHub</a>
          <a href="#">Email</a>
        </div>
      </div>
    </footer>
  )
}
