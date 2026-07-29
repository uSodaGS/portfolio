export default function Footer() {
  return (
    <footer className="py-10 text-center bg-black text-gray-500">
      © {new Date().getFullYear()} Site criado por{" "}
      <a
        href="https://www.linkedin.com/in/gustavo-ribeiro-6015012a3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:underline hover:text-gray-300 transition"
      >
        Gustavo Ribeiro
      </a>
    </footer>
  )
}

