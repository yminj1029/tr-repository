export default function SideNavigation() {
	return (
		<nav className="hidden lg:block bg-gray-800 min-w-220 ">
			<div className="h-14 bg-gray-100 font-bold text-2xl  flex justify-center items-center">
				TREPOGIT
			</div>
			<ul className="p-4 text-white">
				<li className="mb-2 flex flex-col">
					<a
						href="/"
						className="bg-gray-900 text-white rounded-md w-full px-2 py-2 text-sm font-medium"
					>
						테스트 결과
					</a>
				</li>
				<li className="mb-2 flex flex-col">
					<a
						href="/"
						className=" text-white w-full px-2 py-2 text-sm font-medium"
					>
						테스트 생성
					</a>
				</li>
			</ul>
		</nav>
	);
}
