interface ButtonProps {
  name: string
}

/** Button Component
 * 	 Padding - push content inside boundary
 * 	 Margin - push other elements away from current content
 * 	 Rounded - rounds the corners
 * 	 Shadow - Requires setting shadow color to work
 * 	 hover: - onHover functionality
 * 	 transition - animates over time
 *	 translate - manipulates position of element
 *	 Media query - sm:, md:, lg:, xl:, 2xl:
 */

export function Button({ name }: ButtonProps) {
  return (
    <button className="bg-sky-400 text-blue-900 font-bold w-32 py-2 rounded-md shadow-md shadow-black flex justify-center items-center cursor-pointer hover:bg-sky-300 hover:-translate-y-0.5 transition md:text-base">
      {name}
    </button>
  )
}
