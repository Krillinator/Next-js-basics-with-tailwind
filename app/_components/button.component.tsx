"use client"

interface ButtonProps {
  name: string
  onClick?: () => void // <-- accept onClick here
}

export function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick} // <-- forward it to the button element
      className="bg-sky-400 text-blue-900 font-bold w-32 py-2 rounded-md shadow-md shadow-black flex justify-center items-center cursor-pointer hover:bg-sky-300 hover:-translate-y-0.5 transition md:text-base"
    >
      {name}
    </button>
  )
}
